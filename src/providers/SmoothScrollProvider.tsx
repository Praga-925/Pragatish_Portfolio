"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

/**
 * High-performance smooth scrolling provider integrating Lenis with GSAP ScrollTrigger.
 * - Perfectly synchronizes Lenis scroll events with ScrollTrigger updates.
 * - Adds Lenis raf loop to GSAP ticker with lag smoothing disabled for 60/120fps precision.
 * - Automatically respects prefers-reduced-motion.
 * - Preserves native touch scrolling behavior on mobile devices.
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    // Initialize Lenis with refined inertia settings
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 0.95,
      autoRaf: false, // Driven by GSAP ticker for frame-lock synchronization
    });

    lenisRef.current = lenis;

    // Synchronize Lenis scroll positions with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis inside GSAP ticker to eliminate frame drift
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger when DOM is fully settled
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timeout);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}


"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export function AICursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "card" | "text">("default");
  const [isClicking, setIsClicking] = useState(false);
  const [clickRipples, setClickRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High-precision fast spring for the central glowing dot
  const dotSpringConfig = { damping: 45, stiffness: 1200, mass: 0.1 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  // Smooth, fluid trailing spring for outer reticle ring
  const ringSpringConfig = { damping: 26, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  // Trailing ambient glow slipstream (ethereal lag)
  const trailSpringConfig = { damping: 20, stiffness: 180, mass: 0.7 };
  const trailX = useSpring(mouseX, trailSpringConfig);
  const trailY = useSpring(mouseY, trailSpringConfig);

  // Detect capability & preferences on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = window.innerWidth < 768;

    if (isTouch || prefersReducedMotion || isSmallScreen) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);
    document.documentElement.classList.add("custom-cursor-enabled");

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
    };
  }, []);

  // Mouse event listeners
  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Classify hover context
      if (target.closest('input:not([type="submit"]):not([type="button"]), textarea, [contenteditable="true"]')) {
        setCursorType("text");
      } else if (
        target.closest('a, button, [role="button"], input[type="submit"], input[type="button"], [data-cursor="pointer"]')
      ) {
        setCursorType("pointer");
      } else if (target.closest('[data-cursor="card"], [data-project-card], #projects article, #projects .group')) {
        setCursorType("card");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClickRipples((prev) => [...prev.slice(-3), newRipple]);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isEnabled, isVisible, mouseX, mouseY]);

  // Clean up completed ripples after animation
  const removeRipple = useCallback((id: number) => {
    setClickRipples((prev) => prev.filter((r) => r.id !== id));
  }, []);

  if (!isEnabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* 1. Trailing Ambient Slipstream Aura */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        style={{
          x: trailX,
          y: trailY,
          width: cursorType === "card" ? 64 : cursorType === "pointer" ? 48 : 24,
          height: cursorType === "card" ? 64 : cursorType === "pointer" ? 48 : 24,
          background: "radial-gradient(circle, var(--cursor-halo) 0%, transparent 70%)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />

      {/* 2. Fluid Outer Reticle Ring with Cybernetic Targeting Ticks */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          width: cursorType === "card" ? 54 : cursorType === "pointer" ? 44 : cursorType === "text" ? 20 : 30,
          height: cursorType === "card" ? 54 : cursorType === "pointer" ? 44 : cursorType === "text" ? 32 : 30,
          borderRadius: cursorType === "text" ? "4px" : "9999px",
          scale: isClicking ? 0.86 : 1,
          borderColor:
            cursorType === "pointer"
              ? "var(--cursor-dot)"
              : "var(--cursor-ring)",
          backgroundColor:
            cursorType === "pointer"
              ? "var(--cursor-halo)"
              : "transparent",
          boxShadow:
            cursorType === "pointer"
              ? "0 0 20px var(--cursor-ring)"
              : "0 0 10px var(--cursor-halo)",
        }}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 24,
        }}
      >
        {/* Subtle Cybernetic Reticle Marks (North, South, East, West) */}
        {cursorType !== "text" && (
          <>
            <span className="absolute top-0 w-1 h-[2px] bg-[var(--cursor-dot)] opacity-70 transform -translate-y-[1px]" />
            <span className="absolute bottom-0 w-1 h-[2px] bg-[var(--cursor-dot)] opacity-70 transform translate-y-[1px]" />
            <span className="absolute left-0 h-1 w-[2px] bg-[var(--cursor-dot)] opacity-70 transform -translate-x-[1px]" />
            <span className="absolute right-0 h-1 w-[2px] bg-[var(--cursor-dot)] opacity-70 transform translate-x-[1px]" />
          </>
        )}
      </motion.div>

      {/* 3. Central Pinpoint Glowing Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          width: cursorType === "pointer" ? 4 : cursorType === "text" ? 2 : 6,
          height: cursorType === "pointer" ? 4 : cursorType === "text" ? 18 : 6,
          borderRadius: cursorType === "text" ? "1px" : "9999px",
          backgroundColor: "var(--cursor-dot)",
          scale: isClicking ? 1.4 : 1,
          boxShadow:
            isClicking
              ? "0 0 18px var(--cursor-dot), 0 0 28px var(--cursor-ring)"
              : "0 0 8px var(--cursor-dot), 0 0 14px var(--cursor-ring)",
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
        }}
      />

      {/* 4. Click Ripple Wave Pulses */}
      <AnimatePresence>
        {clickRipples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{
              width: 12,
              height: 12,
              opacity: 0.85,
              borderColor: "var(--cursor-dot)",
            }}
            animate={{
              width: 56,
              height: 56,
              opacity: 0,
              borderColor: "transparent",
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            onAnimationComplete={() => removeRipple(ripple.id)}
            className="fixed top-0 left-0 rounded-full border border-[var(--cursor-dot)] pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: ripple.x,
              top: ripple.y,
              boxShadow: "0 0 16px var(--cursor-ring)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}


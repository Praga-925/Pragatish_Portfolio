"use client";

import { useState, useEffect, useRef } from "react";

export interface ScrollProgressInfo {
  progress: number;
  scrollDirection: "up" | "down";
  isScrolled: boolean;
}

/**
 * Custom hook tracking viewport scroll progress percentage, scroll direction with
 * hysteresis thresholds to prevent micro-jitter, and scrolled state.
 */
export function useScrollProgress(
  threshold = 80,
  downThreshold = 10,
  upThreshold = 4
): ScrollProgressInfo {
  const [scrollInfo, setScrollInfo] = useState<ScrollProgressInfo>({
    progress: 0,
    scrollDirection: "up",
    isScrolled: false,
  });

  const stateRef = useRef({
    lastScrollY: 0,
    scrollDirection: "up" as "up" | "down",
    ticking: false,
  });

  useEffect(() => {
    stateRef.current.lastScrollY = typeof window !== "undefined" ? Math.max(0, window.scrollY) : 0;

    const handleScroll = () => {
      if (!stateRef.current.ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = Math.max(0, window.scrollY);
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0;
          const isScrolled = currentScrollY > threshold;

          let newDirection = stateRef.current.scrollDirection;
          const diff = currentScrollY - stateRef.current.lastScrollY;

          // Always reveal navbar near top of page
          if (currentScrollY <= threshold) {
            newDirection = "up";
            stateRef.current.lastScrollY = currentScrollY;
          }
          // Threshold checking for downward movement (prevents jitter)
          else if (diff > downThreshold) {
            newDirection = "down";
            stateRef.current.lastScrollY = currentScrollY;
          }
          // Threshold checking for upward movement (reappears quickly on user intention)
          else if (diff < -upThreshold) {
            newDirection = "up";
            stateRef.current.lastScrollY = currentScrollY;
          }

          stateRef.current.scrollDirection = newDirection;
          stateRef.current.ticking = false;

          setScrollInfo((prev) => {
            const clampedProgress = Math.min(100, Math.max(0, progress));
            if (
              prev.progress === clampedProgress &&
              prev.scrollDirection === newDirection &&
              prev.isScrolled === isScrolled
            ) {
              return prev;
            }
            return {
              progress: clampedProgress,
              scrollDirection: newDirection,
              isScrolled,
            };
          });
        });

        stateRef.current.ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, downThreshold, upThreshold]);

  return scrollInfo;
}

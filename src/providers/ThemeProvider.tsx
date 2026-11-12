"use client";

import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent | { clientX: number; clientY: number }) => void;
  setTheme: (theme: Theme) => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Immersive Theme Provider with Expanding Circular Ripple Reveal.
 *
 * - Default theme: "dark"
 * - Remembers user selection via localStorage
 * - Seamlessly synchronizes CSS View Transitions with a circular clip-path reveal
 * - Fallback ripple engine for browsers that lack View Transitions
 * - Zero hydration mismatch and safe early DOM synchronization
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isInitializedRef = useRef(false);

  // Synchronize initial theme on mount
  useEffect(() => {
    if (isInitializedRef.current) return;
    isInitializedRef.current = true;

    try {
      const stored = localStorage.getItem("theme") as Theme | null;
      if (stored === "dark" || stored === "light") {
        setThemeState(stored);
        applyThemeToDOM(stored);
      } else {
        // Default to Dark Mode
        setThemeState("dark");
        applyThemeToDOM("dark");
      }
    } catch (e) {
      applyThemeToDOM("dark");
    }
  }, []);

  const applyThemeToDOM = (t: Theme) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.setAttribute("data-theme", t);
    if (t === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  };

  /**
   * High-fidelity fallback ripple for browsers that do not support document.startViewTransition
   */
  const executeFallbackRipple = (x: number, y: number, nextTheme: Theme): Promise<void> => {
    return new Promise((resolve) => {
      const ripple = document.createElement("div");
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );
      const diameter = endRadius * 2.2;

      // Style expanding circular wave overlay
      ripple.style.position = "fixed";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = `${diameter}px`;
      ripple.style.height = `${diameter}px`;
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "translate(-50%, -50%) scale(0)";
      ripple.style.backgroundColor = nextTheme === "dark" ? "#090D14" : "#F8FAFC";
      ripple.style.zIndex = "999999";
      ripple.style.pointerEvents = "none";
      ripple.style.willChange = "transform, opacity";

      document.body.appendChild(ripple);

      const animation = ripple.animate(
        [
          { transform: "translate(-50%, -50%) scale(0)", opacity: 0.95 },
          { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
        ],
        {
          duration: 750,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          fill: "forwards",
        }
      );

      animation.onfinish = () => {
        applyThemeToDOM(nextTheme);
        setThemeState(nextTheme);

        // Fade out overlay cleanly
        const fade = ripple.animate(
          [{ opacity: 1 }, { opacity: 0 }],
          { duration: 250, fill: "forwards" }
        );

        fade.onfinish = () => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
          resolve();
        };
      };
    });
  };

  const toggleTheme = useCallback(
    async (event?: React.MouseEvent | { clientX: number; clientY: number }) => {
      if (isTransitioning) return; // Prevent concurrent transitions

      const nextTheme: Theme = theme === "light" ? "dark" : "light";
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Extract coordinates from click or fallback to top-right viewport
      let x = window.innerWidth - 60;
      let y = 35;

      if (event && "clientX" in event && typeof event.clientX === "number") {
        x = event.clientX;
        y = event.clientY;
      }

      // Check support for View Transitions API
      const hasViewTransition =
        typeof document !== "undefined" &&
        "startViewTransition" in document &&
        typeof (document as any).startViewTransition === "function";

      if (prefersReducedMotion || !hasViewTransition) {
        setIsTransitioning(true);
        if (!prefersReducedMotion) {
          await executeFallbackRipple(x, y, nextTheme);
        } else {
          setThemeState(nextTheme);
          applyThemeToDOM(nextTheme);
        }
        try {
          localStorage.setItem("theme", nextTheme);
        } catch (e) {}
        setIsTransitioning(false);
        return;
      }

      // Modern CSS View Transitions with Expanding Circular Clip-Path
      try {
        setIsTransitioning(true);

        const endRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        );

        const transition = (document as any).startViewTransition(() => {
          setThemeState(nextTheme);
          applyThemeToDOM(nextTheme);
          try {
            localStorage.setItem("theme", nextTheme);
          } catch (e) {}
        });

        await transition.ready;

        const animation = document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 800,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );

        await animation.finished;
      } catch (err) {
        // Safe fallback in case of unexpected abort
        setThemeState(nextTheme);
        applyThemeToDOM(nextTheme);
      } finally {
        setIsTransitioning(false);
      }
    },
    [theme, isTransitioning]
  );

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    applyThemeToDOM(t);
    try {
      localStorage.setItem("theme", t);
    } catch (e) {}
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
}


"use client";

import React from "react";
import { useTheme } from "@/providers/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

/**
 * Accessible Interactive Theme Toggle Button.
 *
 * - In Light Mode: Renders Moon icon (prompts user to switch to Dark Mode)
 * - In Dark Mode: Renders Sun icon (prompts user to switch to Light Mode)
 * - Captures exact pointer click position to drive the circular ripple transition
 * - Smooth rotational & scale icon morphing
 * - Full keyboard focus & screen-reader accessibility
 */
export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme, isTransitioning } = useTheme();

  const isLight = theme === "light";
  const label = isLight ? "Switch to dark mode" : "Switch to light mode";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleTheme(e);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isTransitioning}
      aria-label={label}
      title={label}
      className={cn(
        "relative min-w-[38px] min-h-[38px] sm:min-w-[42px] sm:min-h-[42px] p-2 rounded-full flex items-center justify-center",
        "bg-[var(--surface-card)] border border-[var(--border-card)] text-[var(--text-main)]",
        "hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] hover:shadow-[var(--shadow-hover)]",
        "transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none transform-gpu active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isLight ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Moon className="w-4 h-4 text-[var(--accent-cyan)] fill-[var(--accent-cyan)]/15" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Sun className="w-4 h-4 text-[var(--accent-cyan)] fill-[var(--accent-cyan)]/15" />
          </motion.div>
        )}
      </AnimatePresence>

      {showLabel && (
        <span className="ml-2 font-mono text-xs text-[var(--text-main)]">
          {isLight ? "Dark Mode" : "Light Mode"}
        </span>
      )}
    </button>
  );
}


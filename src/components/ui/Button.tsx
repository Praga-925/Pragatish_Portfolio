"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  magnetic?: boolean;
  children: React.ReactNode;
}

/**
 * Reusable accessible Button primitive with Design DNA variants,
 * optional subtle desktop magnetic pull, hover translation, focus rings,
 * and animated loading states.
 */
export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  magnetic = false,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [canMagnetic, setCanMagnetic] = useState(false);

  // High precision spring config for magnetic movement
  const springConfig = { damping: 20, stiffness: 250, mass: 0.2 };
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    // Enable magnetic physics only on pointer devices that support hover
    if (typeof window !== "undefined" && magnetic) {
      const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setCanMagnetic(!isTouch && !prefersReducedMotion);
    }
  }, [magnetic]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!canMagnetic || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Controlled magnetic displacement (max ±6px)
    const deltaX = (e.clientX - centerX) * 0.18;
    const deltaY = (e.clientY - centerY) * 0.18;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    if (!canMagnetic) return;
    x.set(0);
    y.set(0);
  };

  const variantClasses = {
    primary:
      "bg-[var(--surface-card)] border border-[var(--accent-cyan)] text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/10 shadow-[var(--shadow-hover)]",
    secondary:
      "bg-[var(--surface-card)] border border-[var(--border-card)] text-[var(--text-main)] hover:border-[var(--accent-cyan)]/50 hover:bg-[var(--surface-elevated)]",
    ghost:
      "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-main)] hover:bg-[var(--surface-card)]",
    outline:
      "bg-transparent border border-[var(--border-card)] text-[var(--text-main)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]",
  };

  const sizeClasses = {
    sm: "py-1.5 px-3 text-xs rounded-lg font-mono",
    md: "py-2.5 px-4 text-xs rounded-xl font-mono font-semibold",
    lg: "py-3.5 px-6 text-sm rounded-xl font-mono font-bold",
  };

  if (canMagnetic) {
    return (
      <motion.button
        ref={btnRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer disabled:opacity-40 disabled:pointer-events-none active:scale-[0.97] transform-gpu",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...(props as any)}
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin shrink-0 text-current" />}
        {children}
      </motion.button>
    );
  }

  return (
    <button
      ref={btnRef}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-all duration-200 ease-out transform-gpu cursor-pointer disabled:opacity-40 disabled:pointer-events-none active:scale-[0.98]",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin shrink-0 text-current" />}
      {children}
    </button>
  );
}

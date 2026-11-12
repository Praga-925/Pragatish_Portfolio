"use client";

import React from "react";
import { motion } from "framer-motion";

export interface MaskedRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  yOffset?: string | number;
}

/**
 * Editorial Masked Vertical Reveal component.
 * Wraps elements in an overflow-hidden mask and glides content upward
 * with cubic-bezier easing for an award-winning editorial entrance.
 */
export function MaskedReveal({
  children,
  delay = 0,
  duration = 0.75,
  className = "",
  yOffset = "105%",
}: MaskedRevealProps) {
  return (
    <span className={`inline-block overflow-hidden align-top ${className}`}>
      <motion.span
        initial={{ y: yOffset, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1], // Smooth exponential deceleration
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

export interface SplitHeadlineProps {
  lines: string[];
  gradientIndex?: number;
  className?: string;
  baseDelay?: number;
}

/**
 * Split-line Kinetic Headline reveal.
 * Animates lines individually through vertical overflow masks.
 */
export function SplitHeadline({
  lines,
  gradientIndex = -1,
  className = "",
  baseDelay = 0.2,
}: SplitHeadlineProps) {
  return (
    <h1 className={`flex flex-col gap-1 ${className}`}>
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden">
          <motion.span
            initial={{ y: "115%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.85,
              delay: baseDelay + idx * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`block ${
              idx === gradientIndex
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-blue)] to-[var(--accent-violet)]"
                : "text-[var(--text-main)]"
            }`}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}


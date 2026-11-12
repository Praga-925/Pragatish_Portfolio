"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";
import { ANIMATION_CONFIGS } from "@/constants/animations";

export interface MotionBoxProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MotionBox({ children, className, delay = 0, ...props }: MotionBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: ANIMATION_CONFIGS.TIMINGS.SECTION_REVEAL,
        delay,
        ease: ANIMATION_CONFIGS.PRIMARY_EASING,
      }}
      className={`transform-gpu ${className || ""}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

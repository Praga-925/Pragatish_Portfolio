import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverGlow?: boolean;
}

/**
 * Reusable Card container primitive with theme-adaptive surface fill and ambient hover glow.
 */
export function Card({ children, hoverGlow = true, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[var(--surface-card)] border border-[var(--border-card)] p-6 text-[var(--text-main)] shadow-[var(--shadow-card)] transition-all duration-300 ease-out transform-gpu",
        hoverGlow && "hover:border-[var(--accent-cyan)]/50 hover:shadow-[var(--shadow-hover)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

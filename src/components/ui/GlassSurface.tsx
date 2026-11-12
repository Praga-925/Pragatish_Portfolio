import React from "react";
import { cn } from "@/lib/utils";

export interface GlassSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  blur?: "sm" | "md" | "lg";
}

/**
 * Reusable Glassmorphism Surface following strict Design DNA rules (nav, modals, status panels only).
 */
export function GlassSurface({ children, blur = "md", className, ...props }: GlassSurfaceProps) {
  const blurClasses = {
    sm: "backdrop-blur-md",
    md: "backdrop-blur-lg",
    lg: "backdrop-blur-xl",
  };

  return (
    <div
      className={cn(
        "bg-[var(--glass-bg)] saturate-180 border border-[var(--glass-border)] shadow-[var(--shadow-card)]",
        blurClasses[blur],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

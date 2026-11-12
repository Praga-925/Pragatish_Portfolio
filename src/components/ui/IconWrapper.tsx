import React from "react";
import { cn } from "@/lib/utils";

export interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "cyan" | "gold" | "green" | "neutral" | "violet" | "blue";
}

/**
 * Reusable icon container supporting 1.5px stroke Lucide icons.
 */
export function IconWrapper({
  children,
  variant = "cyan",
  className,
  ...props
}: IconWrapperProps) {
  const variantClasses = {
    cyan: "bg-[var(--surface-card)] border-[var(--border-card)] text-[var(--accent-cyan)]",
    violet: "bg-[var(--surface-card)] border-[var(--border-card)] text-[var(--accent-violet)]",
    blue: "bg-[var(--surface-card)] border-[var(--border-card)] text-[var(--accent-blue)]",
    gold: "bg-[var(--surface-card)] border-[var(--border-card)] text-[var(--accent-violet)]",
    green: "bg-[var(--surface-card)] border-[var(--border-card)] text-[#10B981]",
    neutral: "bg-[var(--surface-card)] border-[var(--border-card)] text-[var(--text-secondary)]",
  };

  return (
    <div
      className={cn(
        "p-2.5 rounded-xl border flex items-center justify-center shrink-0",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

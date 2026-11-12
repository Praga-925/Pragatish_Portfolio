import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "status" | "cyan" | "gold" | "ghost";
  pulse?: boolean;
  children: React.ReactNode;
}

/**
 * Accessible Badge / Status Pill component for live indicators and tags.
 */
export function Badge({
  variant = "cyan",
  pulse = false,
  children,
  className,
  ...props
}: BadgeProps) {
  const variantClasses = {
    status: "bg-[#10B981]/15 text-[#059669] dark:text-[#10B981] border-[#10B981]/30",
    cyan: "bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)] border-[var(--accent-cyan)]/30",
    gold: "bg-[#D4AF37]/15 text-[#B45309] dark:text-[#D4AF37] border-[#D4AF37]/30",
    ghost: "bg-[var(--surface-card)] text-[var(--text-secondary)] border-[var(--border-card)]",
  };

  return (
    <span
      role="status"
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono font-medium tracking-tight",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
        </span>
      )}
      {children}
    </span>
  );
}

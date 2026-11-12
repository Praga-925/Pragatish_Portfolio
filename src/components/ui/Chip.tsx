import React from "react";
import { cn } from "@/lib/utils";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  active?: boolean;
}

/**
 * Capsule Chip primitive for technical stack labels and skill badges.
 */
export function Chip({ children, active = false, className, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono border transition-colors",
        active
          ? "bg-[#242424] text-[#D4AF37] border-[#D4AF37]/40 shadow-[0_0_10px_rgba(212,175,55,0.15)]"
          : "bg-[#111111] text-[#94A3B8] border-[#333333] hover:border-[#555555] hover:text-[#F8FAFC]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

import React from "react";
import { cn } from "@/lib/utils";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

/**
 * Compact monospace tag indicator.
 */
export function Tag({ children, className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "text-[10px] font-mono px-2.5 py-1 rounded-full bg-[var(--surface-card)] text-[var(--text-secondary)] border border-[var(--border-card)]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  borderTop?: boolean;
  ref?: React.Ref<HTMLElement>;
}

/**
 * Semantic <section> container maintaining 192px section gap (desktop) / 112px (mobile).
 * Supports optional top Ghost Wire border for visual rhythm separation.
 */
export function Section({ id, children, className, borderTop = false, ref, ...props }: SectionProps) {
  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "w-full py-16 sm:py-20 lg:py-24 scroll-mt-24 transform-gpu",
        borderTop && "border-t border-[var(--border-ghost)]",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

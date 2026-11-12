import React from "react";
import { cn } from "@/lib/utils";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: "col" | "row";
  gap?: 2 | 3 | 4 | 6 | 8;
  align?: "start" | "center" | "end" | "between";
}

/**
 * Flex direction stack helper enforcing consistent component spacing.
 */
export function Stack({
  children,
  direction = "col",
  gap = 4,
  align = "start",
  className,
  ...props
}: StackProps) {
  const directionClasses = direction === "row" ? "flex-row" : "flex-col";

  const gapClasses = {
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    6: "gap-6",
    8: "gap-8",
  };

  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    between: "justify-between",
  };

  return (
    <div className={cn("flex", directionClasses, gapClasses[gap], alignClasses[align], className)} {...props}>
      {children}
    </div>
  );
}

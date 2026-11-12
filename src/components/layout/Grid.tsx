import React from "react";
import { cn } from "@/lib/utils";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 12;
  gap?: 4 | 6 | 8 | 12;
}

/**
 * Responsive 12-column grid primitive supporting asymmetric layouts and Bento patterns.
 */
export function Grid({ children, cols = 12, gap = 6, className, ...props }: GridProps) {
  const colsClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    12: "grid-cols-12",
  };

  const gapClasses = {
    4: "gap-4",
    6: "gap-6",
    8: "gap-8",
    12: "gap-12",
  };

  return (
    <div className={cn("grid", colsClasses[cols], gapClasses[gap], className)} {...props}>
      {children}
    </div>
  );
}

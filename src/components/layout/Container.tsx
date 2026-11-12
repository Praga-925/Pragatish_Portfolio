import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  clean?: boolean;
}

/**
 * Centered 1200px max-width container with responsive horizontal padding.
 * Enforces 12-column grid container boundaries across all viewports.
 */
export function Container({ children, className, clean = false, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto",
        !clean && "max-w-[1600px] px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

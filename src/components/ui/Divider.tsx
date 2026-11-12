import React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
}

/**
 * Ghost Wire divider line for architectural spacing separation.
 */
export function Divider({ orientation = "horizontal", className, ...props }: DividerProps) {
  return (
    <hr
      className={cn(
        "border-0 shrink-0",
        orientation === "horizontal"
          ? "w-full h-px bg-[var(--border-ghost)]"
          : "h-full w-px bg-[var(--border-ghost)]",
        className
      )}
      {...props}
    />
  );
}

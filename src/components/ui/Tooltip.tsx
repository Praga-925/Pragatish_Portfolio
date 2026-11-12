"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom";
}

/**
 * Accessible hover/focus tooltip wrapper for extra metadata hints.
 */
export function Tooltip({ content, children, position = "top" }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={cn(
            "absolute z-50 px-2.5 py-1 rounded bg-[#111111] border border-[#333333] text-[10px] font-mono text-[#F8FAFC] whitespace-nowrap shadow-xl pointer-events-none transition-all duration-150",
            position === "top" ? "bottom-full mb-2 left-1/2 -translate-x-1/2" : "top-full mt-2 left-1/2 -translate-x-1/2"
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}

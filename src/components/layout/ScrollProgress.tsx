"use client";

import React from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

/**
 * Top fixed scroll progress indicator rendering a 2px Neural Cyan bar.
 */
export function ScrollProgress() {
  const { progress } = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-[60] pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-blue)] to-[var(--accent-violet)] transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

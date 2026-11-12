"use client";

import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { SmoothScrollProvider } from "./SmoothScrollProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Root Application Provider Registry.
 * Centralizes application-wide client providers including ThemeProvider (light/dark mode with ripple transition),
 * Lenis smooth scrolling, GSAP ScrollTrigger synchronization, and motion configurations.
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}

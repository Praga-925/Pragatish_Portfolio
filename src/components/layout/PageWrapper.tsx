import React from "react";
import { cn } from "@/lib/utils";

export interface PageWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

/**
 * Root <main> page layout container handling vertical spacing rhythm.
 */
export function PageWrapper({ children, className, ...props }: PageWrapperProps) {
  return (
    <main className={cn("flex-1 w-full pt-24 pb-16", className)} {...props}>
      {children}
    </main>
  );
}

import React from "react";
import { cn } from "@/lib/utils";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function Display({ children, className, as: Component = "h1", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.08]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Heading({ children, className, as: Component = "h2", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--text-main)]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Subheading({ children, className, as: Component = "p", ...props }: TypographyProps) {
  return (
    <Component
      className={cn("font-body text-base sm:text-lg text-[var(--text-muted)] font-normal leading-relaxed", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Body({ children, className, as: Component = "p", ...props }: TypographyProps) {
  return (
    <Component className={cn("font-body text-sm text-[var(--text-secondary)] leading-relaxed", className)} {...props}>
      {children}
    </Component>
  );
}

export function Caption({ children, className, as: Component = "span", ...props }: TypographyProps) {
  return (
    <Component className={cn("font-body text-xs text-[var(--text-muted)]", className)} {...props}>
      {children}
    </Component>
  );
}

export function CodeText({ children, className, as: Component = "span", ...props }: TypographyProps) {
  return (
    <Component
      className={cn("font-mono text-xs text-[var(--accent-cyan)] tracking-wider uppercase", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

import React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "card" | "avatar" | "button";
}

/**
 * Reusable loading skeleton primitives with subtle shimmer animation.
 */
export function Skeleton({ variant = "card", className, ...props }: SkeletonProps) {
  const variantClasses = {
    text: "h-4 w-3/4 rounded-md",
    card: "h-48 w-full rounded-2xl",
    avatar: "h-12 w-12 rounded-full",
    button: "h-10 w-32 rounded-xl",
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "bg-[#1A1A1A] border border-[#242424] animate-pulse",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}

export function SkeletonText({ className }: { className?: string }) {
  return <Skeleton variant="text" className={className} />;
}

export function SkeletonCard({ className }: { className?: string }) {
  return <Skeleton variant="card" className={className} />;
}

export function SkeletonAvatar({ className }: { className?: string }) {
  return <Skeleton variant="avatar" className={className} />;
}

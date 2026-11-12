import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <Loader2
      aria-label="Loading..."
      className={cn("animate-spin text-[#00E5FF]", sizeClasses[size], className)}
    />
  );
}

export function LoadingContainer({ label = "Loading data stream..." }: { label?: string }) {
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center gap-3 bg-[#1A1A1A] border border-[#333333] rounded-2xl">
      <LoadingSpinner size="lg" />
      <span className="text-xs font-mono text-[#94A3B8]">{label}</span>
    </div>
  );
}

"use client";

import React from "react";
import { Brain, ShieldCheck, Camera, BarChart3, Layers } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export interface ProjectMediaFallbackProps {
  title: string;
  category: "AI & ML" | "Cybersecurity" | "Computer Vision" | "Data Science" | string;
  className?: string;
}

export function ProjectMediaFallback({ title, category, className = "" }: ProjectMediaFallbackProps) {
  const getCategoryTheme = () => {
    switch (category) {
      case "Cybersecurity":
        return {
          gradient: "from-amber-950/60 via-zinc-900 to-black",
          icon: <ShieldCheck className="w-10 h-10 text-[#D4AF37]" />,
          accent: "#D4AF37",
          variant: "gold" as const,
        };
      case "Computer Vision":
        return {
          gradient: "from-purple-950/60 via-zinc-900 to-black",
          icon: <Camera className="w-10 h-10 text-[#A855F7]" />,
          accent: "#A855F7",
          variant: "cyan" as const,
        };
      case "Data Science":
        return {
          gradient: "from-emerald-950/60 via-zinc-900 to-black",
          icon: <BarChart3 className="w-10 h-10 text-[#10B981]" />,
          accent: "#10B981",
          variant: "status" as const,
        };
      default:
        return {
          gradient: "from-cyan-950/60 via-zinc-900 to-black",
          icon: <Brain className="w-10 h-10 text-[#00E5FF]" />,
          accent: "#00E5FF",
          variant: "cyan" as const,
        };
    }
  };

  const theme = getCategoryTheme();

  return (
    <div
      className={`relative w-full h-full bg-gradient-to-br ${theme.gradient} flex flex-col justify-between p-6 border border-[#242424] overflow-hidden ${className}`}
    >
      {/* SVG Background Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke={theme.accent} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* Header Overlay */}
      <div className="relative z-10 flex items-center justify-between">
        <Badge variant={theme.variant}>{category}</Badge>
        <div className="flex items-center gap-1 font-mono text-[10px] text-[#94A3B8]">
          <Layers className="w-3 h-3 text-[#00E5FF]" />
          <span>Derived Vector Graphic</span>
        </div>
      </div>

      {/* Center Icon & Title */}
      <div className="relative z-10 my-auto text-center space-y-2 py-4">
        <div className="w-16 h-16 rounded-2xl bg-black/60 border border-[#333333] mx-auto flex items-center justify-center backdrop-blur-sm shadow-xl">
          {theme.icon}
        </div>
        <h4 className="text-sm font-mono font-bold text-[#F8FAFC] tracking-wide">{title}</h4>
        <span className="text-[10px] font-mono text-[#94A3B8] block uppercase tracking-widest">
          SYSTEM ARCHITECTURE SCHEMATIC
        </span>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 pt-2 border-t border-[#242424]/60 flex items-center justify-between text-[10px] font-mono text-[#64748B]">
        <span>Fallback Renderer</span>
        <span>WCAG 2.2 Compliant</span>
      </div>
    </div>
  );
}

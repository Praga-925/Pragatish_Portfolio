"use client";

import React from "react";
import { MotionBox } from "@/components/shared/MotionBox";
import { GlassSurface } from "@/components/ui/GlassSurface";
import { CodeText } from "@/components/ui/Typography";
import { Quote, Sparkles } from "lucide-react";

export function EngineeringPhilosophy() {
  return (
    <MotionBox delay={0.4}>
      <div className="pt-16 border-t border-[var(--border-ghost)]">
        <GlassSurface className="p-8 sm:p-10 border-[var(--border-card)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
            <Quote className="w-24 h-24 text-[var(--accent-cyan)]" />
          </div>

          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-cyan)]">
              <Sparkles className="w-4 h-4" />
              <CodeText className="text-xs text-[var(--accent-cyan)] tracking-widest uppercase">
                ENGINEERING PHILOSOPHY
              </CodeText>
            </div>

            <blockquote className="text-lg sm:text-xl font-medium text-[var(--text-main)] leading-relaxed italic">
              &ldquo;I believe great software combines intelligent automation, secure engineering practices, and scalable system design. My goal is to build practical AI-driven solutions that solve meaningful real-world problems while continuously improving as an engineer.&rdquo;
            </blockquote>

            <div className="pt-2 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[var(--accent-cyan)]" />
              <span className="text-xs font-mono text-[#D4AF37] font-semibold">
                Candidate Engineering Standard
              </span>
            </div>
          </div>
        </GlassSurface>
      </div>
    </MotionBox>
  );
}

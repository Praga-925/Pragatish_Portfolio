"use client";

import React from "react";
import { SkillItem } from "@/types";
import { TechLogo } from "@/components/ui/TechLogo";

export interface SkillCardProps {
  skill: SkillItem;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="p-3 sm:p-3.5 rounded-xl bg-[var(--surface-card)] border border-[var(--border-card)] hover:border-[var(--accent-cyan)]/50 hover:bg-[var(--surface-elevated)] transition-all duration-300 group flex items-center gap-3 cursor-default transform-gpu hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]">
      <div className="w-9 h-9 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-card)] group-hover:border-[var(--accent-cyan)]/30 flex items-center justify-center p-1.5 shrink-0 transition-colors">
        <TechLogo name={skill.name} logo={skill.logo} className="w-5 h-5" />
      </div>
      <span className="font-body text-xs sm:text-[13px] font-semibold text-[var(--text-main)] group-hover:text-[var(--accent-cyan)] transition-colors truncate">
        {skill.name}
      </span>
    </div>
  );
}

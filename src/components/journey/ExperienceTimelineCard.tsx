"use client";

import React from "react";
import { ExperienceItem } from "@/data/experience";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { TechLogo } from "@/components/ui/TechLogo";
import { Briefcase, Building2, Calendar, CheckCircle2, Trophy, Layers } from "lucide-react";

export interface ExperienceTimelineCardProps {
  experience: ExperienceItem;
}

export function ExperienceTimelineCard({ experience }: ExperienceTimelineCardProps) {
  // Use concise top 3 responsibilities
  const conciseAchievements = [
    "Preprocessed raw tabular datasets with imputation, normalization, and categorical feature encoding.",
    "Engineered and tuned gradient boosting models (LightGBM) to maximize predictive accuracy.",
    "Benchmarked model performance across test partitions using RMSE and MAE evaluation metrics."
  ];

  return (
    <Card className="p-5 sm:p-7 bg-[var(--surface-card)] border-[var(--border-card)] hover:border-[var(--accent-violet)]/40 transition-all duration-300 relative overflow-hidden group">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-violet)]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[var(--accent-violet)]/10 transition-all" />

      <div className="space-y-5 relative z-10">
        {/* Header Badges & Role Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-ghost)] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] text-[var(--accent-violet)]">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="cyan" className="text-[10px] py-0.5">
                  INTERNSHIP
                </Badge>
                <span className="text-[10px] font-mono text-[var(--text-muted)] px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-card)]">
                  {experience.mode}
                </span>
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[var(--text-main)]">
                {experience.role}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[var(--accent-cyan)] px-2.5 py-1 rounded-full bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/30 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{experience.period} • {experience.duration}</span>
            </span>
          </div>
        </div>

        {/* Organization Brand Attribution */}
        <div className="flex items-center gap-2 font-mono text-sm">
          <Building2 className="w-4 h-4 text-[var(--accent-cyan)] shrink-0" />
          <span className="font-bold text-[var(--accent-cyan)]">{experience.organization}</span>
          <span className="text-[var(--text-muted)]">×</span>
          <span className="font-bold text-[var(--accent-violet)]">{experience.partner}</span>
        </div>

        {/* Concise Overview (2 lines) */}
        <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed line-clamp-2">
          {experience.overview}
        </p>

        {/* Highlight Project Callout */}
        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] space-y-2">
          <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--accent-cyan)]">
            <Trophy className="w-3.5 h-3.5" />
            <span className="uppercase font-semibold">HIGHLIGHT PROJECT</span>
          </div>
          <h4 className="font-heading text-sm font-bold text-[var(--text-main)]">{experience.highlightProject.title}</h4>
          <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2">
            {experience.highlightProject.description}
          </p>

          {/* Compact Tech Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            {experience.technologiesUsed.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--surface-card)] text-[11px] font-mono text-[var(--text-main)] border border-[var(--border-card)]"
              >
                <TechLogo name={tech} className="w-3.5 h-3.5" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Concise 3 Achievement Bullets */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-violet)]">
            <Layers className="w-3.5 h-3.5" />
            <span className="uppercase font-semibold tracking-wider">KEY CONTRIBUTIONS</span>
          </div>

          <div className="space-y-1.5">
            {conciseAchievements.map((resp, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-card)] flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                <span>{resp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

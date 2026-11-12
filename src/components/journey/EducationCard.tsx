"use client";

import React from "react";
import { EDUCATION_DATA } from "@/data/education";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GraduationCap, Building2, Calendar, BookOpen, CheckCircle2 } from "lucide-react";

export function EducationCard() {
  return (
    <Card className="p-5 sm:p-7 bg-[var(--surface-card)] border-[var(--border-card)] hover:border-[var(--accent-cyan)]/50 transition-all duration-300 relative overflow-hidden group">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-cyan)]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[var(--accent-cyan)]/10 transition-all" />

      <div className="space-y-5 relative z-10">
        {/* Header Badges & Degree Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-ghost)] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] text-[var(--accent-cyan)]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="cyan" className="text-[10px] py-0.5">
                  ACADEMIC DEGREE
                </Badge>
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[var(--text-main)]">
                {EDUCATION_DATA.degree}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[var(--accent-cyan)]">
                {EDUCATION_DATA.fieldOfStudy}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:text-right">
            <span className="font-mono text-xs text-[var(--accent-violet)] px-2.5 py-1 rounded-full bg-[var(--accent-violet)]/10 border border-[var(--accent-violet)]/30 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{EDUCATION_DATA.currentStatus}</span>
            </span>
          </div>
        </div>

        {/* Institution Details */}
        <div className="flex items-center gap-2 text-sm font-mono text-[var(--text-main)]">
          <Building2 className="w-4 h-4 shrink-0 text-[var(--accent-violet)]" />
          <span className="font-semibold">{EDUCATION_DATA.institution}</span>
          <span className="text-xs text-[var(--text-muted)]">({EDUCATION_DATA.location})</span>
        </div>

        {/* Concise Description (2 lines) */}
        <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed line-clamp-2">
          Pursuing Bachelor of Engineering in Computer Science with focus on machine learning algorithms, cybersecurity principles, and full-stack software development.
        </p>

        {/* Academic Focus Tags */}
        <div className="pt-3 border-t border-[var(--border-ghost)] space-y-2">
          <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)]">
            <BookOpen className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
            <span className="uppercase tracking-wider">CORE FOCUS AREAS</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {EDUCATION_DATA.academicFocus.map((focus) => (
              <span
                key={focus}
                className="font-mono text-[10px] sm:text-xs px-2.5 py-1 rounded-md bg-[var(--surface-elevated)] border border-[var(--border-card)] text-[var(--text-secondary)] flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                <span>{focus}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

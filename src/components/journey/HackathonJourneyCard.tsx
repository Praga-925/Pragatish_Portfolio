"use client";

import React from "react";
import { HackathonJourneyItem } from "@/data/hackathons";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Trophy, Sparkles, CheckCircle2 } from "lucide-react";

export interface HackathonJourneyCardProps {
  journey: HackathonJourneyItem;
}

export function HackathonJourneyCard({ journey }: HackathonJourneyCardProps) {
  return (
    <Card className="p-5 sm:p-7 bg-[var(--surface-card)] border-[var(--border-card)] hover:border-[var(--accent-violet)]/40 transition-all duration-300 relative overflow-hidden group">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-violet)]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[var(--accent-violet)]/10 transition-all" />

      <div className="space-y-5 relative z-10">
        {/* Header Badges & Journey Number */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-ghost)] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] flex items-center justify-center font-mono font-bold text-base text-[var(--accent-cyan)]">
              {journey.journeyNumber}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="cyan" className="text-[10px] py-0.5">
                  NATIONAL HACKATHON
                </Badge>
                {journey.collaboration && (
                  <span className="text-[10px] font-mono text-[var(--accent-violet)] px-2 py-0.5 rounded bg-[var(--accent-violet)]/10 border border-[var(--accent-violet)]/30">
                    {journey.collaboration}
                  </span>
                )}
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[var(--text-main)]">
                {journey.hackathon}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)]">
            <MapPin className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
            <span>{journey.venueOrLocation}</span>
          </div>
        </div>

        {/* Project Title & Screenshot Frame */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-[var(--bg-secondary)] p-4 rounded-xl border border-[var(--border-card)]">
          {journey.coverImage && (
            <div className="md:col-span-4 aspect-video rounded-lg overflow-hidden bg-[var(--surface-card)] border border-[var(--border-card)] relative group/img">
              <img
                src={journey.coverImage}
                alt={`Screenshot for ${journey.projectTitle}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          <div className={`${journey.coverImage ? "md:col-span-8" : "md:col-span-12"} space-y-1.5`}>
            <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--accent-cyan)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="uppercase font-semibold">PROJECT SOLUTION</span>
            </div>
            <h4 className="font-heading text-sm sm:text-base font-bold text-[var(--text-main)]">{journey.projectTitle}</h4>
            <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2">
              {journey.summary}
            </p>
          </div>
        </div>

        {/* Compact Focus Tags */}
        <div className="pt-3 border-t border-[var(--border-ghost)] space-y-2">
          <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)]">
            <Trophy className="w-3.5 h-3.5 text-[var(--accent-violet)]" />
            <span className="uppercase tracking-wider">ENGINEERING HIGHLIGHTS</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {journey.emphasizedAspects.map((aspect) => (
              <span
                key={aspect}
                className="font-mono text-[10px] sm:text-xs px-2.5 py-1 rounded-md bg-[var(--surface-elevated)] border border-[var(--border-card)] text-[var(--text-secondary)] flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3 h-3 text-[var(--accent-cyan)]" />
                <span>{aspect}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

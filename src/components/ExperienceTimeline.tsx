"use client";

import React from "react";
import { EXPERIENCE_TIMELINE } from "@/data/portfolioData";
import { Briefcase, Award, Trophy, GitCommit, Check } from "lucide-react";

export function ExperienceTimeline() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Hackathon":
        return <Trophy className="w-4 h-4 text-[#D4AF37]" />;
      case "Achievement":
        return <Award className="w-4 h-4 text-[#00E5FF]" />;
      default:
        return <Briefcase className="w-4 h-4 text-[#10B981]" />;
    }
  };

  return (
    <section id="experience" className="w-full max-w-5xl mx-auto py-24 px-4 border-t border-[#111111]">
      <div className="mb-14 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-xs text-[#10B981] mb-2">
          <GitCommit className="w-4 h-4" />
          <span className="tracking-widest uppercase">CAREER TRACK & MILESTONES</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F8FAFC]">
          Professional History & Impact
        </h2>
        <p className="text-[#94A3B8] text-sm max-w-xl mt-2">
          Key engineering roles, vulnerability research contributions, and top national hackathon achievements.
        </p>
      </div>

      {/* Vertical Ghost Wire Timeline */}
      <div className="relative border-l border-[#333333] ml-4 md:ml-8 space-y-12 pl-6 md:pl-10">
        {EXPERIENCE_TIMELINE.map((item) => (
          <div key={item.id} className="relative group">
            {/* Glowing Active Node */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#1A1A1A] border border-[#333333] flex items-center justify-center group-hover:border-[#00E5FF] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
            </div>

            {/* Content Container */}
            <div className="rounded-2xl bg-[#1A1A1A] border border-[#333333] p-6 hover:border-[#555555] transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#111111] border border-[#333333]">
                    {getTypeIcon(item.type)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-xs font-mono text-[#D4AF37]">{item.organization}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#94A3B8] px-3 py-1 rounded-full bg-[#111111] border border-[#333333]">
                    {item.period}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#242424] text-[#CBD5E1]">
                    {item.type}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#CBD5E1] mb-4 leading-relaxed">{item.summary}</p>

              {/* Impact Bullet Highlights */}
              <div className="space-y-2 mb-4 bg-[#111111]/90 p-4 rounded-xl border border-[#242424]">
                {item.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                    <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#111111] text-[#94A3B8] border border-[#333333]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

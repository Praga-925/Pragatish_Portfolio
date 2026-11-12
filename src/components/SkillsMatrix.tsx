"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Cpu, Shield, Terminal, Check, Code2 } from "lucide-react";

export function SkillsMatrix() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-5 h-5 text-[#00E5FF]" />;
      case "Shield":
        return <Shield className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Terminal className="w-5 h-5 text-[#10B981]" />;
    }
  };

  return (
    <section id="skills" className="w-full max-w-[1600px] mx-auto py-24 px-4 border-t border-[#111111]">
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#D4AF37] mb-2">
          <Code2 className="w-4 h-4" />
          <span className="tracking-widest uppercase">TECHNICAL CAPABILITIES & TOOLING</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F8FAFC]">
          Engineering Skill Matrix
        </h2>
        <p className="text-[#94A3B8] text-sm max-w-xl mt-2">
          Specialized expertise across deep learning frameworks, eBPF telemetry, post-quantum algorithms, and low-latency cloud infrastructure.
        </p>
      </div>

      {/* Tri-Blade Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={cat.title}
            className="rounded-2xl bg-[#1A1A1A] border border-[#333333] p-6 hover:border-[#555555] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-[#242424] mb-4">
                <div className="p-2.5 rounded-xl bg-[#111111] border border-[#333333]">
                  {getIcon(cat.iconName)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F8FAFC]">{cat.title}</h3>
                  <p className="text-[11px] font-mono text-[#94A3B8] mt-0.5">{cat.description}</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {cat.skills.map((skill) => {
                  const isHovered = hoveredSkill === skill.name;
                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`p-3 rounded-xl border transition-all duration-200 cursor-default ${
                        isHovered
                          ? "bg-[#242424] border-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.08)]"
                          : "bg-[#111111] border-[#242424]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-mono font-medium text-[#F8FAFC]">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                            isHovered
                              ? "bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40"
                              : "bg-[#1A1A1A] text-[#94A3B8] border border-[#333333]"
                          }`}
                        >
                          {skill.tag}
                        </span>
                      </div>

                      {/* Animated Skill Level Bar */}
                      <div className="w-full h-1 bg-[#1A1A1A] rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 rounded-full ${
                            isHovered ? "bg-[#00E5FF]" : "bg-[#333333]"
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

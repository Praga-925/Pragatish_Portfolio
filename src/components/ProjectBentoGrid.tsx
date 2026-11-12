"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ExternalLink, Github, Cpu, Shield, Layers, Terminal, ArrowRight, CheckCircle2 } from "lucide-react";

export function ProjectBentoGrid() {
  const [filter, setFilter] = useState<"ALL" | "AI & ML" | "Cybersecurity" | "Hybrid Core">("ALL");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(
    (p) => filter === "ALL" || p.category === filter
  );

  return (
    <section id="projects" className="w-full max-w-[1600px] mx-auto py-24 px-4">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#00E5FF] mb-2">
            <Layers className="w-4 h-4" />
            <span className="tracking-widest uppercase">FLAGSHIP SYSTEMS & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Production Engineering Work
          </h2>
          <p className="text-[#94A3B8] text-sm max-w-xl mt-2">
            High-throughput neural models, kernel-level eBPF security observers, and post-quantum cryptographic systems built for scale.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-[#1A1A1A] p-1.5 rounded-full border border-[#333333]">
          {(["ALL", "AI & ML", "Cybersecurity", "Hybrid Core"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === cat
                  ? "bg-[#242424] text-[#00E5FF] border border-[#00E5FF]/40 shadow-sm"
                  : "text-[#94A3B8] hover:text-[#F8FAFC]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`${project.bentoSpan} rounded-2xl bg-[#1A1A1A] border border-[#333333] p-7 flex flex-col justify-between hover:border-[#555555] transition-all duration-300 group hover:shadow-[0_0_40px_rgba(0,229,255,0.04)] relative overflow-hidden`}
          >
            {/* Ambient Background Gradient Accent */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.imageBg} opacity-40 pointer-events-none group-hover:opacity-60 transition-opacity`}
            />

            <div>
              {/* Header Badge & Category */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span
                  className={`text-[11px] font-mono font-medium px-3 py-1 rounded-full border ${
                    project.category === "AI & ML"
                      ? "bg-[#00E5FF]/10 text-[#00E5FF] border-[#00E5FF]/30"
                      : project.category === "Cybersecurity"
                      ? "bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30"
                      : "bg-purple-500/10 text-purple-400 border-purple-500/30"
                  }`}
                >
                  {project.category}
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#111111] border border-[#333333] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#00E5FF] transition-colors"
                    aria-label="View Source Code on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-[#111111] border border-[#333333] text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF] transition-colors"
                      aria-label="View Live Deployment"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="relative z-10 mb-4">
                <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#D4AF37] mt-1">{project.subtitle}</p>
                <p className="text-sm text-[#CBD5E1] mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Architectural Technical Highlights */}
              <div className="relative z-10 space-y-2 mb-6 bg-[#111111]/80 p-4 rounded-xl border border-[#242424]">
                <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider block mb-1">
                  Architecture Specifications
                </span>
                {project.architectureDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Key Benchmark Metrics Row */}
              <div className="grid grid-cols-3 gap-2 py-3 border-t border-[#242424] mb-4 relative z-10">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[10px] font-mono text-[#94A3B8] truncate">{metric.label}</span>
                    <span className="text-xs font-mono font-bold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1.5 relative z-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#111111] text-[#94A3B8] border border-[#333333]"
                  >
                    {tag}
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

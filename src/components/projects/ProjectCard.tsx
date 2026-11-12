"use client";

import React, { useState, useRef, useEffect } from "react";
import { Project } from "@/types";
import { ArrowUpRight, Github } from "lucide-react";
import { ProjectMediaFallback } from "@/components/ui/ProjectMediaFallback";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

/**
 * Creative 3D Perspective & Morphing Project Card Component
 * - Subtle 3D perspective tilt responding to pointer movement
 * - Large visual 16:10 preview with depth parallax zoom
 * - Technology tags and clean concise storytelling
 * - 100% accessible clickable card redirecting to unique GitHub repo
 * - Smooth cubic-bezier transitions on mouse leave
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [canTilt, setCanTilt] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  // 3D Tilt Spring Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 250, mass: 0.3 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setCanTilt(!isTouch && !prefersReducedMotion);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!canTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={cardRef}
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="card"
      aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={canTilt ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
      className="group relative flex flex-col w-full h-full p-3 sm:p-3.5 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-card)] hover:border-[var(--accent-cyan)]/60 transition-colors duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] overflow-hidden select-none transform-gpu"
    >
      {/* Ambient Neon Backlight Halo (Fades in smoothly on hover) */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[var(--accent-cyan)]/20 via-transparent to-[var(--accent-violet)]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-sm" />

      {/* 1. Large 16:10 Visual Preview Container with Parallax Zoom */}
      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-card)]/80 group-hover:border-[var(--accent-cyan)]/40 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[0.985] group-hover:rounded-[14px] shrink-0 transform-gpu">
        {!imageError ? (
          <img
            src={project.media.cover}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top sm:object-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-108 group-hover:brightness-105"
          />
        ) : (
          <ProjectMediaFallback title={project.title} category={project.category} />
        )}

        {/* Subtle Ambient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)]/70 via-transparent to-transparent opacity-40 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none" />

        {/* Morphing External Link Capsule in Top-Right */}
        <div className="absolute top-3 right-3 p-2 rounded-xl bg-[var(--surface-card)]/90 backdrop-blur-md border border-[var(--border-card)] group-hover:border-[var(--accent-cyan)]/50 text-[var(--text-secondary)] group-hover:text-[var(--accent-cyan)] shadow-lg opacity-0 scale-75 translate-y-1.5 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] pointer-events-none">
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </div>
      </div>

      {/* 2. Project Information & Storytelling */}
      <div className="pt-3.5 pb-1 px-1 flex-1 flex flex-col justify-between transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-0.5">
        <div className="space-y-2">
          {/* Project Title with Space Grotesk */}
          <h3 className="font-heading text-base sm:text-lg font-semibold text-[var(--text-main)] group-hover:text-[var(--accent-cyan)] transition-colors duration-300 leading-snug">
            {project.title}
          </h3>

          {/* Morphing Cyan Accent Expansion Line */}
          <div className="w-0 group-hover:w-14 h-0.5 bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-blue)] to-transparent rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" />

          {/* Project Summary Description (Clamped to 2 lines for clean visual balance) */}
          <p className="font-body text-xs sm:text-[13px] text-[var(--text-muted)] line-clamp-2 leading-relaxed pt-1">
            {project.summary}
          </p>
        </div>

        {/* Technology Tags & Source Code Indicator */}
        <div className="pt-3.5 mt-3 border-t border-[var(--border-ghost)] flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5 max-w-[75%]">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[var(--surface-elevated)] border border-[var(--border-card)] text-[var(--text-secondary)] group-hover:border-[var(--accent-cyan)]/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-1 text-[11px] font-mono text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] transition-colors shrink-0">
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Code</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

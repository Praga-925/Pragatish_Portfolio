"use client";

import React, { useRef } from "react";
import { FEATURED_PROJECTS } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading, Subheading } from "@/components/ui/Typography";
import { MaskedReveal } from "@/components/ui/KineticText";
import { ProjectCard } from "./ProjectCard";
import { Layers } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowY1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <Section ref={sectionRef} id="projects" borderTop className="py-16 sm:py-20 lg:py-24 relative">
      {/* Dynamic Parallax Background Ambient Glows */}
      <motion.div
        style={{ y: glowY1 }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[var(--accent-cyan)]/6 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        style={{ y: glowY2 }}
        className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-[var(--accent-violet)]/6 rounded-full blur-[140px] pointer-events-none"
      />

      <Container className="relative z-10">
        {/* Section Header with Kinetic Typography */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-cyan)] mb-2">
            <Layers className="w-4 h-4" />
            <span className="tracking-widest uppercase">FLAGSHIP SYSTEMS & ENGINEERING WORK</span>
          </div>
          <div className="overflow-hidden">
            <MaskedReveal duration={0.8}>
              <Heading className="font-heading">Featured Projects</Heading>
            </MaskedReveal>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <Subheading className="max-w-2xl mt-2 text-[var(--text-muted)]">
              A curated portfolio of production-grade systems across AI/ML inference, real-time cybersecurity telemetry, and computer vision pipelines.
            </Subheading>
          </motion.div>
        </div>

        {/* Responsive Three-Column Project Grid: 3 on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                delay: 0.08 * (idx % 3),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full flex flex-col"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

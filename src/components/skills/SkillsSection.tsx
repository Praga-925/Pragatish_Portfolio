"use client";

import React, { useRef } from "react";
import { SKILL_CATEGORIES } from "@/data/skills";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading, Subheading } from "@/components/ui/Typography";
import { MaskedReveal } from "@/components/ui/KineticText";
import { SkillCard } from "./SkillCard";
import { Code2, Brain, ShieldCheck, Database, Wrench, Terminal } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-4 h-4 text-[var(--accent-cyan)]" />;
      case "Brain":
        return <Brain className="w-4 h-4 text-[var(--accent-violet)]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-4 h-4 text-[var(--accent-cyan)]" />;
      case "Database":
        return <Database className="w-4 h-4 text-[var(--accent-blue)]" />;
      case "Wrench":
        return <Wrench className="w-4 h-4 text-[var(--accent-violet)]" />;
      default:
        return <Terminal className="w-4 h-4 text-[var(--accent-cyan)]" />;
    }
  };

  return (
    <Section ref={sectionRef} id="skills" borderTop className="py-16 sm:py-20 lg:py-24 relative">
      {/* Subtle Cyan-Violet Background Glow */}
      <motion.div
        style={{ y: glowY }}
        className="absolute top-1/3 left-1/3 w-80 h-80 bg-[var(--accent-cyan)]/4 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        style={{ y: glowY }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--accent-violet)]/4 rounded-full blur-[130px] pointer-events-none"
      />

      <Container className="relative z-10">
        {/* Section Header with Kinetic Typography */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-cyan)] mb-2">
            <Terminal className="w-4 h-4" />
            <span className="tracking-widest uppercase">TECHNICAL CAPABILITIES & TOOLING</span>
          </div>
          <div className="overflow-hidden">
            <MaskedReveal duration={0.8}>
              <Heading className="font-heading">Technical Skills & Tooling</Heading>
            </MaskedReveal>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <Subheading className="max-w-2xl mt-2 text-[var(--text-muted)]">
              A structured inventory of core programming languages, machine learning frameworks, security utilities, databases, and developer platforms.
            </Subheading>
          </motion.div>
        </div>

        {/* 5 Compact Skill Groups */}
        <div className="space-y-8 sm:space-y-10">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.05 * catIdx,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 border-b border-[var(--border-ghost)] pb-2.5">
                  <div className="p-1.5 rounded-lg bg-[var(--surface-card)] border border-[var(--border-card)]">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-[var(--text-main)]">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    ({category.skills.length})
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 sm:gap-3">
                  {category.skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

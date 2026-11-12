"use client";

import React, { useRef } from "react";
import { HACKATHON_JOURNEY_DATA } from "@/data/hackathons";
import { INDUSTRY_EXPERIENCE_DATA } from "@/data/experience";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading, Subheading, CodeText } from "@/components/ui/Typography";
import { MaskedReveal } from "@/components/ui/KineticText";
import { EducationCard } from "./EducationCard";
import { ExperienceTimelineCard } from "./ExperienceTimelineCard";
import { HackathonJourneyCard } from "./HackathonJourneyCard";
import { Compass, GraduationCap, Briefcase, Trophy } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-triggered dynamic timeline progression
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 60%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 150,
  });

  const timelineScaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <Section ref={sectionRef} id="experience" borderTop className="py-16 sm:py-20 lg:py-24 relative">
      {/* Subtle Cyan-Violet Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[var(--accent-cyan)]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[var(--accent-violet)]/4 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header with Kinetic Typography */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-cyan)] mb-2">
            <Compass className="w-4 h-4" />
            <span className="tracking-widest uppercase">PROFESSIONAL TRACK & MILESTONES</span>
          </div>
          <div className="overflow-hidden">
            <MaskedReveal duration={0.8}>
              <Heading className="font-heading">Education, Experience & Hackathons</Heading>
            </MaskedReveal>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <Subheading className="max-w-2xl mt-2 text-[var(--text-muted)]">
              A chronological overview of my computer science education, practical machine learning internship, and competitive hackathon projects.
            </Subheading>
          </motion.div>
        </div>

        {/* Vertical Journey Timeline Flow */}
        <div ref={containerRef} className="space-y-12 sm:space-y-14 relative">
          {/* Static Track Line */}
          <div className="hidden lg:block absolute left-7 top-10 bottom-10 w-[2px] bg-[var(--border-ghost)] pointer-events-none" />

          {/* Animated Scroll-Triggered Progress Fill Line */}
          <div className="hidden lg:block absolute left-7 top-10 bottom-10 w-[2px] pointer-events-none overflow-hidden origin-top">
            <motion.div
              style={{ scaleY: timelineScaleY, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-[var(--accent-cyan)] via-[var(--accent-violet)] to-[var(--accent-blue)] shadow-[0_0_12px_rgba(0,229,255,0.6)]"
            />
          </div>

          {/* 1. Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[var(--surface-card)] border border-[var(--border-card)] text-[var(--accent-cyan)] relative z-10 shadow-sm">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[var(--text-main)]">Academic Education</h3>
                  <CodeText className="text-[11px] text-[var(--text-muted)]">B.E. COMPUTER SCIENCE & ENGINEERING</CodeText>
                </div>
              </div>

              <EducationCard />
            </div>
          </motion.div>

          {/* 2. Industry Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[var(--surface-card)] border border-[var(--border-card)] text-[var(--accent-violet)] relative z-10 shadow-sm">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[var(--text-main)]">Industry Experience</h3>
                  <CodeText className="text-[11px] text-[var(--text-muted)]">AI & MACHINE LEARNING INTERNSHIP</CodeText>
                </div>
              </div>

              {INDUSTRY_EXPERIENCE_DATA.map((exp) => (
                <ExperienceTimelineCard key={exp.id} experience={exp} />
              ))}
            </div>
          </motion.div>

          {/* 3. Hackathon Journey Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[var(--surface-card)] border border-[var(--border-card)] text-[var(--accent-cyan)] relative z-10 shadow-sm">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[var(--text-main)]">Hackathon Journeys</h3>
                  <CodeText className="text-[11px] text-[var(--text-muted)]">NATIONAL PROBLEM-SOLVING EVENTS</CodeText>
                </div>
              </div>

              <div className="space-y-5">
                {HACKATHON_JOURNEY_DATA.map((hackathon) => (
                  <HackathonJourneyCard key={hackathon.id} journey={hackathon} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

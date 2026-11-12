"use client";

import React, { useState, useRef } from "react";
import { PERSONAL_BRAND } from "@/data/personal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading, Subheading, CodeText } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { MotionBox } from "@/components/shared/MotionBox";
import { MaskedReveal } from "@/components/ui/KineticText";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Check,
  Copy,
  FileText,
  Send,
  ArrowUpRight,
  Sparkles,
  Briefcase,
  FolderGit2,
  Star
} from "lucide-react";

export function ContactSection() {
  const [copiedPrimary, setCopiedPrimary] = useState(false);
  const [copiedSecondary, setCopiedSecondary] = useState(false);

  const handleCopyPrimary = () => {
    navigator.clipboard.writeText(PERSONAL_BRAND.socials.email);
    setCopiedPrimary(true);
    setTimeout(() => setCopiedPrimary(false), 2000);
  };

  const handleCopySecondary = () => {
    if (PERSONAL_BRAND.socials.secondaryEmail) {
      navigator.clipboard.writeText(PERSONAL_BRAND.socials.secondaryEmail);
      setCopiedSecondary(true);
      setTimeout(() => setCopiedSecondary(false), 2000);
    }
  };

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <Section ref={sectionRef} id="contact" borderTop className="py-16 sm:py-20 lg:py-24 relative">
      {/* Subtle Cyan-Violet Radial Background Glow */}
      <motion.div
        style={{ y: glowY }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[var(--accent-cyan)]/8 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        style={{ y: glowY }}
        className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-[var(--accent-violet)]/8 rounded-full blur-[140px] pointer-events-none"
      />

      <Container className="relative z-10">
        {/* Part 1: Call to Collaborate Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-cyan)] mb-2">
            <Sparkles className="w-4 h-4" />
            <span className="tracking-widest uppercase">GET IN TOUCH • LET'S TALK</span>
          </div>
          <div className="overflow-hidden">
            <MaskedReveal duration={0.8}>
              <Heading className="font-heading">Let's Connect & Collaborate</Heading>
            </MaskedReveal>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <Subheading className="max-w-2xl mt-2.5 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              Open to entry-level software engineering roles, AI/ML research collaborations, cybersecurity projects, and technical discussions. Reach out directly via email or connect through my developer profiles.
            </Subheading>
          </motion.div>
        </div>

        {/* Part 2: Priority Contact Information Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {/* 1. Primary Email (Highlighted Action) */}
          <MotionBox delay={0.04}>
            <Card className="p-5 bg-[var(--surface-card)] border-[var(--accent-cyan)]/40 hover:border-[var(--accent-cyan)] transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden shadow-[var(--shadow-card)]">
              <div className="absolute top-0 right-0 p-3 pointer-events-none">
                <Badge variant="cyan" className="gap-1 text-[10px] uppercase font-mono">
                  <Star className="w-3 h-3 text-[var(--accent-cyan)] fill-[var(--accent-cyan)]" />
                  <span>PRIMARY CONTACT</span>
                </Badge>
              </div>
              <div className="space-y-3 pt-2">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] group-hover:border-[var(--accent-cyan)]/40 flex items-center justify-center text-[var(--accent-cyan)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">
                    DIRECT INBOX
                  </span>
                  <a
                    href={`mailto:${PERSONAL_BRAND.socials.email}`}
                    className="text-sm font-mono font-bold text-[var(--text-main)] group-hover:text-[var(--accent-cyan)] transition-colors break-all block mt-0.5"
                  >
                    {PERSONAL_BRAND.socials.email}
                  </a>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--border-ghost)] mt-4 flex items-center justify-between gap-2">
                <a
                  href={`mailto:${PERSONAL_BRAND.socials.email}`}
                  className="min-h-[44px] px-2 text-xs font-mono text-[var(--accent-cyan)] hover:underline flex items-center gap-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
                <button
                  onClick={handleCopyPrimary}
                  className="min-h-[44px] px-3 py-1 rounded-md bg-[var(--surface-elevated)] border border-[var(--border-card)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  {copiedPrimary ? (
                    <>
                      <Check className="w-3 h-3 text-[#10B981]" />
                      <span className="text-[#10B981]">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </Card>
          </MotionBox>

          {/* 2. LinkedIn */}
          <MotionBox delay={0.08}>
            <Card className="p-5 bg-[var(--surface-card)] border-[var(--border-card)] hover:border-[var(--accent-violet)]/50 transition-all duration-300 flex flex-col justify-between h-full group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] group-hover:border-[var(--accent-violet)]/40 flex items-center justify-center text-[var(--accent-violet)]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">
                    PROFESSIONAL NETWORK
                  </span>
                  <h4 className="font-heading text-sm font-bold text-[var(--text-main)] group-hover:text-[var(--accent-violet)] transition-colors mt-0.5">
                    LinkedIn Profile
                  </h4>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--border-ghost)] mt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--text-muted)]">@pragatishvar-a</span>
                <a
                  href={PERSONAL_BRAND.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[var(--accent-violet)] hover:underline flex items-center gap-1"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </Card>
          </MotionBox>

          {/* 3. GitHub */}
          <MotionBox delay={0.12}>
            <Card className="p-5 bg-[var(--surface-card)] border-[var(--border-card)] hover:border-[var(--accent-cyan)]/40 transition-all duration-300 flex flex-col justify-between h-full group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] group-hover:border-[var(--accent-cyan)]/40 flex items-center justify-center text-[var(--text-main)]">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">
                    CODE REPOSITORIES
                  </span>
                  <h4 className="font-heading text-sm font-bold text-[var(--text-main)] group-hover:text-[var(--accent-cyan)] transition-colors mt-0.5">
                    GitHub Workspace
                  </h4>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--border-ghost)] mt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--text-muted)]">@Praga-925</span>
                <a
                  href={PERSONAL_BRAND.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[var(--accent-cyan)] hover:underline flex items-center gap-1"
                >
                  <span>Repositories</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </Card>
          </MotionBox>

          {/* 4. Location */}
          <MotionBox delay={0.16}>
            <Card className="p-5 bg-[var(--surface-card)] border-[var(--border-card)] hover:border-[var(--accent-blue)]/40 transition-all duration-300 flex flex-col justify-between h-full group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] flex items-center justify-center text-[var(--accent-blue)]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">
                    PRIMARY BASE
                  </span>
                  <h4 className="font-heading text-sm font-bold text-[var(--text-main)] mt-0.5">
                    {PERSONAL_BRAND.location}
                  </h4>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--border-ghost)] mt-4 text-xs font-mono text-[var(--text-muted)]">
                Open for Onsite, Hybrid & Remote Roles
              </div>
            </Card>
          </MotionBox>

          {/* 5. Secondary Email */}
          <MotionBox delay={0.2}>
            <Card className="p-5 bg-[var(--surface-card)] border-[var(--border-card)] hover:border-[var(--border-card)] transition-all duration-300 flex flex-col justify-between h-full group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] flex items-center justify-center text-[var(--text-muted)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">
                    SECONDARY INBOX
                  </span>
                  <a
                    href={`mailto:${PERSONAL_BRAND.socials.secondaryEmail}`}
                    className="text-sm font-mono font-medium text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors break-all block mt-0.5"
                  >
                    {PERSONAL_BRAND.socials.secondaryEmail}
                  </a>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--border-ghost)] mt-4 flex items-center justify-between gap-2">
                <a
                  href={`mailto:${PERSONAL_BRAND.socials.secondaryEmail}`}
                  className="min-h-[44px] px-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent-cyan)] flex items-center gap-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
                <button
                  onClick={handleCopySecondary}
                  className="min-h-[44px] px-3 py-1 rounded-md bg-[var(--surface-elevated)] border border-[var(--border-card)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  {copiedSecondary ? (
                    <>
                      <Check className="w-3 h-3 text-[#10B981]" />
                      <span className="text-[#10B981]">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </Card>
          </MotionBox>

          {/* 6. Availability & Engagements (Chips) */}
          <MotionBox delay={0.24}>
            <Card className="p-5 bg-[var(--surface-card)] border-[var(--border-card)] hover:border-[#10B981]/40 transition-all duration-300 flex flex-col justify-between h-full group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] flex items-center justify-center text-[#10B981]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <Badge variant="status" className="text-[10px]">
                    ACTIVE CANDIDATE
                  </Badge>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block mb-2">
                    OPEN TO ENGAGEMENTS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {PERSONAL_BRAND.availabilityChips?.map((chip) => (
                      <span key={chip} className="text-[10px] font-mono text-[var(--text-secondary)] bg-[var(--surface-elevated)] border border-[var(--border-card)] px-2 py-0.5 rounded-md">
                        • {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </MotionBox>
        </div>

        {/* Part 3: Quick Action Buttons Grid */}
        <MotionBox delay={0.28}>
          <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-card)] space-y-4">
            <CodeText className="block text-xs text-[var(--accent-cyan)] tracking-widest uppercase">
              QUICK RECRUITER ACTIONS
            </CodeText>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {/* Download Resume */}
              <a
                href={PERSONAL_BRAND.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] py-2.5 px-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--accent-cyan)] text-xs font-mono font-bold text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/10 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent-cyan)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Send Email */}
              <a
                href={`mailto:${PERSONAL_BRAND.socials.email}`}
                className="min-h-[44px] py-2.5 px-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-card)] text-xs font-mono font-semibold text-[var(--text-main)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Send className="w-4 h-4 text-[var(--accent-cyan)]" />
                <span>SEND EMAIL</span>
              </a>

              {/* View GitHub */}
              <a
                href={PERSONAL_BRAND.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] py-2.5 px-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-card)] text-xs font-mono font-semibold text-[var(--text-main)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Github className="w-4 h-4 text-[var(--text-secondary)]" />
                <span>VIEW GITHUB</span>
              </a>

              {/* Connect on LinkedIn */}
              <a
                href={PERSONAL_BRAND.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] py-2.5 px-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-card)] text-xs font-mono font-semibold text-[var(--text-main)] hover:border-[var(--accent-violet)] hover:text-[var(--accent-violet)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-[var(--accent-violet)]" />
                <span>CONNECT LINKEDIN</span>
              </a>

              {/* View Projects (Smooth Scroll) */}
              <a
                href="#projects"
                className="min-h-[44px] py-2.5 px-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-card)] text-xs font-mono font-semibold text-[var(--text-secondary)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 text-[var(--accent-cyan)]" />
                <span>VIEW PROJECTS</span>
              </a>
            </div>
          </div>
        </MotionBox>
      </Container>
    </Section>
  );
}

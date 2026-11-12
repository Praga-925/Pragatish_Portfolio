"use client";

import React, { useRef, useState, useEffect } from "react";
import { PERSONAL_BRAND } from "@/data/personal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Subheading } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MaskedReveal } from "@/components/ui/KineticText";
import { ArrowRight, FileText, GraduationCap, Code2, Brain } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { HeroTypingHeadline } from "./HeroTypingHeadline";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const profileContainerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Scroll exit parallax effects
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const profileY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  // Interactive 3D Cursor tilt coordinates for the profile centerpiece
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltSpring = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, tiltSpring);
  const smoothMouseY = useSpring(mouseY, tiltSpring);

  // Unconditional top-level transforms for desktop mouse following & badge parallax
  const desktopMouseX = useTransform(smoothMouseX, (v) => v);
  const desktopMouseY = useTransform(smoothMouseY, (v) => v);

  const webDevX = useTransform(smoothMouseX, (v) => v * 1.5);
  const webDevY = useTransform(smoothMouseY, (v) => v * 1.5);

  const aiX = useTransform(smoothMouseX, (v) => v * -1.8);
  const aiY = useTransform(smoothMouseY, (v) => v * -1.8);

  const softwareEngX = useTransform(smoothMouseX, (v) => v * 1.2);
  const softwareEngY = useTransform(smoothMouseY, (v) => v * 1.2);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
      setIsDesktop(!isTouch && window.innerWidth >= 1024);
    }
  }, []);

  const handleProfileMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !profileContainerRef.current) return;
    const rect = profileContainerRef.current.getBoundingClientRect();
    const xOffset = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const yOffset = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    mouseX.set(xOffset * 15); // max ±15px
    mouseY.set(yOffset * 15);
  };

  const handleProfileMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const HERO_CARDS = [
    {
      title: "B.E. CSE",
      subtitle: "Final Year Student",
      icon: GraduationCap,
      accentColor: "text-[var(--accent-cyan)]",
      borderColor: "border-[var(--border-card)] hover:border-[var(--accent-cyan)]/50",
    },
    {
      title: "Web & Software Development",
      subtitle: "Application Building",
      icon: Code2,
      accentColor: "text-[var(--accent-blue)]",
      borderColor: "border-[var(--border-card)] hover:border-[var(--accent-blue)]/50",
    },
    {
      title: "AI & Emerging Technologies",
      subtitle: "Exploring and Building Projects",
      icon: Brain,
      accentColor: "text-[var(--accent-violet)]",
      borderColor: "border-[var(--border-card)] hover:border-[var(--accent-violet)]/50",
    },
  ];

  return (
    <Section ref={heroRef} id="hero" className="pt-12 pb-20 overflow-hidden relative">
      {/* Background Subtle Cyan & Violet Radial Glows with Scroll Reactivity */}
      <motion.div
        style={{ y: heroY }}
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--accent-cyan)]/8 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        style={{ y: heroY }}
        className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-[var(--accent-violet)]/8 rounded-full blur-[130px] pointer-events-none"
      />

      <Container className="relative z-10">
        <motion.div style={{ opacity: heroOpacity }} className="transform-gpu">
          <Grid cols={12} gap={8} className="items-center">
            {/* Left Column: Kinetic Brand Statement & CTAs */}
            <div className="col-span-12 lg:col-span-7 space-y-6">
              {/* 1. Small Introductory Label with Masked Reveal */}
              <div className="overflow-hidden">
                <MaskedReveal delay={0.1} duration={0.65}>
                  <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold tracking-[0.2em] text-[var(--accent-cyan)] uppercase">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
                    <span>HELLO, I&apos;M PRAGATISHVAR</span>
                  </div>
                </MaskedReveal>
              </div>

              {/* 2. Prominent Animated Typing Headline */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <HeroTypingHeadline />
              </motion.div>

              {/* 3. Introduction Paragraph with Fluid Fade Reveal */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <Subheading className="max-w-2xl text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-body">
                  I&apos;m Pragatishvar, a Computer Science student building full-stack applications and intelligent solutions for real-world problems. I enjoy working across frontend, backend, and AI/ML while learning through every project.
                </Subheading>
              </motion.div>

              {/* 4. Three Compact Hero Information Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {HERO_CARDS.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 22, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.65,
                        delay: 0.65 + idx * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="h-full"
                    >
                      <Card
                        hoverGlow={false}
                        className={`p-3.5 bg-[var(--surface-card)] ${card.borderColor} flex flex-col justify-between h-full transition-all duration-300 transform-gpu rounded-xl hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <Icon className={`w-4 h-4 ${card.accentColor} shrink-0`} />
                          <span className={`text-xs sm:text-sm font-heading font-bold ${card.accentColor} block tracking-tight`}>
                            {card.title}
                          </span>
                        </div>
                        <span className="text-[11px] sm:text-xs font-body text-[var(--text-muted)] block leading-tight">
                          {card.subtitle}
                        </span>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* 5. Magnetic CTA Action Buttons & Live Availability Pill */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 pt-2"
              >
                <div className="flex flex-wrap items-center gap-4">
                  <a href="#projects" className="focus-visible:outline-none">
                    <Button variant="primary" size="lg" magnetic className="group">
                      <span>VIEW PROJECTS</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                    </Button>
                  </a>

                  <a href="#contact" className="focus-visible:outline-none">
                    <Button
                      variant="secondary"
                      size="lg"
                      magnetic
                      className="bg-[var(--surface-card)] border-[var(--border-card)] hover:border-[var(--accent-violet)]/60 hover:text-[var(--text-main)]"
                    >
                      CONTACT ME
                    </Button>
                  </a>

                  <a
                    href={PERSONAL_BRAND.socials.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-visible:outline-none"
                  >
                    <Button variant="outline" size="lg" magnetic className="gap-2 border-[var(--border-card)] hover:border-[var(--accent-cyan)]">
                      <FileText className="w-4 h-4" />
                      <span>DOWNLOAD RESUME</span>
                    </Button>
                  </a>
                </div>

                {/* Availability Indicator */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-card)] border border-[var(--border-card)] text-xs font-mono">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono tracking-wider text-[var(--text-secondary)]">
                    {PERSONAL_BRAND.availabilityStatus}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Visual Focal Point - Interactive 3D Profile Centerpiece */}
            <div className="col-span-12 lg:col-span-5 flex flex-col items-center justify-center">
              <motion.div
                ref={profileContainerRef}
                onMouseMove={handleProfileMouseMove}
                onMouseLeave={handleProfileMouseLeave}
                style={{ y: profileY }}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-md flex flex-col items-center select-none"
              >
                <div className="relative flex justify-center items-center py-6">
                  {/* Subtle Cyan-Violet Radial Ambient Glow */}
                  <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[var(--accent-cyan)]/15 via-[var(--accent-violet)]/15 to-[var(--accent-blue)]/15 blur-3xl -z-10 pointer-events-none" />

                  {/* Softly Rounded Frame with Cyan & Violet Gradient Accent Border */}
                  <motion.div
                    style={isDesktop ? { x: desktopMouseX, y: desktopMouseY } : undefined}
                    className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full p-1.5 bg-gradient-to-tr from-[var(--accent-cyan)]/70 via-[var(--accent-blue)]/50 to-[var(--accent-violet)]/70 shadow-[0_0_50px_rgba(0,229,255,0.25)] transform-gpu"
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-[var(--bg-primary)] border-2 border-[var(--border-card)] relative">
                      <img
                        src="/profile.jpg"
                        alt={`${PERSONAL_BRAND.fullName} - ${PERSONAL_BRAND.roleTitle}`}
                        className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </motion.div>

                  {/* Floating Technology Labels with Parallax Depths */}
                  {/* 1. Web Development (Top-Left) */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                    style={isDesktop ? { x: webDevX, y: webDevY } : undefined}
                    className="absolute top-2 -left-2 sm:-left-6 px-3.5 py-1.5 rounded-full bg-[var(--surface-card)]/95 backdrop-blur-md border border-[var(--accent-cyan)]/50 text-xs font-mono text-[var(--accent-cyan)] shadow-[var(--shadow-card)] flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
                    <span>Web Development</span>
                  </motion.div>

                  {/* 2. Artificial Intelligence (Top-Right) */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    style={isDesktop ? { x: aiX, y: aiY } : undefined}
                    className="absolute top-10 -right-2 sm:-right-8 px-3.5 py-1.5 rounded-full bg-[var(--surface-card)]/95 backdrop-blur-md border border-[var(--accent-violet)]/50 text-xs font-mono text-[var(--accent-violet)] shadow-[var(--shadow-card)] flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-violet)] animate-pulse" />
                    <span>Artificial Intelligence</span>
                  </motion.div>

                  {/* 3. Software Engineering (Bottom-Left) */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                    style={isDesktop ? { x: softwareEngX, y: softwareEngY } : undefined}
                    className="absolute bottom-4 -left-1 sm:-left-4 px-3.5 py-1.5 rounded-full bg-[var(--surface-card)]/95 backdrop-blur-md border border-[var(--accent-blue)]/50 text-xs font-mono text-[var(--accent-blue)] shadow-[var(--shadow-card)] flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-pulse" />
                    <span>Software Engineering</span>
                  </motion.div>
                </div>

                {/* Premium Name Signature Beneath Profile Photograph */}
                <div className="mt-3 flex flex-col items-center text-center">
                  <span className="font-heading text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[var(--text-main)] drop-shadow-[0_2px_12px_rgba(0,229,255,0.15)]">
                    {PERSONAL_BRAND.fullName.toUpperCase()}
                  </span>
                  <div className="w-12 h-0.5 mt-2 rounded-full bg-gradient-to-r from-transparent via-[var(--accent-cyan)]/60 to-transparent" />
                </div>
              </motion.div>
            </div>
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
}

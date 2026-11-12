import React from "react";
import { PageWrapper } from "@/components/layout";
import { HeroSection } from "@/components/hero";
import { ProjectsSection } from "@/components/projects";
import { SkillsSection } from "@/components/skills";
import { JourneySection } from "@/components/journey";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <PageWrapper>
      {/* Milestone 4: Hero Section */}
      <HeroSection />

      <ProjectsSection />

      {/* Milestone 7 & 12: Engineering Expertise (Skills) Section */}
      <SkillsSection />

      {/* Milestone 8: Professional Journey Section (Education, Internship, Hackathons) */}
      <JourneySection />

      {/* Milestone 10: Contact & Collaboration Section */}
      <ContactSection />

      {/* Milestone 10: Footer Component */}
      <Footer />
    </PageWrapper>
  );
}

export interface ProjectMedia {
  cover: string;
  thumbnail: string;
  gallery: string[];
  architecture: string[];
  video?: string;
}

export interface TechDomainGroup {
  domain: "Artificial Intelligence" | "Machine Learning" | "Computer Vision" | "Cybersecurity" | "Security" | "Backend" | "Frontend" | "Database" | "Cloud & DevOps" | "Tools";
  items: string[];
}

export interface EngineeringDecision {
  title: string;
  whyChosen: string;
  alternativeConsidered: string;
  tradeOffAccepted: string;
  futureImprovement: string;
}

export interface ArchitectureLayer {
  layer: "Frontend" | "Backend" | "Database" | "AI Model" | "Security Observer" | "Deployment";
  name: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  category: "AI & ML" | "Cybersecurity" | "Computer Vision" | "Data Science";
  role: string;
  status: "Completed" | "In Active Research" | "Production Ready";
  featured: boolean;
  bentoSpan: string;
  imageBg: string;
  media: ProjectMedia;
  technicalHighlights: string[];
  techDomains: TechDomainGroup[];
  architectureLayers: ArchitectureLayer[];
  architectureSummary: string;
  engineeringDecisions: EngineeringDecision[];
  technologies?: string[];
  tags: string[];
  github: string;
  liveDemo?: string;
  problemStatement: string;
  solutionOverview: string;
  technicalChallenges: string[];
  outcomes: string[];
  lessonsLearned: string[];
}

export type SkillProficiencyLevel = "Core Expertise" | "Proficient" | "Working Knowledge" | "Currently Learning";

export interface SkillItem {
  name: string;
  logo?: string;
  level?: SkillProficiencyLevel;
  tag?: string;
  usedInProjects?: string[];
  iconName?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description?: string;
  skills: SkillItem[];
}

export interface EngineeringFocusArea {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  accent: "cyan" | "gold" | "green";
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verifyUrl: string;
  badgeType: "Gold" | "Cyan";
  skillsVerified: string[];
}

export interface ExperienceTimelineItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "Experience" | "Achievement" | "Research" | "Hackathon";
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface Metric {
  label: string;
  value: string;
  unit?: string;
}

export interface PersonalBrand {
  developerBrand: string;
  fullName: string;
  name: string;
  tagline: string;
  roleTitle: string;
  availabilityStatus: string;
  location: string;
  bio: string;
  metrics: Metric[];
  availabilityChips?: string[];
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    email: string;
    secondaryEmail?: string;
    resume: string;
  };
}

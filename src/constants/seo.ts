import { PERSONAL_BRAND } from "@/data/personal";

export const DEFAULT_SEO = {
  title: `${PERSONAL_BRAND.developerBrand} — Computer Science Student & Developer`,
  description: `Personal engineering portfolio of ${PERSONAL_BRAND.fullName}, a Final-Year Computer Science Engineering student passionate about building web applications, software projects, and practical AI solutions.`,
  keywords: [
    PERSONAL_BRAND.fullName,
    PERSONAL_BRAND.developerBrand,
    "Computer Science Student",
    "Web Developer",
    "Software Engineer",
    "AI Enthusiast",
    "Machine Learning",
    "Python Developer",
    "Full Stack Development"
  ],
  siteUrl: "https://pragatish.dev",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: `${PERSONAL_BRAND.developerBrand} Portfolio`,
  },
} as const;

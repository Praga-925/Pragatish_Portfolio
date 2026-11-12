import { PersonalBrand } from "@/types";
import { ROUTES } from "@/constants/routes";

export const PERSONAL_BRAND: PersonalBrand = {
  developerBrand: "Pragatish.dev",
  fullName: "Pragatishvar A",
  name: "Pragatish.dev",
  tagline: "Computer Science Student · Developer · Curious Problem Solver",
  roleTitle: "Computer Science Student & Developer",
  availabilityStatus: "OPEN FOR ENTRY-LEVEL & GRADUATE ROLES",
  location: "Trichy, Tamil Nadu, India",
  bio: "I'm a final-year Computer Science Engineering student passionate about building web applications, exploring emerging technologies, and developing practical solutions to real-world problems. I enjoy combining software development with AI tools to turn ideas into working projects, and I'm always eager to learn, experiment, and take on new challenges.",
  metrics: [
    { label: "B.E. CSE", value: "B.E. CSE", unit: "Final Year Student" },
    { label: "Web & Software Development", value: "Web & Software Dev", unit: "Application Building" },
    { label: "AI & Emerging Technologies", value: "AI & Emerging Tech", unit: "Exploring and Building Projects" },
  ],
  availabilityChips: [
    "Internships",
    "Entry-Level Roles",
    "Web Development",
    "Software Engineering",
    "AI & Machine Learning Projects",
    "Research Collaborations",
    "Open Source Contributions"
  ],
  socials: {
    github: "https://github.com/Praga-925",
    linkedin: "https://www.linkedin.com/in/pragatishvar-a-72b863325",
    email: "apragatish@gmail.com",
    secondaryEmail: "praga.jv@gmail.com",
    resume: ROUTES.RESUME,
  },
};

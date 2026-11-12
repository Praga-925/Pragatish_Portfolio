import { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Python", logo: "/logos/python.svg" },
      { name: "Java", logo: "/logos/java.svg" },
      { name: "HTML5", logo: "/logos/html5.svg" },
      { name: "CSS3", logo: "/logos/css3.svg" },
      { name: "OOP", logo: "/logos/oop.svg" },
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    iconName: "Brain",
    skills: [
      { name: "PyTorch", logo: "/logos/pytorch.svg" },
      { name: "Scikit-learn", logo: "/logos/scikitlearn.svg" },
      { name: "Pandas", logo: "/logos/pandas.svg" },
      { name: "NumPy", logo: "/logos/numpy.svg" },
      { name: "Kaggle", logo: "/logos/kaggle.svg" },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    iconName: "ShieldCheck",
    skills: [
      { name: "Cybersecurity Fundamentals", logo: "/logos/cybersecurity.svg" },
      { name: "Wireshark", logo: "/logos/wireshark.svg" },
      { name: "Burp Suite", logo: "/logos/burpsuite.svg" },
      { name: "Computer Networks", logo: "/logos/networking.svg" },
      { name: "Cisco Packet Tracer", logo: "/logos/cisco.svg" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    iconName: "Database",
    skills: [
      { name: "MongoDB", logo: "/logos/mongodb.svg" },
      { name: "SQL", logo: "/logos/sql.svg" },
      { name: "DBMS (Basic)", logo: "/logos/dbms.svg" },
    ],
  },
  {
    id: "tools",
    title: "Development Tools & Platforms",
    iconName: "Wrench",
    skills: [
      { name: "Git", logo: "/logos/git.svg" },
      { name: "GitHub", logo: "/logos/github.svg" },
      { name: "VS Code", logo: "/logos/vscode.svg" },
      { name: "Linux", logo: "/logos/linux.svg" },
      { name: "Postman", logo: "/logos/postman.svg" },
      { name: "Operating Systems", logo: "/logos/os.svg" },
    ],
  },
];

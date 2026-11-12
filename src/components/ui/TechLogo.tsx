"use client";

import React, { useState } from "react";
import { Code2 } from "lucide-react";

export interface TechLogoProps {
  name: string;
  logo?: string;
  className?: string;
}

export function TechLogo({ name, logo, className = "w-5 h-5" }: TechLogoProps) {
  const [error, setError] = useState(false);

  const getLogoPath = (techName: string): string | null => {
    if (logo) return logo;
    const n = techName.toLowerCase().trim();

    // Programming Languages
    if (n.includes("python")) return "/logos/python.svg";
    if (n.includes("java") && !n.includes("javascript")) return "/logos/java.svg";
    if (n.includes("c++") || n.includes("cpp")) return "/logos/cpp.svg";
    if (n === "c") return "/logos/cpp.svg";
    if (n.includes("javascript")) return "/logos/javascript.svg";
    if (n.includes("typescript")) return "/logos/typescript.svg";

    // AI & Machine Learning
    if (n.includes("pytorch")) return "/logos/pytorch.svg";
    if (n.includes("scikit")) return "/logos/scikitlearn.svg";
    if (n.includes("pandas")) return "/logos/pandas.svg";
    if (n.includes("numpy")) return "/logos/numpy.svg";

    // Core Computer Science
    if (n.includes("oop") || n.includes("object-oriented") || n.includes("object oriented")) return "/logos/oop.svg";
    if (n.includes("network")) return "/logos/networking.svg";
    if (n.includes("operating system") || n === "os") return "/logos/os.svg";
    if (n.includes("cybersecurity") || n.includes("security")) return "/logos/cybersecurity.svg";

    // Databases & Data Stores
    if (n.includes("mongodb")) return "/logos/mongodb.svg";
    if (n.includes("dbms")) return "/logos/dbms.svg";
    if (n.includes("sql")) return "/logos/sql.svg";

    // Web Technologies
    if (n.includes("html")) return "/logos/html5.svg";
    if (n.includes("css")) return "/logos/css3.svg";

    // Developer Tools & Platforms
    if (n.includes("github")) return "/logos/github.svg";
    if (n.includes("git")) return "/logos/git.svg";
    if (n.includes("docker")) return "/logos/docker.svg";
    if (n.includes("vscode") || n.includes("vs code")) return "/logos/vscode.svg";
    if (n.includes("linux")) return "/logos/linux.svg";
    if (n.includes("postman")) return "/logos/postman.svg";
    if (n.includes("wireshark")) return "/logos/wireshark.svg";
    if (n.includes("burp")) return "/logos/burpsuite.svg";
    if (n.includes("kaggle")) return "/logos/kaggle.svg";
    if (n.includes("cisco") || n.includes("packet tracer")) return "/logos/cisco.svg";

    return null;
  };

  const svgPath = getLogoPath(name);

  if (svgPath && !error) {
    return (
      <img
        src={svgPath}
        alt={`${name} logo`}
        className={`${className} object-contain shrink-0`}
        loading="lazy"
        onError={() => setError(true)}
      />
    );
  }

  // Consistent, reliable fallback icon when no logo is available
  return <Code2 className={`${className} text-[var(--accent-cyan)] shrink-0`} aria-label={`${name} icon`} />;
}

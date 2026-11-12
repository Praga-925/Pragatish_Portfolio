"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook using IntersectionObserver to detect the currently active section
 * based on viewport visibility thresholds.
 */
export function useActiveSection(sectionIds: string[], rootMargin = "-30% 0px -50% 0px"): string {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeSection;
}

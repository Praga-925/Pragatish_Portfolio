"use client";

import React from "react";
import { Cpu, ArrowUp } from "lucide-react";
import { PERSONAL_BRAND } from "@/data/personal";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="w-full bg-[var(--bg-primary)] border-t border-[var(--border-ghost)] py-12 px-4 relative z-10 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[var(--surface-card)] border border-[var(--border-card)] flex items-center justify-center">
            <Cpu className="w-4 h-4 text-[var(--accent-cyan)]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-base font-bold tracking-tight text-[var(--text-main)]">
                {PERSONAL_BRAND.fullName}
              </span>
              <span className="text-[10px] font-mono text-[var(--accent-cyan)] px-2 py-0.5 rounded-full bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20">
                {PERSONAL_BRAND.developerBrand}
              </span>
            </div>
            <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
              {PERSONAL_BRAND.roleTitle}
            </p>
          </div>
        </div>

        {/* Tech Stack & Credits */}
        <div className="text-center font-mono text-xs text-[var(--text-muted)] space-y-1">
          <div>
            Built with <span className="text-[var(--text-main)]">React 19</span> • <span className="text-[var(--text-main)]">TypeScript</span> • <span className="text-[var(--text-main)]">Tailwind CSS</span> • <span className="text-[var(--accent-cyan)]">Next.js 15</span>
          </div>
          <div className="text-[11px] text-[var(--text-muted)]">
            Engineered by <span className="text-[var(--text-secondary)]">{PERSONAL_BRAND.fullName}</span>
          </div>
        </div>

        {/* Copyright & Back to Top Button */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} {PERSONAL_BRAND.developerBrand}. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 rounded-full bg-[var(--surface-card)] border border-[var(--border-card)] text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] hover:bg-[var(--surface-elevated)] transition-all cursor-pointer group transform-gpu hover:-translate-y-0.5"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

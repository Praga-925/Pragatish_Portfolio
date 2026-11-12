"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS, NAVBAR_MODE, NavbarMode } from "@/constants/navigation";
import { PERSONAL_BRAND } from "@/data/personal";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Cpu, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export interface GlassNavbarProps {
  /**
   * Optional override for navbar scroll behavior mode.
   * Defaults to global configuration flag `NAVBAR_MODE`.
   */
  mode?: NavbarMode;
}

export function GlassNavbar({ mode = NAVBAR_MODE }: GlassNavbarProps = {}) {
  const { scrollDirection, isScrolled } = useScrollProgress(80);
  const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer on Escape key press or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Determine visibility based on selected mode ("sticky" or "auto-hide")
  const isVisible =
    mode === "sticky"
      ? true
      : scrollDirection === "up" || !isScrolled || mobileMenuOpen;

  return (
    <header
      className={cn(
        "fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 transition-transform duration-300 ease-out transform-gpu",
        isVisible ? "translate-y-0" : "-translate-y-24"
      )}
    >
      <nav
        role="navigation"
        aria-label="Global Navigation"
        className="backdrop-blur-xl bg-[var(--nav-bg)] border border-[var(--nav-border)] w-full max-w-5xl rounded-full px-4 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between shadow-[var(--shadow-card)] transition-colors duration-300"
      >
        {/* Brand Identifier */}
        <a href="#" className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] rounded-full p-1">
          <div className="w-8 h-8 rounded-full bg-[var(--surface-card)] border border-[var(--border-card)] flex items-center justify-center group-hover:border-[var(--accent-cyan)] transition-colors">
            <Cpu className="w-4 h-4 text-[var(--accent-cyan)]" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xs sm:text-sm font-semibold tracking-tight text-[var(--text-main)] group-hover:text-[var(--accent-cyan)] transition-colors">
              {PERSONAL_BRAND.developerBrand}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-[var(--text-muted)] tracking-wider uppercase">
              {PERSONAL_BRAND.roleTitle}
            </span>
          </div>
        </a>

        {/* Live Role Availability Status Pill - Desktop Only */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-card)]/90 border border-[var(--border-card)] text-[11px] font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
          </span>
          <span className="text-[var(--text-secondary)] tracking-tight">OPEN FOR ENTRY-LEVEL & GRADUATE ROLES</span>
        </div>

        {/* Desktop Navigation Links and Theme Toggle */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-1 bg-[var(--surface-card)]/70 border border-[var(--border-card)]/70 p-1 rounded-full relative">
            {NAV_LINKS.map((link) => {
              const isExternal = link.external || link.href.startsWith("http") || link.href.endsWith(".pdf");
              const linkSectionId = link.href.replace("#", "");
              const isActive = !isExternal && activeSection === linkSectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative text-[11px] font-mono tracking-wider uppercase py-1.5 px-3 rounded-full transition-colors duration-200 flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)]",
                    isActive ? "text-[var(--accent-cyan)] font-bold" : "text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:bg-[var(--surface-elevated)]"
                  )}
                >
                  {/* Liquid Glass Capsule Animated Background Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="liquid-glass-active-capsule"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                        mass: 0.8
                      }}
                      className="absolute inset-0 rounded-full bg-[var(--accent-cyan)]/10 backdrop-blur-md border border-[var(--accent-cyan)]/30 shadow-[0_0_15px_rgba(0,229,255,0.15)] pointer-events-none"
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                  {isExternal && <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)] relative z-10" />}
                </a>
              );
            })}
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Controls: Theme Toggle & Drawer Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-[var(--surface-card)] border border-[var(--border-card)] text-[var(--text-main)] hover:border-[var(--accent-cyan)]/60 hover:text-[var(--accent-cyan)] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Accessible Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-md flex justify-center pt-20 px-4">
          <div
            id="mobile-nav-drawer"
            ref={drawerRef}
            tabIndex={-1}
            className="backdrop-blur-2xl bg-[var(--surface-card)]/95 w-full max-w-lg rounded-2xl p-6 flex flex-col gap-4 border border-[var(--border-card)] shadow-[var(--shadow-card)] self-start animate-in fade-in slide-in-from-top-4 duration-200"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-card)]">
              <span className="text-xs font-mono text-[var(--accent-cyan)] tracking-wider">NAVIGATION MENU</span>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">PRESS ESC TO CLOSE</span>
            </div>

            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => {
                const isExternal = link.external || link.href.startsWith("http") || link.href.endsWith(".pdf");
                const linkSectionId = link.href.replace("#", "");
                const isActive = !isExternal && activeSection === linkSectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-xs font-mono py-3 px-3.5 rounded-xl transition-all flex items-center justify-between min-h-[44px]",
                      isActive
                        ? "bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] font-semibold border border-[var(--accent-cyan)]/30"
                        : "text-[var(--text-main)] hover:text-[var(--accent-cyan)] hover:bg-[var(--surface-elevated)] border border-transparent hover:border-[var(--border-card)]"
                    )}
                  >
                    <span>{link.name}</span>
                    {isExternal && <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import React, { useEffect, useState } from "react";

export interface HeroTitle {
  text: string;
  accent: string;
}

export const HERO_TITLES: readonly HeroTitle[] = [
  { text: "Software Developer", accent: "Developer" },
  { text: "AI/ML Developer", accent: "Developer" },
  { text: "Python Developer", accent: "Developer" },
] as const;

export function HeroTypingHeadline() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    // If user prefers reduced motion, cycle between roles without rapid character flicker
    if (reducedMotion) {
      setTypedText(HERO_TITLES[phraseIndex].text);
      setIsDeleting(false);
      const timer = window.setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % HERO_TITLES.length);
      }, 3500);
      return () => window.clearTimeout(timer);
    }

    const currentTitle = HERO_TITLES[phraseIndex].text;
    const isComplete = !isDeleting && typedText === currentTitle;
    const isEmpty = typedText.length === 0;

    // Timing constants for smooth & professional rhythm:
    // - Full display pause: 1800ms
    // - Pause before typing next role: 300ms
    // - Backspacing speed: 40ms per character
    // - Typing speed: 80ms per character
    const delay = isComplete
      ? 1800
      : isDeleting && isEmpty
      ? 300
      : isDeleting
      ? 40
      : 80;

    const timeout = window.setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true);
      } else if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % HERO_TITLES.length);
      } else if (isDeleting) {
        setTypedText((prev) => prev.slice(0, -1));
      } else {
        setTypedText(currentTitle.slice(0, typedText.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, phraseIndex, reducedMotion, typedText]);

  const currentPhrase = HERO_TITLES[phraseIndex];
  const accentStart = currentPhrase.text.indexOf(currentPhrase.accent);
  const accentEnd = accentStart >= 0 ? accentStart + currentPhrase.accent.length : 0;

  // Split title into: before accent, accent (cyan-to-purple gradient), and after accent
  const beforeAccent = accentStart >= 0 ? currentPhrase.text.slice(0, accentStart) : currentPhrase.text;
  const accentText = accentStart >= 0 ? currentPhrase.accent : "";

  const typedBefore = typedText.slice(0, Math.min(typedText.length, beforeAccent.length));
  const typedAccent =
    accentStart >= 0 && typedText.length > beforeAccent.length
      ? typedText.slice(beforeAccent.length, Math.min(typedText.length, beforeAccent.length + accentText.length))
      : "";
  const typedAfter =
    accentStart >= 0 && typedText.length > beforeAccent.length + accentText.length
      ? typedText.slice(beforeAccent.length + accentText.length)
      : "";

  return (
    <div className="min-h-[2.4em] font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-[var(--text-main)]">
      <h1 className="inline" aria-live="polite" aria-label={currentPhrase.text}>
        {/* Semantic screen-reader fallback for crawlers & assistive tech */}
        <span className="sr-only">{currentPhrase.text}</span>

        {/* Baseline anchor prevents line-height collapse when text is temporarily empty */}
        &#8203;

        {/* Visual animated typing text */}
        <span aria-hidden="true" className="inline">
          {typedBefore && <span>{typedBefore}</span>}
          {typedAccent && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-blue)] to-[var(--accent-violet)]">
              {typedAccent}
            </span>
          )}
          {typedAfter && <span>{typedAfter}</span>}
        </span>

        {/* Subtle blinking cursor with accent cyan glow */}
        <span
          aria-hidden="true"
          className={`inline-block w-[3px] sm:w-[4px] h-[0.88em] ml-1 sm:ml-2 align-baseline translate-y-[0.06em] bg-[var(--accent-cyan)] rounded-full shadow-[0_0_10px_var(--accent-cyan)] ${
            reducedMotion ? "opacity-75" : "animate-pulse"
          }`}
        />
      </h1>
    </div>
  );
}

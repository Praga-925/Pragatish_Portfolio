export const ANIMATION_CONFIGS = {
  PRIMARY_EASING: [0.25, 1, 0.5, 1] as const,
  MICRO_EASING: [0.16, 1, 0.3, 1] as const,
  TIMINGS: {
    MICRO: 0.2, // 200ms
    CARD: 0.3, // 300ms
    SECTION_REVEAL: 0.6, // 600ms
    HERO_ENTRANCE: 0.8, // 800ms
  },
  SPRING_PHYSICS: {
    stiffness: 300,
    damping: 30,
    mass: 1,
  },
  HERO_STAGGER_TIMELINE: {
    NAVBAR_DELAY: 0,
    STATUS_BADGE_DELAY: 0.1,
    HEADLINE_DELAY: 0.2,
    PARAGRAPH_DELAY: 0.35,
    ACTION_BUTTONS_DELAY: 0.5,
  },
} as const;

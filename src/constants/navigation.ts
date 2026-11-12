import { ROUTES } from "./routes";

export type NavbarMode = "sticky" | "auto-hide";

/**
 * Configuration flag for floating GlassNavbar behavior:
 * - "sticky": Navbar remains visible while scrolling.
 * - "auto-hide": Navbar hides on scroll down and reappears on scroll up.
 */
export const NAVBAR_MODE: NavbarMode = "auto-hide";

export interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#experience" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: ROUTES.RESUME, external: true },
];

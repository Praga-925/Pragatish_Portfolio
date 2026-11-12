import React from "react";
import { ScrollProgress } from "./ScrollProgress";
import { GlassNavbar } from "./GlassNavbar";

/**
 * HeaderLayout primitive organizing the top scroll progress bar and floating glass navbar.
 */
export function HeaderLayout() {
  return (
    <>
      <ScrollProgress />
      <GlassNavbar />
    </>
  );
}

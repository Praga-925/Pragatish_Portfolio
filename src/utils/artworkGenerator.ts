import { Project, ProjectMedia } from "@/types";

export interface DerivedArtworkPrompt {
  prompt: string;
  negativePrompt: string;
  aspectRatio: string;
  styleKeywords: string[];
}

/**
 * Automatically derives a detailed AI image generation prompt from project metadata.
 * Developers never need to manually write prompts for future projects.
 */
export function deriveProjectArtworkPrompt(project: Partial<Project>): DerivedArtworkPrompt {
  const title = project.title || "Engineering System";
  const category = project.category || "AI & ML";
  const summary = project.summary || "High-performance software system";
  const techStack = (project.technologies || []).join(", ");
  const domains = (project.techDomains || []).map((d) => d.domain).join(", ");

  let primaryTheme = "futuristic artificial intelligence neural network";
  let primaryColor = "glowing neural cyan (#00E5FF)";

  if (category === "Cybersecurity") {
    primaryTheme = "advanced cybersecurity command center and threat isolation shield";
    primaryColor = "cryptic gold (#D4AF37) and emerald green (#10B981)";
  } else if (category === "Computer Vision") {
    primaryTheme = "3D spatial computing point cloud wireframe geometry and depth vectors";
    primaryColor = "deep ultraviolet purple and neural cyan (#00E5FF)";
  } else if (category === "Data Science") {
    primaryTheme = "predictive analytics matrix with gradient boosting trend lines";
    primaryColor = "warm tungsten amber and neural cyan (#00E5FF)";
  }

  const prompt = [
    `Cinematic product launch poster for ${title}.`,
    `Theme: ${primaryTheme}.`,
    `Context: ${summary}.`,
    `Technical elements: ${techStack}, ${domains}.`,
    `Visual style: Premium dark obsidian background, glassmorphism UI overlays, soft ambient glow, subtle circuit trace lighting, high-contrast ${primaryColor}.`,
    `Composition: Isometric 3D spatial view, 16:9 widescreen layout, ultra-detailed 8K render, photorealistic cinematic lighting, studio depth of field.`,
    `Mood: Professional, analytical, clinical, state-of-the-art engineering.`
  ].join(" ");

  const negativePrompt = "cartoon, clip art, low resolution, blurry, text watermark, generic stock photo, bright daylight background, noisy artifacts, amateur draft";

  return {
    prompt,
    negativePrompt,
    aspectRatio: "16:9",
    styleKeywords: ["Glassmorphism", "Obsidian Dark", "Neural Cyan", "8K Render", "Isometric Widescreen"],
  };
}

/**
 * Automatically derives media asset file paths based on the project's slug.
 */
export function deriveProjectMedia(slug: string, customMedia?: Partial<ProjectMedia>): ProjectMedia {
  const basePath = `/projects/${slug}`;

  return {
    cover: customMedia?.cover || `${basePath}/cover.png`,
    thumbnail: customMedia?.thumbnail || `${basePath}/cover.png`,
    gallery: customMedia?.gallery || [`${basePath}/cover.png`],
    architecture: customMedia?.architecture || [`${basePath}/cover.png`],
    video: customMedia?.video,
  };
}

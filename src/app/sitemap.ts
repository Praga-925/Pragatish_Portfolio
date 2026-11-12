import { MetadataRoute } from "next";
import { DEFAULT_SEO } from "@/constants/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DEFAULT_SEO.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}

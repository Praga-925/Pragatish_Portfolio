import { MetadataRoute } from "next";
import { DEFAULT_SEO } from "@/constants/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${DEFAULT_SEO.siteUrl}/sitemap.xml`,
  };
}

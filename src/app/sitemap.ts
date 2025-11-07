import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://agentic-faa2a5e4.vercel.app";
  return [
    {
      url: `${base}/`,
      changeFrequency: "weekly",
      priority: 1.0,
      lastModified: new Date(),
    },
  ];
}

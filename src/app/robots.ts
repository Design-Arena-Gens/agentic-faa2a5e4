import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://agentic-faa2a5e4.vercel.app/sitemap.xml",
  };
}

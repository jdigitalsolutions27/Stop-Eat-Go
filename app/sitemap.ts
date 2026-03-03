import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/menu", "/order", "/reservations", "/gallery", "/about", "/contact"];

  return pages.map((path) => ({
    url: `https://stopeatgo.example${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}

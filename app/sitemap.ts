import type { MetadataRoute } from "next";
const baseUrl = "https://donacioneslobosfc.com";
export default function sitemap(): MetadataRoute.Sitemap { return [
  { url: baseUrl, changeFrequency: "monthly", priority: 1 },
  { url: `${baseUrl}/donaciones`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${baseUrl}/transparencia`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${baseUrl}/transparencia/rte`, changeFrequency: "yearly", priority: 0.8 },
  { url: `${baseUrl}/transparencia/rte-2026`, changeFrequency: "monthly", priority: 1 },
]; }

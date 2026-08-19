import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://donacioneslobosfc.com/sitemap.xml", host: "https://donacioneslobosfc.com" }; }

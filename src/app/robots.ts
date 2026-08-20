import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
      ],
    },

    sitemap: "https://www.blissventures.co/sitemap.xml",

    host: "https://www.blissventures.co",
  };
}
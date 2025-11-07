import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Use environment variable for domain, fallback to localhost for development
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://metismcp.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

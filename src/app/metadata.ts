import type { Metadata } from "next";

/**
 * Centralized SEO metadata configuration for Metis Design Tools
 *
 * Product: Design Tools for Claude via Model Context Protocol
 * Six Tools: Typography System, Color System, Depth & Shadows, Layout & Spacing, Theme Engine, Accessibility Checker
 * Pricing: Free (50 cycles/day), Pro ($5/month, 2000 cycles/day)
 */

// Core site information
export const SITE_NAME = "Metis Design Tools for Claude";
export const SITE_TAGLINE = "Professional Design Systems for AI-Powered Development";
export const SITE_URL = "https://metis-mcp.dev";

// Product information
export const PRODUCT_INFO = {
  name: "Metis",
  fullName: "Metis Design Tools for Claude",
  description: "Six professional design tools that transform Claude into a master designer: Typography System, Color System, Depth & Shadows, Layout & Spacing, Theme Engine, and Accessibility Checker.",
  pricing: {
    free: {
      name: "Free",
      cycles: 50,
      period: "per day",
      description: "50 cycles per day with access to all 6 design tools",
    },
    pro: {
      name: "Pro",
      price: 5,
      currency: "USD",
      cycles: 2000,
      period: "per month",
      description: "2,000 cycles per day with priority support",
    },
  },
  tools: [
    "Typography System - Perfect type scales & hierarchies",
    "Color System - HSL/OKLCH palettes with semantic variables",
    "Depth & Shadows - Dual-shadow elevation system",
    "Layout & Spacing - Systematic spacing scales",
    "Theme Engine - Seamless light/dark mode switching",
    "Accessibility Checker - WCAG AA compliance built-in",
  ],
};

// SEO keywords - organized by intent
export const SEO_KEYWORDS = {
  primary: [
    "Claude design tools",
    "MCP design system",
    "UI design automation",
    "design tools for Claude",
    "AI design assistant",
  ],
  product: [
    "typography system",
    "color system",
    "depth shadows",
    "layout spacing",
    "theme engine",
    "accessibility checker",
  ],
  technology: [
    "Model Context Protocol",
    "MCP server",
    "Claude AI",
    "design system",
    "UI toolkit",
    "design automation",
  ],
  competitors: [
    "GitHub MCP",
    "Figma MCP",
    "shadcn MCP",
    "Cursor AI",
    "Windsurf",
    "v0 design",
    "Bolt design",
    "GitHub Copilot",
  ],
  features: [
    "WCAG compliance",
    "dark mode design",
    "responsive design",
    "type scale",
    "color palette",
    "shadow elevation",
  ],
};

// Flatten all keywords for use in metadata
export const ALL_KEYWORDS = [
  ...SEO_KEYWORDS.primary,
  ...SEO_KEYWORDS.product,
  ...SEO_KEYWORDS.technology,
  ...SEO_KEYWORDS.competitors,
  ...SEO_KEYWORDS.features,
];

// SEO-optimized descriptions
export const SEO_DESCRIPTION = {
  default:
    "Transform Claude into a master designer with 6 professional design tools: Typography, Color, Depth, Layout, Theme, and Accessibility systems. Works with GitHub MCP, Figma MCP, shadcn, Cursor, Windsurf, v0, and Bolt. Free 50 cycles/day, Pro $5/mo for 2000 cycles/day.",
  short:
    "Professional design systems for Claude AI. 6 powerful tools for typography, color, depth, layout, themes, and accessibility. Free tier available.",
  long:
    "Metis brings professional design systems to Claude through the Model Context Protocol. Six specialized tools transform your UI workflow: perfect typography scales, HSL/OKLCH color systems, dual-shadow depth, systematic spacing, seamless theme switching, and WCAG AA accessibility. Compatible with GitHub MCP, Figma MCP, shadcn MCP, and works alongside Cursor, Windsurf, v0, Bolt, and GitHub Copilot. Start free with 50 cycles/day or upgrade to Pro for $5/month and get 2,000 cycles/day with priority support.",
};

// Open Graph metadata
export const OG_METADATA = {
  type: "website" as const,
  locale: "en_US",
  url: SITE_URL,
  title: SITE_NAME,
  description: SEO_DESCRIPTION.default,
  siteName: SITE_NAME,
  images: [
    {
      url: `${SITE_URL}/og-image.png`,
      width: 1200,
      height: 630,
      alt: "Metis Design Tools for Claude - Professional Design Systems",
      type: "image/png",
    },
  ],
};

// Twitter Card metadata
export const TWITTER_METADATA = {
  card: "summary_large_image" as const,
  title: SITE_NAME,
  description: SEO_DESCRIPTION.short,
  images: [`${SITE_URL}/og-image.png`],
  creator: "@metis_design",
  site: "@metis_design",
};

// Robots configuration
export const ROBOTS_CONFIG = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
  },
};

// Icons configuration
export const ICONS_CONFIG = [
  { rel: "icon" as const, url: "/favicon.ico" },
  { rel: "apple-touch-icon" as const, url: "/apple-touch-icon.png", sizes: "180x180" },
  { rel: "icon" as const, url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  { rel: "icon" as const, url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
];

// Verification codes (add your actual codes here)
export const VERIFICATION = {
  google: undefined, // Add Google Search Console verification code
  bing: undefined, // Add Bing Webmaster verification code
};

// Author information
export const AUTHORS = [
  { name: "Metis Team", url: SITE_URL },
];

/**
 * Generate complete metadata object for Next.js
 */
export function generateMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
    description: SEO_DESCRIPTION.default,
    keywords: ALL_KEYWORDS,
    authors: AUTHORS,
    creator: "Metis",
    publisher: "Metis",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: OG_METADATA,
    twitter: TWITTER_METADATA,
    robots: ROBOTS_CONFIG,
    icons: ICONS_CONFIG,
    manifest: "/site.webmanifest",
    applicationName: "Metis Design Tools",
    category: "Development Tools",
    ...overrides,
  };
}

/**
 * Default metadata export for use in layout.tsx
 */
export const defaultMetadata = generateMetadata();

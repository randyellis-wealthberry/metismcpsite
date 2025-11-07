import React from "react";
import { JsonLd } from "./JsonLd";

/**
 * Comprehensive structured data component for Metis MCP Server
 * Includes Organization, SoftwareApplication, Product, Offer, FAQPage, and BreadcrumbList schemas
 */
export function StructuredData() {
  const baseUrl = "https://metis-mcp.dev";

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Metis",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "Build powerful AI integrations with Metis MCP Server. Type-safe, production-ready Model Context Protocol server for Claude and other AI assistants.",
    sameAs: [
      // Add social media links when available
      // "https://twitter.com/metismcp",
      // "https://github.com/metis-mcp",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      url: baseUrl,
    },
  };

  // SoftwareApplication Schema
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Metis MCP Server",
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: "Design Tools",
    operatingSystem: "Web-based",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "5",
      priceCurrency: "USD",
      offerCount: "2",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Typography Tools",
      "Color Management",
      "Depth and Spacing",
      "Layout System",
      "Theme Customization",
      "Accessibility Features",
    ],
    isCompatibleWith: [
      "GitHub MCP Server",
      "Figma MCP Server",
      "shadcn MCP Server",
      "Cursor",
      "Windsurf",
      "v0 by Vercel",
      "Bolt",
      "GitHub Copilot",
      "Claude Desktop",
      "Claude CLI",
    ],
    description:
      "Powerful Model Context Protocol server for building AI integrations. Works with GitHub MCP Server, Figma MCP Server, shadcn MCP Server, Cursor, Windsurf, v0 by Vercel, Bolt, and GitHub Copilot for seamless AI-powered development.",
    url: baseUrl,
    author: {
      "@type": "Organization",
      name: "Metis Team",
    },
  };

  // Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Metis MCP Server",
    description:
      "Type-safe, production-ready Model Context Protocol server compatible with Claude, Cursor, Windsurf, v0 by Vercel, and other AI assistants. Integrates seamlessly with GitHub MCP Server, Figma MCP Server, and shadcn MCP Server.",
    brand: {
      "@type": "Brand",
      name: "Metis",
    },
    category: "Software Development Tools",
    url: baseUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    offers: [
      // Free Tier Offer
      {
        "@type": "Offer",
        name: "Free Plan",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: baseUrl,
        description: "50 cycles per day - Perfect for getting started",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "0",
          priceCurrency: "USD",
        },
      },
      // Pro Tier Offer
      {
        "@type": "Offer",
        name: "Pro Plan",
        price: "5",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: baseUrl,
        description: "2000 cycles per day - For professional developers",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "5",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
    ],
  };

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      // Existing FAQ questions
      {
        "@type": "Question",
        name: "What is the Model Context Protocol (MCP)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MCP is an open protocol that standardizes how applications provide context to LLMs. It enables seamless integration between AI assistants like Claude and external data sources, tools, and services.",
        },
      },
      {
        "@type": "Question",
        name: "How do I install Metis MCP Server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'Installation is simple! Run "npm install metis-mcp-server" in your project. Configure your server settings in a config file, and you\'re ready to start building custom tools and prompts for your AI assistant.',
        },
      },
      {
        "@type": "Question",
        name: "Is Metis MCP compatible with Claude Desktop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Metis MCP Server is fully compatible with Claude Desktop, Claude CLI, and any other MCP-compliant client. It follows the official MCP specification for maximum compatibility.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use Metis MCP in production?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! Metis MCP Server includes battle-tested error handling, comprehensive logging, and monitoring capabilities. It's designed to handle production workloads with confidence and includes performance optimizations for high-volume requests.",
        },
      },
      {
        "@type": "Question",
        name: "How do I create custom tools and prompts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Metis MCP provides an intuitive API for creating custom tools, prompts, and resources. Check our comprehensive documentation and examples to get started. You can extend functionality with clean abstractions and modern patterns.",
        },
      },
      // New integration-focused FAQ questions
      {
        "@type": "Question",
        name: "Does Metis work with Figma MCP Server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Metis MCP Server is fully compatible with Figma MCP Server. You can use both together to enhance your design workflow with AI-powered tools. Metis works seamlessly alongside Figma MCP Server to provide comprehensive Model Context Protocol support.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use Metis with GitHub MCP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! Metis MCP Server works perfectly with GitHub MCP Server. They complement each other to provide powerful AI integration capabilities. Use Metis alongside GitHub MCP to enhance your development workflow with type-safe, production-ready tools.",
        },
      },
      {
        "@type": "Question",
        name: "Is Metis compatible with shadcn MCP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Metis MCP Server is fully compatible with shadcn MCP Server. You can use them together to build comprehensive AI-powered applications. Metis complements shadcn MCP by providing additional design tools and accessibility features.",
        },
      },
      {
        "@type": "Question",
        name: "Does Metis work with Cursor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Metis MCP Server is compatible with Cursor and other MCP-compliant AI coding assistants. Cursor users can integrate Metis to access powerful design tools, typography features, and accessibility capabilities directly within their development environment.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use Metis with v0 by Vercel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Metis MCP Server works seamlessly with v0 by Vercel. You can integrate Metis to enhance your v0 workflow with additional design system tools, color management, and accessibility features. Both tools follow the Model Context Protocol standard for maximum compatibility.",
        },
      },
      {
        "@type": "Question",
        name: "Is Metis compatible with Windsurf?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! Metis MCP Server is fully compatible with Windsurf and other MCP-compliant development tools. Windsurf users can leverage Metis for advanced design tools, theme customization, and layout systems within their AI-powered development workflow.",
        },
      },
    ],
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Features",
        item: `${baseUrl}#features`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pricing",
        item: `${baseUrl}#pricing`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Documentation",
        item: `${baseUrl}#documentation`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={softwareApplicationSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}

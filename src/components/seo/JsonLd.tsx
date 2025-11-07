import React from "react";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Generic JSON-LD wrapper component for structured data
 * Renders a script tag with type="application/ld+json"
 *
 * @param data - Any valid JSON-LD object or array of objects
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0), // Minified for production
      }}
    />
  );
}

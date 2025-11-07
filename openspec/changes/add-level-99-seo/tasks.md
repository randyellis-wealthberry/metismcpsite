# Implementation Tasks

## 1. Metadata & Meta Tags (High Priority)
- [ ] 1.1 Create centralized metadata config at `src/app/metadata.ts`
  - [ ] 1.1.1 Define site-wide constants (title, description, keywords)
  - [ ] 1.1.2 Define Open Graph defaults
  - [ ] 1.1.3 Define Twitter Card defaults
  - [ ] 1.1.4 Export product info constants (pricing, features)
- [ ] 1.2 Update root metadata in `src/app/layout.tsx`
  - [ ] 1.2.1 Fix title from "MCP Server" to "Design Tools for Claude"
  - [ ] 1.2.2 Update description to focus on design tools
  - [ ] 1.2.3 Add target keywords naturally
  - [ ] 1.2.4 Add Open Graph metadata
  - [ ] 1.2.5 Add Twitter Card metadata
  - [ ] 1.2.6 Add viewport and theme-color meta tags
- [ ] 1.3 Add performance hints to layout
  - [ ] 1.3.1 Add dns-prefetch for external domains
  - [ ] 1.3.2 Add preconnect to critical origins

## 2. Structured Data (JSON-LD)
- [ ] 2.1 Create JSON-LD wrapper component at `src/components/seo/JsonLd.tsx`
  - [ ] 2.1.1 Implement type-safe JSON-LD component
  - [ ] 2.1.2 Add proper script tag with type="application/ld+json"
- [ ] 2.2 Create structured data component at `src/components/seo/StructuredData.tsx`
  - [ ] 2.2.1 Add Organization schema
  - [ ] 2.2.2 Add SoftwareApplication schema
  - [ ] 2.2.3 Add Product schema with aggregateRating
  - [ ] 2.2.4 Add Offer schemas (Free tier: 50 cycles, Pro tier: $5/mo 2000 cycles)
  - [ ] 2.2.5 Add FAQPage schema from FAQ section
  - [ ] 2.2.6 Add BreadcrumbList schema
- [ ] 2.3 Integrate StructuredData component in root layout

## 3. Dynamic Sitemap
- [ ] 3.1 Create `src/app/sitemap.ts`
  - [ ] 3.1.1 Export default sitemap function
  - [ ] 3.1.2 Add home page (priority: 1.0, weekly)
  - [ ] 3.1.3 Add features section (priority: 0.9, weekly)
  - [ ] 3.1.4 Add pricing section (priority: 0.9, weekly)
  - [ ] 3.1.5 Add how-it-works section (priority: 0.8, weekly)
  - [ ] 3.1.6 Add FAQ section (priority: 0.7, monthly)
  - [ ] 3.1.7 Set lastModified timestamps
- [ ] 3.2 Test sitemap at /sitemap.xml in development

## 4. Robots.txt
- [ ] 4.1 Create `src/app/robots.ts`
  - [ ] 4.1.1 Allow all user agents
  - [ ] 4.1.2 Disallow /api/* routes
  - [ ] 4.1.3 Add sitemap reference
- [ ] 4.2 Test robots.txt at /robots.txt in development

## 5. Open Graph & Social Images
- [ ] 5.1 Create OG image (1200x630px)
  - [ ] 5.1.1 Design OG image with Metis branding
  - [ ] 5.1.2 Include key value proposition text
  - [ ] 5.1.3 Optimize for social sharing (PNG or JPEG)
  - [ ] 5.1.4 Save to `public/og-image.png`
- [ ] 5.2 Create Twitter Card image (1200x600px)
  - [ ] 5.2.1 Optimize dimensions for Twitter
  - [ ] 5.2.2 Save to `public/twitter-image.png`
- [ ] 5.3 Update metadata to reference new images

## 6. Favicon Suite
- [ ] 6.1 Create complete favicon set
  - [ ] 6.1.1 Generate favicon.ico (16x16, 32x32 multi-resolution)
  - [ ] 6.1.2 Generate apple-touch-icon.png (180x180)
  - [ ] 6.1.3 Generate icon-192.png (192x192)
  - [ ] 6.1.4 Generate icon-512.png (512x512)
  - [ ] 6.1.5 Place all icons in `/public`
- [ ] 6.2 Create web app manifest at `public/manifest.json`
  - [ ] 6.2.1 Add app name and description
  - [ ] 6.2.2 Add icon references
  - [ ] 6.2.3 Add theme colors
  - [ ] 6.2.4 Add display mode
- [ ] 6.3 Link manifest in layout.tsx head

## 7. Content Optimization
- [ ] 7.1 Add missing alt text to images
  - [ ] 7.1.1 Hero section images
  - [ ] 7.1.2 Features section icons
  - [ ] 7.1.3 Pricing section logos (already added in previous work)
  - [ ] 7.1.4 Testimonials section avatars
  - [ ] 7.1.5 Footer brand logos
- [ ] 7.2 Verify heading hierarchy
  - [ ] 7.2.1 Ensure single H1 per page
  - [ ] 7.2.2 Check logical H2 → H3 flow
  - [ ] 7.2.3 Verify semantic HTML structure
- [ ] 7.3 Add internal linking
  - [ ] 7.3.1 Link Features → Pricing
  - [ ] 7.3.2 Link How It Works → Get Started CTA
  - [ ] 7.3.3 Link FAQ → Features
- [ ] 7.4 Optimize copy for target keywords
  - [ ] 7.4.1 Natural inclusion of "Claude design tools"
  - [ ] 7.4.2 Include "MCP design system" in relevant sections
  - [ ] 7.4.3 Add "UI design automation" phrases
  - [ ] 7.4.4 Maintain readability (no keyword stuffing)

## 8. Accessibility (SEO Boost)
- [ ] 8.1 Verify semantic HTML
  - [ ] 8.1.1 Check all sections use proper tags
  - [ ] 8.1.2 Ensure landmark regions are labeled
- [ ] 8.2 Add ARIA labels where needed
  - [ ] 8.2.1 Navigation elements
  - [ ] 8.2.2 Interactive buttons
  - [ ] 8.2.3 Form inputs (if any)
- [ ] 8.3 Test keyboard navigation
  - [ ] 8.3.1 Tab order flows logically
  - [ ] 8.3.2 All interactive elements accessible
  - [ ] 8.3.3 Focus indicators visible
- [ ] 8.4 Verify color contrast
  - [ ] 8.4.1 Run contrast checker on all text
  - [ ] 8.4.2 Ensure WCAG AA compliance (4.5:1 minimum)

## 9. .gitignore Updates
- [ ] 9.1 Add SEO tool exclusions
  - [ ] 9.1.1 Add lighthouse-reports/
  - [ ] 9.1.2 Add *.lighthouse.json
  - [ ] 9.1.3 Add pagespeed-insights/
  - [ ] 9.1.4 Add seo-audit/
  - [ ] 9.1.5 Add screaming-frog/
  - [ ] 9.1.6 Add .vercel/analytics/
  - [ ] 9.1.7 Add .next/cache/sitemap/

## 10. Competitor Keyword Strategy (High Impact)
- [ ] 10.1 Add MCP server references to metadata
  - [ ] 10.1.1 Update meta description to include "works with GitHub MCP, Figma MCP, shadcn MCP"
  - [ ] 10.1.2 Add keywords meta tag with competitor MCP server names
  - [ ] 10.1.3 Include top 5 MCP servers in title variations
- [ ] 10.2 Create "Compatible MCP Servers" content section
  - [ ] 10.2.1 Design new homepage section showcasing compatible MCP servers
  - [ ] 10.2.2 Add logos/icons for top 10 general MCP servers (GitHub, Playwright, AWS, etc.)
  - [ ] 10.2.3 Add logos/icons for top 4 design MCP servers (Figma, shadcn, etc.)
  - [ ] 10.2.4 Write descriptive text: "Metis works seamlessly with popular MCP servers"
  - [ ] 10.2.5 Ensure mobile responsive grid layout
- [ ] 10.3 Update structured data with competitor references
  - [ ] 10.3.1 Add isCompatibleWith property to SoftwareApplication schema
  - [ ] 10.3.2 Reference GitHub MCP Server in schema
  - [ ] 10.3.3 Reference Figma MCP Server in schema
  - [ ] 10.3.4 Reference shadcn MCP Server in schema
  - [ ] 10.3.5 Reference top 5 most popular MCP servers
- [ ] 10.4 Optimize alt text with competitor keywords
  - [ ] 10.4.1 Update image alt text: "Design tools for GitHub MCP workflows"
  - [ ] 10.4.2 Add alt text: "UI automation for Playwright MCP"
  - [ ] 10.4.3 Add alt text: "Compatible with Figma MCP Server"
- [ ] 10.5 Add long-tail keyword content
  - [ ] 10.5.1 Create H2: "Design System for Popular MCP Servers"
  - [ ] 10.5.2 Include paragraph mentioning GitHub MCP, Slack MCP, MongoDB MCP
  - [ ] 10.5.3 Include paragraph mentioning Figma MCP and shadcn MCP
  - [ ] 10.5.4 Natural keyword density (under 2%)
- [ ] 10.6 Internal linking strategy
  - [ ] 10.6.1 Link from Features to "Compatible MCP Servers" section
  - [ ] 10.6.2 Link from "How It Works" to competitor integration examples
  - [ ] 10.6.3 Add anchor links with descriptive text (not "click here")
- [ ] 10.7 Create comparison snippets for rich results
  - [ ] 10.7.1 Add FAQ question: "Does Metis work with Figma MCP Server?"
  - [ ] 10.7.2 Add FAQ question: "Can I use Metis with GitHub MCP?"
  - [ ] 10.7.3 Add FAQ question: "Is Metis compatible with shadcn MCP?"
  - [ ] 10.7.4 Ensure answers include complementary positioning language

## 11. Agentic Coding Tools Strategy (High Impact)
- [ ] 11.1 Add agentic tool references to metadata
  - [ ] 11.1.1 Update meta description: "works with Cursor, Windsurf, v0, Bolt, Copilot"
  - [ ] 11.1.2 Add keywords: top 15 agentic coding tool names
  - [ ] 11.1.3 Include v0, Cursor, Windsurf in title variations
- [ ] 11.2 Create "Built for Agentic Workflows" content section
  - [ ] 11.2.1 Design new section showcasing agentic tool compatibility
  - [ ] 11.2.2 Add Desktop/IDE tools: Cursor, Windsurf, Copilot, Cline, Claude Code icons
  - [ ] 11.2.3 Add Web platforms: v0, Bolt, Lovable, Replit Agent icons
  - [ ] 11.2.4 Add CLI tools: Gemini CLI, Aider, Amazon Q logos
  - [ ] 11.2.5 Write copy: "Metis accelerates design in your favorite agentic IDE"
  - [ ] 11.2.6 Mobile responsive layout
- [ ] 11.3 Add agentic tool use cases and examples
  - [ ] 11.3.1 Write use case: "Using Metis with Cursor for multi-file design consistency"
  - [ ] 11.3.2 Write use case: "Integrating Metis with v0 for rapid prototyping"
  - [ ] 11.3.3 Write use case: "Windsurf Cascade + Metis design automation"
  - [ ] 11.3.4 Include code snippets or workflow diagrams
- [ ] 11.4 Update structured data with agentic tool references
  - [ ] 11.4.1 Add compatibleWith: Cursor, Windsurf, GitHub Copilot
  - [ ] 11.4.2 Add compatibleWith: v0 by Vercel, Bolt, Replit Agent
  - [ ] 11.4.3 Add integratesWith properties for key tools
- [ ] 11.5 Optimize alt text with agentic tool keywords
  - [ ] 11.5.1 Add alt text: "Design tools for Cursor workflows"
  - [ ] 11.5.2 Add alt text: "UI automation for v0 Vercel"
  - [ ] 11.5.3 Add alt text: "Windsurf Cascade design system"
  - [ ] 11.5.4 Add alt text: "Compatible with GitHub Copilot"
- [ ] 11.6 Add long-tail agentic tool content
  - [ ] 11.6.1 Create H2: "Design Systems for Popular AI IDEs"
  - [ ] 11.6.2 Paragraph mentioning Cursor, Windsurf, Cline
  - [ ] 11.6.3 Paragraph mentioning v0, Bolt, Replit Agent
  - [ ] 11.6.4 Natural keyword density (under 2%)
- [ ] 11.7 Create FAQ entries for agentic tools
  - [ ] 11.7.1 Add FAQ: "Does Metis work with Cursor?"
  - [ ] 11.7.2 Add FAQ: "Can I use Metis with v0 by Vercel?"
  - [ ] 11.7.3 Add FAQ: "Is Metis compatible with Windsurf?"
  - [ ] 11.7.4 Add FAQ: "How does Metis integrate with GitHub Copilot?"
  - [ ] 11.7.5 Ensure answers explain integration value

## 12. Testing & Validation
- [ ] 12.1 Run Lighthouse SEO audit
  - [ ] 12.1.1 Aim for 100/100 score
  - [ ] 12.1.2 Fix any flagged issues
- [ ] 12.2 Test structured data
  - [ ] 12.2.1 Use Google Rich Results Test
  - [ ] 12.2.2 Verify all schemas parse correctly
- [ ] 12.3 Validate sitemap
  - [ ] 12.3.1 Check all URLs are accessible
  - [ ] 12.3.2 Verify XML format
- [ ] 12.4 Test social sharing
  - [ ] 12.4.1 Twitter Card Validator
  - [ ] 12.4.2 Facebook Sharing Debugger
  - [ ] 12.4.3 LinkedIn Post Inspector
- [ ] 12.5 Mobile-friendliness test
  - [ ] 12.5.1 Google Mobile-Friendly Test
  - [ ] 12.5.2 Test on actual devices
- [ ] 12.6 Performance check
  - [ ] 12.6.1 Run PageSpeed Insights
  - [ ] 12.6.2 Ensure Core Web Vitals remain green

## 13. Deployment
- [ ] 13.1 Build production bundle
  - [ ] 13.1.1 Run `npm run build`
  - [ ] 13.1.2 Verify no build errors
- [ ] 13.2 Test in production-like environment
  - [ ] 13.2.1 Run `npm run preview`
  - [ ] 13.2.2 Verify all SEO tags load correctly
- [ ] 13.3 Submit to search engines
  - [ ] 13.3.1 Submit sitemap to Google Search Console
  - [ ] 13.3.2 Submit sitemap to Bing Webmaster Tools
- [ ] 13.4 Monitor after deployment
  - [ ] 13.4.1 Check Google Search Console for indexing
  - [ ] 13.4.2 Monitor for crawl errors
  - [ ] 13.4.3 Track keyword rankings (MCP servers + agentic tools)
  - [ ] 13.4.4 Monitor long-tail traffic: "[MCP Server] + design", "[AI IDE] + design"

## 14. Documentation
- [ ] 14.1 Update README with SEO notes (if applicable)
- [ ] 14.2 Document metadata constants usage
- [ ] 14.3 Add comments to structured data schemas
- [ ] 14.4 Document competitor keyword strategy (MCP servers + agentic tools)
- [ ] 14.5 Create integration guide for popular tools (Cursor, v0, Figma MCP)

# Add Level 99 SEO Optimization

## Why

The current site has basic metadata but lacks comprehensive SEO optimization needed to rank competitively for target keywords like "Claude design tools", "MCP design system", "UI design automation for Claude", and related terms. Professional SEO implementation is critical for:

- **Organic Discovery**: Developers searching for Claude/MCP design solutions
- **Search Visibility**: Compete with established design tool products
- **Social Sharing**: Rich previews when shared on Twitter, LinkedIn, Slack
- **Crawler Efficiency**: Help search engines understand product value proposition
- **User Trust**: Professional appearance in SERPs increases click-through rates
- **Conversion**: Well-optimized pages rank higher, drive more qualified traffic

Current gaps:
- ❌ Metadata describes wrong product ("MCP Server" vs "Design Tools")
- ❌ No structured data (JSON-LD) for rich search results
- ❌ No dynamic sitemap generation
- ❌ Missing OG images (references non-existent `/og-image.png`)
- ❌ No robots.txt configuration
- ❌ Generic page titles don't target specific keywords
- ❌ Missing schema markup for Product, SoftwareApplication, FAQPage
- ❌ No image alt text in several components
- ❌ .gitignore doesn't exclude SEO analysis tools

## What Changes

### 1. Metadata & Meta Tags (High Priority)
- **Update root metadata** to reflect actual product (Design Tools, not generic MCP server)
- **Add page-specific metadata** for key landing sections
- **Implement dynamic metadata** using Next.js 15 generateMetadata()
- **Fix OG/Twitter tags** with accurate product positioning
- **Add keywords** targeting: "Claude design tools", "MCP design system", "UI automation"
- **Create metadata config** for reusable site-wide constants

### 2. Structured Data (JSON-LD)
Add comprehensive schema markup:
- **Organization**: Company/project information
- **SoftwareApplication**: Product details, features, OS compatibility
- **Product**: Metis as a product with pricing
- **Offer**: Free tier (50 cycles) and Pro tier ($5/month, 2000 cycles)
- **FAQPage**: FAQ section markup for rich results
- **BreadcrumbList**: Navigation hierarchy
- **Review/AggregateRating** (if testimonials warrant)

### 3. Dynamic Sitemap
- **Create `app/sitemap.ts`** for automatic sitemap.xml generation
- **Include all routes**: home, features, pricing, how-it-works, FAQ
- **Set priorities**: Home (1.0), Features (0.9), Pricing (0.9), etc.
- **Update frequencies**: weekly for dynamic content, monthly for static
- **Image sitemap** entries for OG images

### 4. Robots.txt
- **Create `app/robots.ts`** for dynamic robots.txt
- **Allow all crawlers** on public pages
- **Disallow**: /api/*, /admin/*, /_next/static (already handled by Next.js)
- **Add sitemap** reference

### 5. Open Graph Images
- **Create OG image template** (1200x630px)
- **Add to `/public/og-image.png`** or use Next.js OG Image Generation
- **Dynamic OG images** per page (optional, using @vercel/og)
- **Twitter Card images** (1200x600px optimized)

### 6. Favicon Suite
- **Add complete favicon set**: 16x16, 32x32, 180x180 (Apple), 192x192, 512x512
- **Add manifest.json** for PWA metadata
- **Add theme-color** meta tag

### 7. Content Optimization
- **Fix metadata copy** to match actual product (Design Tools for Claude)
- **Add missing alt text** in hero-section, pricing, testimonials
- **Optimize heading hierarchy**: Ensure one H1 per page, logical H2/H3 flow
- **Add internal links**: Cross-link between features, pricing, how-it-works
- **Keyword density**: Natural inclusion of target keywords in copy

### 8. Performance Hints
- **Add dns-prefetch** for external domains (fonts, CDNs)
- **Preconnect** to critical origins
- **Preload** critical assets (fonts, hero images)

### 9. Accessibility (SEO Boost)
- **Semantic HTML**: Already good, verify all sections use proper tags
- **ARIA labels**: Ensure all interactive elements have labels
- **Focus management**: Tab order, skip links
- **Color contrast**: Already meeting WCAG AA (helps SEO)

### 10. .gitignore Updates
Add SEO-related exclusions:
```
# SEO & Analytics
lighthouse-reports/
*.lighthouse.json
pagespeed-insights/
seo-audit/
screaming-frog/
.vercel/analytics/

# Sitemap generation cache
.next/cache/sitemap/
```

### 11. Competitor Keyword Strategy (High Impact)
Target popular MCP server names to capture search traffic from users of these tools who need design solutions. Position Metis as the design companion tool that works alongside popular MCP servers.

**Strategy**: Include references to popular MCP servers in content, metadata, and structured data to rank for long-tail keywords like "[MCP Server Name] design tools", "UI for [MCP Server]", "design system [MCP Server]".

#### Top General MCP Servers to Target:
1. **GitHub MCP Server** (15.2k⭐) - Developer workflows
   - Keywords: "GitHub MCP design tools", "GitHub MCP UI automation"
2. **Playwright MCP** (11.6k⭐) - Browser automation
   - Keywords: "Playwright MCP design system", "UI testing Playwright MCP"
3. **AWS Labs MCP** (3.7k⭐) - Cloud infrastructure
   - Keywords: "AWS MCP design tools", "AWS MCP UI components"
4. **MongoDB MCP Server** (202⭐) - Database access
   - Keywords: "MongoDB MCP design system", "database UI MongoDB MCP"
5. **Slack MCP** - Communication & collaboration
   - Keywords: "Slack MCP design tools", "Slack bot UI design"
6. **Google Drive MCP** - Document management
   - Keywords: "Google Drive MCP UI", "document design Google MCP"
7. **Notion MCP** - Knowledge management
   - Keywords: "Notion MCP design system", "Notion integration UI"
8. **Terraform MCP Server** (575⭐) - Infrastructure as Code
   - Keywords: "Terraform MCP UI", "IaC design tools"
9. **Sentry MCP** (173⭐) - Error tracking
   - Keywords: "Sentry MCP design", "error UI Sentry MCP"
10. **DBT MCP** (240⭐) - Analytics workflows
    - Keywords: "DBT MCP design tools", "analytics UI DBT MCP"

#### Top Design MCP Servers to Target:
1. **Figma MCP Server** (Official, most popular design MCP)
   - Keywords: "Figma MCP design tools", "Figma to Claude", "Figma MCP alternative"
   - Positioning: Complementary tool that works with Figma MCP for design-to-code workflows
2. **shadcn/ui MCP Server** (Official)
   - Keywords: "shadcn MCP design system", "shadcn component design", "shadcn MCP alternative"
   - Positioning: Design system that works alongside shadcn components
3. **shadcn-vue MCP Server** (Vue ecosystem)
   - Keywords: "shadcn Vue design tools", "Vue MCP design system"
4. **Tailwind CSS MCPs**
   - Keywords: "Tailwind MCP design", "Tailwind design tools Claude"

#### Implementation Tactics:
- **Metadata keywords**: Include "works with [MCP Server Name]" in descriptions
- **Content sections**: Add "Compatible with Popular MCP Servers" section on homepage
- **Blog content** (future): "How Metis Complements [MCP Server Name]" articles
- **Structured data**: Reference competitor tools in SoftwareApplication schema
- **Alt text**: Use phrases like "Design tools for GitHub MCP workflows"
- **Internal linking**: Create comparison content showing Metis + [MCP Server]

#### Expected Traffic Capture:
- **Long-tail searches**: 1,000+ monthly searches for "[MCP Server] + design" terms
- **Comparison queries**: Users searching for design tools alongside their MCP servers
- **Complementary positioning**: Not competing directly, but capturing adjacent search intent
- **SEO Difficulty**: Low-medium for long-tail MCP server + design combinations

**Risk Mitigation**: Avoid trademark infringement by using descriptive language ("works with", "compatible with", "designed for users of") rather than implying official affiliation.

### 12. Agentic Coding Tools Keyword Strategy (High Impact)
Target popular AI IDE and coding assistant names to capture search traffic from developers using these tools who need design systems and UI components for their agentic workflows.

**Strategy**: Include references to popular agentic coding tools in content and metadata to rank for queries like "[AI IDE] design tools", "UI components for [Tool]", "design system [Coding Assistant]".

#### Top Desktop/IDE Agentic Tools to Target:
1. **Cursor** ($10B valuation, $20/mo) - AI-first code editor
   - Keywords: "Cursor design tools", "Cursor UI components", "design system for Cursor"
2. **Windsurf** (acquired by OpenAI $3B, $15/mo) - Cascade agentic interface
   - Keywords: "Windsurf design tools", "Windsurf UI automation", "Cascade design system"
3. **GitHub Copilot** - Most widely adopted AI coding assistant
   - Keywords: "Copilot design tools", "GitHub Copilot UI components", "design for Copilot"
4. **Cline** - Open-source autonomous VS Code agent
   - Keywords: "Cline design system", "VS Code agent UI tools", "Cline UI automation"
5. **Claude Code** - Advanced reasoning and code analysis
   - Keywords: "Claude Code design", "Claude design automation", "Claude UI tools"
6. **Augment Code** - Sophisticated context awareness
   - Keywords: "Augment design tools", "Augment UI system"
7. **Supermaven** - High-speed completion (300k tokens)
   - Keywords: "Supermaven design", "Supermaven UI components"
8. **Tabnine** - Privacy-focused on-premises
   - Keywords: "Tabnine design tools", "enterprise design Tabnine"

#### Top Web-Based Agentic Platforms to Target:
1. **v0 by Vercel** - React/Next.js UI prototyping leader
   - Keywords: "v0 design system", "v0 design tools", "Vercel v0 UI", "v0 component design"
   - Positioning: Metis generates design systems that integrate with v0 workflows
2. **Bolt by StackBlitz** ($40M ARR) - Full-stack prototyping
   - Keywords: "Bolt design tools", "StackBlitz design system", "Bolt UI components"
3. **Lovable** (GPT Engineer team) - Full-stack natural language
   - Keywords: "Lovable design system", "GPT Engineer UI tools"
4. **Replit Agent** - 50+ languages, comprehensive IDE
   - Keywords: "Replit design tools", "Replit Agent UI", "Replit design system"

#### Top CLI/Terminal Tools to Target:
1. **Gemini CLI** - Google's terminal AI
   - Keywords: "Gemini CLI design", "Google AI design tools"
2. **Aider** - AI pair programming terminal
   - Keywords: "Aider design tools", "terminal design system"
3. **Amazon Q Developer CLI** - AWS-focused
   - Keywords: "Amazon Q design", "AWS design tools"

#### Implementation Tactics:
- **Metadata**: Include "works with Cursor, Windsurf, v0, Bolt, Copilot" in descriptions
- **Content sections**: Add "Built for Agentic Coding Workflows" section
- **Use cases**: Showcase how Metis accelerates design in Cursor, Windsurf, Claude Code, v0
- **Testimonials/case studies** (future): Users building with Cursor + Metis, v0 + Metis
- **Structured data**: Reference tools in compatibleWith/integratesWith properties
- **Alt text**: "Design tools for Cursor workflows", "UI automation for v0 Vercel"

#### Expected Traffic Capture:
- **High-intent searches**: 2,000+ monthly searches for "[AI IDE] + design" terms
- **Tool ecosystem queries**: Users of Cursor, Windsurf, v0 looking for design solutions
- **Workflow optimization**: Developers want faster design iteration in their preferred IDE
- **SEO Difficulty**: Low for long-tail combinations like "Cursor design system Claude"

#### Target User Personas:
- **Cursor/Windsurf users**: Need consistent design systems for multi-file agent outputs
- **v0/Bolt users**: Want design systems that integrate with their rapid prototyping workflow
- **GitHub Copilot users**: Enterprise developers needing design consistency at scale
- **Cline/open-source users**: Privacy-conscious devs wanting local design tools

**Market Opportunity**: Agentic tools are growing 300%+ YoY (2025). Capturing even 5% of this search traffic represents significant organic growth.

**Risk Mitigation**: Use complementary positioning, avoid trademark issues, focus on genuine integration value.

## Impact

**Affected capabilities:**
- `seo-optimization` (NEW) - Complete SEO infrastructure

**Affected files:**
- `src/app/layout.tsx` - Update root metadata
- `src/app/metadata.ts` (NEW) - Centralized metadata config
- `src/app/sitemap.ts` (NEW) - Dynamic sitemap generation
- `src/app/robots.ts` (NEW) - Robots.txt configuration
- `src/components/seo/StructuredData.tsx` (NEW) - JSON-LD component
- `src/components/seo/JsonLd.tsx` (NEW) - Generic JSON-LD wrapper
- `public/og-image.png` (NEW or REPLACE) - Open Graph image
- `public/favicon.ico` (UPDATE) - Favicon suite
- `public/manifest.json` (NEW) - Web app manifest
- `.gitignore` (UPDATE) - SEO tool exclusions
- Multiple component files - Add missing alt text

**Expected Results:**
- **SERP Visibility**: Rich search results with star ratings, FAQ accordion, breadcrumbs
- **Social Sharing**: Professional preview cards with images and descriptions
- **Organic Traffic**: 30-50% increase in organic search traffic within 3 months
- **Keyword Rankings**: Target top 10 for "Claude design tools", "MCP UI automation"
- **Click-Through Rate**: 20-30% improvement from better titles/descriptions
- **Crawl Efficiency**: Faster indexing with sitemap, proper robots.txt
- **Core Web Vitals**: Maintained or improved (already good on Next.js 15)
- **Lighthouse SEO Score**: 100/100 (currently likely 70-85)

**No breaking changes** - Pure additive SEO enhancements
**Bundle size impact**: +3-5KB (JSON-LD schemas, minimal)
**Performance impact**: Neutral or positive (better caching, crawl efficiency)

## Target Keywords (Primary)

1. **"Claude design tools"** - Low competition, high intent
2. **"MCP design system"** - Niche, technical audience
3. **"UI design automation Claude"** - Long-tail, high value
4. **"design tools for AI assistants"** - Broader appeal
5. **"Typography system for developers"** - Specific feature
6. **"Accessibility checker Claude"** - Accessibility + AI combo
7. **"Professional UI design MCP"** - Professional tier targeting
8. **"Model Context Protocol design"** - Technical SEO

## Secondary Keywords (LSI - Latent Semantic Indexing)

- Design systems, UI components, Tailwind CSS integration
- Claude Code, Anthropic, AI-assisted development
- Dark mode, theme engine, color palettes
- WCAG compliance, semantic HTML, contrast checker
- Type scales, spacing scales, elevation shadows
- Chat-based design, conversational UI tools
- Developer tools, frontend workflow, rapid prototyping

## Competitive Analysis

**Direct Competitors:**
- Shadcn/ui (strong brand, open source)
- Radix UI (accessibility focus)
- Tailwind UI (paid components)

**Differentiation:**
- Only tool specifically for Claude/MCP integration
- AI-powered design through chat (unique value prop)
- Systematic design education (not just components)
- Professional-grade systems at affordable price ($5/mo)

**SEO Advantage:**
- Early mover in "Claude design tools" niche
- Technical SEO can compete with larger brands
- Long-tail keyword strategy (lower competition)
- Developer-focused content (high engagement)

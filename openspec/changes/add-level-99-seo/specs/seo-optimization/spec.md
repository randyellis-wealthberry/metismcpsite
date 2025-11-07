# SEO Optimization Specification

## ADDED Requirements

### Requirement: Accurate Product Metadata
The system SHALL provide accurate metadata that describes the actual product (Design Tools for Claude) rather than generic MCP server descriptions.

#### Scenario: Root layout metadata reflects design tools
- **WHEN** a user or crawler visits the homepage
- **THEN** the page title SHALL contain "Design Tools for Claude" or similar design-focused language
- **AND** the meta description SHALL describe the six design tools (Typography, Color, Depth, Layout, Theme, Accessibility)
- **AND** the metadata SHALL NOT reference "MCP Server" as the primary product description

#### Scenario: Search engines index correct product category
- **WHEN** search engines crawl the site
- **THEN** metadata keywords SHALL include "Claude design tools", "MCP design system", "UI design automation"
- **AND** the description SHALL position Metis as a design tool product

### Requirement: Open Graph Social Sharing
The system SHALL provide Open Graph metadata for rich social sharing previews on Twitter, LinkedIn, Facebook, and Slack.

#### Scenario: Twitter card displays correctly
- **WHEN** a user shares the site URL on Twitter
- **THEN** Twitter SHALL display a large summary card with image
- **AND** the card SHALL show the product title, description, and OG image
- **AND** the image SHALL be 1200x600px optimized for Twitter

#### Scenario: LinkedIn preview shows professional branding
- **WHEN** a user shares the site URL on LinkedIn
- **THEN** LinkedIn SHALL display the OG image (1200x630px)
- **AND** the preview SHALL include site title and description
- **AND** the branding SHALL appear professional and consistent

#### Scenario: Slack unfurl displays rich preview
- **WHEN** a user pastes the site URL in Slack
- **THEN** Slack SHALL unfurl a rich preview with image and description
- **AND** the preview SHALL load within 2 seconds

### Requirement: Structured Data (JSON-LD) for Rich Results
The system SHALL provide comprehensive JSON-LD structured data to enable rich search results including star ratings, FAQ accordion, breadcrumbs, and product information.

#### Scenario: Organization schema provides company info
- **WHEN** search engines crawl the site
- **THEN** Organization schema SHALL include company name, logo, and social links
- **AND** the schema SHALL validate with Google's Structured Data Testing Tool

#### Scenario: SoftwareApplication schema describes product
- **WHEN** search engines index the product
- **THEN** SoftwareApplication schema SHALL include application category, operating system, and feature list
- **AND** the schema SHALL reference the six design tools as features

#### Scenario: Product schema with pricing
- **WHEN** users search for Metis pricing
- **THEN** Product schema SHALL include Metis as a product
- **AND** the schema SHALL include two Offer entities (Free tier: 50 cycles/day, Pro tier: $5/month 2000 cycles/day)
- **AND** the pricing SHALL be marked with proper currency (USD)

#### Scenario: FAQPage schema enables accordion in SERPs
- **WHEN** users search questions related to Metis
- **THEN** FAQPage schema SHALL include all questions and answers from the FAQ section
- **AND** Google MAY display the FAQ accordion directly in search results
- **AND** each question-answer pair SHALL be properly formatted

#### Scenario: BreadcrumbList improves navigation
- **WHEN** search engines parse site structure
- **THEN** BreadcrumbList schema SHALL define the navigation hierarchy
- **AND** the breadcrumbs SHALL appear in search results when appropriate

### Requirement: Dynamic Sitemap Generation
The system SHALL automatically generate a sitemap.xml file that lists all public pages with appropriate priorities and update frequencies.

#### Scenario: Sitemap includes all public routes
- **WHEN** a crawler requests /sitemap.xml
- **THEN** the sitemap SHALL include homepage, features, pricing, how-it-works, and FAQ sections
- **AND** each URL SHALL be absolute (with full domain)
- **AND** the sitemap SHALL validate as proper XML

#### Scenario: Priority and frequency guide crawlers
- **WHEN** crawlers parse the sitemap
- **THEN** the homepage SHALL have priority 1.0 and weekly update frequency
- **AND** features and pricing SHALL have priority 0.9 and weekly frequency
- **AND** how-it-works SHALL have priority 0.8 and weekly frequency
- **AND** FAQ SHALL have priority 0.7 and monthly frequency

#### Scenario: lastModified timestamps aid indexing
- **WHEN** the sitemap is generated
- **THEN** each URL SHALL include a lastModified timestamp
- **AND** the timestamp SHALL reflect the most recent content update

### Requirement: Robots.txt Configuration
The system SHALL provide a robots.txt file that allows crawlers to index public pages while blocking private routes.

#### Scenario: All major crawlers allowed
- **WHEN** a crawler requests /robots.txt
- **THEN** the file SHALL allow all user agents (*)
- **AND** the file SHALL reference the sitemap URL

#### Scenario: Private routes blocked
- **WHEN** crawlers parse robots.txt
- **THEN** /api/* routes SHALL be disallowed
- **AND** the file SHALL be properly formatted plain text

### Requirement: Favicon and App Icons
The system SHALL provide a complete favicon suite for all devices and contexts.

#### Scenario: Browser tab displays favicon
- **WHEN** a user opens the site in a browser
- **THEN** the browser tab SHALL display favicon.ico (16x16 or 32x32)
- **AND** the favicon SHALL be visible in both light and dark browser themes

#### Scenario: Apple devices use touch icon
- **WHEN** a user adds the site to iOS home screen
- **THEN** iOS SHALL use apple-touch-icon.png (180x180)
- **AND** the icon SHALL appear crisp on retina displays

#### Scenario: Android devices use web app icons
- **WHEN** a user adds the site to Android home screen
- **THEN** Android SHALL use icon-192.png or icon-512.png from manifest.json
- **AND** the icons SHALL match the theme colors

#### Scenario: Web app manifest enables PWA features
- **WHEN** browsers load manifest.json
- **THEN** the manifest SHALL include app name, description, icons, theme colors, and display mode
- **AND** the manifest SHALL validate as proper JSON

### Requirement: Image Alt Text for Accessibility
The system SHALL provide descriptive alt text for all images to improve accessibility and SEO.

#### Scenario: Hero section images have alt text
- **WHEN** a screen reader or crawler encounters hero images
- **THEN** each image SHALL have descriptive alt text
- **AND** the alt text SHALL describe the image content without being overly verbose

#### Scenario: Features section icons have labels
- **WHEN** users or crawlers view features section
- **THEN** each icon SHALL have an aria-label or alt text
- **AND** the label SHALL describe the feature (e.g., "Typography System icon")

#### Scenario: Pricing logos have company names
- **WHEN** screen readers encounter pricing section logos
- **THEN** each logo SHALL have alt text with the company name
- **AND** the alt text format SHALL be "[Company] Logo" (e.g., "Nvidia Logo")

### Requirement: Semantic HTML Heading Hierarchy
The system SHALL maintain proper heading hierarchy (single H1, logical H2→H3 flow) to improve accessibility and SEO.

#### Scenario: Single H1 per page
- **WHEN** crawlers or accessibility tools analyze the page
- **THEN** each page SHALL have exactly one H1 element
- **AND** the H1 SHALL describe the main page topic

#### Scenario: Logical heading flow
- **WHEN** headings are parsed in document order
- **THEN** H2 headings SHALL follow the H1
- **AND** H3 headings SHALL be nested under relevant H2 sections
- **AND** no heading levels SHALL be skipped (e.g., H1 → H3 without H2)

### Requirement: Internal Linking
The system SHALL include strategic internal links between related sections to improve crawlability and user navigation.

#### Scenario: Features link to pricing
- **WHEN** users read about features
- **THEN** the features section SHALL include a link to the pricing section
- **AND** the link SHALL use descriptive anchor text (not "click here")

#### Scenario: How It Works links to Get Started CTA
- **WHEN** users finish reading how Metis works
- **THEN** the section SHALL include a call-to-action link to get started
- **AND** the link SHALL be prominent and accessible

#### Scenario: FAQ links to relevant features
- **WHEN** FAQ answers reference specific features
- **THEN** the answers SHALL include links to the features section
- **AND** the links SHALL aid users in learning more

### Requirement: Target Keyword Optimization
The system SHALL naturally include target keywords in content without keyword stuffing, maintaining readability and user experience.

#### Scenario: Primary keywords in strategic locations
- **WHEN** crawlers analyze page content
- **THEN** "Claude design tools" SHALL appear in title, H1, and at least one H2
- **AND** "MCP design system" SHALL appear naturally in body content
- **AND** "UI design automation" SHALL be included in relevant sections
- **AND** keyword density SHALL remain under 2% to avoid penalties

#### Scenario: LSI keywords support context
- **WHEN** search engines analyze semantic context
- **THEN** related terms SHALL appear naturally (design systems, UI components, Tailwind CSS, WCAG compliance, etc.)
- **AND** the content SHALL read naturally to human users

### Requirement: Performance Resource Hints
The system SHALL include resource hints (dns-prefetch, preconnect, preload) to improve page load performance, which affects SEO rankings.

#### Scenario: External domains prefetched
- **WHEN** the page loads
- **THEN** dns-prefetch hints SHALL be included for external domains (fonts, CDNs)
- **AND** the browser SHALL resolve DNS for these domains early

#### Scenario: Critical origins preconnected
- **WHEN** the page loads
- **THEN** preconnect hints SHALL establish early connections to critical origins
- **AND** this SHALL reduce latency for critical resources

### Requirement: SEO Tool Exclusions in .gitignore
The system SHALL exclude SEO analysis tools and reports from version control to keep the repository clean.

#### Scenario: Lighthouse reports excluded
- **WHEN** developers run Lighthouse audits
- **THEN** lighthouse-reports/ directory and *.lighthouse.json files SHALL be ignored by git
- **AND** these files SHALL NOT appear in git status

#### Scenario: SEO audit tools excluded
- **WHEN** developers use SEO analysis tools (PageSpeed, Screaming Frog, etc.)
- **THEN** their output directories SHALL be excluded from git
- **AND** the .gitignore SHALL include entries for pagespeed-insights/, seo-audit/, screaming-frog/, .vercel/analytics/, and .next/cache/sitemap/

### Requirement: Lighthouse SEO Score Target
The system SHALL achieve a Lighthouse SEO score of 100/100 when audited in production environment.

#### Scenario: Perfect SEO audit
- **WHEN** Lighthouse SEO audit runs on the production site
- **THEN** the score SHALL be 100/100
- **AND** no SEO issues SHALL be flagged
- **AND** all best practices SHALL be followed

#### Scenario: Mobile-friendly test passes
- **WHEN** Google Mobile-Friendly Test analyzes the site
- **THEN** the site SHALL pass all mobile-friendliness checks
- **AND** text SHALL be readable without zooming
- **AND** tap targets SHALL be appropriately sized

### Requirement: Structured Data Validation
The system SHALL ensure all JSON-LD structured data validates correctly with Google's Rich Results Test and Schema.org validators.

#### Scenario: Google Rich Results Test passes
- **WHEN** structured data is tested with Google's Rich Results Test
- **THEN** all schemas SHALL validate without errors
- **AND** eligible types SHALL show preview of how they appear in search results
- **AND** no warnings SHALL be shown for critical fields

#### Scenario: Schema.org validator confirms compliance
- **WHEN** JSON-LD is validated against Schema.org specifications
- **THEN** all schema types SHALL conform to official specifications
- **AND** all required properties SHALL be present
- **AND** data types SHALL match schema requirements

### Requirement: Social Sharing Validation
The system SHALL validate social sharing metadata with platform-specific validators (Twitter Card Validator, Facebook Sharing Debugger, LinkedIn Post Inspector).

#### Scenario: Twitter Card Validator confirms card type
- **WHEN** the site URL is tested with Twitter Card Validator
- **THEN** the validator SHALL confirm "summary_large_image" card type
- **AND** the preview SHALL show the correct image, title, and description
- **AND** no errors or warnings SHALL be present

#### Scenario: Facebook Sharing Debugger shows correct preview
- **WHEN** the site URL is tested with Facebook Sharing Debugger
- **THEN** the debugger SHALL show the OG image and metadata correctly
- **AND** the preview SHALL match the intended design
- **AND** no errors SHALL be reported

#### Scenario: LinkedIn Post Inspector validates metadata
- **WHEN** the site URL is inspected on LinkedIn
- **THEN** the post preview SHALL display correctly
- **AND** the OG image SHALL be properly sized and formatted
- **AND** the professional branding SHALL be maintained

### Requirement: Search Console Submission
The system SHALL support submission of the sitemap to Google Search Console and Bing Webmaster Tools for faster indexing.

#### Scenario: Sitemap accessible for submission
- **WHEN** the production site is live
- **THEN** /sitemap.xml SHALL be publicly accessible
- **AND** the sitemap SHALL be valid XML
- **AND** the sitemap SHALL be ready for submission to search consoles

#### Scenario: Search Console accepts sitemap
- **WHEN** sitemap is submitted to Google Search Console
- **THEN** Google SHALL successfully fetch and parse the sitemap
- **AND** all URLs SHALL be eligible for indexing
- **AND** no crawl errors SHALL be reported

### Requirement: Core Web Vitals Maintained
The system SHALL maintain or improve Core Web Vitals scores (LCP, FID, CLS) after SEO implementation, as these affect search rankings.

#### Scenario: LCP remains green
- **WHEN** Core Web Vitals are measured
- **THEN** Largest Contentful Paint (LCP) SHALL remain under 2.5 seconds
- **AND** the SEO changes SHALL NOT negatively impact LCP

#### Scenario: CLS remains stable
- **WHEN** layout shifts are measured
- **THEN** Cumulative Layout Shift (CLS) SHALL remain under 0.1
- **AND** new images and metadata SHALL NOT cause unexpected shifts

#### Scenario: INP remains responsive
- **WHEN** user interactions are measured
- **THEN** Interaction to Next Paint (INP) SHALL remain under 200ms
- **AND** structured data scripts SHALL NOT block interactions

### Requirement: Competitor MCP Server Keyword Targeting
The system SHALL include references to popular MCP servers (GitHub MCP, Figma MCP, shadcn MCP, etc.) in metadata, content, and structured data to capture long-tail search traffic from users of these tools who need design solutions.

#### Scenario: Metadata includes competitor MCP server references
- **WHEN** search engines crawl the site
- **THEN** the meta description SHALL include phrases like "works with GitHub MCP, Figma MCP, shadcn MCP"
- **AND** keywords meta tag SHALL include top 10 MCP server names
- **AND** the language SHALL use complementary positioning ("compatible with", "works with", "designed for users of")

#### Scenario: GitHub MCP Server keyword targeting
- **WHEN** users search for "GitHub MCP design tools" or "GitHub MCP UI automation"
- **THEN** the site SHALL appear in search results due to content optimization
- **AND** the content SHALL reference GitHub MCP Server naturally
- **AND** the positioning SHALL be complementary (not competitive)

#### Scenario: Figma MCP Server keyword targeting
- **WHEN** users search for "Figma MCP design tools" or "Figma to Claude design"
- **THEN** the site SHALL rank for these long-tail keywords
- **AND** the content SHALL explain how Metis works with Figma MCP workflows
- **AND** FAQ SHALL include question "Does Metis work with Figma MCP Server?"

#### Scenario: shadcn MCP keyword targeting
- **WHEN** users search for "shadcn MCP design system" or "shadcn component design"
- **THEN** the site SHALL appear in results for these design-focused MCP queries
- **AND** the content SHALL position Metis as complementary to shadcn MCP
- **AND** structured data SHALL reference shadcn MCP in isCompatibleWith property

#### Scenario: Long-tail MCP server traffic captured
- **WHEN** users search for "[Any Popular MCP Server] + design" combinations
- **THEN** the site SHALL have improved visibility for these low-competition queries
- **AND** monthly search traffic SHALL increase by 15-25% from MCP server long-tail keywords
- **AND** the content SHALL naturally mention top 10 general MCP servers (GitHub, Playwright, AWS, MongoDB, Slack, Google Drive, Notion, Terraform, Sentry, DBT)
- **AND** the content SHALL naturally mention top 4 design MCP servers (Figma, shadcn, shadcn-vue, Tailwind)

#### Scenario: Compatible MCP Servers section exists
- **WHEN** users visit the homepage
- **THEN** a dedicated section SHALL showcase compatible MCP servers
- **AND** the section SHALL include logos/icons for top 10 general MCP servers
- **AND** the section SHALL include logos/icons for top 4 design MCP servers
- **AND** the section SHALL be mobile responsive

#### Scenario: Structured data references competitor tools
- **WHEN** search engines parse SoftwareApplication schema
- **THEN** the schema SHALL include isCompatibleWith property
- **AND** the property SHALL reference GitHub MCP Server, Figma MCP Server, shadcn MCP Server
- **AND** the references SHALL be properly formatted URLs or identifiers

#### Scenario: Image alt text includes MCP server keywords
- **WHEN** crawlers index images
- **THEN** alt text SHALL include phrases like "Design tools for GitHub MCP workflows"
- **AND** alt text SHALL reference "UI automation for Playwright MCP"
- **AND** alt text SHALL mention "Compatible with Figma MCP Server"

#### Scenario: Internal linking supports competitor strategy
- **WHEN** users navigate the site
- **THEN** Features section SHALL link to "Compatible MCP Servers" section
- **AND** "How It Works" SHALL link to competitor integration examples
- **AND** all links SHALL use descriptive anchor text (not generic "click here")

#### Scenario: FAQ includes competitor compatibility questions
- **WHEN** users or search engines read the FAQ section
- **THEN** FAQ SHALL include "Does Metis work with Figma MCP Server?"
- **AND** FAQ SHALL include "Can I use Metis with GitHub MCP?"
- **AND** FAQ SHALL include "Is Metis compatible with shadcn MCP?"
- **AND** all answers SHALL use complementary positioning language
- **AND** FAQPage schema SHALL mark up these questions for rich results

#### Scenario: No trademark infringement
- **WHEN** competitor MCP servers are referenced
- **THEN** language SHALL use descriptive terms ("works with", "compatible with", "designed for users of")
- **AND** language SHALL NOT imply official affiliation or partnership
- **AND** language SHALL NOT use logos or trademarks without permission
- **AND** positioning SHALL be clear that Metis is independent

#### Scenario: Keyword density remains natural
- **WHEN** content is analyzed for keyword usage
- **THEN** MCP server name density SHALL remain under 2%
- **AND** the content SHALL read naturally to human users
- **AND** there SHALL be no keyword stuffing
- **AND** LSI keywords SHALL support semantic context

### Requirement: Agentic Coding Tools Keyword Targeting
The system SHALL include references to popular agentic coding tools (Cursor, Windsurf, v0, Bolt, Copilot, etc.) in metadata, content, and structured data to capture search traffic from developers using these AI IDEs who need design systems.

#### Scenario: Metadata includes agentic tool references
- **WHEN** search engines crawl the site
- **THEN** the meta description SHALL include phrases like "works with Cursor, Windsurf, v0, Bolt, Copilot"
- **AND** keywords meta tag SHALL include top 15 agentic coding tool names
- **AND** the language SHALL use complementary positioning

#### Scenario: Cursor keyword targeting
- **WHEN** users search for "Cursor design tools" or "Cursor UI components"
- **THEN** the site SHALL appear in search results
- **AND** the content SHALL reference Cursor naturally
- **AND** the positioning SHALL explain how Metis works with Cursor's multi-file agent

#### Scenario: Windsurf Cascade keyword targeting
- **WHEN** users search for "Windsurf design tools" or "Cascade design system"
- **THEN** the site SHALL rank for these long-tail keywords
- **AND** the content SHALL explain Metis integration with Windsurf's agentic workflows
- **AND** FAQ SHALL include question "Is Metis compatible with Windsurf?"

#### Scenario: v0 by Vercel keyword targeting
- **WHEN** users search for "v0 design system" or "v0 design tools"
- **THEN** the site SHALL appear in results for these design-focused queries
- **AND** the content SHALL position Metis as complementary to v0 workflows
- **AND** structured data SHALL reference v0 in compatibleWith property

#### Scenario: GitHub Copilot keyword targeting
- **WHEN** users search for "Copilot design tools" or "GitHub Copilot UI components"
- **THEN** the site SHALL have improved visibility
- **AND** the content SHALL target enterprise developers using Copilot
- **AND** FAQ SHALL include "How does Metis integrate with GitHub Copilot?"

#### Scenario: Long-tail agentic tool traffic captured
- **WHEN** users search for "[AI IDE] + design" combinations
- **THEN** the site SHALL have improved visibility for these low-competition queries
- **AND** monthly search traffic SHALL increase by 20-30% from agentic tool keywords
- **AND** the content SHALL mention: Cursor, Windsurf, Copilot, Cline, Claude Code, v0, Bolt, Lovable, Replit Agent

#### Scenario: Built for Agentic Workflows section exists
- **WHEN** users visit the homepage
- **THEN** a dedicated section SHALL showcase agentic tool compatibility
- **AND** the section SHALL include Desktop/IDE tools (Cursor, Windsurf, Copilot, Cline, Claude Code)
- **AND** the section SHALL include Web platforms (v0, Bolt, Lovable, Replit Agent)
- **AND** the section SHALL include CLI tools (Gemini CLI, Aider, Amazon Q)
- **AND** the section SHALL be mobile responsive

#### Scenario: Use cases demonstrate agentic tool integration
- **WHEN** users explore how Metis works
- **THEN** use cases SHALL include "Using Metis with Cursor for multi-file design consistency"
- **AND** use cases SHALL include "Integrating Metis with v0 for rapid prototyping"
- **AND** use cases SHALL include "Windsurf Cascade + Metis design automation"
- **AND** use cases SHALL include code snippets or workflow diagrams

#### Scenario: Structured data references agentic tools
- **WHEN** search engines parse SoftwareApplication schema
- **THEN** the schema SHALL include compatibleWith: Cursor, Windsurf, GitHub Copilot
- **AND** the schema SHALL include compatibleWith: v0 by Vercel, Bolt, Replit Agent
- **AND** the schema SHALL include integratesWith properties for key tools

#### Scenario: Image alt text includes agentic tool keywords
- **WHEN** crawlers index images
- **THEN** alt text SHALL include phrases like "Design tools for Cursor workflows"
- **AND** alt text SHALL reference "UI automation for v0 Vercel"
- **AND** alt text SHALL mention "Windsurf Cascade design system"
- **AND** alt text SHALL include "Compatible with GitHub Copilot"

#### Scenario: FAQ includes agentic tool compatibility questions
- **WHEN** users or search engines read the FAQ section
- **THEN** FAQ SHALL include "Does Metis work with Cursor?"
- **AND** FAQ SHALL include "Can I use Metis with v0 by Vercel?"
- **AND** FAQ SHALL include "Is Metis compatible with Windsurf?"
- **AND** FAQ SHALL include "How does Metis integrate with GitHub Copilot?"
- **AND** all answers SHALL explain integration value and use cases

#### Scenario: Target user personas identified
- **WHEN** content strategy is evaluated
- **THEN** content SHALL target Cursor/Windsurf users needing design consistency
- **AND** content SHALL target v0/Bolt users wanting integrated design systems
- **AND** content SHALL target GitHub Copilot enterprise developers
- **AND** content SHALL target Cline/open-source users wanting local design tools

#### Scenario: Market opportunity captured
- **WHEN** SEO strategy is measured
- **THEN** the strategy SHALL capture 5% of agentic tool + design search traffic
- **AND** this SHALL represent 2,000+ monthly high-intent searches
- **AND** agentic tools market growth (300%+ YoY) SHALL drive increasing traffic

#### Scenario: No trademark infringement
- **WHEN** agentic tools are referenced
- **THEN** language SHALL use complementary positioning ("works with", "built for users of")
- **AND** language SHALL NOT imply official affiliation
- **AND** positioning SHALL focus on genuine integration value

#### Scenario: Keyword density remains natural
- **WHEN** content is analyzed for agentic tool keywords
- **THEN** tool name density SHALL remain under 2%
- **AND** the content SHALL read naturally to human users
- **AND** there SHALL be no keyword stuffing

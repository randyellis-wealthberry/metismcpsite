# SEO Deployment Guide for Metis MCP Website

This comprehensive guide covers deploying all SEO optimizations implemented for the Metis MCP Server website.

---

## Table of Contents

1. [Summary of Changes](#summary-of-changes)
2. [Environment Configuration](#environment-configuration)
3. [Pre-Deployment Checklist](#pre-deployment-checklist)
4. [Deployment Steps](#deployment-steps)
5. [Post-Deployment Validation](#post-deployment-validation)
6. [Monitoring & Analytics](#monitoring--analytics)
7. [Future Optimizations](#future-optimizations)
8. [Troubleshooting](#troubleshooting)

---

## Summary of Changes

### Overview
Comprehensive SEO implementation targeting competitive keywords in the MCP (Model Context Protocol) ecosystem, including competitor terms like "GitHub MCP", "Figma MCP", "shadcn MCP", "Cursor", "Windsurf", "v0", and "Bolt".

### New Files Created

**SEO Infrastructure:**
- `/src/app/metadata.ts` - Centralized SEO metadata configuration
- `/src/app/sitemap.ts` - XML sitemap generation
- `/src/app/robots.ts` - Robots.txt configuration
- `/src/components/seo/StructuredData.tsx` - JSON-LD structured data
- `/src/components/seo/JsonLd.tsx` - JSON-LD helper component

**Documentation:**
- `.env.example` - Updated with NEXT_PUBLIC_SITE_URL documentation

### Files Modified

- `/src/app/layout.tsx` - Added metadata and StructuredData component
- `/src/env.js` - Added NEXT_PUBLIC_SITE_URL validation

### Key Features Added

**1. SEO Metadata System**
- Comprehensive keyword targeting (60+ keywords)
- Open Graph metadata for social sharing
- Twitter Card metadata
- Optimized meta descriptions (default, short, long variants)

**2. Structured Data (Schema.org)**
- Organization schema
- SoftwareApplication schema with ratings
- Product schema with pricing tiers
- FAQPage schema with 11 questions
- BreadcrumbList schema for navigation

**3. SEO Infrastructure**
- Dynamic XML sitemap with priority and change frequency
- Robots.txt with proper crawling rules
- Environment-based URL configuration

**4. Target Keywords**
- Primary: "Claude design tools", "MCP design system", "UI design automation"
- Competitor: "GitHub MCP", "Figma MCP", "shadcn MCP", "Cursor AI", "Windsurf", "v0 design", "Bolt design"
- Product: "typography system", "color system", "depth shadows", "layout spacing", "theme engine", "accessibility checker"
- Technology: "Model Context Protocol", "MCP server", "Claude AI", "design automation"

---

## Environment Configuration

### Required Environment Variables

The application requires one environment variable for SEO functionality:

```bash
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
```

### Local Development Setup

1. **Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` for local development:**
   ```bash
   # Use your production domain or localhost
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

### Staging Environment

For staging deployments:

```bash
NEXT_PUBLIC_SITE_URL="https://staging.metismcp.com"
```

### Production Environment

For production deployments:

```bash
NEXT_PUBLIC_SITE_URL="https://metismcp.com"
```

**Important Notes:**
- The URL must include the protocol (`https://` or `http://`)
- Do not include a trailing slash
- This variable is optional; defaults to `https://metismcp.com` if not set
- The variable is validated at build time using Zod schema

---

## Pre-Deployment Checklist

Complete these tasks before deploying to production:

### Assets Verification

- [ ] **OG Image**: Create and place at `/public/og-image.png`
  - Dimensions: 1200x630 pixels
  - Format: PNG
  - Content: Metis branding with tagline
  - File size: < 1MB recommended

- [ ] **Favicon Suite**: Ensure these files exist in `/public/`:
  - [ ] `/public/favicon.ico` (✓ Exists)
  - [ ] `/public/favicon-16x16.png` (recommended)
  - [ ] `/public/favicon-32x32.png` (recommended)
  - [ ] `/public/apple-touch-icon.png` (180x180, recommended)
  - [ ] `/public/site.webmanifest` (recommended)

- [ ] **Logo**: Add `/public/logo.png` for structured data (recommended)

### Build Verification

- [ ] **Type checking passes:**
  ```bash
  npm run typecheck
  ```

- [ ] **Linting passes:**
  ```bash
  npm run lint
  ```

- [ ] **Production build succeeds:**
  ```bash
  npm run build
  ```

- [ ] **No console errors during build**

### Local Testing

- [ ] **Test sitemap locally:**
  ```bash
  npm run dev
  # Navigate to http://localhost:3000/sitemap.xml
  ```
  - Verify all URLs are correct
  - Check lastModified dates
  - Confirm priority values

- [ ] **Test robots.txt locally:**
  ```bash
  # Navigate to http://localhost:3000/robots.txt
  ```
  - Verify sitemap URL is correct
  - Check allow/disallow rules

- [ ] **Verify metadata in browser:**
  - Open http://localhost:3000
  - View page source
  - Check `<meta>` tags in `<head>`
  - Verify JSON-LD structured data

- [ ] **Test social sharing previews:**
  - Use [OpenGraph.xyz](https://www.opengraph.xyz/)
  - Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  - Enter your local or staging URL

- [ ] **Mobile viewport test:**
  - Test responsive design on mobile
  - Verify viewport meta tag
  - Check theme-color meta tags

### Content Review

- [ ] **Review homepage sections:**
  - Hero section renders correctly
  - Features section displays all 6 tools
  - Pricing section shows Free and Pro tiers
  - FAQ section includes all questions
  - How It Works section is visible

- [ ] **Check console for errors:**
  - Open browser DevTools
  - Check Console tab (should be clean)
  - Check Network tab (no 404s)

---

## Deployment Steps

### Option 1: Vercel Deployment (Recommended)

**Step 1: Push to Git Repository**
```bash
git add .
git commit -m "Add comprehensive SEO optimizations"
git push origin main
```

**Step 2: Configure Vercel Project**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Import your Git repository
3. Configure project settings

**Step 3: Set Environment Variables**

In Vercel dashboard:
1. Go to **Project Settings** → **Environment Variables**
2. Add the following variable:
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://metismcp.com` (your production domain)
   - **Environment**: Select all (Production, Preview, Development)
3. Click **Save**

**Step 4: Deploy**

1. Vercel will automatically deploy on push to main branch
2. Monitor deployment in Vercel dashboard
3. Wait for deployment to complete (~2-3 minutes)

**Step 5: Verify Deployment**

After deployment completes:
```bash
# Visit your production URL
https://metismcp.com

# Check sitemap
https://metismcp.com/sitemap.xml

# Check robots.txt
https://metismcp.com/robots.txt
```

### Option 2: Manual Deployment (Any Platform)

**Step 1: Build the Application**
```bash
# Set production environment variable
export NEXT_PUBLIC_SITE_URL="https://metismcp.com"

# Build the application
npm run build
```

**Step 2: Set Environment Variables on Platform**

For each platform:

**Netlify:**
1. Site Settings → Environment Variables
2. Add `NEXT_PUBLIC_SITE_URL`

**Railway:**
1. Project → Variables
2. Add `NEXT_PUBLIC_SITE_URL`

**Render:**
1. Environment → Environment Variables
2. Add `NEXT_PUBLIC_SITE_URL`

**DigitalOcean App Platform:**
1. Settings → Environment Variables
2. Add `NEXT_PUBLIC_SITE_URL`

**Step 3: Deploy**
```bash
# Start production server
npm run start
```

### Cache Clearing (If Needed)

If updating existing deployment:

**Vercel:**
```bash
# Redeploy to clear cache
vercel --prod
```

**Cloudflare (if using):**
1. Go to Cloudflare dashboard
2. Navigate to Caching → Configuration
3. Click "Purge Everything"

**Browser Cache:**
- Force reload: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Test in incognito/private mode

---

## Post-Deployment Validation

Complete these verification steps after deployment:

### 1. Test Production URLs

- [ ] **Homepage loads successfully:**
  ```
  https://metismcp.com
  ```

- [ ] **Sitemap.xml is accessible:**
  ```
  https://metismcp.com/sitemap.xml
  ```
  Expected response:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://metismcp.com</loc>
      <lastmod>2025-11-03T...</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
    ...
  </urlset>
  ```

- [ ] **Robots.txt is accessible:**
  ```
  https://metismcp.com/robots.txt
  ```
  Expected response:
  ```
  User-Agent: *
  Allow: /
  Disallow: /api/*

  Sitemap: https://metismcp.com/sitemap.xml
  ```

### 2. Validate Social Sharing

- [ ] **Test Open Graph tags:**
  1. Visit [OpenGraph.xyz](https://www.opengraph.xyz/)
  2. Enter: `https://metismcp.com`
  3. Verify preview shows:
     - Correct title: "Metis Design Tools for Claude"
     - Correct description
     - OG image (1200x630)

- [ ] **Test Twitter Card:**
  1. Visit [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  2. Enter: `https://metismcp.com`
  3. Verify card displays correctly

- [ ] **Test LinkedIn preview:**
  1. Visit [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
  2. Enter: `https://metismcp.com`
  3. Verify preview appears correctly

### 3. Verify Structured Data

- [ ] **Google Rich Results Test:**
  1. Visit [Rich Results Test](https://search.google.com/test/rich-results)
  2. Enter: `https://metismcp.com`
  3. Verify these schema types are detected:
     - Organization
     - SoftwareApplication
     - Product
     - FAQPage
     - BreadcrumbList
  4. Ensure no errors or warnings

- [ ] **Schema Markup Validator:**
  1. Visit [Schema.org Validator](https://validator.schema.org/)
  2. Enter: `https://metismcp.com`
  3. Verify all schemas are valid

### 4. Submit to Search Engines

- [ ] **Google Search Console:**
  1. Visit [Google Search Console](https://search.google.com/search-console)
  2. Add property: `https://metismcp.com`
  3. Verify ownership (DNS, HTML file, or meta tag)
  4. Submit sitemap:
     - Go to **Sitemaps** section
     - Enter: `https://metismcp.com/sitemap.xml`
     - Click **Submit**
  5. Monitor for indexing (may take 24-48 hours)

- [ ] **Bing Webmaster Tools:**
  1. Visit [Bing Webmaster Tools](https://www.bing.com/webmasters)
  2. Add site: `https://metismcp.com`
  3. Verify ownership
  4. Submit sitemap:
     - Go to **Sitemaps** section
     - Enter: `https://metismcp.com/sitemap.xml`
     - Click **Submit**

### 5. Performance Check

- [ ] **Google PageSpeed Insights:**
  1. Visit [PageSpeed Insights](https://pagespeed.web.dev/)
  2. Enter: `https://metismcp.com`
  3. Target scores:
     - Performance: > 90
     - Accessibility: > 95
     - Best Practices: > 95
     - SEO: 100

- [ ] **Mobile-Friendly Test:**
  1. Visit [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
  2. Enter: `https://metismcp.com`
  3. Verify page is mobile-friendly

---

## Monitoring & Analytics

### Keyword Ranking Monitoring

**Recommended Tools:**
- [Google Search Console](https://search.google.com/search-console) - Free, official
- [Ahrefs](https://ahrefs.com/) - Paid, comprehensive
- [SEMrush](https://www.semrush.com/) - Paid, competitor analysis
- [Moz Pro](https://moz.com/products/pro) - Paid, keyword tracking

**Priority Keywords to Track:**

**Tier 1 (Primary - Target first):**
1. Claude design tools
2. MCP design system
3. design tools for Claude
4. Model Context Protocol design

**Tier 2 (Competitor - High intent):**
5. GitHub MCP
6. Figma MCP
7. shadcn MCP
8. Cursor AI
9. Windsurf
10. v0 design
11. Bolt design

**Tier 3 (Product - Long-tail):**
12. typography system for Claude
13. color system MCP
14. accessibility checker MCP
15. design automation AI

**Tracking Setup in Google Search Console:**
1. Go to **Performance** section
2. Click **+ New** → **Search results**
3. Add filters for each keyword
4. Monitor:
   - Average position
   - Click-through rate (CTR)
   - Total clicks
   - Total impressions

### Competitor Keyword Performance

**Monitor competitor rankings:**
```
Target: Rank in top 10 for competitor terms
Timeline: 3-6 months

Competitors to track:
- GitHub MCP Server
- Figma MCP Server
- shadcn MCP Server
- Cursor
- Windsurf
- v0 by Vercel
- Bolt
- GitHub Copilot
```

**Strategy:**
- Create comparison content
- Build integration guides
- Earn backlinks from MCP ecosystem

### Google Search Console Setup

**Step 1: Add Property**
1. Visit [Google Search Console](https://search.google.com/search-console)
2. Click **Add Property**
3. Choose **URL prefix**: `https://metismcp.com`

**Step 2: Verify Ownership**

Choose one method:

**Option A: HTML Meta Tag**
1. Copy verification meta tag
2. Add to `/src/app/metadata.ts`:
   ```typescript
   export const VERIFICATION = {
     google: "your-google-verification-code",
     bing: undefined,
   };
   ```
3. Deploy changes
4. Click **Verify** in Search Console

**Option B: DNS Record**
1. Copy TXT record
2. Add to your domain's DNS settings
3. Click **Verify** in Search Console

**Step 3: Submit Sitemap**
1. Go to **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml`
3. Click **Submit**
4. Check status (should show "Success")

**Step 4: Monitor Performance**
- Check daily for first 2 weeks
- Weekly thereafter
- Monitor:
  - Coverage (indexed pages)
  - Performance (clicks, impressions, CTR)
  - Enhancements (mobile usability, structured data)

### Expected Timeline for SEO Results

**Week 1-2: Indexing Phase**
- Sitemap submitted
- Pages crawled by Google
- Initial indexing begins
- No significant traffic yet

**Week 3-4: Early Signals**
- Long-tail keywords start ranking
- Impressions increase
- Position: 30-50 for target keywords
- Minimal clicks

**Month 2-3: Growth Phase**
- Rankings improve to position 15-30
- Clicks increase gradually
- Structured data appears in SERPs
- Brand searches begin

**Month 3-6: Maturity Phase**
- Target top 10 for primary keywords
- Steady organic traffic growth
- Featured snippets may appear
- Backlinks start building

**Realistic Goals:**
- Month 1: 100-200 impressions/day
- Month 3: 500-1000 impressions/day, 10-50 clicks/day
- Month 6: 2000-5000 impressions/day, 100-300 clicks/day

**Factors Affecting Timeline:**
- Domain age (new domains take longer)
- Competition intensity
- Backlink acquisition rate
- Content quality and updates
- Technical SEO health

---

## Future Optimizations

### Content Marketing Opportunities

**1. Blog Post Ideas**

Create educational content targeting long-tail keywords:

**Integration Guides:**
- "How to Use Metis with Cursor: Complete Setup Guide"
- "Integrating Metis MCP Server with GitHub MCP"
- "Using Metis Design Tools in v0 by Vercel"
- "Complete Guide to Metis + Figma MCP Integration"
- "Setting up Metis with Windsurf for AI-Powered Design"

**Comparison Posts:**
- "Metis vs shadcn MCP: Which Design System is Right for You?"
- "GitHub MCP vs Metis: Choosing the Right MCP Server"
- "Cursor vs Windsurf: Best AI Code Editor for Metis"
- "v0 vs Bolt: Which Works Better with Metis Design Tools?"

**Tutorial Content:**
- "Building a Complete Design System with Metis and Claude"
- "10 Typography Tricks with Metis Typography System"
- "Creating Accessible UIs with Metis Accessibility Checker"
- "Mastering Dark Mode with Metis Theme Engine"

**Use Case Studies:**
- "How [Company] Built Their Design System with Metis"
- "Reducing Design Debt with Metis MCP Tools"
- "From Figma to Code: Metis Workflow Guide"

**Technical Deep Dives:**
- "Understanding Model Context Protocol: A Developer's Guide"
- "How Metis Implements WCAG AA Compliance"
- "The Science Behind Metis Color System: OKLCH Explained"
- "Typography Scales: Mathematical Harmony in Design"

**2. Video Content Opportunities**

- Quick start tutorials (YouTube)
- Integration walkthroughs
- Design system building series
- Tool-specific feature highlights

**3. Documentation Expansion**

- API reference documentation
- Code examples for each tool
- Migration guides from competitors
- Best practices handbook

### Additional Long-Tail Keyword Targets

**Product + Competitor Keywords:**
- "design system for Cursor AI"
- "typography tools for Claude"
- "color palette generator MCP"
- "accessibility testing for v0"
- "theme switcher for Windsurf"
- "design tokens for GitHub Copilot"

**Use Case Keywords:**
- "automated design system"
- "AI-powered design tools"
- "design system automation"
- "accessible design tools AI"
- "dark mode implementation MCP"
- "responsive design automation"

**Integration Keywords:**
- "Metis Figma integration"
- "Metis GitHub workflow"
- "Metis shadcn components"
- "Cursor design tools setup"
- "Windsurf UI automation"

**Problem-Solution Keywords:**
- "how to build design system with AI"
- "automated typography scaling"
- "color system accessibility check"
- "consistent spacing design"
- "design system maintenance tools"

### Schema Markup Enhancements

**1. Add HowTo Schema**
For tutorial content:
```json
{
  "@type": "HowTo",
  "name": "How to Install Metis MCP Server",
  "step": [...]
}
```

**2. Add VideoObject Schema**
When adding video content:
```json
{
  "@type": "VideoObject",
  "name": "Metis Quick Start Guide",
  "description": "...",
  "uploadDate": "2025-11-03"
}
```

**3. Add BlogPosting Schema**
For blog articles:
```json
{
  "@type": "BlogPosting",
  "headline": "...",
  "author": {...},
  "datePublished": "..."
}
```

**4. Add AggregateRating Enhancement**
Once you have real user reviews:
- Update the rating values in StructuredData.tsx
- Add review platform links
- Include review snippets

**5. Add SoftwareSourceCode Schema**
For open-source positioning:
```json
{
  "@type": "SoftwareSourceCode",
  "codeRepository": "https://github.com/...",
  "programmingLanguage": "TypeScript"
}
```

### Link Building Strategy

**1. Directory Submissions**
- Product Hunt launch
- AlternativeTo.net listing
- GitHub Awesome lists
- MCP ecosystem directory
- Design tools catalogs

**2. Partnership Opportunities**
- Cross-promote with GitHub MCP
- Collaborate with Figma MCP team
- Guest posts on AI/design blogs
- Podcast appearances

**3. Community Engagement**
- Answer questions on Stack Overflow
- Contribute to MCP discussions
- Create helpful GitHub Gists
- Share on Reddit (r/webdev, r/programming)

**4. Press & Media**
- Submit to tech news sites
- Create press kit
- Reach out to design/dev newsletters
- Announce major features

---

## Troubleshooting

### Common Issues and Solutions

#### Issue 1: Sitemap.xml Returns 404

**Symptoms:**
- Visiting `/sitemap.xml` shows "404 Not Found"
- Search Console shows sitemap error

**Solution:**
```bash
# 1. Verify file exists
ls src/app/sitemap.ts

# 2. Check build output
npm run build
# Look for: "○ /sitemap.xml" in output

# 3. Clear Next.js cache
rm -rf .next
npm run build

# 4. Verify deployment includes sitemap
# Check build logs for sitemap generation
```

**Prevention:**
- Ensure `src/app/sitemap.ts` is not in `.gitignore`
- Verify file exports default function
- Check Next.js version (requires 13.3+)

---

#### Issue 2: Sitemap Shows Wrong Domain

**Symptoms:**
- Sitemap URLs show `localhost:3000` in production
- Robots.txt has incorrect sitemap URL

**Solution:**
```bash
# 1. Verify environment variable is set
# In Vercel dashboard or platform settings
NEXT_PUBLIC_SITE_URL=https://metismcp.com

# 2. Redeploy application
# Vercel will automatically redeploy

# 3. Clear CDN cache if applicable
# Force full rebuild
vercel --force
```

**Prevention:**
- Always set `NEXT_PUBLIC_SITE_URL` before deployment
- Add to all environments (Production, Preview, Development)
- Document in `.env.example`

---

#### Issue 3: Structured Data Not Appearing

**Symptoms:**
- Google Rich Results Test shows no structured data
- View source shows no JSON-LD scripts

**Solution:**
```bash
# 1. Check component is imported in layout.tsx
cat src/app/layout.tsx | grep StructuredData

# Expected:
# import { StructuredData } from "~/components/seo/StructuredData";
# <StructuredData />

# 2. Verify component renders
# View page source, search for: <script type="application/ld+json">

# 3. Clear browser cache and test
# Open incognito window

# 4. Rebuild and redeploy
npm run build
```

**Prevention:**
- Always test structured data locally before deploying
- Use Rich Results Test before submitting to Search Console
- Keep StructuredData.tsx in sync with product changes

---

#### Issue 4: Open Graph Image Not Loading

**Symptoms:**
- Social media previews show broken image
- Twitter/LinkedIn show no image
- OpenGraph.xyz shows missing image

**Solution:**
```bash
# 1. Verify image exists
ls public/og-image.png

# 2. Check image dimensions and size
# Should be 1200x630, < 1MB
file public/og-image.png
du -h public/og-image.png

# 3. Verify URL in metadata.ts
cat src/app/metadata.ts | grep og-image

# Expected:
# url: `${SITE_URL}/og-image.png`

# 4. Clear social media cache
# Facebook: https://developers.facebook.com/tools/debug/
# LinkedIn: https://www.linkedin.com/post-inspector/
```

**Prevention:**
- Create og-image.png before deployment
- Use absolute URLs for OG images
- Test with multiple social platforms
- Keep image < 8MB (5MB recommended)

---

#### Issue 5: Metadata Not Updating

**Symptoms:**
- Google shows old title/description
- Social previews show outdated content
- Search Console shows old metadata

**Solution:**
```bash
# 1. Verify metadata.ts changes are deployed
git log -1 --name-only | grep metadata.ts

# 2. Force search engine re-crawl
# Google Search Console:
# - Go to URL Inspection
# - Enter your URL
# - Click "Request Indexing"

# 3. Clear CDN/browser cache
# Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

# 4. Check deployment logs
# Ensure build completed successfully
```

**Prevention:**
- Use Google Search Console URL Inspection tool
- Submit sitemap after metadata changes
- Wait 24-48 hours for Google to re-index
- Test in incognito mode to see actual changes

---

#### Issue 6: Search Console Shows "Coverage Issues"

**Symptoms:**
- Pages marked as "Excluded" or "Error"
- "Crawled - currently not indexed" status
- Pages not appearing in search results

**Solution:**
```bash
# 1. Check robots.txt isn't blocking pages
curl https://metismcp.com/robots.txt

# Should show:
# Allow: /
# Disallow: /api/*

# 2. Verify meta robots tag
# View page source, check for:
# <meta name="robots" content="index,follow">

# 3. Check for indexing issues in Search Console
# - Click on specific URL
# - Review "Why this URL is not indexed"

# 4. Request indexing for important pages
# Use URL Inspection → Request Indexing
```

**Prevention:**
- Submit sitemap immediately after launch
- Ensure pages have quality content
- Fix any technical SEO issues
- Build quality backlinks

---

#### Issue 7: Environment Variable Not Loading

**Symptoms:**
- Build fails with environment variable errors
- `NEXT_PUBLIC_SITE_URL` is undefined
- Sitemap/robots show fallback values

**Solution:**
```bash
# 1. Verify .env file exists locally
ls -la .env

# 2. Check variable is in env.js
cat src/env.js | grep NEXT_PUBLIC_SITE_URL

# 3. Restart development server
# Stop with Ctrl+C
npm run dev

# 4. For production, verify platform settings
# Vercel: Project Settings → Environment Variables
# Netlify: Site Settings → Environment Variables
# Render: Environment → Environment Variables
```

**Prevention:**
- Always copy .env.example to .env
- Document all required variables
- Set variables before first deployment
- Use environment-specific values

---

### How to Debug Sitemap Issues

**Step 1: Local Testing**
```bash
# Start development server
npm run dev

# Visit sitemap in browser
open http://localhost:3000/sitemap.xml

# Check terminal for errors
# Should show no warnings
```

**Step 2: Validate XML**
```bash
# Download sitemap
curl https://metismcp.com/sitemap.xml > sitemap.xml

# Validate XML syntax
xmllint sitemap.xml

# Or use online validator:
# https://www.xml-sitemaps.com/validate-xml-sitemap.html
```

**Step 3: Test with Search Engines**
1. Google Search Console:
   - Sitemaps section
   - Check "Discovered URLs"
   - View "Last read" date

2. Bing Webmaster Tools:
   - Sitemaps section
   - Check submission status

**Step 4: Common Sitemap Errors**
```
Error: "Couldn't fetch sitemap"
→ Check that URL returns 200 status
→ Verify no authentication required
→ Test in incognito mode

Error: "Invalid XML"
→ Check for special characters in URLs
→ Ensure proper XML encoding
→ Validate with xmllint

Error: "URLs not found"
→ Ensure URLs return 200 status
→ Check for redirects (301/302)
→ Verify pages are not blocked by robots.txt
```

---

### How to Test Structured Data

**Method 1: Google Rich Results Test**
1. Visit: https://search.google.com/test/rich-results
2. Enter URL or paste code
3. Review results:
   - ✅ Green checkmark = Valid
   - ⚠️ Warning = Review recommended
   - ❌ Error = Must fix

**Method 2: Schema.org Validator**
1. Visit: https://validator.schema.org/
2. Enter URL or paste JSON-LD
3. Check for errors and warnings

**Method 3: Browser DevTools**
```javascript
// Open DevTools Console
// View all JSON-LD on page
Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
  .map(script => JSON.parse(script.textContent));
```

**Method 4: View Page Source**
```bash
# Search for JSON-LD in source
curl https://metismcp.com | grep -A 50 'application/ld+json'
```

**Common Structured Data Errors:**
```
Error: "Missing required field"
→ Check schema definition
→ Add missing properties
→ Review Schema.org documentation

Error: "Invalid URL"
→ Use absolute URLs (not relative)
→ Include protocol (https://)
→ Test URL accessibility

Error: "Invalid date format"
→ Use ISO 8601 format
→ Example: "2025-11-03T00:00:00Z"
```

---

### Who to Contact for Help

**Platform-Specific Support:**

**Vercel Deployment Issues:**
- Documentation: https://vercel.com/docs
- Support: https://vercel.com/support
- Community: https://github.com/vercel/next.js/discussions

**Next.js Framework Issues:**
- Documentation: https://nextjs.org/docs
- GitHub: https://github.com/vercel/next.js/issues
- Discord: https://nextjs.org/discord

**Google Search Console Issues:**
- Help Center: https://support.google.com/webmasters
- Community Forum: https://support.google.com/webmasters/community

**SEO & Schema Markup:**
- Schema.org: https://schema.org/docs/gs.html
- Google Developers: https://developers.google.com/search/docs

**General Web Performance:**
- Web.dev: https://web.dev/
- MDN Web Docs: https://developer.mozilla.org/

**Emergency Contacts:**
```
Production Down:
1. Check status page (if applicable)
2. Review error logs in platform dashboard
3. Rollback to previous deployment
4. Contact platform support

SEO Emergency (sudden ranking drop):
1. Check Google Search Console for manual actions
2. Verify site is indexed (site:metismcp.com)
3. Review recent algorithm updates
4. Check for technical SEO issues
```

---

## Additional Resources

### Essential Tools
- [Google Search Console](https://search.google.com/search-console) - Monitor search performance
- [Google PageSpeed Insights](https://pagespeed.web.dev/) - Performance testing
- [OpenGraph.xyz](https://www.opengraph.xyz/) - Test social previews
- [Rich Results Test](https://search.google.com/test/rich-results) - Validate structured data
- [Schema.org Validator](https://validator.schema.org/) - Test JSON-LD
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html) - Validate sitemap

### Documentation Links
- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Next.js Sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [Next.js Robots.txt](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)
- [Schema.org Docs](https://schema.org/docs/documents.html)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Docs](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

### SEO Learning Resources
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)
- [Ahrefs SEO Blog](https://ahrefs.com/blog/)
- [Search Engine Journal](https://www.searchenginejournal.com/)

---

## Change Log

### Version 1.0.0 - 2025-11-03

**Initial SEO Implementation:**
- Added centralized metadata system
- Implemented XML sitemap generation
- Created robots.txt configuration
- Added comprehensive structured data
- Configured environment-based URLs
- Documented deployment process

**Files Added:**
- src/app/metadata.ts
- src/app/sitemap.ts
- src/app/robots.ts
- src/components/seo/StructuredData.tsx
- src/components/seo/JsonLd.tsx
- SEO_DEPLOYMENT_GUIDE.md

**Files Modified:**
- src/app/layout.tsx
- src/env.js
- .env.example

---

## Final Checklist

Before marking deployment as complete:

**Environment:**
- [ ] NEXT_PUBLIC_SITE_URL is set in production
- [ ] Environment variable is correct (https://, no trailing slash)

**Assets:**
- [ ] /public/og-image.png exists (1200x630)
- [ ] Favicon suite is complete
- [ ] All images are optimized (< 1MB)

**Build & Deploy:**
- [ ] Production build succeeds
- [ ] No console errors
- [ ] Deployment completed successfully

**Testing:**
- [ ] Homepage loads correctly
- [ ] /sitemap.xml returns valid XML
- [ ] /robots.txt returns correct rules
- [ ] Structured data passes Rich Results Test
- [ ] Social previews work on Twitter/LinkedIn
- [ ] Mobile-friendly test passes

**Search Engine Submission:**
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google
- [ ] Bing Webmaster Tools verified (optional)
- [ ] Sitemap submitted to Bing (optional)

**Monitoring Setup:**
- [ ] Google Search Console monitoring active
- [ ] Keyword tracking configured
- [ ] Analytics installed (if applicable)

**Documentation:**
- [ ] Team knows where to find this guide
- [ ] Environment variables documented
- [ ] Troubleshooting steps reviewed

---

**Deployment Status:**
- [ ] Ready to Deploy
- [ ] Deployed to Staging
- [ ] Deployed to Production
- [ ] Post-Deployment Validation Complete

**Notes:**
_Add any deployment-specific notes or issues encountered here._

---

**Last Updated:** 2025-11-03
**Version:** 1.0.0
**Maintained By:** Metis Team

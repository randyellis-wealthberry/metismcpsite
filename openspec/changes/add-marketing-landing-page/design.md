# Design Document: Marketing Landing Page

## Context
We need a public-facing marketing website for Metis MCP Server that educates potential users, demonstrates value, and drives adoption. The current `src/app/page.tsx` contains a technical tRPC demo that isn't suitable for marketing purposes.

### Stakeholders
- End users: Developers looking for MCP server solutions
- Project maintainers: Need easy-to-update content
- SEO/Marketing: Require proper meta tags and discoverability

### Constraints
- Must use existing T3 Stack technologies (Next.js 15 App Router, Tailwind CSS)
- Must maintain type safety and follow project conventions
- Should be fast (target LCP < 2.5s on 4G)
- Prefer high-quality, accessible components over custom implementations

## Goals / Non-Goals

### Goals
- Create a professional, modern landing page that converts visitors
- Optimize for SEO and organic discovery
- Ensure accessibility compliance (WCAG 2.1 AA)
- Maintain high performance (Core Web Vitals)
- Make content easy to update and maintain

### Non-Goals
- Building a full CMS or admin panel (content is in code)
- Creating a multi-page marketing site (single landing page only)
- Adding user authentication or personalization
- Implementing analytics (can be added separately later)
- Building a blog or documentation system (separate concerns)

## Decisions

### Decision 1: Use shadcn/ui Component Library
**What**: Integrate shadcn/ui as the primary component library for UI elements (buttons, cards, badges, etc.).

**Why**:
- Built on Radix UI primitives (accessibility built-in, WCAG 2.1 AA compliant)
- Uses Tailwind CSS (already in our stack - zero additional styling system)
- Copy-paste architecture (components are added to your codebase, not npm installed)
- Full control and customization without fighting a component API
- Type-safe with TypeScript support
- Works seamlessly with React Server Components
- Reduces development time with battle-tested components

**Implementation**:
- Initialize shadcn/ui with `npx shadcn@latest init`
- Add components as needed using shadcn/ui MCP server or CLI
- Components will be added to `src/components/ui/`
- Customize via `components.json` and Tailwind config
- Use for: Button, Card, Badge, Separator, and other UI primitives
- Build landing page sections as custom compositions using shadcn components

**Key Components for Landing Page**:
- `Button` - CTA buttons with variants (default, outline, ghost)
- `Card` - Feature cards, benefit cards
- `Badge` - Technology badges, labels
- `Separator` - Visual dividers between sections
- Potentially: `Tabs`, `Accordion` for "How It Works" section

**Alternatives considered**:
- Plain Tailwind + custom components: More work, reinventing the wheel
- Material UI (MUI): Heavy bundle size, different design system
- Chakra UI: Runtime CSS-in-JS overhead, doesn't align with Tailwind
- Ant Design: Not designed for modern React patterns, styling conflicts
- Headless UI: Good but less complete, shadcn provides more out of the box

### Decision 2: Component Architecture
**What**: Use React Server Components (RSC) by default, only add "use client" when interactivity is required.

**Why**:
- RSC reduces client bundle size and improves initial page load
- Most landing page content is static and doesn't require client-side state
- Aligns with Next.js 15 App Router best practices

**Implementation**:
- All section components (Hero, Features, etc.) will be Server Components
- Only add "use client" for interactive elements (e.g., mobile menu, scroll animations)
- Use Next.js `<Image>` component for automatic optimization

**Alternatives considered**:
- Pure client components: Rejected due to larger bundle size and slower FCP
- Static HTML export: Rejected to maintain flexibility for future dynamic content

### Decision 3: Styling Approach
**What**: Use Tailwind CSS utility classes exclusively with no custom CSS files, leveraging shadcn/ui's CSS variable system.

**Why**:
- Already part of the tech stack
- shadcn/ui extends Tailwind with CSS variables for theming
- Provides responsive utilities and design consistency
- JIT mode eliminates unused styles in production
- Faster development with no context switching

**Implementation**:
- Use shadcn/ui's CSS variable system for colors (defined in `globals.css`)
- Define brand colors in Tailwind config or map to shadcn variables
- Use responsive modifiers (`sm:`, `md:`, `lg:`) for breakpoints
- Use shadcn's `cn()` utility helper for conditional classes
- Customize shadcn components via Tailwind classes

**Alternatives considered**:
- CSS Modules: Rejected due to additional complexity
- Styled Components: Rejected due to runtime overhead and new dependency
- CSS-in-JS (Emotion): Rejected for same reasons as Styled Components

### Decision 4: Image Handling
**What**: Use Next.js `<Image>` component with static imports for critical images, and lazy loading for below-the-fold content.

**Why**:
- Automatic optimization (WebP/AVIF) and responsive srcset
- Built-in lazy loading support
- Better LCP scores with priority loading for hero images

**Implementation**:
- Hero images: `<Image priority />` to load immediately
- Below-fold images: Default lazy loading
- Store images in `public/` directory or `src/assets/`
- Provide explicit width/height to prevent layout shift

**Alternatives considered**:
- Manual image optimization: Rejected due to maintenance burden
- External image CDN: Deferred until proven necessary

### Decision 5: Code Syntax Highlighting
**What**: Use a lightweight syntax highlighting library for code examples.

**Why**: Need to display integration code snippets with proper formatting

**Implementation Options** (choose during implementation):
1. `react-syntax-highlighter` - Popular but larger bundle size
2. `prism-react-renderer` - Lighter weight, good customization
3. `shiki` - Zero-runtime (build-time highlighting)

**Recommendation**: Start with `prism-react-renderer` for balance of size and features. Consider Shiki if bundle size becomes an issue.

**Alternatives considered**:
- Plain `<pre>` tags: Rejected due to poor readability
- Server-side highlighting with regex: Too brittle and hard to maintain

### Decision 6: Animation Strategy
**What**: Use CSS transitions and Tailwind's animation utilities for subtle effects. Avoid heavy JavaScript animation libraries.

**Why**:
- Keeps bundle size small
- Better performance (GPU-accelerated CSS)
- Sufficient for marketing page needs (hover states, fade-ins)

**Implementation**:
- Hover effects: Tailwind utilities (`hover:scale-105`, `transition`)
- Scroll-triggered animations: Optional, use Intersection Observer API if needed
- Hero entrance animation: Simple fade-in with CSS animation

**Alternatives considered**:
- Framer Motion: Rejected due to 40KB bundle size overhead
- GSAP: Rejected as overkill for simple marketing page
- React Spring: Rejected for complexity vs. benefit

### Decision 7: SEO Implementation
**What**: Use Next.js metadata API to define page meta tags in layout.tsx.

**Why**:
- Built-in support for meta tags in App Router
- Type-safe metadata configuration
- Automatic generation of og:tags

**Implementation**:
```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  title: 'Metis MCP Server - Modern Context Protocol Server',
  description: '...',
  openGraph: {
    title: '...',
    description: '...',
    images: ['/og-image.png'],
  },
}
```

**Additional SEO considerations**:
- Add JSON-LD structured data for organization/product
- Generate sitemap.xml and robots.txt
- Use semantic HTML (header, main, section, article)

### Decision 8: Content Management
**What**: Store content as JSX/TSX directly in component files with potential extraction to constants.

**Why**:
- Simple and type-safe
- No external CMS complexity
- Easy to version control and review changes

**Implementation**:
- Inline content for simple text
- Extract longer content to `constants.ts` file if needed
- Consider `content/` directory for future internationalization

**Alternatives considered**:
- Headless CMS (Contentful, Sanity): Rejected as premature optimization
- Markdown files: Rejected as adding complexity without clear benefit
- Database: Rejected as overkill for static content

## Risks / Trade-offs

### Risk: Content Updates Require Code Deploys
**Mitigation**:
- Acceptable for MVP - marketing content doesn't change frequently
- If updates become frequent, can migrate to CMS later
- Document clear process for content updates in README

### Risk: Performance Impact from Images
**Mitigation**:
- Use Next.js Image optimization
- Compress images before commit
- Monitor bundle size with Next.js bundle analyzer
- Set performance budgets in Lighthouse CI

### Risk: Accessibility Oversights
**Mitigation**:
- Run aXe DevTools during development
- Include accessibility testing in QA checklist
- Test with keyboard navigation and screen reader
- Use ESLint plugin for a11y (eslint-plugin-jsx-a11y)

### Trade-off: Server Components vs. Interactivity
We're prioritizing RSC for performance, which means adding interactivity later requires refactoring. This is acceptable because:
- Landing pages are mostly static by nature
- Clear patterns exist for migrating to client components when needed
- Performance benefits outweigh refactoring cost

## Migration Plan

### Phase 1: Replace Current Page (This Change)
1. Back up existing demo page content (move to `/demo` route if needed)
2. Implement new landing page components
3. Update root route to use new landing page
4. Deploy and monitor performance metrics

### Phase 2: Monitoring & Iteration (Post-Launch)
1. Set up Lighthouse CI for continuous monitoring
2. Track Core Web Vitals in production
3. Gather user feedback on messaging and CTAs
4. Iterate on content based on analytics

### Rollback Strategy
If critical issues arise post-deployment:
1. Revert to previous commit (keep old page.tsx in git history)
2. Quick hotfix branch for urgent fixes
3. Staged rollout: Deploy to staging → production

## Open Questions

1. **Content**: What are the exact 3-6 features we want to highlight?
   - *Resolution*: Gather during "Planning & Setup" phase

2. **Branding**: Do we have official logo, color palette, or brand guidelines?
   - *Resolution*: Document any existing guidelines, or define minimal palette

3. **CTAs**: Where should primary CTA link to? (GitHub, Docs, Quick Start)
   - *Resolution*: Determine based on funnel goals (likely to Quick Start docs)

4. **Syntax Highlighting Library**: Which library to use?
   - *Resolution*: Start with `prism-react-renderer`, evaluate during implementation

5. **Analytics**: Should we include analytics tracking (GA, Plausible)?
   - *Resolution*: Deferred to separate change (not blocking for launch)

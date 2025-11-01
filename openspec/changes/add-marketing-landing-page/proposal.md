# Add Marketing Landing Page for Metis MCP Server

## Why
Metis MCP Server needs a public-facing marketing website to educate potential users about its capabilities, demonstrate value propositions, and drive adoption. Currently, there is no dedicated landing page that explains what Metis MCP Server is, how it works, and why developers should use it.

## What Changes
- **Integrate shadcn/ui component library** for high-quality, accessible UI components
- Add a new marketing landing page at the root route (`/`)
- Create hero section with value proposition and primary CTA (using shadcn Button)
- Build features section highlighting key capabilities (using shadcn Card components)
- Add "How It Works" section with step-by-step integration guide
- Include code examples demonstrating integration patterns
- Create "Benefits" section for developer-focused value props
- Add footer with links to documentation, GitHub, and social channels
- Implement responsive design optimized for desktop and mobile
- Apply modern, professional styling using Tailwind CSS and shadcn/ui
- Include subtle animations and transitions for polish

## Impact
- **Affected specs**: Creates new `marketing-landing` capability
- **Affected code**:
  - `components.json` - New file for shadcn/ui configuration
  - `src/components/ui/` - New directory for shadcn/ui components (Button, Card, Badge, Separator, etc.)
  - `src/app/page.tsx` - Replace demo tRPC content with marketing page
  - `src/app/layout.tsx` - Update with meta tags and SEO optimization
  - `src/app/_components/` - New landing page section components
  - `src/styles/globals.css` - shadcn/ui CSS variables and theme configuration
  - `src/lib/utils.ts` - shadcn's `cn()` utility helper (if not already present)
- **User experience**: Users visiting the site will see a professional marketing page instead of technical demo
- **Dependencies**:
  - shadcn/ui components (copy-paste, no npm package)
  - Underlying dependencies: `class-variance-authority`, `clsx`, `tailwind-merge` (minimal bundle impact)
  - May add: `@radix-ui/react-*` packages for specific components (Button, Card, etc.)

## Success Criteria
- Landing page loads in <2 seconds on 3G networks
- Mobile responsive design works on devices 320px width and up
- Accessible (WCAG 2.1 AA compliance)
- Clear CTAs driving to documentation or installation guides
- SEO optimized with proper meta tags and structured data

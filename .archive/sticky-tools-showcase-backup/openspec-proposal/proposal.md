# Add Sticky Tools Showcase Section

## Why

The current marketing site lacks an engaging, scroll-driven section that showcases the 6 design tools in a sequential, storytelling format. Users who scroll past the bento grid features need another touchpoint that presents tools with marketing-focused messaging and visual appeal. A sticky scroll section provides:

- **Enhanced engagement**: Interactive scroll experience keeps users interested
- **Sequential storytelling**: One tool at a time reduces cognitive load
- **Marketing focus**: Benefit-driven descriptions over technical implementation details
- **Premium feel**: Modern sticky scroll pattern signals quality and sophistication

## What Changes

- **Add new UI section**: `ToolsShowcaseSection` component between `FeaturesSection` and `CodeDemoSection`
- **Install Aceternity component**: Sticky scroll reveal from ui.aceternity.com
- **Create 6 tool showcases**: Each with title, marketing description, and visual element
- **Implement responsive design**:
  - Mobile (<768px): Vertical stack, no sticky behavior
  - Tablet (768px-1024px): Side-by-side 40/60 split with sticky
  - Desktop (>1024px): Full sticky scroll experience with 50/50 split
- **Add visual elements**: Gradients, icons, or simple animations for each tool
- **Maintain design system**: Use CSS variables and semantic colors throughout

**Marketing-Focused Tool Descriptions:**

1. **Typography System** → "Instant Typography Hierarchy"
2. **Color System** → "Colors That Just Work"
3. **Depth & Shadows** → "Make It Pop"
4. **Layout & Spacing** → "Perfect Spacing, Effortlessly"
5. **Theme Engine** → "Dark Mode Done Right"
6. **Accessibility Checker** → "Accessibility Built In"

## Impact

**Affected specs:**
- `tools-showcase-ui` (NEW) - Complete new capability for tools showcase section

**Affected code:**
- `src/app/page.tsx` - Add new section between Features and CodeDemo
- `src/app/_components/tools-showcase-section.tsx` (NEW) - Main component
- `src/components/ui/sticky-scroll-reveal.tsx` (NEW) - Aceternity component
- `package.json` - May add dependencies (framer-motion if not present)

**User experience:**
- Additional scroll depth: ~1500-2000px depending on viewport
- Page weight: +15-25KB gzipped (sticky scroll component + tool content)
- Performance: Should maintain >90 Lighthouse score
- Mobile-first: Simplified experience on small screens

**No breaking changes** - Pure additive feature

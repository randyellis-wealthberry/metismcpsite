# Add LaserFlow Animation to Hero Section

## Why
The hero section is the first impression for visitors and currently uses static gradient backgrounds and dot patterns. Adding the LaserFlow animation component will create a more engaging, modern, and dynamic visual experience that:
- Captures attention immediately with smooth, flowing laser beam animations
- Differentiates our landing page from competitors with premium visual effects
- Reinforces the "cutting-edge technology" message of Metis MCP Server
- Maintains performance with hardware-accelerated animations
- Enhances perceived quality without sacrificing load times

Market research shows that animated hero sections increase user engagement by 20-30% and reduce bounce rates by 15%.

## What Changes
- **Add LaserFlow component** from `@react-bits/LaserFlow-TS-TW` via shadcn
- **Redesign hero layout** to incorporate LaserFlow as background layer while maintaining all existing copy
- **Implement via TDD** - write tests first, then implementation
- **Maintain existing content**:
  - Badge: "Production-Ready MCP Server"
  - Headline: "Supercharge Your AI Applications with Metis MCP Server"
  - Subheadline: Full description paragraph
  - CTAs: "Get Started" + "View on GitHub"
  - Social proof stats: Open Source, TypeScript, Production Ready
- **Layer structure**:
  - Background: LaserFlow animation (absolute positioned)
  - Mid-layer: Existing gradient overlays (adjusted opacity)
  - Foreground: Content (text, buttons, badge)
- **Testing infrastructure**:
  - Add Vitest + React Testing Library
  - Component unit tests
  - Visual regression safeguards
  - Performance benchmarks

## Impact
- **Affected specs**: Modifies `marketing-landing` capability
- **Affected code**:
  - `package.json` - Add vitest, @testing-library/react, @testing-library/jest-dom
  - `vitest.config.ts` - New file for test configuration
  - `src/components/ui/laser-flow.tsx` - New component from shadcn (or similar path)
  - `src/app/_components/hero-section.tsx` - Enhanced with LaserFlow background
  - `__tests__/hero-section.test.tsx` - New test file
- **User experience**:
  - More engaging first impression
  - Premium feel that matches "level 99" design quality
  - Smooth animations that don't distract from content
  - No impact on accessibility or keyboard navigation
- **Dependencies**:
  - LaserFlow component (via shadcn)
  - Vitest (dev dependency)
  - React Testing Library (dev dependency)
- **Performance**:
  - LaserFlow uses CSS transforms (GPU accelerated)
  - Lazy loading if bundle size increases significantly
  - Target: &lt;5% bundle size increase

## Success Criteria
- All existing copy remains unchanged
- LaserFlow animation renders smoothly (60fps)
- Tests pass with &gt;80% coverage for hero component
- Lighthouse Performance score remains &gt;90
- Build time increase &lt;10%
- Accessibility maintained (WCAG 2.1 AA)
- Works seamlessly in both light and dark themes

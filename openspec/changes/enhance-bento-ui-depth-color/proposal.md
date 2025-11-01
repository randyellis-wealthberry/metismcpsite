# Change Proposal: Enhance Bento UI with Depth & Color Masterclass

**Change ID**: `enhance-bento-ui-depth-color`
**Status**: Proposed
**Created**: 2025-10-31
**Owner**: Development Team

## Why This Change?

### Problem Statement

The Metis MCP landing page has an excellent design system foundation in `src/styles/globals.css` with:
- Complete HSL neutral scale (--neutral-0 to --neutral-100)
- Typography scale with rem units (Major Third 1.25 ratio)
- Semantic color variables (--bg-page, --bg-surface, --text-primary, etc.)
- Dual-shadow system for realistic depth
- Automatic light/dark theme support with 100-lightness flipping

However, the current implementation has a significant gap:

1. **FeaturesSection** uses hardcoded Tailwind classes (`bg-white dark:bg-black`, `text-neutral-900 dark:text-neutral-100`) instead of semantic variables
2. **Kokonut UI BentoCard** uses hardcoded neutral colors (`neutral-50/60`, `neutral-200/60`) that don't integrate with the design system
3. **Missing Tailwind utilities** for semantic variables, requiring verbose `bg-[var(--bg-surface)]` syntax
4. **No depth enhancement** leveraging the UI Depth & Color Masterclass principles

This creates maintenance issues, inconsistent theming, and fails to leverage the comprehensive design system already built.

### User Impact

**Current State**:
- Inconsistent color usage across components
- Harder to maintain theme consistency
- Missed opportunities for visual hierarchy and depth
- Verbose code with hardcoded values

**Desired State**:
- Consistent use of design system throughout
- Clear visual hierarchy using typography + color + depth
- Easy theme customization via semantic variables
- Clean, maintainable component code

## What Changes?

### High-Level Overview

Apply UI Depth & Color Masterclass principles by:
1. Extending Tailwind @theme with semantic color utilities
2. Creating an EnhancedBentoCard wrapper component
3. Refactoring FeaturesSection to use design system variables
4. Adding depth enhancement utilities

### Affected Components

- `src/styles/globals.css` - Add Tailwind @theme utilities
- `src/components/ui/enhanced-bento-card.tsx` - New wrapper component
- `src/app/_components/features-section.tsx` - Use enhanced component

### Design System Integration

The change bridges the gap between the existing design system and the implementation by:
- Exposing semantic variables as Tailwind utilities (e.g., `bg-surface` instead of `bg-[var(--bg-surface)]`)
- Implementing dual-shadow system from the design system
- Using typography scale utilities consistently
- Applying color layering for depth (3-4 shades, 10% increments)

## Impact Analysis

### Benefits

1. **Consistency**: All components use the same semantic color system
2. **Maintainability**: Change theme by updating CSS variables, not hunting through components
3. **Visual Hierarchy**: Clear information architecture through typography + color + depth
4. **Theme Support**: Automatic light/dark mode flipping using 100-lightness rule
5. **Developer Experience**: Clean Tailwind utilities instead of verbose var() syntax

### Risks

1. **Visual Regression**: Changes to card styling could affect layout
   - **Mitigation**: Maintain same visual structure, only enhance depth/color
2. **Bundle Size**: Additional CSS utilities
   - **Mitigation**: Minimal impact, utilities are purged by Tailwind
3. **Breaking Changes**: None - wrapper component maintains Kokonut UI API

### Migration Path

No migration needed - this is an enhancement, not a breaking change:
- FeaturesSection is refactored to use new component
- Old BentoCard remains available from Kokonut UI
- Design system variables already exist

## Alternatives Considered

### Alternative 1: Fork Kokonut UI BentoCard
**Pros**: Full control over component
**Cons**: Lose upstream updates, maintenance burden
**Decision**: Rejected - wrapper component is better

### Alternative 2: Use Inline Styles
**Pros**: Direct CSS variable usage
**Cons**: No Tailwind JIT, verbose, harder to maintain
**Decision**: Rejected - Tailwind utilities are cleaner

### Alternative 3: Override with Tailwind Config
**Pros**: Traditional approach
**Cons**: Tailwind v4 uses @theme, not config file
**Decision**: Rejected - doesn't match project architecture

## Acceptance Criteria

- [ ] Tailwind @theme extended with semantic utilities (bg-surface, text-primary, etc.)
- [ ] EnhancedBentoCard component created with design system integration
- [ ] FeaturesSection refactored to use enhanced component
- [ ] Depth enhancement utilities implemented (dual shadows, color layering)
- [ ] Light/dark theme switching works correctly
- [ ] Visual regression testing passes
- [ ] TypeScript compilation succeeds
- [ ] OpenSpec validation passes (`openspec validate enhance-bento-ui-depth-color --strict`)

## References

- UI Depth & Color Masterclass Agent document
- Existing design system in `src/styles/globals.css`
- Kokonut UI BentoCard component
- Tailwind CSS v4 documentation

## Next Steps

1. Review and approve this proposal
2. Create implementation tasks in `tasks.md`
3. Document technical decisions in `design.md`
4. Create spec deltas in `specs/features-ui/spec.md`
5. Implement changes following task checklist
6. Validate with `openspec validate --strict`
7. Test in browser
8. Archive change after deployment

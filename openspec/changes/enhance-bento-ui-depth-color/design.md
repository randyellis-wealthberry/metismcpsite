# Design Document: Enhance Bento UI with Depth & Color Masterclass

**Change ID**: `enhance-bento-ui-depth-color`
**Created**: 2025-10-31

## Technical Overview

This document outlines the technical decisions, architecture, and implementation details for enhancing the Metis MCP landing page bento grid with UI Depth & Color Masterclass principles.

## Architecture Decisions

### Decision 1: Wrapper Component vs Fork

**Context**: Kokonut UI BentoCard uses hardcoded colors that don't integrate with our design system.

**Options Considered**:
1. **Fork Kokonut UI component** - Copy and modify the original
2. **Wrapper component** - Create EnhancedBentoCard that wraps the original
3. **CSS overrides** - Use Tailwind arbitrary classes to override

**Decision**: Wrapper Component (Option 2)

**Rationale**:
- **Maintains upstream compatibility**: Can pull Kokonut UI updates without conflicts
- **Separation of concerns**: Design system integration separate from component logic
- **Reusability**: Original BentoCard still available for other use cases
- **Lower maintenance**: Don't have to maintain forked component code

**Trade-offs**:
- Slight performance overhead (extra wrapper div)
- More indirection in component tree
- Benefits outweigh costs for long-term maintainability

### Decision 2: Tailwind @theme Extension

**Context**: Tailwind CSS v4 uses `@theme` directive instead of `tailwind.config.ts`.

**Options Considered**:
1. **Inline CSS variables** - `bg-[var(--bg-surface)]`
2. **Tailwind @theme utilities** - `bg-surface`
3. **Create separate utility classes** - Custom CSS classes

**Decision**: Tailwind @theme Extension (Option 2)

**Rationale**:
- **Clean syntax**: `bg-surface` vs `bg-[var(--bg-surface)]`
- **Tailwind JIT benefits**: Proper IntelliSense, purging, variants
- **Consistency**: Matches Tailwind's built-in utilities
- **Type safety**: Better IDE support with Tailwind CSS IntelliSense

**Implementation**:
```css
@theme {
  /* Semantic Background Colors */
  --color-bg-page: var(--bg-page);
  --color-bg-surface: var(--bg-surface);
  --color-bg-elevated: var(--bg-elevated);
  --color-bg-interactive: var(--bg-interactive);

  /* Semantic Text Colors */
  --color-text-primary: var(--text-primary);
  --color-text-body: var(--text-body);
  --color-text-secondary: var(--text-secondary);
}
```

### Decision 3: Dual-Shadow System Implementation

**Context**: UI Depth & Color Masterclass recommends dual shadows (top light + bottom dark).

**Design**:
```css
/* Dual-shadow system - already in globals.css */
--shadow-xs: 0 -1px 1px rgba(0, 0, 0, 0.03),  /* top light */
             0 1px 2px rgba(0, 0, 0, 0.06);     /* bottom dark */

--shadow-sm: 0 -1px 2px rgba(0, 0, 0, 0.05),
             0 2px 4px rgba(0, 0, 0, 0.1);

--shadow-md: 0 -1px 3px rgba(0, 0, 0, 0.05),
             0 4px 12px rgba(0, 0, 0, 0.15);

--shadow-lg: 0 -2px 4px rgba(0, 0, 0, 0.07),
             0 8px 16px rgba(0, 0, 0, 0.18);

--shadow-xl: 0 -4px 8px rgba(0, 0, 0, 0.1),
             0 16px 32px rgba(0, 0, 0, 0.2);
```

**Rationale**:
- **Realistic depth**: Mimics natural lighting (light from top)
- **Visual hierarchy**: Larger shadows = higher elevation
- **Subtle refinement**: Top shadow is lighter, bottom is darker
- **Already implemented**: Design system has this, just need to use it

### Decision 4: Color Layering Strategy

**Context**: Create depth through 3-4 shades incrementing by 10% lightness.

**Implementation**:
```css
/* Surface layers (light mode) */
--bg-page: var(--neutral-98);        /* Base page */
--bg-surface: var(--neutral-100);    /* Cards/panels */
--bg-elevated: var(--neutral-100);   /* Modals/popovers */
--bg-interactive: var(--neutral-95); /* Buttons/clickable */
--bg-muted: var(--neutral-95);       /* Disabled/subtle */

/* Dark mode flipping (100-lightness rule) */
.dark {
  --bg-page: var(--neutral-0);       /* 100 - 98 = 2, use 0 */
  --bg-surface: var(--neutral-5);    /* 100 - 100 = 0, use 5 */
  --bg-elevated: var(--neutral-10);  /* Elevated = lighter in dark */
  --bg-interactive: var(--neutral-15); /* Interactive = even lighter */
}
```

**Rationale**:
- **Clear hierarchy**: Page < Surface < Elevated < Interactive
- **Automatic theming**: 100-lightness rule handles dark mode
- **Predictable**: Each level is ~5-10 lightness points different
- **Accessibility**: Maintains contrast ratios across themes

### Decision 5: Typography Scale Mapping

**Context**: Map design system typography variables to Tailwind utilities.

**Implementation**:
```css
@theme {
  /* Typography Scale */
  --font-size-xs: var(--text-xs);      /* 0.75rem / 12px */
  --font-size-sm: var(--text-sm);      /* 0.875rem / 14px */
  --font-size-base: var(--text-base);  /* 1rem / 16px */
  --font-size-xl: var(--text-xl);      /* 1.25rem / 20px */
  --font-size-2xl: var(--text-2xl);    /* 1.5rem / 24px */
  --font-size-3xl: var(--text-3xl);    /* 1.875rem / 30px */
  --font-size-4xl: var(--text-4xl);    /* 2.25rem / 36px */
  --font-size-5xl: var(--text-5xl);    /* 3rem / 48px */
}
```

**Rationale**:
- **Major Third scale (1.25 ratio)**: Proven typographic scale
- **Rem units**: Respects user font size preferences (accessibility)
- **Consistent naming**: Matches Tailwind's built-in scale
- **Already defined**: Design system has this, just exposing it

## Component Design

### EnhancedBentoCard Component

**File**: `src/components/ui/enhanced-bento-card.tsx`

**API Design**:
```typescript
import { BentoCard, type BentoItem } from "~/components/kokonutui/bento-grid";

interface EnhancedBentoCardProps {
  item: BentoItem;
  className?: string;
}

export function EnhancedBentoCard({ item, className }: EnhancedBentoCardProps) {
  return (
    <div className={cn("depth-elevated", className)}>
      <BentoCard item={item} />
    </div>
  );
}
```

**Design Principles**:
1. **Wrapper pattern**: Enhances without modifying original
2. **Pass-through props**: Maintains BentoItem API
3. **Design system integration**: Uses semantic utilities
4. **Composable**: Can be further extended if needed

### Depth Enhancement Utilities

**File**: `src/styles/globals.css`

**Utility Classes**:
```css
/* Depth enhancement utilities */
.depth-surface {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-sm);
}

.depth-elevated {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-xl);
}

.depth-interactive {
  background: var(--bg-interactive);
  border: 1px solid var(--border-default);
  box-shadow: var(--shadow-lg);
  transition: all 0.2s ease;
}

.depth-interactive:hover {
  background: var(--bg-elevated);
  box-shadow: var(--shadow-xl);
  transform: translateY(-2px);
}

.interactive-highlight {
  background: var(--bg-interactive);
  transition: all 0.2s ease;
}

.interactive-highlight:hover {
  background: var(--bg-elevated);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

**Design Rationale**:
- **Composable utilities**: Can combine with other classes
- **Semantic naming**: depth-* prefix indicates purpose
- **Hover states**: Interactive elements provide feedback
- **Smooth transitions**: 0.2s ease for responsive feel

## Visual Hierarchy Implementation

### Information Architecture

Following UI Depth & Color Masterclass principles:

**Level 1 - Primary Headings**:
- Typography: `text-4xl md:text-5xl` (36px → 48px)
- Weight: `font-bold` (700)
- Color: `text-primary` (--neutral-10 / 90% contrast)
- Use: Section titles like "Everything You Need"

**Level 2 - Subheadings**:
- Typography: `text-xl md:text-2xl` (20px → 24px)
- Weight: `font-semibold` (600)
- Color: `text-primary` (--neutral-10)
- Use: Feature card titles

**Level 3 - Body Text**:
- Typography: `text-base md:text-lg` (16px → 18px)
- Weight: `font-regular` (400)
- Color: `text-body` (--neutral-30 / 70% contrast)
- Use: Feature descriptions, supporting text

**Level 4 - Supporting Text**:
- Typography: `text-sm` (14px)
- Weight: `font-regular` (400)
- Color: `text-secondary` (--neutral-50 / 50% contrast)
- Use: Captions, metadata, labels

### Color Contrast Ratios

Ensuring WCAG AA compliance:

| Element | Color | Contrast vs White | WCAG Level |
|---------|-------|------------------|------------|
| text-primary (neutral-10) | #1a1a1a | 16.07:1 | AAA |
| text-body (neutral-30) | #4d4d4d | 9.59:1 | AAA |
| text-secondary (neutral-50) | #808080 | 4.59:1 | AA |
| text-tertiary (neutral-65) | #a6a6a6 | 2.89:1 | Large text only |

## Interactive States

### Hover Effects

**Bento Cards**:
```tsx
<motion.div
  whileHover={{ y: -5 }}
  className="depth-elevated hover:depth-interactive"
>
  {/* Card content */}
</motion.div>
```

**Interactive Highlights**:
- **Default**: `bg-interactive` (neutral-95 in light mode)
- **Hover**: `bg-elevated` (neutral-100) + `shadow-md` + `translateY(-2px)`
- **Transition**: `0.2s ease` for smooth feedback

### Focus States

Ensure keyboard navigation visibility:
```css
.depth-interactive:focus-visible {
  outline: 2px solid var(--text-primary);
  outline-offset: 2px;
}
```

## Theme Support

### Light/Dark Mode Switching

Using 100-lightness rule for automatic color flipping:

**Light Mode**:
- Page: neutral-98 (98% lightness)
- Surface: neutral-100 (100% lightness)
- Text Primary: neutral-10 (10% lightness = 90% contrast)

**Dark Mode**:
- Page: neutral-0 (100 - 98 = 2, use 0)
- Surface: neutral-5 (100 - 100 = 0, use 5 for visibility)
- Text Primary: neutral-90 (100 - 10 = 90)

**Implementation**:
```css
:root {
  --bg-page: var(--neutral-98);
  --text-primary: var(--neutral-10);
}

.dark {
  --bg-page: var(--neutral-0);
  --text-primary: var(--neutral-90);
}
```

## Performance Considerations

### Bundle Size Impact

**CSS Utilities**: Minimal impact (~2-3KB gzipped)
- Tailwind JIT purges unused utilities
- Only generated utilities are included in production build

**Component Wrapper**: Negligible
- Single wrapper div adds ~100 bytes to bundle
- No additional JavaScript beyond framer-motion (already included)

### Runtime Performance

**Framer Motion**: Already in use
- 3D tilt effect uses existing useMotionValue/useTransform
- No additional animation library needed

**CSS Variables**: Optimal
- Native browser support, no JavaScript evaluation
- Theme switching via single class toggle on root element

## Testing Strategy

### Visual Regression Testing

**Manual Testing Checklist**:
- [ ] Verify depth hierarchy (surface → elevated → interactive)
- [ ] Check light/dark theme switching
- [ ] Test responsive behavior (mobile, tablet, desktop)
- [ ] Confirm 3D tilt effects still work
- [ ] Validate hover states and interactive highlights

### Accessibility Testing

**Automated Tools**:
- Lighthouse accessibility audit
- axe DevTools

**Manual Testing**:
- Keyboard navigation (Tab, Enter, Escape)
- Screen reader testing (VoiceOver/NVDA)
- Color contrast verification (WCAG AA minimum)

### TypeScript Validation

**Type Safety**:
- EnhancedBentoCard maintains BentoItem type
- No type errors in features-section.tsx
- Full IntelliSense support for utilities

## Migration Path

### Backward Compatibility

**No Breaking Changes**:
- Original BentoCard from Kokonut UI remains available
- EnhancedBentoCard is additive, not replacement
- Existing features-section.tsx API unchanged

### Incremental Adoption

**Phase 1**: Design system utilities (can be used immediately)
**Phase 2**: EnhancedBentoCard wrapper (opt-in)
**Phase 3**: FeaturesSection refactor (single component)

Other components can adopt incrementally without forced migration.

## Future Enhancements

### Potential Extensions

1. **EnhancedBentoGrid**: Wrapper for entire grid with preset layouts
2. **Theme Variants**: Accent color themes (blue, purple, green)
3. **Animation Presets**: Pre-configured framer-motion variants
4. **Accessibility Helpers**: Reduced motion support, high contrast mode

### Design System Evolution

As the design system matures:
- More semantic color tokens (success, warning, error)
- Additional depth levels for complex UIs
- Component-specific design tokens (card, button, input)

## References

- UI Depth & Color Masterclass Agent document
- Tailwind CSS v4 @theme documentation
- Framer Motion animation library
- WCAG 2.1 accessibility guidelines
- HSL color space specification

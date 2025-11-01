# Implementation Tasks: Enhance Bento UI with Depth & Color Masterclass

**Change ID**: `enhance-bento-ui-depth-color`
**Status**: In Progress

## Task Checklist

### Phase 1: OpenSpec Proposal Setup
- [x] Create change directory structure
- [x] Write proposal.md with Why/What/Impact
- [ ] Write tasks.md (this file)
- [ ] Write design.md with technical decisions
- [ ] Create spec deltas for features-ui capability
- [ ] Validate OpenSpec proposal: `openspec validate enhance-bento-ui-depth-color --strict`

### Phase 2: Design System Enhancement
- [ ] **Task 2.1**: Extend Tailwind @theme in `src/styles/globals.css`
  - Add semantic background utilities (bg-page, bg-surface, bg-elevated, bg-interactive)
  - Add semantic text utilities (text-primary, text-body, text-secondary, text-tertiary)
  - Add semantic border utilities (border-subtle, border-default, border-strong)
  - Add shadow utilities (shadow-xs, shadow-sm, shadow-md, shadow-lg, shadow-xl)
  - Add depth enhancement utilities (depth-surface, depth-elevated, depth-interactive)
  - **Acceptance**: `bg-surface`, `text-primary`, etc. work as Tailwind classes

- [ ] **Task 2.2**: Add depth enhancement utility classes
  - Create `.depth-surface` class (bg-surface + border-subtle + shadow-sm)
  - Create `.depth-elevated` class (bg-elevated + border-default + shadow-md)
  - Create `.depth-interactive` class (bg-interactive + hover effects + shadow-lg)
  - Add interactive highlight utilities (.interactive-highlight with hover states)
  - **Acceptance**: Utility classes apply dual-shadow system and color layering

### Phase 3: Component Implementation
- [ ] **Task 3.1**: Create `src/components/ui/enhanced-bento-card.tsx`
  - Import BentoCard from Kokonut UI
  - Create wrapper component that accepts same BentoItem props
  - Apply design system variables for backgrounds, borders, shadows
  - Maintain 3D tilt effect from original component
  - Use semantic color utilities (bg-surface, text-primary, etc.)
  - Add depth enhancement classes
  - **Acceptance**: Component renders with design system integration

- [ ] **Task 3.2**: Update TypeScript types for EnhancedBentoCard
  - Export BentoItem type from enhanced component
  - Ensure type compatibility with Kokonut UI
  - Add JSDoc comments documenting design system integration
  - **Acceptance**: TypeScript compilation succeeds

### Phase 4: Features Section Refactor
- [ ] **Task 4.1**: Refactor `src/app/_components/features-section.tsx`
  - Replace hardcoded `bg-white dark:bg-black` with `bg-page`
  - Replace hardcoded text colors with semantic utilities (text-primary, text-body)
  - Import EnhancedBentoCard instead of BentoCard
  - Update gradient backgrounds to use design system variables
  - Apply typography scale utilities consistently
  - **Acceptance**: No hardcoded colors, all using design system

- [ ] **Task 4.2**: Update feature card styling
  - Apply depth-elevated class to cards
  - Use interactive-highlight for hover states
  - Ensure proper color layering (3-4 shades, 10% increments)
  - Verify dual-shadow system is applied
  - **Acceptance**: Cards show clear depth hierarchy

### Phase 5: Validation & Testing
- [ ] **Task 5.1**: Run OpenSpec validation
  - Execute: `openspec validate enhance-bento-ui-depth-color --strict`
  - Fix any validation errors
  - **Acceptance**: Validation passes with no errors

- [ ] **Task 5.2**: TypeScript compilation
  - Execute: `npm run typecheck`
  - Fix any type errors
  - **Acceptance**: No TypeScript errors

- [ ] **Task 5.3**: Build verification
  - Execute: `npm run build`
  - Fix any build errors
  - **Acceptance**: Production build succeeds

- [ ] **Task 5.4**: Visual testing in browser
  - Start dev server: `npm run dev`
  - Navigate to features section
  - Verify depth hierarchy (surface → elevated → interactive)
  - Test light/dark theme switching
  - Check responsive behavior (mobile, tablet, desktop)
  - Verify 3D tilt effects still work
  - Test hover states and interactive highlights
  - **Acceptance**: Visual design matches UI Depth & Color Masterclass principles

- [ ] **Task 5.5**: Accessibility testing
  - Check color contrast ratios (WCAG AA minimum)
  - Verify focus states are visible
  - Test keyboard navigation
  - **Acceptance**: Meets WCAG 2.1 AA standards

### Phase 6: Documentation & Archival
- [ ] **Task 6.1**: Update component documentation
  - Add usage examples for EnhancedBentoCard
  - Document design system integration
  - Add JSDoc comments for utilities

- [ ] **Task 6.2**: Archive change proposal
  - Move to `openspec/archive/enhance-bento-ui-depth-color/`
  - Update status to "Completed"
  - Add completion date
  - **Acceptance**: Change archived following OpenSpec workflow

## Task Dependencies

```
Phase 1 (OpenSpec Setup)
  └─> Phase 2 (Design System Enhancement)
       ├─> Task 2.1 (Tailwind @theme)
       └─> Task 2.2 (Depth utilities)
            └─> Phase 3 (Component Implementation)
                 ├─> Task 3.1 (EnhancedBentoCard)
                 └─> Task 3.2 (TypeScript types)
                      └─> Phase 4 (Features Section Refactor)
                           ├─> Task 4.1 (Refactor section)
                           └─> Task 4.2 (Update styling)
                                └─> Phase 5 (Validation & Testing)
                                     └─> Phase 6 (Documentation & Archival)
```

## Notes

- Follow UI Depth & Color Masterclass principles throughout implementation
- Maintain backward compatibility - Kokonut UI BentoCard still available
- Use semantic variables for all colors (no hardcoded values)
- Implement dual-shadow system (top light + bottom dark)
- Apply color layering for depth (3-4 shades, 10% increments)
- Ensure 100-lightness rule for dark mode color flipping
- Test on all viewport sizes before marking tasks complete

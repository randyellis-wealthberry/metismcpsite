# Change Proposal: Refactor Bento Grid using TDD & Design System Integration

**Change ID**: `refactor-bento-grid-tdd`
**Status**: Proposed
**Created**: 2025-10-31
**Owner**: Development Team

## Why This Change?

### Problem Statement

The Kokonut UI bento-grid component provided has several critical issues:

1. **Import Path Incompatibility**: Uses `@/` imports instead of project's `~/` path aliases
2. **Hardcoded Colors**: Uses hardcoded neutral colors (`neutral-50/60`, `neutral-200/60`) instead of semantic design system variables
3. **Missing Design System Integration**: Doesn't leverage our comprehensive design system (depth utilities, semantic colors, dual shadows)
4. **No Tests**: Zero test coverage for a complex interactive component
5. **Missing Icon Dependencies**: References icon components that don't exist in our project
6. **Inconsistent with EnhancedBentoCard**: Doesn't integrate with our existing wrapper component

### Current State Problems

```tsx
// ❌ Current implementation issues:
import Anthropic from "@/components/icons/anthropic"; // Wrong path alias
className="bg-gradient-to-b from-neutral-50/60..." // Hardcoded colors
shadow-[0_4px_20px_rgb(0,0,0,0.04)] // Custom shadow, not design system
```

### User Impact

**Without This Change**:
- Component won't compile (missing imports)
- Inconsistent theming across components
- No test coverage = higher bug risk
- Maintenance nightmare with hardcoded values

**With This Change**:
- Fully integrated with design system
- Comprehensive test coverage
- Consistent visual depth across all bento cards
- Easy theme customization via semantic variables

## What Changes?

### High-Level Overview

Following **Test-Driven Development (TDD)** and **OpenSpec methodology**, we will:

1. **Write Tests First (RED)**: Create comprehensive test suites before refactoring
2. **Refactor Component (GREEN)**: Fix imports, integrate design system, make tests pass
3. **Improve Code Quality (REFACTOR)**: Optimize and clean up while maintaining passing tests
4. **OpenSpec Documentation**: Document all changes following OpenSpec workflow

### Affected Files

**New Files**:
- `src/components/kokonutui/bento-grid.test.tsx` - Component tests
- `src/components/ui/enhanced-bento-card.test.tsx` - Wrapper tests
- `src/components/kokonutui/icons/anthropic.tsx` - Icon stub
- `src/components/kokonutui/icons/google.tsx` - Icon stub
- `src/components/kokonutui/icons/openai.tsx` - Icon stub
- `src/components/kokonutui/icons/mistral.tsx` - Icon stub

**Modified Files**:
- `src/components/kokonutui/bento-grid.tsx` - Main refactor
- `src/components/ui/enhanced-bento-card.tsx` - Integration updates (if needed)

**Verified Files**:
- `src/app/_components/features-section.tsx` - Ensure compatibility

### Design System Integration Details

#### 1. Import Path Migration
```tsx
// Before
import Component from "@/components/..."

// After
import Component from "~/components/..."
```

#### 2. Semantic Color Migration
```tsx
// Before
className="bg-gradient-to-b from-neutral-50/60 via-neutral-50/40 to-neutral-50/30"
className="border-neutral-200/60"

// After
className="bg-gradient-to-b from-bg-surface/60 via-bg-surface/40 to-bg-surface/30"
className="border-border-subtle"
```

#### 3. Shadow System Migration
```tsx
// Before
className="shadow-[0_4px_20px_rgb(0,0,0,0.04)]"

// After
className="shadow-lg" // Uses dual-shadow system: 0 -2px 4px (top light) + 0 8px 16px (bottom dark)
```

#### 4. Text Color Migration
```tsx
// Before
className="text-neutral-900 dark:text-neutral-100"

// After
className="text-text-primary" // Automatic light/dark via 100-lightness rule
```

## Impact Analysis

### Benefits

1. **Design System Consistency**: All components use same semantic color system
2. **Test Coverage**: TDD ensures 100% test coverage for bento grid
3. **Maintainability**: Change theme by updating CSS variables, not component code
4. **Type Safety**: TypeScript + tests catch errors before production
5. **Accessibility**: Tests verify WCAG AA compliance
6. **Visual Depth**: Automatic dual-shadow system for professional appearance

### Risks & Mitigation

1. **Visual Regression**
   - **Risk**: Refactored component looks different
   - **Mitigation**: Visual regression testing in browser before/after

2. **Breaking Changes to features-section**
   - **Risk**: Integration breaks existing features section
   - **Mitigation**: Integration tests + manual verification

3. **Test Suite Complexity**
   - **Risk**: Tests become maintenance burden
   - **Mitigation**: Use React Testing Library best practices, focused tests

### Migration Path

**Phase 1**: No user-facing changes (tests only)
**Phase 2**: Refactor bento-grid.tsx (internal changes)
**Phase 3**: Verify features-section.tsx still works
**Phase 4**: Deploy with confidence (tests pass)

**Rollback**: Git revert if issues arise (tests ensure safety)

## TDD Methodology

### Red-Green-Refactor Cycle

**1. RED Phase - Write Failing Tests**
```typescript
// Write tests that fail because component doesn't use design system yet
describe('BentoCard', () => {
  it('applies semantic background colors', () => {
    render(<BentoCard item={mockItem} />);
    expect(card).toHaveClass('bg-bg-surface'); // ❌ FAILS initially
  });
});
```

**2. GREEN Phase - Make Tests Pass**
```tsx
// Refactor component to use design system
className="bg-bg-surface" // ✅ Test now PASSES
```

**3. REFACTOR Phase - Improve Code Quality**
```tsx
// Clean up, optimize, maintain passing tests
// Extract repeated patterns, improve readability
```

## Alternatives Considered

### Alternative 1: Skip Tests, Direct Refactor
**Pros**: Faster initial implementation
**Cons**: No safety net, higher bug risk, no documentation of expected behavior
**Decision**: Rejected - TDD provides confidence and documentation

### Alternative 2: Use Original Kokonut UI As-Is
**Pros**: No refactoring work needed
**Cons**: Import paths broken, no design system integration, visual inconsistency
**Decision**: Rejected - Must integrate with our design system

### Alternative 3: Fork Kokonut UI Completely
**Pros**: Full control over implementation
**Cons**: Lose upstream updates, maintenance burden, code duplication
**Decision**: Rejected - Refactor is cleaner

## Acceptance Criteria

- [ ] All tests pass (`npm run test`)
- [ ] Test coverage ≥ 80% for bento-grid components
- [ ] TypeScript compiles (`npm run typecheck`)
- [ ] No hardcoded colors - 100% semantic variables used
- [ ] Depth shadows from design system (shadow-lg base, shadow-xl hover)
- [ ] All imports use `~/` path alias
- [ ] Icon stub components created and working
- [ ] Accessibility tests pass (WCAG AA keyboard navigation, ARIA)
- [ ] Visual regression testing passes in browser
- [ ] Integration with features-section.tsx verified
- [ ] OpenSpec validation passes (`openspec validate refactor-bento-grid-tdd --strict`)
- [ ] Gap spacing maintained (gap-1 md:gap-2)

## References

- UI Depth & Color Masterclass Agent document
- Existing design system: `src/styles/globals.css`
- Current EnhancedBentoCard: `src/components/ui/enhanced-bento-card.tsx`
- Kokonut UI source code (provided)
- TDD methodology: Red-Green-Refactor cycle
- React Testing Library documentation
- Vitest testing framework

## Next Steps

1. Review and approve this proposal
2. Create implementation tasks in `tasks.md`
3. Document technical decisions in `design.md`
4. Create spec deltas in `specs/bento-grid-component/spec.md`
5. **RED**: Write failing tests for BentoCard and EnhancedBentoCard
6. **GREEN**: Refactor components to make tests pass
7. **REFACTOR**: Optimize code while maintaining passing tests
8. Validate with `openspec validate --strict`
9. Visual test in browser
10. Archive change after deployment

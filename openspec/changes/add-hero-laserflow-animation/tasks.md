# Implementation Tasks - LaserFlow Hero Enhancement

## 1. OpenSpec Setup
- [x] 1.1 Create change directory structure
- [x] 1.2 Write proposal.md
- [ ] 1.3 Create tasks.md (this file)
- [ ] 1.4 Write spec deltas
- [ ] 1.5 Validate change with `openspec validate add-hero-laserflow-animation --strict`

## 2. Testing Infrastructure Setup (TDD Phase 1)
- [ ] 2.1 Install Vitest: `npm install -D vitest @vitejs/plugin-react`
- [ ] 2.2 Install React Testing Library: `npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event`
- [ ] 2.3 Install jsdom for DOM testing: `npm install -D jsdom`
- [ ] 2.4 Create `vitest.config.ts` with Next.js compatible configuration
- [ ] 2.5 Create `vitest.setup.ts` for global test setup
- [ ] 2.6 Add test script to package.json: `"test": "vitest"`
- [ ] 2.7 Add test coverage script: `"test:coverage": "vitest --coverage"`
- [ ] 2.8 Create `__tests__` directory structure

## 3. Write Failing Tests (TDD Phase 2 - RED)
- [ ] 3.1 Create `__tests__/components/hero-section.test.tsx`
- [ ] 3.2 Test: Hero renders without crashing
- [ ] 3.3 Test: All text content is present (badge, headline, subheadline)
- [ ] 3.4 Test: Both CTA buttons render with correct links
- [ ] 3.5 Test: Social proof stats are visible
- [ ] 3.6 Test: LaserFlow component is rendered (will fail initially)
- [ ] 3.7 Test: LaserFlow has correct z-index layering
- [ ] 3.8 Test: Animations respect prefers-reduced-motion
- [ ] 3.9 Test: Component is accessible (aria labels, keyboard nav)
- [ ] 3.10 Run tests - verify they fail appropriately

## 4. Install LaserFlow Component
- [ ] 4.1 Run `npx shadcn@latest add @react-bits/LaserFlow-TS-TW`
- [ ] 4.2 Verify component files created in `src/components/ui/`
- [ ] 4.3 Review component props and API
- [ ] 4.4 Test component in isolation (create simple test page if needed)
- [ ] 4.5 Document component usage patterns

## 5. Implement LaserFlow in Hero (TDD Phase 3 - GREEN)
- [ ] 5.1 Import LaserFlow component in hero-section.tsx
- [ ] 5.2 Add LaserFlow as background layer (absolute positioning)
- [ ] 5.3 Adjust z-index structure:
  - LaserFlow: z-0 (bottom)
  - Gradient overlays: z-10
  - Content: z-20 (top)
- [ ] 5.4 Configure LaserFlow props (colors, speed, density, etc.)
- [ ] 5.5 Ensure LaserFlow respects theme (light/dark mode)
- [ ] 5.6 Add proper TypeScript types for LaserFlow
- [ ] 5.7 Optimize for mobile (scale/adjust animation complexity)
- [ ] 5.8 Add pointer-events-none to prevent interaction blocking

## 6. Verify Tests Pass (TDD Phase 4 - GREEN Validation)
- [ ] 6.1 Run `npm run test` - all tests should pass
- [ ] 6.2 Verify LaserFlow renders correctly in tests
- [ ] 6.3 Check test coverage: `npm run test:coverage`
- [ ] 6.4 Aim for >80% coverage on hero-section.tsx
- [ ] 6.5 Fix any failing tests

## 7. Refactor & Optimize (TDD Phase 5 - REFACTOR)
- [ ] 7.1 Extract LaserFlow config to separate constant/file if complex
- [ ] 7.2 Add JSDoc comments for future maintainability
- [ ] 7.3 Optimize animation performance if needed
- [ ] 7.4 Consider lazy loading LaserFlow if bundle size significant
- [ ] 7.5 Ensure code follows project style guidelines
- [ ] 7.6 Run `npm run lint:fix` to auto-fix linting issues

## 8. Accessibility Validation
- [ ] 8.1 Test keyboard navigation (all buttons reachable)
- [ ] 8.2 Verify focus indicators visible above LaserFlow
- [ ] 8.3 Test with screen reader (VoiceOver or NVDA)
- [ ] 8.4 Ensure animations respect prefers-reduced-motion
- [ ] 8.5 Verify ARIA labels are correct
- [ ] 8.6 Check color contrast ratios still meet WCAG AA

## 9. Performance Validation
- [ ] 9.1 Run `npm run build` - ensure build succeeds
- [ ] 9.2 Check bundle size: compare before/after
- [ ] 9.3 Run Lighthouse audit (target score >90)
- [ ] 9.4 Test on low-end devices (throttle CPU in DevTools)
- [ ] 9.5 Verify 60fps animation (use Performance tab)
- [ ] 9.6 Check for layout shift (CLS metric)
- [ ] 9.7 Measure First Contentful Paint (target <1.5s)

## 10. Cross-Browser Testing
- [ ] 10.1 Test in Chrome (desktop + mobile)
- [ ] 10.2 Test in Firefox
- [ ] 10.3 Test in Safari (desktop + iOS)
- [ ] 10.4 Test in Edge
- [ ] 10.5 Verify LaserFlow animations work in all browsers
- [ ] 10.6 Check for any visual regressions

## 11. Responsive Design Validation
- [ ] 11.1 Test at 320px width (mobile)
- [ ] 11.2 Test at 768px width (tablet)
- [ ] 11.3 Test at 1024px width (desktop)
- [ ] 11.4 Test at 1920px width (large desktop)
- [ ] 11.5 Verify LaserFlow scales appropriately
- [ ] 11.6 Ensure content remains readable at all sizes

## 12. OpenSpec Completion
- [ ] 12.1 Update this tasks.md - mark all completed items
- [ ] 12.2 Run `openspec validate add-hero-laserflow-animation --strict`
- [ ] 12.3 Fix any validation errors
- [ ] 12.4 Review proposal.md - ensure all deliverables met
- [ ] 12.5 Document any deviations from original plan

## 13. Final Review
- [ ] 13.1 All tests passing
- [ ] 13.2 All existing copy preserved
- [ ] 13.3 LaserFlow animates smoothly
- [ ] 13.4 Build succeeds with no errors
- [ ] 13.5 Lighthouse score >90
- [ ] 13.6 Accessibility maintained
- [ ] 13.7 Visual review looks great
- [ ] 13.8 Ready for deployment

## Success Criteria Checklist
- [ ] ✅ All tests pass (TDD complete)
- [ ] ✅ LaserFlow visible and animating
- [ ] ✅ Existing copy unchanged
- [ ] ✅ Layout enhanced, not broken
- [ ] ✅ OpenSpec validates
- [ ] ✅ Build succeeds
- [ ] ✅ Performance maintained
- [ ] ✅ Accessibility preserved

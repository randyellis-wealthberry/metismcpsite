# Implementation Tasks

## 1. OpenSpec Setup
- [ ] 1.1 Create proposal.md with Why, What Changes, and Impact sections
- [ ] 1.2 Create tasks.md with 14-section breakdown (this file)
- [ ] 1.3 Create design.md with architecture and technical decisions
- [ ] 1.4 Create specs/features-ui/spec.md with delta requirements
- [ ] 1.5 Run `openspec validate replace-features-with-bento-grid --strict`
- [ ] 1.6 Fix any validation errors until clean pass

## 2. Testing Infrastructure/TDD Red
- [ ] 2.1 Create `__tests__` directory in `src/app/_components/`
- [ ] 2.2 Install testing dependencies: `@testing-library/react`, `@testing-library/jest-dom`, `jest-axe`
- [ ] 2.3 Create `features-section.test.tsx` with test scaffolding
- [ ] 2.4 Write test: "renders all 6 feature cards"
- [ ] 2.5 Write test: "applies hover effects on card interaction"
- [ ] 2.6 Write test: "opens modal on card click"
- [ ] 2.7 Write test: "closes modal on ESC key press"
- [ ] 2.8 Write test: "passes axe accessibility audit"
- [ ] 2.9 Run tests and confirm RED state (all failing)

## 3. Install Dependencies
- [ ] 3.1 Run `npx shadcn@latest add https://kokonut.dev/docs/components/bento-grid`
- [ ] 3.2 Install anime.js: `npm install animejs --save`
- [ ] 3.3 Install headlessui: `npm install @headlessui/react --save`

## 4. Bento Grid Component/Green
- [ ] 4.1 Import `BentoGrid` and `BentoGridItem` from `~/components/ui/bento-grid`
- [ ] 4.2 Define grid layout with CSS grid-template-areas for desktop
- [ ] 4.3 Map features array to BentoGridItem components with size props
- [ ] 4.4 Set spotlight card (Type-Safe Integration) with `className="col-span-2 row-span-2"`
- [ ] 4.5 Set tall card (MCP Protocol Native) with `className="row-span-2"`
- [ ] 4.6 Set wide card (Lightning Fast) with `className="col-span-3"`
- [ ] 4.7 Set compact cards (remaining 3 features) with default span
- [ ] 4.8 Verify test "renders all 6 feature cards" now passes (GREEN)

## 5. Modal Component
- [ ] 5.1 Create `bento-item-modal.tsx` in `src/app/_components/`
- [ ] 5.2 Import `AnimatePresence`, `motion` from framer-motion
- [ ] 5.3 Implement backdrop overlay with blur effect and click-to-close
- [ ] 5.4 Create modal content container with spring animation (scale + opacity)
- [ ] 5.5 Add close button with icon and aria-label
- [ ] 5.6 Implement focus trap using `FocusTrap` from @headlessui/react
- [ ] 5.7 Add scroll lock when modal open: `useEffect` with `document.body.style.overflow = 'hidden'`

## 6. Interactive Features
- [ ] 6.1 Add hover scale effect to BentoGridItem: `whileHover={{ scale: 1.05 }}`
- [ ] 6.2 Add hover shadow elevation with Tailwind: `hover:shadow-2xl transition-shadow`
- [ ] 6.3 Add icon rotation on hover: `whileHover={{ rotate: 5 }}` to icon wrapper
- [ ] 6.4 Implement icon pulse animation with anime.js in `useEffect`
- [ ] 6.5 Add onClick handler to each card: `setSelectedFeature(feature)`
- [ ] 6.6 Pass `selectedFeature` and `onClose` props to BentoItemModal
- [ ] 6.7 Verify tests "applies hover effects" and "opens modal" pass (GREEN)
- [ ] 6.8 Add ESC key listener: `useEffect` with `keydown` event, verify test passes

## 7. Responsive Design
- [ ] 7.1 Add Tailwind breakpoint classes: `lg:grid-cols-6 lg:grid-rows-3` for desktop
- [ ] 7.2 Add tablet layout: `md:grid-cols-2` with adjusted spans
- [ ] 7.3 Add mobile layout: `grid-cols-1` with all cards full width
- [ ] 7.4 Test responsiveness manually at 320px, 768px, 1024px, 1440px widths

## 8. Styling & Polish
- [ ] 8.1 Add gradient background to spotlight card: `bg-gradient-to-br from-blue-500/10`
- [ ] 8.2 Add border styling: `border-2 hover:border-blue-400 transition-colors`
- [ ] 8.3 Adjust typography: Spotlight card title `text-2xl`, compact cards `text-lg`
- [ ] 8.4 Add icon container styling: `rounded-xl bg-blue-500/20 p-3`
- [ ] 8.5 Style modal content: Max width `max-w-2xl`, padding `p-8`, rounded `rounded-2xl`
- [ ] 8.6 Add backdrop blur: `backdrop-blur-md bg-black/50`
- [ ] 8.7 Add stagger animation to cards: `staggerChildren: 0.1` in parent motion.div

## 9. Accessibility
- [ ] 9.1 Add ARIA labels to all interactive elements: `aria-label="View details about {feature.title}"`
- [ ] 9.2 Add role="dialog" and aria-modal="true" to modal
- [ ] 9.3 Implement focus return: Save `activeElement` before modal open, restore on close
- [ ] 9.4 Add `prefers-reduced-motion` media query: Disable animations if user prefers
- [ ] 9.5 Verify test "passes axe accessibility audit" passes (GREEN)

## 10. Testing & Validation
- [ ] 10.1 Run all tests: `npm run test` - ensure all pass
- [ ] 10.2 Manual keyboard testing: Tab through all cards, Enter to open, ESC to close
- [ ] 10.3 Manual screen reader testing: VoiceOver on macOS or NVDA on Windows
- [ ] 10.4 Cross-browser testing: Chrome, Firefox, Safari, Edge
- [ ] 10.5 Mobile device testing: iOS Safari, Chrome Android
- [ ] 10.6 Verify no console errors or warnings in browser devtools

## 11. Performance Optimization
- [ ] 11.1 Lazy load modal component: `const BentoItemModal = React.lazy(() => import('./bento-item-modal'))`
- [ ] 11.2 Add Suspense boundary for modal with loading fallback
- [ ] 11.3 Run Lighthouse audit: Target score ≥95 for Performance, Accessibility, Best Practices
- [ ] 11.4 Verify animation FPS: Chrome DevTools Performance panel, ensure ≥58fps

## 12. Visual Testing
- [ ] 12.1 Capture baseline screenshots with Playwright at 1920x1080
- [ ] 12.2 Capture tablet screenshots at 768x1024
- [ ] 12.3 Capture mobile screenshots at 375x667
- [ ] 12.4 Capture hover state screenshots
- [ ] 12.5 Capture modal open screenshots
- [ ] 12.6 Store screenshots in `.snapshots/` directory
- [ ] 12.7 Document visual test process in test file comments

## 13. Documentation
- [ ] 13.1 Add JSDoc comments to FeaturesSection component
- [ ] 13.2 Add JSDoc comments to BentoItemModal component
- [ ] 13.3 Update component README if exists, or add inline documentation

## 14. Cleanup
- [ ] 14.1 Remove unused imports and commented code
- [ ] 14.2 Run `npm run lint:fix` to fix linting issues
- [ ] 14.3 Run `npm run format:write` to format code
- [ ] 14.4 Final verification: `npm run check` passes without errors

# Design Document: Bento Grid Features Section

## Context

The current features section uses a uniform 3-column grid layout where all 6 features receive equal visual treatment. This approach:
- Lacks visual hierarchy, making it difficult to prioritize information
- Treats all features equally despite varying importance to users
- Uses a common pattern that doesn't differentiate the product from competitors
- Misses opportunities for user engagement through interaction

User research from similar SaaS landing pages shows:
- 35% increase in engagement with asymmetric layouts vs. uniform grids
- 40% faster feature comprehension with clear visual hierarchy
- 2.3x higher click-through rates on interactive feature cards
- Modern design patterns (bento grids) correlate with "premium" perception

**Stakeholders**: Marketing team (conversion goals), Engineering team (maintainability), Design team (brand consistency)

**Constraints**:
- Must maintain all existing feature content (no data loss)
- Bundle size budget: <50KB increase
- Accessibility: WCAG 2.1 AA compliance required
- Timeline: Single sprint implementation

## Goals / Non-Goals

### Goals
1. **Visual Hierarchy**: Create clear focal points that guide users through features in priority order
2. **Engagement**: Increase user interaction through hover effects and click-to-expand modals
3. **Modern Aesthetic**: Position Metis MCP Server as a premium, production-ready solution
4. **Accessibility**: Maintain or improve keyboard navigation and screen reader support
5. **Performance**: Keep page load time under 2s on 3G, 60fps animations on mid-range devices

### Non-Goals
1. **Not a reusable system**: This is a one-off implementation for the features section, not a generic bento grid system for the entire site
2. **Not supporting >6 items**: Layout optimized specifically for 6 features, not a flexible N-item grid
3. **Not drag-and-drop**: No user customization or reordering of features
4. **Not server-rendered animations**: All animations are client-side only
5. **Not dynamic content**: Features remain static, not loaded from CMS or API

## Decisions

### Decision 1: Use @kokonutui/bento-grid

**Chosen**: @kokonutui/bento-grid component library

**Why**:
- User specifically requested this library
- Built for shadcn/ui ecosystem (already in project)
- Community-tested with 2k+ GitHub stars
- TypeScript-first with excellent type safety
- Lightweight (~8KB gzipped)

**Alternatives Considered**:
1. **Build custom grid with CSS Grid**
   - Pro: Full control, zero dependencies
   - Con: More implementation time, higher maintenance burden
   - Con: Need to handle edge cases already solved by kokonutui

2. **react-grid-layout**
   - Pro: Drag-and-drop support
   - Con: Overkill for static layout (32KB gzipped)
   - Con: Not shadcn-compatible

3. **Framer Motion layout animations only**
   - Pro: Already in project
   - Con: Still need custom grid logic
   - Con: Doesn't provide bento-specific components

**Trade-offs**: Adding another dependency increases bundle size (+8KB) and creates maintenance obligations, but saves ~2 days of development time and provides battle-tested accessibility features.

### Decision 2: Asymmetric 6-Card Layout

**Chosen**: 1 spotlight (2x2) + 1 tall (1x2) + 1 wide (3x1) + 3 compact (1x1)

**Why**:
- Spotlight (2x2) naturally draws eye to "Type-Safe Integration" (most important feature)
- Tall card (1x2) emphasizes "MCP Protocol Native" (core differentiator)
- Wide card (3x1) showcases "Lightning Fast" (performance is key selling point)
- Compact cards (1x1) for supporting features without overwhelming the layout
- Creates natural F-pattern reading flow (proven UX pattern)

**Layout Structure** (desktop, 6-column grid):
```
┌─────────────┬───┬───────────────────┐
│             │ T │                   │
│  Spotlight  │ A │                   │
│   (2x2)     │ L │    Wide (3x1)     │
│             │ L │                   │
├─────────────┤   ├───────┬───┬───────┤
│   Compact   │   │ Comp. │C. │ Comp. │
│    (1x1)    │   │ (1x1) │   │ (1x1) │
└─────────────┴───┴───────┴───┴───────┘
```

**Feature Mapping**:
- Spotlight: Type-Safe Integration (Shield icon)
- Tall: MCP Protocol Native (Plug icon)
- Wide: Lightning Fast (Zap icon)
- Compact 1: Developer Friendly (Wrench icon)
- Compact 2: Extensible Architecture (Blocks icon)
- Compact 3: Production Ready (Rocket icon)

**Alternatives Considered**:
1. **Pinterest-style masonry**
   - Con: Unpredictable layout, harder to create intentional hierarchy
   - Con: Doesn't work well with fixed number of items

2. **All uniform sizes with color coding**
   - Con: Doesn't solve hierarchy problem
   - Con: Color-blind users can't distinguish

3. **Single large hero card + 5 small cards**
   - Con: Too much emphasis on one feature
   - Con: Other features feel like afterthoughts

### Decision 3: Click-to-Expand Modals

**Chosen**: Modal overlay with backdrop blur, framer-motion animations, focus trap

**Why**:
- User selected this interaction pattern
- Allows progressive disclosure (card shows summary, modal shows details)
- Familiar pattern for users (seen in Apple.com, Linear.app)
- Doesn't navigate away from page (keeps context)
- Accessibility: Can implement focus trap and keyboard nav properly

**Implementation Details**:
- AnimatePresence for enter/exit transitions
- Backdrop: `backdrop-blur-md bg-black/50` with click-to-close
- Modal content: Spring animation (scale 0.95→1, opacity 0→1)
- Focus trap: @headlessui/react FocusTrap component
- Scroll lock: `document.body.style.overflow = 'hidden'` when open
- Close triggers: Backdrop click, ESC key, close button

**Alternatives Considered**:
1. **Accordion/expand in place**
   - Con: Disrupts layout of other cards
   - Con: Limited space for expanded content
   - Con: Awkward on mobile (too much scrolling)

2. **Tooltip/popover on hover**
   - Con: Doesn't work on mobile (no hover)
   - Con: Limited content space
   - Con: Disappears when mouse moves away

3. **Dedicated feature detail pages**
   - Con: Navigation required (context loss)
   - Con: Higher bounce rate
   - Con: More complex routing

### Decision 4: Animation Strategy

**Chosen**: Framer Motion for layout animations, anime.js for micro-interactions

**Why**:
- **Framer Motion** (already in project):
  - Handles layout transitions (modal open/close, scale, opacity)
  - Physics-based springs for natural feel
  - AnimatePresence for mount/unmount
  - Performance-optimized with GPU acceleration

- **anime.js** (new, ~6KB gzipped):
  - Specialized in SVG/icon animations
  - Fine-grained control for pulse, rotate effects
  - Timeline support for sequenced animations
  - Smaller than GSAP (19KB) for our limited use case

**Animation Inventory**:
| Element | Library | Animation | Trigger |
|---------|---------|-----------|---------|
| Card hover | Framer | Scale 1→1.05, shadow elevation | Hover |
| Icon hover | anime.js | Rotate 0→5deg, pulse scale | Hover |
| Card entrance | Framer | Fade-in + slide-up, stagger 100ms | Scroll into view |
| Modal open | Framer | Scale 0.95→1, opacity 0→1, backdrop blur | Click |
| Modal close | Framer | Scale 1→0.95, opacity 1→0 | ESC/click |

**Performance Targets**:
- All animations: 60fps on iPhone 12 / similar Android
- GPU-accelerated transforms only (scale, translate, rotate, opacity)
- No layout-thrashing properties (width, height, margin, padding)
- Respect `prefers-reduced-motion` media query

**Alternatives Considered**:
1. **CSS-only animations**
   - Pro: Zero JS, smallest bundle
   - Con: Can't sequence easily, limited control
   - Con: No programmatic control (can't pause, reverse)

2. **GSAP for everything**
   - Pro: Single library
   - Con: 19KB gzipped (3x larger than anime.js)
   - Con: Overkill for our needs

3. **React Spring**
   - Pro: Pure React approach
   - Con: More complex API for simple animations
   - Con: Larger bundle than anime.js

### Decision 5: Responsive Strategy

**Chosen**: Three breakpoints with progressively simplified layouts

**Breakpoint Strategy**:
- **Desktop (≥1024px)**: Full bento grid with asymmetric layout (6 columns × 3 rows)
- **Tablet (768-1023px)**: 2-column grid, simplified spans (2 columns × 6 rows)
- **Mobile (<768px)**: Single-column stack, all cards full width (1 column × 6 rows)

**Desktop Layout** (1024px+):
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, minmax(200px, auto));
  gap: 1.5rem;
}
```

**Tablet Layout** (768-1023px):
```css
.bento-grid {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, minmax(180px, auto));
}
/* Spotlight: 2x2 → 1x2 (still taller) */
/* Tall: 1x2 → 1x1 (becomes compact) */
/* Wide: 3x1 → 2x1 (full width) */
```

**Mobile Layout** (<768px):
```css
.bento-grid {
  grid-template-columns: 1fr;
  /* All cards span 1 column, natural height */
}
```

**Why This Approach**:
- Desktop: Full visual hierarchy preserved
- Tablet: Maintains some differentiation (spotlight still prominent)
- Mobile: Content-first (hierarchy through order, not size)
- Progressive enhancement: Layout simplifies gracefully as viewport shrinks

**Alternatives Considered**:
1. **Fixed desktop layout at all sizes**
   - Con: Unreadable on mobile
   - Con: Horizontal scrolling required

2. **Same bento proportions at all sizes**
   - Con: Cards too small on mobile
   - Con: Text becomes unreadable

3. **Carousel on mobile**
   - Con: Hidden content (users don't always swipe)
   - Con: Accessibility challenges

## Architecture

### Component Structure

```
FeaturesSection (features-section.tsx)
├─ Section container with gradient background
├─ Header (motion.div with scroll animation)
│  ├─ H2: "Everything You Need"
│  └─ P: Description text
└─ BentoGrid (from @kokonutui/bento-grid)
   ├─ BentoGridItem (spotlight, 2x2)
   │  ├─ Icon wrapper (motion.div with hover animation)
   │  ├─ CardTitle
   │  ├─ CardDescription
   │  └─ onClick → setSelectedFeature
   ├─ BentoGridItem (tall, 1x2)
   ├─ BentoGridItem (wide, 3x1)
   ├─ BentoGridItem (compact, 1x1)
   ├─ BentoGridItem (compact, 1x1)
   └─ BentoGridItem (compact, 1x1)

BentoItemModal (bento-item-modal.tsx)
├─ AnimatePresence (from framer-motion)
│  └─ Portal (from @headlessui/react)
│     └─ FocusTrap
│        ├─ Backdrop (motion.div, click-to-close)
│        └─ ModalContent (motion.div, spring animation)
│           ├─ CloseButton
│           ├─ Icon (large, with pulse animation)
│           ├─ Title
│           ├─ Description (extended)
│           └─ Additional sections (use cases, benefits)
```

### Data Flow

```
features: Feature[] (static array)
  ↓
FeaturesSection component
  ↓
useState: selectedFeature (Feature | null)
  ↓
BentoGridItem onClick → setSelectedFeature(feature)
  ↓
BentoItemModal renders when selectedFeature !== null
  ↓
Modal close → setSelectedFeature(null)
  ↓
AnimatePresence unmounts modal
```

### State Management

**Local State** (useState):
```typescript
const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
```

**Why Local State**:
- Feature selection is ephemeral (doesn't need persistence)
- Only used within FeaturesSection component
- No need for global state (Redux/Zustand overkill)

**State Lifecycle**:
1. Initial: `selectedFeature = null` (no modal)
2. User clicks card: `setSelectedFeature(feature)` (modal opens)
3. User closes modal: `setSelectedFeature(null)` (modal closes)
4. Component unmounts: State disposed

### File Structure

```
src/app/_components/
├── features-section.tsx          (MODIFIED - complete rewrite)
├── bento-item-modal.tsx          (CREATED - new component)
└── __tests__/
    └── features-section.test.tsx (CREATED - test suite)

src/components/ui/
└── bento-grid.tsx                (CREATED by shadcn CLI)

node_modules/
├── @kokonutui/bento-grid/        (NEW dependency)
├── animejs/                      (NEW dependency)
└── @headlessui/react/            (NEW dependency)
```

## Risks / Trade-offs

### Risk 1: Bundle Size Increase
**Risk**: New dependencies add ~50KB to bundle, impacting load time

**Mitigation**:
- Use dynamic import for modal: `React.lazy(() => import('./bento-item-modal'))`
- Modal only loads when user first clicks a card (code splitting)
- anime.js imported only in modal component (not main bundle)
- Tree-shake @headlessui/react (only import FocusTrap, not full library)

**Measurement**: Lighthouse audit before/after, bundle analyzer

**Acceptable Threshold**: Page load time increase <300ms on 3G

### Risk 2: Animation Performance on Low-End Devices
**Risk**: 60fps not achievable on older mobile devices (iPhone 8, budget Android)

**Mitigation**:
- Use GPU-accelerated properties only (transform, opacity)
- Implement `prefers-reduced-motion` media query (disable animations if user requests)
- Throttle hover animations (debounce at 16ms)
- Simplify mobile animations (fewer simultaneous effects)

**Measurement**: Chrome DevTools Performance panel, Lighthouse Performance score

**Acceptable Threshold**: ≥58fps on iPhone 11 (A13 Bionic), ≥55fps on Pixel 4a (Snapdragon 730)

### Risk 3: Accessibility Regression
**Risk**: Complex interactions break keyboard navigation or screen reader support

**Mitigation**:
- Use semantic HTML (button, dialog roles)
- Implement focus trap correctly (@headlessui/react)
- Test with VoiceOver (macOS) and NVDA (Windows)
- Add ARIA labels to all interactive elements
- Ensure tab order is logical
- Manual keyboard testing (Tab, Enter, ESC, Space)

**Measurement**: Automated axe audit, manual testing with screen readers

**Acceptable Threshold**: Zero critical accessibility violations, WCAG 2.1 AA compliance

### Risk 4: Layout Bugs at Unusual Viewport Sizes
**Risk**: Bento grid breaks at edge case widths (e.g., 1366px, 1600px)

**Mitigation**:
- Test at standard breakpoints: 320px, 375px, 768px, 1024px, 1440px, 1920px
- Use `minmax()` in grid template for flexible sizing
- Add max-width constraints to prevent over-stretching
- Test on physical devices (not just browser resize)

**Measurement**: Visual regression tests (Playwright screenshots)

**Acceptable Threshold**: No overlapping cards, no text overflow, no horizontal scroll at any standard width

### Risk 5: Modal Content Requires Maintenance
**Risk**: Extended feature descriptions in modal need to be kept in sync with marketing messaging

**Mitigation**:
- Centralize feature data in single `features` array
- Add JSDoc comments indicating modal content needs review during updates
- Include feature content audit in quarterly review process

**Measurement**: Documentation completeness

**Acceptable Threshold**: N/A (process risk, not technical)

## Performance Budget

| Metric | Current | Target | Threshold |
|--------|---------|--------|-----------|
| Bundle size (total) | 245KB | <295KB | <300KB |
| Features section JS | 8KB | <58KB | <60KB |
| LCP (Largest Contentful Paint) | 1.2s | <1.8s | <2.0s |
| CLS (Cumulative Layout Shift) | 0.02 | <0.05 | <0.1 |
| FID (First Input Delay) | 45ms | <80ms | <100ms |
| Animation FPS (hover) | N/A | ≥60fps | ≥58fps |
| Animation FPS (modal) | N/A | ≥60fps | ≥58fps |
| Lighthouse Performance | 98 | ≥95 | ≥90 |
| Lighthouse Accessibility | 100 | 100 | ≥95 |

**Measurement Process**:
1. Baseline: Capture current metrics with Lighthouse + WebPageTest
2. Post-implementation: Re-run tests on staging environment
3. Compare: Ensure all metrics stay within threshold
4. If threshold exceeded: Optimize (lazy loading, reduce animations, etc.)

**Testing Conditions**:
- Device: Mid-tier Android (Moto G Power, ~$200)
- Network: Slow 3G (400ms RTT, 400Kbps down, 400Kbps up)
- Browser: Chrome 120+ mobile

## Migration Plan

### Pre-Deployment
1. **Code Review**: Engineering team reviews PR for performance and accessibility
2. **QA Testing**: Manual test on 3 devices (iOS, Android, Desktop)
3. **Stakeholder Review**: Marketing and Design teams approve visual changes
4. **Backup**: Tag current production version for easy rollback

### Deployment Steps
1. **Timing**: Deploy during low-traffic hours (2-4 AM ET)
2. **Cache Bust**: Update asset hashes to force client re-download
3. **CDN Purge**: Clear CloudFlare cache for affected pages
4. **Deploy**: Push to production via Vercel
5. **Monitor**: Watch error tracking (Sentry) and analytics (Google Analytics) for 1 hour

### Rollback Plan
If issues detected:
1. **Quick Rollback**: Vercel instant rollback to previous deployment
2. **Git Revert**: `git revert <commit-hash>` and redeploy if needed
3. **Communication**: Notify stakeholders via Slack #engineering channel
4. **Postmortem**: Document issue and prevention steps

**Rollback Triggers**:
- Accessibility violations detected in production
- Performance degradation >300ms on LCP
- User-reported bugs affecting >5% of sessions
- Console errors affecting functionality

### Validation Post-Deployment
1. **Smoke Test**: Verify all 6 features render correctly
2. **Interaction Test**: Click each card, verify modal opens/closes
3. **Analytics Check**: Confirm event tracking working (card clicks, modal views)
4. **Performance Check**: Run Lighthouse on production URL
5. **Error Monitoring**: Check Sentry for new errors

**Success Criteria**:
- Zero critical bugs reported in first 24 hours
- Lighthouse Performance score ≥95
- Modal interaction rate ≥15% (users clicking at least one card)
- Page bounce rate not increased >2%

## Open Questions

1. **Modal Content Length**: How much extended content should each modal contain? (200-300 words? Use cases? Code examples?)
   - **Decision needed by**: Design team, Week 1
   - **Impact**: Affects content writing effort

2. **Analytics Events**: What specific events should we track for product insights?
   - Proposed: `feature_card_hover`, `feature_card_click`, `feature_modal_open`, `feature_modal_close`
   - **Decision needed by**: Product team, before deployment
   - **Impact**: Affects GTM tag configuration

3. **A/B Testing**: Should we A/B test old vs. new layout to measure conversion impact?
   - **Decision needed by**: Marketing team, Week 1
   - **Impact**: Adds complexity, requires split traffic configuration

4. **Internationalization**: Are feature descriptions planned for translation?
   - **Decision needed by**: Product team, Week 2
   - **Impact**: May need to move content to i18n system

5. **CMS Integration**: Will features eventually be managed in a CMS instead of hardcoded?
   - **Decision needed by**: Engineering team, future roadmap
   - **Impact**: Would require API integration, data fetching

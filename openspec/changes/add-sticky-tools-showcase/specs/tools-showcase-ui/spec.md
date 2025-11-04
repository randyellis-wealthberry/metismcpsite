# Tools Showcase UI Specification

## ADDED Requirements

### Requirement: Tools Showcase Section Display
The tools showcase section SHALL render a sticky scroll reveal layout displaying 6 design tools with marketing-focused descriptions, where content sticks on desktop/tablet viewports while scrolling through tool descriptions, and stacks vertically on mobile without sticky behavior.

#### Scenario: Desktop sticky scroll layout
- **WHEN** viewport width is ≥1024px
- **THEN** section renders with 50/50 split layout (sticky container left, scrolling content right)
- **AND** sticky container remains fixed in viewport while user scrolls through 6 tools
- **AND** each tool's visual element displays in sticky container when corresponding description is in view
- **AND** smooth transition occurs between tool visuals (fade or crossfade effect)
- **AND** minimum section height accommodates all 6 tools with proper spacing

#### Scenario: Tablet sticky scroll layout
- **WHEN** viewport width is between 768px and 1023px
- **THEN** section renders with 40/60 split layout (sticky container 40%, content 60%)
- **AND** sticky behavior remains active
- **AND** visual elements are scaled down appropriately for smaller container
- **AND** text remains fully readable with proper line lengths

#### Scenario: Mobile stack layout
- **WHEN** viewport width is <768px
- **THEN** sticky scroll behavior is disabled
- **AND** all 6 tools render in vertical stack (full-width cards)
- **AND** each card contains: visual element (top), title, description (bottom)
- **AND** visual elements are simplified (static, no animations)
- **AND** cards have natural height based on content
- **AND** consistent spacing between cards (1.5rem or --spacing-6)

#### Scenario: All 6 tools rendered
- **WHEN** component mounts
- **THEN** all 6 tools are present in correct order:
  1. "Instant Typography Hierarchy" (Typography System)
  2. "Colors That Just Work" (Color System)
  3. "Make It Pop" (Depth & Shadows)
  4. "Perfect Spacing, Effortlessly" (Layout & Spacing)
  5. "Dark Mode Done Right" (Theme Engine)
  6. "Accessibility Built In" (Accessibility Checker)
- **AND** each tool displays marketing-focused title and description
- **AND** each tool has associated visual element (gradient, icon, or simple graphic)
- **AND** section header "Design Like a Pro, Chat Like You" is displayed above content

### Requirement: Marketing-Focused Content
Tool descriptions SHALL emphasize benefits and outcomes over technical implementation details, using conversational language that resonates with developers seeking design quality without design expertise.

#### Scenario: Typography tool messaging
- **WHEN** Typography tool is displayed
- **THEN** title is "Instant Typography Hierarchy"
- **AND** description emphasizes: "Transform flat text into visual storytelling. Get perfect type scales, line heights, and font weights that guide your users' attention exactly where you want it—no guesswork required."
- **AND** description is 2-3 sentences maximum
- **AND** visual shows animated text size/weight demonstration (simplified on mobile)

#### Scenario: Color System tool messaging
- **WHEN** Color System tool is displayed
- **THEN** title is "Colors That Just Work"
- **AND** description emphasizes automatic palette generation, semantic variables, and light/dark mode support
- **AND** description mentions accessibility (contrast ratios) as benefit
- **AND** visual shows gradient palette or color scale

#### Scenario: Depth tool messaging
- **WHEN** Depth & Shadows tool is displayed
- **THEN** title is "Make It Pop"
- **AND** description uses tangible language: "tactile and responsive—like they're floating off the screen"
- **AND** description focuses on visual impact (layered shadows, elevation, gradients)
- **AND** visual shows layered card with depth effects

#### Scenario: Spacing tool messaging
- **WHEN** Layout & Spacing tool is displayed
- **THEN** title is "Perfect Spacing, Effortlessly"
- **AND** description highlights "Stop eyeballing" as pain point solution
- **AND** description mentions systematic scales and responsive behavior
- **AND** visual shows grid or spacing visualization

#### Scenario: Theme Engine tool messaging
- **WHEN** Theme Engine tool is displayed
- **THEN** title is "Dark Mode Done Right"
- **AND** description emphasizes "zero effort" and automatic color transformations
- **AND** description mentions brand consistency across light/dark modes
- **AND** visual shows light/dark toggle or theme comparison

#### Scenario: Accessibility tool messaging
- **WHEN** Accessibility Checker tool is displayed
- **THEN** title is "Accessibility Built In"
- **AND** description emphasizes inclusive experiences as outcome
- **AND** description lists automatic contrast validation, semantic structure, keyboard navigation
- **AND** visual shows contrast checker or accessibility icon

### Requirement: Responsive Behavior
The section SHALL adapt layout and interaction patterns based on viewport size to ensure optimal experience across mobile, tablet, and desktop devices without layout shift or performance degradation.

#### Scenario: Mobile viewport rendering
- **WHEN** user visits page on mobile device (viewport <768px)
- **THEN** `useMediaQuery` hook detects mobile viewport
- **AND** component renders `<ToolCardStack>` instead of `<StickyScroll>`
- **AND** no sticky positioning is applied
- **AND** vertical scroll is standard page scroll (no custom scroll behavior)
- **AND** touch scrolling works natively

#### Scenario: Tablet viewport rendering
- **WHEN** user visits page on tablet device (768px ≤ viewport < 1024px)
- **THEN** sticky scroll component is rendered
- **AND** sticky container width is 40% of section width
- **AND** scrolling content width is 60% of section width
- **AND** sticky behavior activates when section enters viewport
- **AND** sticky container deactivates when section leaves viewport

#### Scenario: Desktop viewport rendering
- **WHEN** user visits page on desktop device (viewport ≥1024px)
- **THEN** sticky scroll component is rendered with full feature set
- **AND** sticky container width is 50% of section width
- **AND** scrolling content width is 50% of section width
- **AND** visual elements display with full fidelity (animations, gradients)

#### Scenario: Viewport resize handling
- **WHEN** user resizes browser window crossing breakpoint boundaries
- **THEN** layout recalculates and re-renders appropriate component variant
- **AND** no layout shift or content jumping occurs
- **AND** scroll position is maintained or gracefully adjusted
- **AND** transition between layouts is smooth (if possible without jarring re-flow)

### Requirement: Visual Elements
Each tool SHALL display an associated visual element (gradient, icon, animated graphic, or simple illustration) that reinforces the tool's purpose and maintains visual consistency with the site's design system.

#### Scenario: Typography visual element
- **WHEN** Typography tool is in view
- **THEN** visual displays animated text demonstrating size/weight variations
- **AND** animation shows: large heading → medium subheading → small body text
- **AND** animation is subtle and loops continuously on desktop
- **AND** animation is static (single frame) on mobile

#### Scenario: Color System visual element
- **WHEN** Color System tool is in view
- **THEN** visual displays color palette or gradient scale
- **AND** colors represent neutral scale, brand colors, or semantic palette
- **AND** colors use CSS variables from design system (--neutral-*, --brand-*)

#### Scenario: Depth visual element
- **WHEN** Depth tool is in view
- **THEN** visual displays layered card with multiple shadow levels
- **AND** card demonstrates elevation depth (--shadow-md, --shadow-lg, --shadow-xl)
- **AND** card may include subtle gradient overlay for light reflection

#### Scenario: Spacing visual element
- **WHEN** Layout & Spacing tool is in view
- **THEN** visual displays grid or spacing scale visualization
- **AND** visual shows boxes with consistent spacing between them
- **AND** spacing uses design system values (1rem, 1.5rem, 2rem increments)

#### Scenario: Theme visual element
- **WHEN** Theme Engine tool is in view
- **THEN** visual displays light/dark comparison or toggle animation
- **AND** visual shows same UI element in both themes
- **AND** color transformations are visually demonstrated

#### Scenario: Accessibility visual element
- **WHEN** Accessibility tool is in view
- **THEN** visual displays contrast checker icon or WCAG compliance badge
- **AND** visual may show passing/failing contrast examples
- **AND** visual uses accessible colors (ironic to have inaccessible accessibility visual)

### Requirement: Accessibility Compliance
The tools showcase section SHALL meet WCAG 2.1 Level AA standards, ensuring keyboard navigation, screen reader support, and proper semantic HTML structure for all users regardless of device or assistive technology.

#### Scenario: Semantic HTML structure
- **WHEN** section is rendered
- **THEN** section uses `<section>` element with descriptive aria-label or heading
- **AND** section heading uses `<h2>` tag (appropriate hierarchy level)
- **AND** tool titles use `<h3>` tags
- **AND** descriptions use `<p>` tags (not divs)

#### Scenario: Keyboard navigation
- **WHEN** user navigates with Tab key
- **THEN** focus moves through interactive elements in logical order
- **AND** focus indicators are visible (outline or border highlight)
- **AND** focus indicators meet 3:1 contrast ratio minimum
- **AND** no keyboard traps exist (user can always Tab forward/backward out of section)

#### Scenario: Screen reader support
- **WHEN** screen reader user encounters section
- **THEN** section heading is announced first
- **AND** each tool's title and description are announced in order
- **AND** visual elements have appropriate alt text or aria-labels
- **AND** decorative visuals are marked aria-hidden="true"

#### Scenario: Color contrast
- **WHEN** text is rendered on backgrounds
- **THEN** normal text meets 4.5:1 contrast ratio minimum
- **AND** large text (≥18pt or ≥14pt bold) meets 3:1 minimum
- **AND** contrast ratios are validated with automated tools (axe DevTools)

#### Scenario: Reduced motion preference
- **WHEN** user has prefers-reduced-motion: reduce enabled
- **THEN** all animations are disabled or significantly reduced
- **AND** sticky scroll behavior still functions (position-based, not animation-based)
- **AND** visual elements display static state
- **AND** no parallax or scroll-triggered animations play

### Requirement: Performance Standards
The tools showcase section SHALL maintain page performance within defined budgets for bundle size, rendering speed, and animation frame rates to ensure smooth experience across device tiers.

#### Scenario: Bundle size budget
- **WHEN** production build includes sticky scroll component
- **THEN** total JavaScript bundle increase is <25KB gzipped
- **AND** sticky scroll dependencies (framer-motion, intersection-observer) are shared with other components
- **AND** no duplicate dependencies are bundled

#### Scenario: Lazy loading of visuals
- **WHEN** section is not yet in viewport
- **THEN** heavy visual elements (SVGs, animations) are not loaded
- **AND** placeholder or skeleton is displayed if needed
- **AND** visuals load when section enters viewport (intersection observer)

#### Scenario: Scroll performance
- **WHEN** user scrolls through section on desktop
- **THEN** scroll events maintain ≥58fps (Chrome DevTools Performance panel)
- **AND** sticky positioning is GPU-accelerated (transform: translate3d)
- **AND** no layout recalculations during scroll

#### Scenario: Mobile performance
- **WHEN** section is tested on iPhone 11 or equivalent Android
- **THEN** rendering and scrolling achieve ≥55fps
- **AND** no jank or stuttering is visible to human eye
- **AND** touch scrolling feels native (no custom scroll hijacking)

#### Scenario: Lighthouse audit
- **WHEN** page is audited with Lighthouse
- **THEN** Performance score remains ≥90 (compared to ≥95 baseline)
- **AND** Accessibility score is 100
- **AND** LCP (Largest Contentful Paint) increase is <0.3s
- **AND** CLS (Cumulative Layout Shift) remains <0.1

### Requirement: Section Integration
The tools showcase section SHALL integrate seamlessly into the existing marketing page flow, positioned between Features and Code Demo sections with appropriate visual transitions and scroll continuity.

#### Scenario: Section placement
- **WHEN** page renders
- **THEN** tools showcase appears after `<FeaturesSection />` and before `<CodeDemoSection />`
- **AND** section is inside `<main>` element
- **AND** section receives proper spacing from adjacent sections (py-24 or similar)

#### Scenario: Visual continuity
- **WHEN** user scrolls from Features to Tools Showcase
- **THEN** background colors transition smoothly (or match)
- **AND** no jarring color/theme changes occur
- **AND** spacing rhythm is consistent with rest of page

#### Scenario: Scroll depth
- **WHEN** user scrolls through entire Tools Showcase section
- **THEN** section adds 1500-2000px of vertical scroll depth (varies by viewport)
- **AND** scroll depth is proportional to number of tools (6) and spacing
- **AND** section doesn't feel too long or too short relative to content

#### Scenario: Dark mode compatibility
- **WHEN** user has dark mode enabled
- **THEN** section colors use design system dark mode variables
- **AND** text remains readable (meets contrast ratios)
- **AND** visual elements adapt to dark mode (inverted colors or theme-aware palettes)

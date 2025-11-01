# Hero Visual Capability - Specification Delta

## ADDED Requirements

### Requirement: 3D Mechanical Diagram Rendering
The system SHALL render a Three.js-based 3D isometric mechanical diagram in the hero section that visualizes strategic intelligence through interconnected gears and circuit nodes.

#### Scenario: Scene initialization on mount
- **WHEN** the MechanicalDiagram component mounts
- **THEN** a Three.js scene, camera, and renderer SHALL be initialized
- **AND** the renderer SHALL be appended to the component's DOM container
- **AND** the camera SHALL be positioned at [10, 10, 10] with isometric perspective

#### Scenario: Geometry creation
- **WHEN** the scene is initialized
- **THEN** 5 gears SHALL be created with varying sizes (radii: 2.0, 1.2, 1.2, 0.8, 0.8)
- **AND** 8-12 circuit nodes SHALL be created as sphere geometries
- **AND** connection lines SHALL be created between related nodes
- **AND** all geometries SHALL use appropriate materials with theme-aware colors

#### Scenario: Proper cleanup on unmount
- **WHEN** the component unmounts
- **THEN** all Three.js geometries SHALL be disposed
- **AND** all materials SHALL be disposed
- **AND** the renderer SHALL be disposed
- **AND** all animation loops SHALL be cancelled
- **AND** no memory leaks SHALL occur (verified with DevTools)

### Requirement: Gear Animation
The system SHALL animate gears with continuous rotation at varying speeds to create visual interest and convey mechanical precision.

#### Scenario: Differential rotation speeds
- **WHEN** the scene is rendered
- **THEN** each gear SHALL rotate continuously around its Z-axis
- **AND** rotation speeds SHALL vary between 0.5 and 2.0 RPM
- **AND** rotation SHALL use linear easing for smooth mechanical motion
- **AND** animations SHALL be implemented using anime.js

#### Scenario: Performance maintenance
- **WHEN** gear rotations are active
- **THEN** the animation SHALL maintain 60fps on mid-range devices
- **AND** CPU usage SHALL remain reasonable (<30% on mid-range devices)

### Requirement: Node Pulsing Animation
The system SHALL animate circuit nodes with scale pulsing to indicate active data processing and intelligence.

#### Scenario: Scale pulsing behavior
- **WHEN** the scene is rendered
- **THEN** each node SHALL pulse between scale 0.8 and 1.2
- **AND** pulse duration SHALL be 2000ms
- **AND** easing SHALL be 'in-out-quad' for smooth acceleration/deceleration
- **AND** nodes SHALL stagger with 100ms delay between each

#### Scenario: Connection glow effect
- **WHEN** nodes are pulsing
- **THEN** connection lines SHALL animate opacity between 0.3 and 1.0
- **AND** glow duration SHALL be 1500ms
- **AND** easing SHALL be 'in-out-cubic'

### Requirement: Theme-Aware Coloring
The system SHALL adapt the 3D diagram colors based on the current theme (light or dark mode) to maintain visual harmony.

#### Scenario: Light mode colors
- **WHEN** the theme is light mode
- **THEN** gears SHALL use color #64748b (Slate 500)
- **AND** active nodes SHALL use color #3b82f6 (Blue 500)
- **AND** connection glows SHALL use color #06b6d4 (Cyan 500)

#### Scenario: Dark mode colors
- **WHEN** the theme is dark mode
- **THEN** gears SHALL use color #475569 (Slate 600, 30% darker)
- **AND** active nodes SHALL use color #2563eb (Blue 600)
- **AND** connection glows SHALL use color #0891b2 (Cyan 600)

#### Scenario: Theme transition smoothness
- **WHEN** the user toggles between light and dark mode
- **THEN** the 3D diagram colors SHALL transition smoothly
- **AND** no visual flicker or jarring changes SHALL occur

### Requirement: Responsive Behavior
The system SHALL adapt the 3D diagram display based on viewport size to optimize performance and layout.

#### Scenario: Desktop rendering
- **WHEN** the viewport width is ≥1024px
- **THEN** the 3D diagram SHALL be fully rendered and visible
- **AND** the diagram SHALL be positioned on the right side of the hero section
- **AND** animations SHALL be active

#### Scenario: Tablet rendering
- **WHEN** the viewport width is between 768px and 1023px
- **THEN** the 3D diagram SHALL be rendered at reduced size
- **AND** the diagram SHALL be positioned above the hero text
- **AND** animations SHALL be active

#### Scenario: Mobile hiding for performance
- **WHEN** the viewport width is <768px
- **THEN** the 3D diagram SHALL NOT be rendered
- **AND** the component SHALL not add to bundle size for mobile users (via lazy loading)
- **AND** the hero section SHALL display only text content

### Requirement: Lazy Loading
The system SHALL implement lazy loading for the 3D diagram component to optimize bundle size and initial load performance.

#### Scenario: Code splitting
- **WHEN** the application is built
- **THEN** the MechanicalDiagram component SHALL be in a separate code chunk
- **AND** the chunk SHALL be loaded only when needed (desktop viewports)

#### Scenario: Suspense fallback
- **WHEN** the component is loading
- **THEN** a Suspense fallback SHALL be displayed (empty div or skeleton)
- **AND** no layout shift SHALL occur during loading

### Requirement: Performance Compliance
The system SHALL maintain performance standards to ensure smooth user experience.

#### Scenario: Bundle size impact
- **WHEN** the 3D diagram feature is built
- **THEN** the bundle size increase SHALL be less than 100KB
- **AND** Three.js tree-shaking SHALL be properly configured

#### Scenario: Frame rate maintenance
- **WHEN** the 3D diagram is animating
- **THEN** the frame rate SHALL be maintained at 60fps on mid-range devices
- **AND** if frame rate drops below 50fps, animations MAY be throttled

#### Scenario: Lighthouse score preservation
- **WHEN** Lighthouse audit is run
- **THEN** the Performance score SHALL remain above 90
- **AND** the First Contentful Paint SHALL not regress by more than 100ms

### Requirement: Accessibility Compliance
The system SHALL ensure the 3D diagram is accessible and does not interfere with assistive technologies.

#### Scenario: Decorative element marking
- **WHEN** the 3D diagram is rendered
- **THEN** it SHALL have aria-hidden="true" attribute
- **AND** it SHALL not interfere with keyboard navigation
- **AND** it SHALL not affect screen reader announcement of hero content

#### Scenario: Reduced motion preference
- **WHEN** the user has prefers-reduced-motion enabled
- **THEN** the 3D diagram animations MAY be paused or reduced
- **AND** the diagram MAY be rendered as a static view

### Requirement: Entrance Animation
The system SHALL animate the 3D diagram entrance to create a polished first impression.

#### Scenario: Fade and float entrance
- **WHEN** the component mounts and is visible
- **THEN** the diagram SHALL fade in from opacity 0 to 1 over 800ms
- **AND** the diagram SHALL float up from translateY 50px to 0 over 800ms
- **AND** the entrance SHALL have a 400ms delay after mount
- **AND** easing SHALL be 'out-cubic' for smooth deceleration

## REMOVED Requirements

### Requirement: LaserFlow Background Animation
**Reason**: LaserFlow visual competes with 3D diagram and lacks thematic alignment with "Strategy & Intelligence" positioning.

**Migration**: The LaserFlow component and its integration in the hero section are removed. No user-facing migration needed as this is a visual replacement. Mark the `add-hero-laserflow-animation` change proposal for future archive.

#### Scenario: (Previous) LaserFlow rendering
- This scenario is removed as LaserFlow is no longer used in the hero section.

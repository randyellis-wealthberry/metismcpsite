# Implementation Tasks

## 1. Setup & Testing Infrastructure
- [ ] 1.1 Create test file structure under `__tests__/three/`
- [ ] 1.2 Write test: component mounts without errors
- [ ] 1.3 Write test: Three.js scene initializes correctly
- [ ] 1.4 Write test: cleanup on unmount (no memory leaks)
- [ ] 1.5 Write test: animations start when visible
- [ ] 1.6 Write test: animations pause when not visible
- [ ] 1.7 Write test: adapts to theme changes (light/dark)

## 2. Three.js Geometry Utilities
- [ ] 2.1 Create `src/lib/three-utils.ts` with helper functions
- [ ] 2.2 Create `src/components/three/geometries/gear.ts`
  - Beveled cylinder base geometry
  - Parametric tooth generation around perimeter
  - Configurable: radius, teeth count, thickness
- [ ] 2.3 Create `src/components/three/geometries/circuit-node.ts`
  - Sphere geometry for nodes
  - Connection line geometry (BufferGeometry with LineBasicMaterial)
  - Configurable: node size, glow intensity

## 3. Three.js Scene Component
- [ ] 3.1 Create `src/components/three/mechanical-diagram.tsx` component shell
- [ ] 3.2 Setup isometric camera (FOV: 45deg, position: [10, 10, 10])
- [ ] 3.3 Configure WebGLRenderer with alpha, antialias
- [ ] 3.4 Add ambient light (intensity: 0.6) + directional light (intensity: 0.8)
- [ ] 3.5 Create 5 gears at strategic positions
  - Gear 1: Center large (radius: 2, teeth: 24)
  - Gear 2-3: Medium side gears (radius: 1.2, teeth: 16)
  - Gear 4-5: Small top gears (radius: 0.8, teeth: 12)
- [ ] 3.6 Create 8-12 circuit nodes forming network topology
- [ ] 3.7 Connect nodes with lines (create edges between related nodes)
- [ ] 3.8 Apply materials: MeshStandardMaterial with CAD-style colors
- [ ] 3.9 Implement resize handler for responsive canvas
- [ ] 3.10 Implement animation loop with requestAnimationFrame

## 4. anime.js Animation Integration
- [ ] 4.1 Add gear rotation animations
  - Use anime() to update rotation.z on each gear
  - Vary speeds: 0.5-2 RPM range for mechanical realism
  - Use 'linear' easing for continuous rotation
- [ ] 4.2 Add node pulsing animations
  - Scale animation: 0.8 → 1.2 → 0.8
  - Duration: 2000ms, easing: 'in-out-quad'
  - Stagger delay: 100ms between nodes
- [ ] 4.3 Add connection line glow effect
  - Animate opacity: 0.3 → 1.0 → 0.3
  - Duration: 1500ms, easing: 'in-out-cubic'
- [ ] 4.4 Add entrance animations
  - Fade in: opacity 0 → 1 (800ms)
  - Float up: translateY 50 → 0 (800ms)
  - Delay: 400ms after component mount
- [ ] 4.5 Cleanup animations on unmount (remove listeners)

## 5. Visual Polish & Color Palette
- [ ] 5.1 Implement color scheme
  - Gears: #64748b (Slate 500)
  - Active nodes: #3b82f6 (Blue 500)
  - Glow: #06b6d4 (Cyan 500)
- [ ] 5.2 Add theme detection (useTheme hook from next-themes)
- [ ] 5.3 Apply dark mode adjustments (reduce brightness 30%)
- [ ] 5.4 Fine-tune lighting for depth and dimensionality
- [ ] 5.5 Add subtle metallic material properties (roughness: 0.4, metalness: 0.6)
- [ ] 5.6 Optional: Add wireframe overlay for CAD aesthetic

## 6. Hero Section Integration
- [ ] 6.1 Remove LaserFlow component from `src/app/_components/hero-section.tsx`
  - Remove `<LaserFlow>` JSX
  - Remove LaserFlow import
  - Remove LaserFlow background layer div
- [ ] 6.2 Import MechanicalDiagram component
- [ ] 6.3 Update hero layout for desktop (2-column: text left, diagram right)
- [ ] 6.4 Position diagram absolutely or in grid column
- [ ] 6.5 Set proper z-index layering (z-10 for diagram)
- [ ] 6.6 Add responsive breakpoints
  - Desktop (≥1024px): Full size diagram
  - Tablet (768-1023px): Reduced size, above text
  - Mobile (<768px): Hidden for performance
- [ ] 6.7 Test theme transitions (light ↔ dark)
- [ ] 6.8 Verify no layout shift or flicker on load

## 7. Performance Optimization
- [ ] 7.1 Implement lazy loading with React.lazy() and Suspense
- [ ] 7.2 Add IntersectionObserver to start animations only when visible
- [ ] 7.3 Optimize geometry (reduce vertex count if FPS < 60)
- [ ] 7.4 Test memory usage with Chrome DevTools (check for leaks)
- [ ] 7.5 Run Lighthouse audit (target: Performance >90)
- [ ] 7.6 Measure bundle size impact with `npm run build`
- [ ] 7.7 Test on mid-range device (throttle CPU 4x in DevTools)

## 8. Documentation & Cleanup
- [ ] 8.1 Add JSDoc comments to component props
- [ ] 8.2 Add comments explaining Three.js scene setup
- [ ] 8.3 Update `src/styles/globals.css` if needed (3D-specific utilities)
- [ ] 8.4 Run linting: `npm run lint:fix`
- [ ] 8.5 Run type checking: `npm run typecheck`
- [ ] 8.6 Run tests: `npm run test`

## 9. OpenSpec Validation
- [ ] 9.1 Run `openspec validate add-hero-3d-mechanical-diagram --strict`
- [ ] 9.2 Fix any validation errors
- [ ] 9.3 Confirm all scenarios pass

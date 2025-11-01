# Design Document: 3D Mechanical Intelligence Diagram

## Context
The hero section currently uses LaserFlow for visual appeal, but lacks thematic alignment with Metis MCP Server's positioning as a strategic, intelligent orchestration tool. We need a unique visual identity that:
- Communicates "Strategy & Intelligence" through mechanical/architectural metaphors
- Uses 3D rendering for premium feel
- Maintains performance and accessibility standards
- Works harmoniously in light/dark themes

**Stakeholders**: Marketing (brand identity), Engineering (performance), UX (usability)

**Constraints**:
- Must not increase bundle size by >100KB
- Must maintain 60fps on mid-range devices
- Must work with existing theme system (next-themes)
- Must be accessible (decorative only, aria-hidden)

## Goals / Non-Goals

### Goals
- Create visually distinctive hero element differentiating from competitors
- Communicate precision engineering and strategic thinking
- Integrate smoothly with existing design system
- Implement performant 3D rendering with Three.js
- Add smooth anime.js animations for engagement
- Support responsive design (desktop focus, mobile degradation)

### Non-Goals
- Not creating an interactive 3D experience (no mouse controls)
- Not building a reusable 3D component library (single-purpose component)
- Not supporting WebGL 1.0 (assume WebGL 2.0 available)
- Not animating on mobile devices (performance trade-off)

## Decisions

### Decision 1: Three.js for 3D Rendering
**Choice**: Use Three.js with isometric camera for CAD-style diagram

**Why**:
- Three.js is already installed (0.181.0), no new dependency
- Industry standard with excellent documentation
- Isometric projection maintains technical diagram aesthetic
- Tree-shaking support keeps bundle size reasonable
- WebGL hardware acceleration ensures 60fps

**Alternatives Considered**:
1. **CSS 3D Transforms**: Rejected due to limited lighting/material control
2. **SVG with isometric projection**: Rejected due to complexity of 3D rotation animations
3. **Canvas 2D with manual projection**: Rejected due to higher maintenance burden

**Trade-offs**:
- (+) Professional 3D rendering capabilities
- (+) GPU acceleration for smooth performance
- (-) Adds ~50-80KB to bundle (tree-shaken)
- (-) Requires WebGL support (99.5% browser support)

### Decision 2: Isometric Camera Setup
**Choice**: Isometric camera with FOV 45deg, position [10, 10, 10]

**Why**:
- Maintains "technical blueprint" aesthetic
- No perspective distortion (parallel projection feel)
- Easier to position multiple elements predictably
- CAD software typically uses orthographic/isometric views

**Camera Configuration**:
```typescript
const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
camera.position.set(10, 10, 10);
camera.lookAt(0, 0, 0);
```

### Decision 3: Gear + Circuit Node Hybrid Metaphor
**Choice**: Combine mechanical gears (5 units) with circuit nodes (8-12 units)

**Why**:
- Gears represent mechanical precision and interconnected systems
- Circuit nodes represent data flow and network topology
- Hybrid metaphor: "intelligent machinery" = AI orchestration
- Visual variety prevents monotony

**Composition**:
- **Gears**: 5 units at varying sizes (large center, medium sides, small top)
- **Nodes**: 8-12 spheres connected by lines forming network graph
- **Connections**: Lines between nodes animated with data flow effects

### Decision 4: anime.js for Animations
**Choice**: Use anime.js (already installed) for all animations

**Why**:
- Consistent with existing codebase animation approach
- Better easing control than Three.js built-in
- Timeline management for complex sequences
- Familiar API for team

**Animation Types**:
1. **Gear Rotation**: Continuous rotation at 0.5-2 RPM (linear easing)
2. **Node Pulsing**: Scale 0.8 → 1.2 (in-out-quad, 2s duration)
3. **Data Flow**: Opacity animation on connection lines
4. **Entrance**: Fade + float on component mount

### Decision 5: Color Palette Design
**Choice**: Muted blue-gray palette with strategic accents

**Light Mode**:
- Gears: `#64748b` (Slate 500) - neutral, professional
- Active Nodes: `#3b82f6` (Blue 500) - brand color
- Glow/Connections: `#06b6d4` (Cyan 500) - energy/data flow
- Background: Transparent (sits over existing gradient)

**Dark Mode** (30% brightness reduction):
- Gears: `#475569` (Slate 600)
- Active Nodes: `#2563eb` (Blue 600)
- Glow: `#0891b2` (Cyan 600)

**Why**:
- Aligns with existing Tailwind CSS design tokens
- Blue = trust, intelligence (brand alignment)
- Gray = professionalism, neutrality
- Cyan = technology, connectivity

### Decision 6: Lazy Loading Strategy
**Choice**: Lazy load on desktop (≥768px), hide on mobile

**Why**:
- Three.js scenes are expensive on mobile devices
- Mobile users prioritize content over decorative visuals
- Saves ~80KB bundle on mobile

**Implementation**:
```typescript
const MechanicalDiagram = React.lazy(() => import('./mechanical-diagram'));

{isDesktop && (
  <Suspense fallback={<div />}>
    <MechanicalDiagram />
  </Suspense>
)}
```

### Decision 7: Remove LaserFlow
**Choice**: Remove LaserFlow component entirely from hero

**Why**:
- LaserFlow and 3D diagram compete visually (too busy)
- 3D diagram provides stronger thematic alignment
- Reduces bundle size by removing LaserFlow dependency
- Simplifies hero section rendering pipeline

**Migration**: Mark `add-hero-laserflow-animation` change for future cleanup/archive

## Architecture

### Component Structure
```
src/
├── components/
│   └── three/
│       ├── mechanical-diagram.tsx (main component, 200 lines)
│       └── geometries/
│           ├── gear.ts (geometry factory, 80 lines)
│           └── circuit-node.ts (geometry factory, 60 lines)
├── lib/
│   └── three-utils.ts (helpers, 50 lines)
└── app/
    └── _components/
        └── hero-section.tsx (modified)
```

### Data Flow
1. **Mount**: Hero section conditionally renders MechanicalDiagram
2. **Init**: Component creates Three.js scene, camera, renderer
3. **Geometry**: Creates gears and nodes using factory functions
4. **Materials**: Applies theme-aware colors via next-themes hook
5. **Animate**: anime.js controls rotations/pulses, Three.js renders frames
6. **Cleanup**: Unmount disposes geometries, materials, removes listeners

### Scene Graph
```
Scene
├── AmbientLight (intensity: 0.6)
├── DirectionalLight (intensity: 0.8, position: [5, 5, 5])
├── Gears (Group)
│   ├── Gear1 (center, large)
│   ├── Gear2 (left, medium)
│   ├── Gear3 (right, medium)
│   ├── Gear4 (top-left, small)
│   └── Gear5 (top-right, small)
└── Network (Group)
    ├── Nodes (8-12 spheres)
    └── Connections (LineSegments)
```

## Risks / Trade-offs

### Risk 1: Performance on Low-End Devices
**Mitigation**:
- Lazy load only on desktop
- Use low-poly geometries (gears: 24-48 segments max)
- Test with CPU throttling (4x slowdown in DevTools)
- Add FPS monitoring in development
- Fallback: Reduce animation frame rate to 30fps if needed

### Risk 2: WebGL Unavailable
**Mitigation**:
- Graceful degradation: Component fails silently if WebGL unavailable
- Show static fallback illustration (SVG) if needed
- Log warning to console for debugging

### Risk 3: Memory Leaks
**Mitigation**:
- Strict cleanup on unmount: dispose geometries, materials, renderer
- Remove all event listeners (resize, animation frame)
- Test with Chrome DevTools memory profiler
- Document cleanup requirements in code comments

### Risk 4: Visual Clash with Existing Design
**Mitigation**:
- Use existing Tailwind color tokens for consistency
- Test in both light/dark themes extensively
- Get design approval before full implementation
- Iterate based on visual feedback

### Risk 5: Bundle Size Impact
**Mitigation**:
- Tree-shake Three.js (only import needed modules)
- Lazy load component
- Measure bundle size with `npm run build`
- Target: <100KB increase (achievable with tree-shaking)

## Migration Plan

### Phase 1: LaserFlow Removal
1. Remove `<LaserFlow>` from hero-section.tsx
2. Remove LaserFlow imports
3. Test hero section renders correctly without it
4. Mark `add-hero-laserflow-animation` change for archive

### Phase 2: Incremental Implementation
1. Implement geometry utilities (testable in isolation)
2. Implement MechanicalDiagram component (test with static scene)
3. Add animations (test frame rate)
4. Integrate into hero section (test layout)
5. Add lazy loading (test bundle size)

### Phase 3: Visual Polish
1. Fine-tune colors with design review
2. Adjust animation timings based on feedback
3. Optimize performance if needed
4. Final QA across devices/browsers

### Rollback Strategy
If performance or visual issues arise:
1. Revert hero-section.tsx changes
2. Keep geometry utilities (may be useful for future features)
3. Re-enable LaserFlow if needed
4. Document lessons learned

## Open Questions

### Q1: Should gears be interconnected (teeth meshing)?
**Answer**: No, for simplicity. Gears positioned independently, not mechanically accurate. Focus on visual metaphor over realism.

### Q2: Should we add mouse interactivity (orbit controls)?
**Answer**: No, keep it decorative. Interactivity may distract from CTA buttons.

### Q3: Should we add particle effects for data flow?
**Answer**: Defer to future iteration. Start with line glow animations, add particles if needed.

### Q4: What's the fallback for no-JavaScript users?
**Answer**: Static background gradient (existing). 3D diagram is enhancement, not critical.

## Performance Budget

| Metric | Target | Acceptable | Unacceptable |
|--------|--------|------------|--------------|
| Bundle Size Increase | <80KB | <100KB | >100KB |
| FPS (Desktop) | 60fps | 50fps | <45fps |
| FPS (Mobile) | N/A (hidden) | N/A | N/A |
| Time to Interactive | <2s | <3s | >3s |
| Lighthouse Performance | >90 | >85 | <85 |
| Memory Usage | <50MB | <75MB | >100MB |

## Success Metrics
- Visual design approval from stakeholders
- Performance metrics within budget
- No accessibility regressions
- Positive user feedback on visual appeal
- No reported rendering issues across browsers

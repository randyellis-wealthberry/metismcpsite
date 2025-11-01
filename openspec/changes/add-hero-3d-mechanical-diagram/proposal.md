# Add 3D Isometric Mechanical Intelligence Diagram to Hero Section

## Why
The hero section currently relies on LaserFlow animation for visual interest, but lacks a strong thematic branding element that communicates the "Strategy & Intelligence" positioning of Metis MCP Server. A 3D isometric mechanical CAD diagram will:
- Create a unique visual identity that differentiates from generic tech landing pages
- Communicate precision, engineering excellence, and strategic thinking through mechanical metaphors
- Provide an engaging, animated focal point that complements rather than competes with text content
- Support both light and dark themes with harmonious, easy-on-the-eyes color palette
- Demonstrate technical sophistication through Three.js 3D rendering

This approach replaces LaserFlow with a more distinctive, brand-aligned visual that better represents an MCP server's role in orchestrating AI capabilities.

## What Changes
- **Add Three.js 3D Scene Component** (`src/components/three/mechanical-diagram.tsx`)
  - Isometric camera configuration for technical diagram aesthetic
  - Interconnected gear system (3-5 gears at varying sizes)
  - Circuit board nodes with connection lines forming network topology
  - Strategic decision tree visualization using hierarchical node arrangement

- **Create Geometry Utilities**
  - Gear geometry factory (`src/components/three/geometries/gear.ts`)
  - Circuit node geometry factory (`src/components/three/geometries/circuit-node.ts`)
  - Three.js helper utilities (`src/lib/three-utils.ts`)

- **Integrate anime.js Animations**
  - Differential gear rotation (0.5-2 RPM for mechanical realism)
  - Node pulsing/breathing effects (scale 0.8-1.2, 2s duration)
  - Data flow particles along connection paths
  - Entrance animations (fade + float in on mount)

- **Remove LaserFlow Component**
  - Remove `<LaserFlow>` from hero section
  - Clean up LaserFlow-related imports
  - Remove LaserFlow background layer structure
  - **BREAKING**: Marks LaserFlow change proposal for future cleanup

- **Design Harmonious Color Palette**
  - Primary: `#64748b` (Slate 500 - neutral gray for gears)
  - Accent: `#3b82f6` (Blue 500 - matches existing brand)
  - Glow: `#06b6d4` (Cyan 500 - for active nodes)
  - Dark mode: Reduce all brightness by 30%, increase contrast

- **Hero Section Layout Update**
  - Desktop: 2-column layout (text left, 3D diagram right)
  - Tablet: Diagram above text, reduced size
  - Mobile: Hide diagram for performance (<768px)
  - Z-index layering: Background gradient (z-0) → 3D diagram (z-10) → Content (z-20)

- **Test-Driven Development**
  - Write comprehensive tests before implementation
  - Test Three.js scene lifecycle (mount/unmount/cleanup)
  - Test animation start/stop/pause behavior
  - Test responsive visibility
  - Test theme adaptation

## Impact
- **Affected specs**: Creates new `hero-visual` capability
- **Affected code**:
  - **Created**:
    - `src/components/three/mechanical-diagram.tsx` (~200 lines)
    - `src/components/three/geometries/gear.ts` (~80 lines)
    - `src/components/three/geometries/circuit-node.ts` (~60 lines)
    - `src/lib/three-utils.ts` (~50 lines)
    - `__tests__/three/mechanical-diagram.test.tsx` (~150 lines)
  - **Modified**:
    - `src/app/_components/hero-section.tsx` (remove LaserFlow, add MechanicalDiagram)
    - `src/styles/globals.css` (add 3D-specific utility classes)
  - **Removed**:
    - LaserFlow component reference in hero section
- **Dependencies**:
  - Three.js 0.181.0 (already installed)
  - anime.js 4.2.2 (already installed)
  - @types/three 0.181.0 (already installed)
- **Performance**:
  - Bundle size: Target <100KB increase (Three.js tree-shaking helps)
  - Runtime: 60fps animation target
  - Lazy load: Only render on desktop viewport
  - Memory: Proper cleanup on unmount to prevent leaks
- **User experience**:
  - More distinctive, memorable first impression
  - Clear visual metaphor for "intelligent systems"
  - No accessibility impact (decorative element with aria-hidden)
  - Smooth theme transitions
- **Breaking changes**:
  - **BREAKING**: Removes LaserFlow from hero section
  - Future task: Mark `add-hero-laserflow-animation` change proposal for archive/deprecation

## Success Criteria
- All tests pass with >85% coverage for new components
- Animations run smoothly at 60fps on mid-range devices
- Bundle size increase is <100KB (measured via `npm run build`)
- Lighthouse Performance score remains >90
- Visual design approved: colors blend harmoniously in both themes
- No Three.js memory leaks (tested with Chrome DevTools memory profiler)
- Properly lazy loads on mobile (verified with Network tab)
- Responsive behavior works across all breakpoints

'use client';

/**
 * Mechanical Diagram Component
 * 3D isometric visualization of interconnected gears and circuit nodes
 * Represents strategic intelligence through mechanical metaphors
 */

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { animate } from 'animejs';
import { useTheme } from 'next-themes';
import { createGear } from './geometries/gear';
import { createNetwork } from './geometries/circuit-node';
import {
  setupIsometricCamera,
  setupCADLighting,
  disposeObject,
  createRenderer,
  createResizeHandler,
  hexToColor,
  isWebGLAvailable,
} from '~/lib/three-utils';
import { cn } from '~/lib/utils';

export interface MechanicalDiagramProps {
  className?: string;
}

/**
 * Theme color palettes for light and dark modes
 */
const COLORS = {
  light: {
    gear: '#64748b',      // Slate 500
    nodeActive: '#3b82f6', // Blue 500
    nodeGlow: '#06b6d4',   // Cyan 500
  },
  dark: {
    gear: '#475569',       // Slate 600
    nodeActive: '#2563eb', // Blue 600
    nodeGlow: '#0891b2',   // Cyan 600
  },
};

export function MechanicalDiagram({ className }: MechanicalDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const gearsRef = useRef<THREE.Mesh[]>([]);
  const networkRef = useRef<{ nodes: THREE.Mesh[]; connections: THREE.LineSegments } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { theme = 'light' } = useTheme();
  const colors = theme === 'dark' ? COLORS.dark : COLORS.light;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    if (!isWebGLAvailable()) {
      setError('WebGL is not available');
      console.warn('MechanicalDiagram: WebGL not available, skipping render');
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    try {
      // Initialize scene
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Setup camera
      const aspect = container.clientWidth / container.clientHeight;
      const camera = setupIsometricCamera(aspect, [10, 10, 10]);
      cameraRef.current = camera;

      // Setup renderer
      const renderer = createRenderer(true, true);
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Setup lighting
      setupCADLighting(scene);

      // Create gears
      const gears = [
        // Center large gear
        createGear({ radius: 2.0, teethCount: 24, thickness: 0.4 }),
        // Left medium gear
        createGear({ radius: 1.2, teethCount: 16, thickness: 0.3 }),
        // Right medium gear
        createGear({ radius: 1.2, teethCount: 16, thickness: 0.3 }),
        // Top-left small gear
        createGear({ radius: 0.8, teethCount: 12, thickness: 0.25 }),
        // Top-right small gear
        createGear({ radius: 0.8, teethCount: 12, thickness: 0.25 }),
      ];

      // Position gears strategically
      gears[0]!.position.set(0, 0, 0); // Center
      gears[1]!.position.set(-4, -1, 0); // Left
      gears[2]!.position.set(4, -1, 0); // Right
      gears[3]!.position.set(-3, 2.5, -1); // Top-left
      gears[4]!.position.set(3, 2.5, -1); // Top-right

      // Apply theme colors to gears
      gears.forEach((gear) => {
        if (gear.material instanceof THREE.MeshStandardMaterial) {
          gear.material.color = hexToColor(colors.gear);
        }
        scene.add(gear);
      });
      gearsRef.current = gears;

      // Create network of nodes
      const network = createNetwork({
        nodeCount: 10,
        pattern: 'hierarchical',
        bounds: { x: 8, y: 5, z: 3 },
        connectionDensity: 0.25,
      });
      network.group.position.y = 1;
      scene.add(network.group);
      networkRef.current = network;

      // Apply theme colors to nodes and connections
      network.nodes.forEach((node) => {
        if (node.material instanceof THREE.MeshStandardMaterial) {
          node.material.color = hexToColor(colors.nodeActive);
          node.material.emissive = hexToColor(colors.nodeActive);
        }
      });

      if (network.connections.material instanceof THREE.LineBasicMaterial) {
        network.connections.material.color = hexToColor(colors.nodeGlow);
      }

      // Animation loop
      const animateScene = () => {
        animationFrameRef.current = requestAnimationFrame(animateScene);
        renderer.render(scene, camera);
      };

      // Start rendering
      animateScene();

      // Setup resize handler
      const handleResize = createResizeHandler(camera, renderer, containerRef.current);
      window.addEventListener('resize', handleResize);

      // Start animations if reduced motion is not preferred
      if (!prefersReducedMotion) {
        // Entrance animation
        setTimeout(() => {
          // Fade in animation
          animate(renderer.domElement, {
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 800,
            delay: 400,
            ease: 'out-cubic',
          });

          // Gear rotation animations
          gears.forEach((gear, index) => {
            const rotationSpeed = 0.5 + (index * 0.3); // RPM

            animate(gear.rotation, {
              z: `+=${Math.PI * 2}`,
              duration: (1 / rotationSpeed) * 60 * 1000, // Convert RPM to duration
              ease: 'linear',
              loop: true,
            });
          });

          // Node pulsing animations
          network.nodes.forEach((node, index) => {
            animate(node.scale, {
              x: [0.8, 1.2, 0.8],
              y: [0.8, 1.2, 0.8],
              z: [0.8, 1.2, 0.8],
              duration: 2000,
              delay: index * 100,
              ease: 'in-out-quad',
              loop: true,
            });
          });

          // Connection glow animation
          const connectionMaterial = network.connections.material;
          if (connectionMaterial instanceof THREE.Material && 'opacity' in connectionMaterial) {
            animate(connectionMaterial, {
              opacity: [0.3, 1.0, 0.3],
              duration: 1500,
              ease: 'in-out-cubic',
              loop: true,
            });
          }
        }, 0);
      }

      setIsLoaded(true);

      // Cleanup function
      return () => {
        // Cancel animation loop
        if (animationFrameRef.current !== null) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        // Remove resize listener
        window.removeEventListener('resize', handleResize);

        // Dispose geometries and materials
        gears.forEach((gear) => disposeObject(gear));
        if (network) {
          network.nodes.forEach((node) => disposeObject(node));
          disposeObject(network.connections);
        }

        // Dispose renderer
        if (renderer) {
          renderer.dispose();
          if (container && renderer.domElement.parentNode) {
            container.removeChild(renderer.domElement);
          }
        }
      };
    } catch (err) {
      console.error('MechanicalDiagram initialization error:', err);
      setError(err instanceof Error ? err.message : 'Failed to initialize 3D diagram');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount - colors are applied via separate effect

  // Update colors when theme changes
  useEffect(() => {
    if (!sceneRef.current) return;

    // Update gear colors
    gearsRef.current.forEach((gear) => {
      if (gear.material instanceof THREE.MeshStandardMaterial) {
        gear.material.color = hexToColor(colors.gear);
      }
    });

    // Update node colors
    if (networkRef.current) {
      networkRef.current.nodes.forEach((node) => {
        if (node.material instanceof THREE.MeshStandardMaterial) {
          node.material.color = hexToColor(colors.nodeActive);
          node.material.emissive = hexToColor(colors.nodeActive);
        }
      });

      // Update connection colors
      if (networkRef.current.connections.material instanceof THREE.LineBasicMaterial) {
        networkRef.current.connections.material.color = hexToColor(colors.nodeGlow);
      }
    }
  }, [theme, colors, colors.gear, colors.nodeActive, colors.nodeGlow]);

  // Handle errors gracefully
  if (error) {
    return null; // Fail silently, don't break the page
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full h-full',
        !isLoaded && 'opacity-0',
        className
      )}
      aria-hidden="true"
      style={{ minHeight: '400px' }}
    />
  );
}

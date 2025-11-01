/**
 * Three.js Utility Functions
 * Helper functions for working with Three.js scenes, geometries, and materials
 */

import * as THREE from 'three';

/**
 * Dispose of a Three.js object and its children recursively
 * Prevents memory leaks by properly cleaning up geometries, materials, and textures
 */
export function disposeObject(object: THREE.Object3D): void {
  if (!object) return;

  // Recursively dispose children
  if (object.children && object.children.length > 0) {
    object.children.forEach((child) => disposeObject(child));
  }

  // Dispose geometry
  if ('geometry' in object && object.geometry) {
    (object.geometry as THREE.BufferGeometry).dispose();
  }

  // Dispose material(s)
  if ('material' in object && object.material) {
    const materials = Array.isArray(object.material)
      ? object.material
      : [object.material];

    materials.forEach((material: THREE.Material) => {
      // Dispose textures
      if ('map' in material && material.map) (material.map as THREE.Texture).dispose();
      if ('lightMap' in material && material.lightMap) (material.lightMap as THREE.Texture).dispose();
      if ('bumpMap' in material && material.bumpMap) (material.bumpMap as THREE.Texture).dispose();
      if ('normalMap' in material && material.normalMap) (material.normalMap as THREE.Texture).dispose();
      if ('specularMap' in material && material.specularMap) (material.specularMap as THREE.Texture).dispose();
      if ('envMap' in material && material.envMap) (material.envMap as THREE.Texture).dispose();

      material.dispose();
    });
  }

  // Remove from parent
  if (object.parent) {
    object.parent.remove(object);
  }
}

/**
 * Create a standard material with consistent properties
 */
export function createStandardMaterial(
  color: string | number,
  options: Partial<THREE.MeshStandardMaterialParameters> = {}
): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.4,
    metalness: 0.6,
    ...options,
  });
}

/**
 * Create a basic material for lines
 */
export function createLineMaterial(
  color: string | number,
  options: Partial<THREE.LineBasicMaterialParameters> = {}
): THREE.LineBasicMaterial {
  return new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity: 0.6,
    ...options,
  });
}

/**
 * Setup isometric camera with standard configuration
 */
export function setupIsometricCamera(
  aspect: number,
  position: [number, number, number] = [10, 10, 10]
): THREE.PerspectiveCamera {
  const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
  camera.position.set(...position);
  camera.lookAt(0, 0, 0);
  return camera;
}

/**
 * Setup standard lighting for CAD-style rendering
 */
export function setupCADLighting(scene: THREE.Scene): void {
  // Ambient light for overall illumination
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  // Directional light for shadows and depth
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  // Optional: Add a subtle fill light from the opposite direction
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
  fillLight.position.set(-5, -5, -5);
  scene.add(fillLight);
}

/**
 * Convert hex color string to THREE.Color
 */
export function hexToColor(hex: string): THREE.Color {
  return new THREE.Color(hex);
}

/**
 * Create a responsive resize handler for Three.js renderer
 */
export function createResizeHandler(
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  container: HTMLElement
) {
  return () => {
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  };
}

/**
 * Check if WebGL is available
 */
export function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') ?? canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

/**
 * Create a Three.js renderer with standard configuration
 */
export function createRenderer(alpha = true, antialias = true): THREE.WebGLRenderer {
  const renderer = new THREE.WebGLRenderer({
    alpha,
    antialias,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap at 2 for performance
  return renderer;
}

/**
 * Position objects in a circular arrangement
 */
export function positionInCircle(
  objects: THREE.Object3D[],
  radius: number,
  startAngle = 0
): void {
  const angleStep = (Math.PI * 2) / objects.length;

  objects.forEach((obj, index) => {
    const angle = startAngle + angleStep * index;
    obj.position.x = Math.cos(angle) * radius;
    obj.position.z = Math.sin(angle) * radius;
  });
}

/**
 * Create a network of connections between nodes
 */
export function createConnections(
  nodes: THREE.Object3D[],
  connections: [number, number][]
): THREE.LineSegments {
  const points: THREE.Vector3[] = [];

  connections.forEach(([fromIndex, toIndex]) => {
    if (nodes[fromIndex] && nodes[toIndex]) {
      points.push(nodes[fromIndex].position.clone());
      points.push(nodes[toIndex].position.clone());
    }
  });

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = createLineMaterial(0x06b6d4, { opacity: 0.4 });
  return new THREE.LineSegments(geometry, material);
}

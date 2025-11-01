/**
 * Circuit Node Geometry Factory
 * Creates network nodes and connection lines for circuit/network visualization
 */

import * as THREE from 'three';

export interface NodeOptions {
  /** Radius of the node sphere */
  radius?: number;
  /** Color of the node */
  color?: string | number;
  /** Glow intensity (0-1) */
  glowIntensity?: number;
  /** Whether the node is active/highlighted */
  active?: boolean;
}

export interface NetworkOptions {
  /** Number of nodes to create */
  nodeCount: number;
  /** Distribution pattern */
  pattern?: 'random' | 'grid' | 'circular' | 'hierarchical';
  /** Bounds for node placement */
  bounds?: { x: number; y: number; z: number };
  /** Connection density (0-1) */
  connectionDensity?: number;
}

/**
 * Create a circuit node (sphere with optional glow effect)
 */
export function createNode(options: NodeOptions = {}): THREE.Mesh {
  const {
    radius = 0.3,
    color = 0x3b82f6,
    glowIntensity = 0.5,
    active = false,
  } = options;

  // Create sphere geometry
  const geometry = new THREE.SphereGeometry(radius, 32, 32);

  // Create material with emissive glow
  const material = new THREE.MeshStandardMaterial({
    color,
    emissive: color,
    emissiveIntensity: active ? glowIntensity * 2 : glowIntensity,
    roughness: 0.3,
    metalness: 0.7,
  });

  const mesh = new THREE.Mesh(geometry, material);

  // Add glow sprite for enhanced effect
  if (glowIntensity > 0) {
    const glowGeometry = new THREE.SphereGeometry(radius * 1.5, 16, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: glowIntensity * 0.3,
      blending: THREE.AdditiveBlending,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    mesh.add(glow);
  }

  return mesh;
}

/**
 * Create a network of connected nodes
 */
export function createNetwork(options: NetworkOptions): {
  nodes: THREE.Mesh[];
  connections: THREE.LineSegments;
  group: THREE.Group;
} {
  const {
    nodeCount,
    pattern = 'random',
    bounds = { x: 10, y: 6, z: 10 },
    connectionDensity = 0.3,
  } = options;

  const nodes: THREE.Mesh[] = [];
  const group = new THREE.Group();

  // Create nodes based on pattern
  for (let i = 0; i < nodeCount; i++) {
    const node = createNode({
      radius: 0.2 + Math.random() * 0.2,
      color: i % 3 === 0 ? 0x3b82f6 : 0x06b6d4,
      glowIntensity: 0.4 + Math.random() * 0.3,
      active: Math.random() > 0.7,
    });

    // Position based on pattern
    switch (pattern) {
      case 'circular':
        positionCircular(node, i, nodeCount, bounds);
        break;
      case 'grid':
        positionGrid(node, i, nodeCount, bounds);
        break;
      case 'hierarchical':
        positionHierarchical(node, i, nodeCount, bounds);
        break;
      case 'random':
      default:
        positionRandom(node, bounds);
        break;
    }

    nodes.push(node);
    group.add(node);
  }

  // Create connections between nodes
  const connectionPairs: [number, number][] = [];

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      // Connect based on probability and distance
      if (Math.random() < connectionDensity) {
        const distance = nodes[i]!.position.distanceTo(nodes[j]!.position);
        // Prefer closer nodes
        if (distance < bounds.x * 0.8) {
          connectionPairs.push([i, j]);
        }
      }
    }
  }

  const connections = createConnectionLines(nodes, connectionPairs);
  group.add(connections);

  return { nodes, connections, group };
}

/**
 * Create connection lines between nodes
 */
function createConnectionLines(
  nodes: THREE.Mesh[],
  pairs: [number, number][]
): THREE.LineSegments {
  const points: THREE.Vector3[] = [];

  pairs.forEach(([fromIndex, toIndex]) => {
    const from = nodes[fromIndex];
    const to = nodes[toIndex];
    if (from && to) {
      points.push(from.position.clone());
      points.push(to.position.clone());
    }
  });

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({
    color: 0x06b6d4,
    transparent: true,
    opacity: 0.4,
    linewidth: 1,
  });

  return new THREE.LineSegments(geometry, material);
}

/**
 * Position node in circular pattern
 */
function positionCircular(
  node: THREE.Mesh,
  index: number,
  total: number,
  bounds: { x: number; y: number; z: number }
): void {
  const angle = (index / total) * Math.PI * 2;
  const radius = bounds.x * 0.4;

  node.position.x = Math.cos(angle) * radius;
  node.position.y = (Math.random() - 0.5) * bounds.y;
  node.position.z = Math.sin(angle) * radius;
}

/**
 * Position node in grid pattern
 */
function positionGrid(
  node: THREE.Mesh,
  index: number,
  total: number,
  bounds: { x: number; y: number; z: number }
): void {
  const cols = Math.ceil(Math.sqrt(total));
  const row = Math.floor(index / cols);
  const col = index % cols;

  node.position.x = (col - cols / 2) * (bounds.x / cols);
  node.position.y = (row - cols / 2) * (bounds.y / cols);
  node.position.z = (Math.random() - 0.5) * bounds.z * 0.3;
}

/**
 * Position node in hierarchical tree pattern
 */
function positionHierarchical(
  node: THREE.Mesh,
  index: number,
  total: number,
  bounds: { x: number; y: number; z: number }
): void {
  // Simple 3-level hierarchy
  const level = index < 1 ? 0 : index < 4 ? 1 : 2;
  const indexInLevel = index < 1 ? 0 : index < 4 ? index - 1 : index - 4;
  const nodesInLevel = level === 0 ? 1 : level === 1 ? 3 : total - 4;

  node.position.y = bounds.y * 0.4 - level * (bounds.y * 0.4);
  node.position.x = (indexInLevel - nodesInLevel / 2) * (bounds.x / nodesInLevel);
  node.position.z = (Math.random() - 0.5) * bounds.z * 0.2;
}

/**
 * Position node randomly within bounds
 */
function positionRandom(
  node: THREE.Mesh,
  bounds: { x: number; y: number; z: number }
): void {
  node.position.x = (Math.random() - 0.5) * bounds.x;
  node.position.y = (Math.random() - 0.5) * bounds.y;
  node.position.z = (Math.random() - 0.5) * bounds.z;
}

/**
 * Create data flow particles along connection lines
 * Returns an array of particle meshes that can be animated
 */
export function createDataFlowParticles(
  fromNode: THREE.Mesh,
  toNode: THREE.Mesh,
  count = 5
): THREE.Mesh[] {
  const particles: THREE.Mesh[] = [];
  const geometry = new THREE.SphereGeometry(0.05, 8, 8);
  const material = new THREE.MeshBasicMaterial({
    color: 0x06b6d4,
    transparent: true,
    opacity: 0.8,
  });

  for (let i = 0; i < count; i++) {
    const particle = new THREE.Mesh(geometry, material.clone());
    // Position along the line
    const t = i / count;
    particle.position.lerpVectors(fromNode.position, toNode.position, t);
    particles.push(particle);
  }

  return particles;
}

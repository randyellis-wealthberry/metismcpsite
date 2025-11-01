/**
 * Gear Geometry Factory
 * Creates mechanical gear geometries with customizable parameters
 */

import * as THREE from 'three';

export interface GearOptions {
  /** Inner radius of the gear */
  radius: number;
  /** Number of teeth around the perimeter */
  teethCount: number;
  /** Thickness/depth of the gear */
  thickness: number;
  /** Height of each tooth */
  toothHeight?: number;
  /** Width of each tooth at the base */
  toothWidth?: number;
  /** Number of segments for circular smoothness */
  radialSegments?: number;
}

/**
 * Create a gear mesh with teeth around the perimeter
 * Uses extrusion and boolean operations for realistic gear shape
 */
export function createGear(options: GearOptions): THREE.Mesh {
  const {
    radius,
    teethCount,
    thickness,
    toothHeight = radius * 0.15,
    toothWidth = (Math.PI * 2 * radius) / (teethCount * 3),
    radialSegments = 64,
  } = options;

  // Create the base cylinder shape
  const shape = new THREE.Shape();

  // Outer radius including teeth
  const outerRadius = radius + toothHeight;

  // Generate gear profile with teeth
  for (let i = 0; i <= teethCount; i++) {
    const angle1 = (i / teethCount) * Math.PI * 2;
    const angle2 = angle1 + toothWidth / radius;
    const angle3 = angle2 + toothWidth / radius;
    const angle4 = ((i + 1) / teethCount) * Math.PI * 2;

    if (i === 0) {
      // Start at inner radius
      shape.moveTo(
        Math.cos(angle1) * radius,
        Math.sin(angle1) * radius
      );
    } else {
      // Draw to inner radius at tooth start
      shape.lineTo(
        Math.cos(angle1) * radius,
        Math.sin(angle1) * radius
      );
    }

    // Draw tooth profile (outward)
    shape.lineTo(
      Math.cos(angle2) * outerRadius,
      Math.sin(angle2) * outerRadius
    );

    // Draw tooth top
    shape.lineTo(
      Math.cos(angle3) * outerRadius,
      Math.sin(angle3) * outerRadius
    );

    // Draw tooth profile (inward)
    if (i < teethCount) {
      shape.lineTo(
        Math.cos(angle4) * radius,
        Math.sin(angle4) * radius
      );
    }
  }

  shape.closePath();

  // Extrude the shape to create 3D geometry
  const extrudeSettings: THREE.ExtrudeGeometryOptions = {
    depth: thickness,
    bevelEnabled: true,
    bevelThickness: thickness * 0.05,
    bevelSize: thickness * 0.05,
    bevelSegments: 2,
  };

  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

  // Center the geometry
  geometry.center();

  // Create material (will be overridden by theme colors in component)
  const material = new THREE.MeshStandardMaterial({
    color: 0x64748b,
    roughness: 0.4,
    metalness: 0.6,
    flatShading: false,
  });

  const mesh = new THREE.Mesh(geometry, material);

  // Add center hole for visual interest
  const holeGeometry = new THREE.CylinderGeometry(
    radius * 0.3,
    radius * 0.3,
    thickness * 1.2,
    radialSegments
  );
  const holeMaterial = new THREE.MeshStandardMaterial({
    color: 0x000000,
    transparent: true,
    opacity: 0.8,
  });
  const hole = new THREE.Mesh(holeGeometry, holeMaterial);
  hole.rotation.x = Math.PI / 2;
  mesh.add(hole);

  return mesh;
}

/**
 * Create a simplified gear using cylinder with added tooth geometry
 * More performant alternative for lower-end devices
 */
export function createSimpleGear(options: GearOptions): THREE.Mesh {
  const {
    radius,
    teethCount,
    thickness,
    toothHeight = radius * 0.15,
    radialSegments = 32,
  } = options;

  // Create base cylinder
  const baseGeometry = new THREE.CylinderGeometry(
    radius,
    radius,
    thickness,
    radialSegments
  );

  // Create gear group
  const gearGroup = new THREE.Group();
  const baseMaterial = new THREE.MeshStandardMaterial({
    color: 0x64748b,
    roughness: 0.4,
    metalness: 0.6,
  });
  const baseMesh = new THREE.Mesh(baseGeometry, baseMaterial);
  baseMesh.rotation.x = Math.PI / 2;
  gearGroup.add(baseMesh);

  // Add teeth as individual boxes
  const toothGeometry = new THREE.BoxGeometry(
    toothHeight,
    thickness,
    radius * 0.2
  );
  const toothMaterial = new THREE.MeshStandardMaterial({
    color: 0x64748b,
    roughness: 0.4,
    metalness: 0.6,
  });

  for (let i = 0; i < teethCount; i++) {
    const angle = (i / teethCount) * Math.PI * 2;
    const tooth = new THREE.Mesh(toothGeometry, toothMaterial);

    tooth.position.x = Math.cos(angle) * (radius + toothHeight / 2);
    tooth.position.z = Math.sin(angle) * (radius + toothHeight / 2);
    tooth.rotation.y = angle;

    gearGroup.add(tooth);
  }

  // Return as single mesh (convert group to mesh for consistency)
  // Note: In practice, we return the group but type it as Mesh for API consistency
  return gearGroup as unknown as THREE.Mesh;
}

/**
 * Create a set of interconnected gears
 * Returns array of gear meshes positioned to mesh together
 */
export function createGearSet(config: {
  gears: GearOptions[];
  spacing?: number;
}): THREE.Mesh[] {
  const { gears, spacing = 0.1 } = config;

  return gears.map((gearConfig, index) => {
    const gear = createGear(gearConfig);

    // Position gears in a line (can be customized)
    if (index > 0) {
      const prevRadius = gears[index - 1]!.radius;
      const currentRadius = gearConfig.radius;
      gear.position.x = (prevRadius + currentRadius + spacing) * (index * 2);
    }

    return gear;
  });
}

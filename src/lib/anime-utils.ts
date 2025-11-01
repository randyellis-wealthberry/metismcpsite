/**
 * Anime.js Animation Utilities for React/Next.js
 *
 * Provides reusable animation patterns, easing functions, and
 * scroll-triggered animations for the Metis MCP landing page.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
 

import { animate, stagger, createTimeline } from 'animejs';

// Export anime.js core functions
export { animate, stagger, createTimeline };

// Check if we're in the browser (for Next.js SSR compatibility)
export const isBrowser = typeof window !== 'undefined';

/**
 * Custom Easing Functions (for anime.js v4 use 'ease' property)
 */
export const easings = {
  // Smooth ease-out for hero elements
  smooth: 'out-cubic',

  // Bouncy spring for interactive elements
  spring: 'out-elastic(1, 0.5)',

  // Elastic for attention-grabbing animations
  elastic: 'out-elastic(1, 0.8)',

  // Sharp for quick UI responses
  sharp: 'out-expo',

  // Gentle for subtle animations
  gentle: 'out-quad',
};

/**
 * Animation Presets
 */
export const animationPresets = {
  /**
   * Fade in from bottom with smooth ease
   */
  fadeInUp: {
    opacity: [0, 1],
    translateY: [40, 0],
    ease: easings.smooth,
    duration: 800,
  },

  /**
   * Fade in from left
   */
  fadeInLeft: {
    opacity: [0, 1],
    translateX: [-40, 0],
    ease: easings.smooth,
    duration: 800,
  },

  /**
   * Fade in from right
   */
  fadeInRight: {
    opacity: [0, 1],
    translateX: [40, 0],
    ease: easings.smooth,
    duration: 800,
  },

  /**
   * Scale in with fade
   */
  scaleIn: {
    opacity: [0, 1],
    scale: [0.8, 1],
    ease: easings.spring,
    duration: 600,
  },

  /**
   * Rotate in with fade
   */
  rotateIn: {
    opacity: [0, 1],
    rotate: [-10, 0],
    ease: easings.elastic,
    duration: 1000,
  },

  /**
   * Slide up reveal
   */
  slideUp: {
    translateY: [100, 0],
    opacity: [0, 1],
    ease: easings.smooth,
    duration: 700,
  },
};

/**
 * Stagger Configuration Presets
 */
export const staggerPresets = {
  // Quick succession
  fast: {
    from: 'first',
    start: 0,
    each: 50,
  },

  // Medium spacing
  medium: {
    from: 'first',
    start: 0,
    each: 100,
  },

  // Slow, dramatic
  slow: {
    from: 'first',
    start: 0,
    each: 200,
  },

  // From center outward
  center: {
    from: 'center',
    start: 0,
    each: 75,
  },
};

/**
 * Create a basic fade-in-up animation
 */
export function fadeInUpAnimation(
  targets: any,
  options: any = {}
) {
  if (!isBrowser) return;

  return animate(targets, {
    ...animationPresets.fadeInUp,
    ...options,
  });
}

/**
 * Create a staggered animation for multiple elements
 */
export function staggerAnimation(
  targets: any,
  preset: keyof typeof animationPresets = 'fadeInUp',
  staggerPreset: keyof typeof staggerPresets = 'medium',
  options: any = {}
) {
  if (!isBrowser) return;

  const staggerConfig = staggerPresets[staggerPreset];
  return animate(targets, {
    ...animationPresets[preset],
    delay: stagger(staggerConfig.each as number, { from: staggerConfig.from as any }),
    ...options,
  });
}

/**
 * Create a count-up animation for numbers
 */
export function countUpAnimation(
  element: HTMLElement,
  target: number,
  options: any = {}
) {
  if (!isBrowser) return;

  const obj = { count: 0 };

  return animate(obj, {
    targets: obj,
    count: target,
    duration: 2000,
    ease: 'easeOutQuad',
    round: 1,
    update: () => {
      element.textContent = obj.count.toString();
    },
    ...options,
  });
}

/**
 * Create a pulse animation for badges/icons
 */
export function pulseAnimation(
  targets: any,
  options: any = {}
) {
  if (!isBrowser) return;

  return animate(targets, {
    scale: [1, 1.05, 1],
    duration: 2000,
    ease: 'easeInOutQuad',
    loop: true,
    ...options,
  });
}

/**
 * Create a floating animation
 */
export function floatAnimation(
  targets: any,
  options: any = {}
) {
  if (!isBrowser) return;

  return animate(targets, {
    translateY: [-8, 8],
    duration: 3000,
    ease: 'easeInOutSine',
    direction: 'alternate',
    loop: true,
    ...options,
  });
}

/**
 * Create a typewriter effect
 */
export function typewriterAnimation(
  element: HTMLElement,
  text: string,
  options: any = {}
) {
  if (!isBrowser) return;

  const obj = { progress: 0 };

  return animate(obj, {
    targets: obj,
    progress: text.length,
    duration: text.length * 50,
    ease: 'linear',
    round: 1,
    update: () => {
      element.textContent = text.substring(0, obj.progress);
    },
    ...options,
  });
}

/**
 * Create a reveal animation with clipping
 */
export function clipRevealAnimation(
  targets: any,
  options: any = {}
) {
  if (!isBrowser) return;

  return animate(targets, {
    clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
    duration: 1000,
    ease: easings.smooth,
    ...options,
  });
}

/**
 * Scroll-Triggered Animation Hook
 *
 * Creates an Intersection Observer that triggers animations
 * when elements enter the viewport.
 */
export function createScrollAnimation(
  selector: string,
  animationFn: (target: Element) => void,
  options: IntersectionObserverInit = {}
) {
  if (!isBrowser) return () => {};

  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animationFn(entry.target);
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    ...options,
  });

  elements.forEach((el) => observer.observe(el));

  // Return cleanup function
  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
}

/**
 * Timeline Animation Creator
 *
 * Simplifies creating complex animation sequences
 */
export function createAnimationTimeline(options: any = {}) {
  if (!isBrowser) return null;

  return createTimeline({
    ease: easings.smooth,
    ...options,
  });
}

/**
 * Magnetic Button Effect
 *
 * Creates a subtle attraction effect when hovering near buttons
 */
export function magneticEffect(button: HTMLElement, strength: number = 20) {
  if (!isBrowser) return;

  const handleMouseMove = (e: MouseEvent) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    animate(button, {
      translateX: x / strength,
      translateY: y / strength,
      duration: 300,
      ease: 'out-quad',
    });
  };

  const handleMouseLeave = () => {
    animate(button, {
      translateX: 0,
      translateY: 0,
      duration: 500,
      ease: easings.elastic,
    });
  };

  button.addEventListener('mousemove', handleMouseMove);
  button.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    button.removeEventListener('mousemove', handleMouseMove);
    button.removeEventListener('mouseleave', handleMouseLeave);
  };
}

/**
 * SVG Path Animation
 *
 * Animates SVG path drawing
 */
export function drawSVGPath(
  path: SVGPathElement,
  options: any = {}
) {
  if (!isBrowser) return;

  const length = path.getTotalLength();

  path.style.strokeDasharray = `${length}`;
  path.style.strokeDashoffset = `${length}`;

  return animate(path, {
    strokeDashoffset: [length, 0],
    duration: 2000,
    ease: easings.smooth,
    ...options,
  });
}

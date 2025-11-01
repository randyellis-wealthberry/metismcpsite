/**
 * Framer Motion Animation Presets and Utilities
 *
 * Premium animation configurations for the landing page.
 * All animations respect prefers-reduced-motion.
 */

import { type Variants } from "framer-motion";

/**
 * Fade in from bottom with slide up effect
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 0.61, 0.36, 1], // Custom easing
    },
  },
};

/**
 * Fade in without movement
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

/**
 * Scale up with fade in
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
};

/**
 * Stagger children animation
 * Use with parent container
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Fast stagger for grids
 */
export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

/**
 * Slide in from left
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
};

/**
 * Slide in from right
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
};

/**
 * Configuration for scroll-triggered animations
 */
export const scrollAnimationConfig = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-50px" },
} as const;

/**
 * Hover animation for cards
 */
export const hoverLift = {
  rest: {
    y: 0,
    transition: { duration: 0.2 },
  },
  hover: {
    y: -8,
    transition: { duration: 0.2, ease: "easeOut" },
  },
} as const;

/**
 * Icon hover animation
 */
export const iconHover = {
  rest: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.3, ease: "easeOut" },
  },
} as const;

/**
 * Button press animation
 */
export const buttonPress = {
  scale: 0.98,
  transition: { duration: 0.1 },
} as const;

/**
 * Pulse animation for CTAs
 */
export const pulse: Variants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Number counter animation hook-friendly config
 */
export const counterConfig = {
  duration: 2,
  ease: "easeOut",
} as const;

/**
 * Utility to check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Get animation variants with reduced motion support
 */
export const getAnimationVariants = (
  variants: Variants,
  reducedVariant?: Variants
): Variants => {
  if (prefersReducedMotion() && reducedVariant) {
    return reducedVariant;
  }
  return variants;
};

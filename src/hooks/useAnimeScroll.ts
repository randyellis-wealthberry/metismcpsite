/**
 * useAnimeScroll Hook
 *
 * React hook for scroll-triggered anime.js animations
 * Compatible with Next.js SSR
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

'use client';

import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { isBrowser, animationPresets } from '~/lib/anime-utils';

export interface UseAnimeScrollOptions {
  /**
   * Animation preset to use
   */
  preset?: keyof typeof animationPresets;

  /**
   * Custom anime.js parameters (overrides preset)
   */
  animeParams?: any;

  /**
   * IntersectionObserver threshold (0-1)
   * @default 0.1
   */
  threshold?: number;

  /**
   * Root margin for IntersectionObserver
   * @default '0px 0px -100px 0px'
   */
  rootMargin?: string;

  /**
   * Whether to animate only once
   * @default true
   */
  once?: boolean;

  /**
   * Delay before animation starts (ms)
   * @default 0
   */
  delay?: number;

  /**
   * Whether animation is disabled
   * @default false
   */
  disabled?: boolean;
}

/**
 * Hook for triggering anime.js animations on scroll
 *
 * @example
 * ```tsx
 * const ref = useAnimeScroll({ preset: 'fadeInUp' });
 * return <div ref={ref}>Content</div>
 * ```
 */
export function useAnimeScroll<T extends HTMLElement = HTMLDivElement>(
  options: UseAnimeScrollOptions = {}
) {
  const {
    preset = 'fadeInUp',
    animeParams,
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    once = true,
    delay = 0,
    disabled = false,
  } = options;

  const elementRef = useRef<T>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isBrowser || disabled || !elementRef.current) return;

    const element = elementRef.current;

    // Set initial state
    if (animeParams || preset) {
      element.style.opacity = '0';
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasAnimated.current)) {
            hasAnimated.current = true;

            // Trigger animation
            setTimeout(() => {
              animate(element, {
                ...(animeParams ?? animationPresets[preset]),
              });
            }, delay);

            if (once) {
              observer.unobserve(element);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [preset, threshold, rootMargin, once, delay, disabled, animeParams]);

  return elementRef;
}

/**
 * Hook for staggered scroll animations on multiple children
 *
 * @example
 * ```tsx
 * const ref = useAnimeStagger({ stagger: 100 });
 * return (
 *   <div ref={ref}>
 *     <div className="child">Item 1</div>
 *     <div className="child">Item 2</div>
 *   </div>
 * );
 * ```
 */
export function useAnimeStagger<T extends HTMLElement = HTMLDivElement>(
  options: UseAnimeScrollOptions & {
    /**
     * CSS selector for children to animate
     * @default '.child'
     */
    childSelector?: string;

    /**
     * Stagger delay between children (ms)
     * @default 100
     */
    staggerDelay?: number;

    /**
     * Stagger start position
     * @default 'first'
     */
    staggerFrom?: 'first' | 'last' | 'center' | number;
  } = {}
) {
  const {
    preset = 'fadeInUp',
    animeParams,
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    once = true,
    delay = 0,
    disabled = false,
    childSelector = '.child',
    staggerDelay = 100,
    staggerFrom = 'first',
  } = options;

  const containerRef = useRef<T>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isBrowser || disabled || !containerRef.current) return;

    const container = containerRef.current;
    const children = container.querySelectorAll(childSelector);

    // Set initial state for all children
    children.forEach((child) => {
      (child as HTMLElement).style.opacity = '0';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasAnimated.current)) {
            hasAnimated.current = true;

            // Trigger staggered animation
            setTimeout(() => {
              animate(children, {
                ...(animeParams ?? animationPresets[preset]),
                delay: stagger(staggerDelay, { from: staggerFrom }),
              });
            }, delay);

            if (once) {
              observer.unobserve(container);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [preset, threshold, rootMargin, once, delay, disabled, animeParams, childSelector, staggerDelay, staggerFrom]);

  return containerRef;
}

/**
 * Hook for number counter animation
 *
 * @example
 * ```tsx
 * const [ref, count] = useAnimeCounter({ target: 1000 });
 * return <div ref={ref}>{count}</div>
 * ```
 */
export function useAnimeCounter(options: {
  /**
   * Target number to count to
   */
  target: number;

  /**
   * Starting number
   * @default 0
   */
  start?: number;

  /**
   * Animation duration (ms)
   * @default 2000
   */
  duration?: number;

  /**
   * Number of decimal places
   * @default 0
   */
  decimals?: number;

  /**
   * Custom format function
   */
  format?: (value: number) => string;

  /**
   * IntersectionObserver options
   */
  threshold?: number;
  once?: boolean;
}) {
  const {
    target,
    start = 0,
    duration = 2000,
    decimals = 0,
    format,
    threshold = 0.1,
    once = true,
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const valueRef = useRef(start);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isBrowser || !elementRef.current) return;

    const element = elementRef.current;
    const obj = { value: start };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasAnimated.current)) {
            hasAnimated.current = true;

            animate(obj, {
              value: target,
              duration,
              ease: 'out-quad',
              round: Math.pow(10, decimals),
              update: () => {
                valueRef.current = obj.value;
                const formatted = format
                  ? format(obj.value)
                  : obj.value.toFixed(decimals);
                element.textContent = formatted;
              },
            });

            if (once) {
              observer.unobserve(element);
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [target, start, duration, decimals, format, threshold, once]);

  return elementRef;
}

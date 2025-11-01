"use client";

import { BentoCard, type BentoItem } from "~/components/kokonutui/bento-grid";
import { cn } from "~/lib/utils";

/**
 * Enhanced Bento Card Component
 *
 * Wrapper around Kokonut UI BentoCard that integrates with the design system.
 * Applies semantic color variables, depth enhancement utilities, and maintains
 * the original 3D tilt effect while providing consistent theming.
 *
 * Features:
 * - Semantic color integration (bg-surface, text-primary, border-subtle)
 * - Depth enhancement (depth-elevated utility)
 * - Automatic light/dark theme support via 100-lightness rule
 * - Preserves 3D tilt effect from Kokonut UI
 * - Dual-shadow system for realistic depth
 *
 * @example
 * ```tsx
 * const item: BentoItem = {
 *   title: "Feature Title",
 *   description: "Feature description",
 *   href: "#feature",
 *   icon: Icon,
 *   feature: "spotlight",
 *   spotlightItems: ["Item 1", "Item 2"]
 * };
 *
 * <EnhancedBentoCard item={item} />
 * ```
 */

interface EnhancedBentoCardProps {
  /**
   * BentoItem data structure from Kokonut UI
   * Contains title, description, icon, href, feature type, and feature-specific data
   */
  item: BentoItem;
  /**
   * Optional additional CSS classes
   */
  className?: string;
}

export function EnhancedBentoCard({ item, className }: EnhancedBentoCardProps) {
  return (
    <div
      className={cn(
        // Depth enhancement - creates visual hierarchy
        "depth-elevated",
        // Smooth transitions for interactive states
        "transition-all duration-300 ease-out",
        // Enhanced hover state with dramatic depth increase
        "hover:shadow-xl hover:-translate-y-2",
        // Additional classes
        className
      )}
    >
      <BentoCard item={item} />
    </div>
  );
}

/**
 * Re-export BentoItem type for convenience
 */
export type { BentoItem };

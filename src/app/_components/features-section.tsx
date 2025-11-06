"use client";

import { motion, type Variants } from "framer-motion";
import { GlowingEffect } from "~/components/ui/glowing-effect";
import {
  Box,
  Settings,
  Lock,
  Sparkles,
  Search,
} from "lucide-react";

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div
        className="relative h-full border p-2 md:p-3 transition-all duration-300 group"
        style={{
          borderRadius: 'var(--radius-2xl)',
          borderColor: 'var(--border-default)',
          boxShadow: 'var(--shadow-md)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
          e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        {/* Depth gradient overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            borderRadius: 'var(--radius-2xl)',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.03), transparent)'
          }}
        />
        <div
          className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden p-6 md:p-6"
          style={{
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-sm)',
            backgroundColor: 'var(--bg-surface)'
          }}
        >
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div
              className="w-fit border p-2"
              style={{
                borderRadius: 'var(--radius-lg)',
                borderColor: 'var(--border-default)',
                backgroundColor: 'var(--bg-muted)'
              }}
            >
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="heading-5 text-balance">
                {title}
              </h3>
              <p className="body-regular [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function FeaturesSection() {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-page)' }}
    >
      {/* Background gradient - subtle depth enhancement */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, var(--bg-surface), transparent, transparent)',
          opacity: 0.3
        }}
      />
      {/* Top border highlight */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: 'var(--border-subtle)' }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px", amount: 0.3 }}
          variants={fadeInUp}
          className="mb-12 text-center"
        >
          <h2
            data-testid="features-heading"
            className="heading-2 mb-4 tracking-tight"
          >
            Six Systems That Do the Design Thinking for You
          </h2>
          <p className="body-large mx-auto max-w-2xl">
            Stop Googling &quot;perfect button shadow&quot; at 2am. Each system encodes years of design
            expertise—just tell Claude what you need, and Métis applies the right principles automatically.
          </p>
        </motion.div>

        {/* Aceternity-style Bento Grid with Glowing Effects */}
        <motion.ul
          data-testid="bento-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px", amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2"
        >
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Typography System"
            description="Never eyeball font sizes again. Get perfect type scales (1.25 ratio), optical hierarchy, and line-heights that actually breathe. Your headings will finally look like headings—not guesswork."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Color System"
            description="Stop picking colors from screenshots. Generate full HSL/OKLCH palettes with semantic variables that work in light and dark mode. Brand colors, neutral scales, accessible text—all from one base hue."
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Depth & Shadows"
            description="Flat cards making your UI look cheap? Dual-shadow elevation adds realistic depth—not the muddy blur from generic box-shadow. Interactive elements pop off the page and feel tactile."
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Layout & Spacing"
            description="End the margin chaos. Systematic 4px/8px spacing scales create visual rhythm that makes crowded UIs suddenly feel organized. Responsive grids that don't break on tablet."
          />

          <GridItem
            area="md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/11]"
            icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Theme Engine"
            description="Dark mode that doesn't look like someone inverted your colors. Automatic HSL lightness flipping (100 - L), theme-aware variables, and intelligent contrast keeps both modes beautiful."
          />

          <GridItem
            area="md:[grid-area:3/7/4/13] xl:[grid-area:2/11/3/13]"
            icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Accessibility Checker"
            description="Pass WCAG AA without a checklist. Auto-validates 4.5:1 contrast ratios, semantic HTML structure, and keyboard nav. Ship interfaces that work for everyone—designers and PMs will notice."
          />
        </motion.ul>
      </div>
    </section>
  );
}

// Export alias for tests
export { FeaturesSection as FeaturesBentoSection };

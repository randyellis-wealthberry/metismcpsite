"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
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
    <li className={`list-none ${area}`}>
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
          className="border-0.75 relative flex h-full flex-col gap-6 overflow-hidden p-6 md:p-8"
          style={{
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-sm)',
            backgroundColor: 'var(--bg-surface)'
          }}
        >
          <div className="relative flex flex-col gap-4">
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
            Claude Design Tools for Professional UI Automation
          </h2>
          <p className="body-large mx-auto max-w-2xl">
            Professional MCP design system at your fingertips. Each tool transforms a
            specific aspect of your UI, working together to create cohesive, accessible interfaces through Claude.{" "}
            <Link href="#pricing" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline transition-colors">
              View pricing
            </Link>{" "}
            to get started.
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
            icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" aria-label="Typography system icon" />}
            title="Typography System"
            description="Perfect type scales, hierarchies, and line-heights. Size × Weight × Color = Emphasis. Claude automatically applies professional typography that guides attention and improves readability."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" aria-label="Color system settings icon" />}
            title="Color System"
            description="HSL/OKLCH palettes with semantic variables. Generate neutral scales, text hierarchies, and brand colors that work in both light and dark modes with perfect contrast."
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" aria-label="Depth and shadows icon" />}
            title="Depth & Shadows"
            description="Dual-shadow elevation system creates realistic depth. Interactive elements pop with layered shadows, gradients, and highlights—making interfaces feel tactile and responsive."
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" aria-label="Layout and spacing icon" />}
            title="Layout & Spacing"
            description="Systematic spacing scales and responsive layouts. Consistent rhythm through your interface with proper padding, margins, and grid systems that adapt to any screen size."
          />

          <GridItem
            area="md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/11]"
            icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" aria-label="Theme engine icon" />}
            title="Theme Engine"
            description="Seamless light/dark mode switching. Automatic color flipping (100 - lightness), theme-aware variables, and intelligent contrast adjustments keep your UI beautiful in any mode."
          />

          <GridItem
            area="md:[grid-area:3/7/4/13] xl:[grid-area:2/11/3/13]"
            icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" aria-label="Accessibility checker icon" />}
            title="Accessibility Checker"
            description="WCAG AA compliance built-in. Automatic contrast checking (4.5:1 minimum), semantic HTML structure, and keyboard navigation ensure your interfaces work for everyone."
          />
        </motion.ul>
      </div>
    </section>
  );
}

// Export alias for tests
export { FeaturesSection as FeaturesBentoSection };

"use client";

import React from "react";
import { StickyScroll, type StickyScrollContent } from "~/components/ui/sticky-scroll-reveal";
import { Sun, CheckCircle } from "lucide-react";

// Visual components for each tool
const TypographyVisual = () => (
  <div className="w-full h-64 md:h-96 rounded-2xl p-8 flex flex-col justify-center items-start space-y-4" style={{ backgroundColor: 'var(--bg-elevated)' }}>
    <div className="heading-1 animate-pulse" style={{ color: 'var(--text-primary)' }}>Heading</div>
    <div className="heading-3" style={{ color: 'var(--text-body)' }}>Subheading</div>
    <div className="body-regular" style={{ color: 'var(--text-secondary)' }}>Body text with perfect hierarchy</div>
  </div>
);

const ColorSystemVisual = () => (
  <div className="w-full h-64 md:h-96 rounded-2xl p-8 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-elevated)' }}>
    <div className="grid grid-cols-5 gap-2 w-full max-w-md">
      {[
        'var(--neutral-100)',
        'var(--neutral-80)',
        'var(--neutral-60)',
        'var(--neutral-40)',
        'var(--neutral-20)'
      ].map((color, i) => (
        <div
          key={i}
          className="aspect-square rounded-lg"
          style={{ backgroundColor: color, boxShadow: 'var(--shadow-md)' }}
        />
      ))}
    </div>
  </div>
);

const DepthVisual = () => (
  <div className="w-full h-64 md:h-96 rounded-2xl p-8 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-elevated)' }}>
    <div className="relative w-48 h-48">
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          backgroundColor: 'var(--bg-surface)',
          boxShadow: 'var(--shadow-xs)',
          transform: 'translate(0, 0)'
        }}
      />
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          backgroundColor: 'var(--bg-surface)',
          boxShadow: 'var(--shadow-lg)',
          transform: 'translate(-8px, -8px)'
        }}
      />
      <div
        className="absolute inset-0 rounded-xl flex items-center justify-center"
        style={{
          backgroundColor: 'var(--bg-surface)',
          boxShadow: 'var(--shadow-2xl)',
          transform: 'translate(-16px, -16px)',
          color: 'var(--text-primary)'
        }}
      >
        <span className="heading-4">Elevated</span>
      </div>
    </div>
  </div>
);

const SpacingVisual = () => (
  <div className="w-full h-64 md:h-96 rounded-2xl p-8 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-elevated)' }}>
    <div className="grid grid-cols-3 gap-4 w-full max-w-md">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="aspect-square rounded-lg"
          style={{
            backgroundColor: 'var(--bg-surface)',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-default)'
          }}
        />
      ))}
    </div>
  </div>
);

const ThemeVisual = () => (
  <div className="w-full h-64 md:h-96 rounded-2xl p-8 flex items-center justify-center gap-4" style={{ backgroundColor: 'var(--bg-elevated)' }}>
    <div className="flex-1 h-32 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--neutral-100)', border: '1px solid var(--border-default)' }}>
      <Sun className="h-8 w-8" style={{ color: 'var(--neutral-20)' }} />
    </div>
    <div className="flex-1 h-32 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--neutral-10)', border: '1px solid var(--border-default)' }}>
      <Sun className="h-8 w-8" style={{ color: 'var(--neutral-90)' }} />
    </div>
  </div>
);

const AccessibilityVisual = () => (
  <div className="w-full h-64 md:h-96 rounded-2xl p-8 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-elevated)' }}>
    <div className="flex flex-col items-center gap-4">
      <CheckCircle className="h-24 w-24" style={{ color: 'var(--color-brand-primary)' }} />
      <div className="text-center">
        <div className="heading-4" style={{ color: 'var(--text-primary)' }}>WCAG AA</div>
        <div className="body-regular" style={{ color: 'var(--text-secondary)' }}>4.5:1 Contrast</div>
      </div>
    </div>
  </div>
);

const toolsContent: StickyScrollContent[] = [
  {
    title: "Instant Typography Hierarchy",
    description: "Transform flat text into visual storytelling. Get perfect type scales, line heights, and font weights that guide your users' attention exactly where you want it—no guesswork required.",
    content: <TypographyVisual />,
  },
  {
    title: "Colors That Just Work",
    description: "Build beautiful, accessible color palettes in seconds. From brand colors to neutral scales, get semantic variables that automatically adapt to light and dark modes with perfect contrast ratios.",
    content: <ColorSystemVisual />,
  },
  {
    title: "Make It Pop",
    description: "Add professional depth to every element. Layered shadows, subtle gradients, and elevation create interfaces that feel tactile and responsive—like they're floating off the screen.",
    content: <DepthVisual />,
  },
  {
    title: "Perfect Spacing, Effortlessly",
    description: "Stop eyeballing margins and padding. Get systematic spacing scales that create visual rhythm and breathing room across your entire interface—responsive by default.",
    content: <SpacingVisual />,
  },
  {
    title: "Dark Mode Done Right",
    description: "Flip between light and dark with zero effort. Intelligent color transformations keep your brand consistent while maintaining perfect readability in any lighting condition.",
    content: <ThemeVisual />,
  },
  {
    title: "Accessibility Built In",
    description: "Ship inclusive experiences every time. Automatic contrast validation, semantic structure, and keyboard navigation ensure your interfaces work beautifully for everyone.",
    content: <AccessibilityVisual />,
  },
];

export function ToolsShowcaseSection() {
  return (
    <section
      id="tools-showcase"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-page)' }}
      aria-labelledby="tools-showcase-heading"
    >
      {/* Subtle depth gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--bg-elevated), transparent)',
          opacity: 0.2
        }}
      />

      {/* Top border for section separation */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: 'var(--border-subtle)' }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2
            id="tools-showcase-heading"
            className="heading-2 mb-4"
          >
            Design Like a Pro, Chat Like You
          </h2>
          <p className="body-large mx-auto max-w-2xl">
            Six powerful tools that transform your UI instantly. Professional design systems
            through natural conversation—no expertise required.
          </p>
        </div>

        {/* Sticky Scroll Content */}
        <StickyScroll content={toolsContent} contentClassName="md:w-3/5 lg:w-1/2" />
      </div>
    </section>
  );
}

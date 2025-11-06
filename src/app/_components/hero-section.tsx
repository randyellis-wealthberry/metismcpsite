"use client";

import { Suspense, lazy } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import { Button } from "~/components/ui/button";
import { WaveBackground } from "~/components/backgrounds/wave-background";
import {
  fadeInUp,
  staggerContainer,
} from "~/lib/animations";

// Lazy load the 3D diagram for performance
const MechanicalDiagram = lazy(() =>
  import("~/components/three/mechanical-diagram").then((mod) => ({
    default: mod.MechanicalDiagram,
  }))
);

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Animated wave background */}
      <WaveBackground className="z-[5]" />

      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-animated opacity-20 pointer-events-none z-10" />

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background pointer-events-none z-10" />

      {/* Dot grid pattern (optional) */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* 3D Mechanical Diagram - Desktop only */}
      <div className="absolute right-0 top-0 hidden lg:block w-1/2 h-full z-15 pointer-events-none">
        <Suspense fallback={<div className="w-full h-full" />}>
          <MechanicalDiagram className="w-full h-full" />
        </Suspense>
      </div>

      <div className="container relative z-20 mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl lg:max-w-2xl lg:mr-auto lg:text-left text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6 flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-1.5 text-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="font-medium">Design Systems • Zero Learning Curve</span>
            </div>
          </motion.div>

          {/* Headline with animated gradient */}
          <motion.h1
            variants={fadeInUp}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              lineHeight: "var(--leading-tight)",
            }}
          >
            Ship Designer-Quality UIs{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Without the Designer
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mb-10 max-w-2xl text-lg md:text-xl lg:text-2xl text-muted-foreground"
            style={{
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Métis gives Claude six professional design systems. Just describe your UI in chat—get
            pixel-perfect typography, accessible color palettes, depth that pops, and WCAG AA
            compliance. Every component, production-ready.
          </motion.p>

          {/* CTA Buttons with enhanced styling */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center justify-center lg:justify-start gap-4 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                className="min-w-[200px] h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <Link href="#get-started" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-w-[200px] h-12 text-base font-semibold border-2 hover:bg-accent transition-all duration-200 group"
              >
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social proof / Quick stats */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span>6 Design Systems</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Works in Chat</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">5 min setup</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

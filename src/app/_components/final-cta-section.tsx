"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "~/components/ui/button";
import { fadeInUp, scrollAnimationConfig } from "~/lib/animations";

export function FinalCTASection() {
  return (
    <section id="get-started" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-animated" />

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/90 to-cyan-900/90" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative mx-auto px-4 text-center">
        <motion.div
          {...scrollAnimationConfig}
          variants={fadeInUp}
          className="mx-auto max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            {...scrollAnimationConfig}
            variants={fadeInUp}
            className="mb-6 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm text-white">
              <Sparkles className="h-4 w-4" />
              <span className="font-medium">Free • Open Source • Chat-Driven</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            {...scrollAnimationConfig}
            variants={fadeInUp}
            className="heading-2 mb-6 tracking-tight"
            style={{ color: 'white' }}
          >
            Build UI Like You Have a Design Team
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            {...scrollAnimationConfig}
            variants={fadeInUp}
            className="body-large mb-10"
            style={{ color: 'rgba(255, 255, 255, 0.95)' }}
          >
            90 seconds to install. Then every conversation with Claude becomes a design sprint.
            Professional typography, WCAG AA contrast, realistic depth, theme support—applied
            automatically. Stop guessing. Start shipping interfaces that look intentional.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...scrollAnimationConfig}
            variants={fadeInUp}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                className="min-w-[200px] h-14 text-base font-semibold bg-white text-blue-950 hover:bg-blue-50 group transition-all duration-300"
                style={{
                  borderRadius: 'var(--radius-full)',
                  boxShadow: 'var(--shadow-2xl)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 -8px 24px rgba(0, 0, 0, 0.15), 0 32px 64px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-2xl)';
                }}
              >
                <Link href="#" className="flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-w-[200px] h-14 text-base font-semibold border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all duration-300"
                style={{ borderRadius: 'var(--radius-full)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Link href="#">View Documentation</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Additional info */}
          <motion.div
            {...scrollAnimationConfig}
            variants={fadeInUp}
            className="body-small mt-12 flex flex-wrap items-center justify-center gap-6"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
              <span>6 Design Systems</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
              <span>90s Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
              <span>Production Ready</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

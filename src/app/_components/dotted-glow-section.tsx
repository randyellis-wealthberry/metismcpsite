"use client";

import { DottedGlowBackground } from "~/components/ui/dotted-glow-background";
import { motion } from "framer-motion";

export function DottedGlowSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Dotted glow background with brand colors */}
      <DottedGlowBackground
        gap={16}
        radius={2}
        color="rgba(59, 130, 246, 0.3)"
        darkColor="rgba(59, 130, 246, 0.2)"
        glowColor="rgba(59, 130, 246, 0.85)"
        darkGlowColor="rgba(6, 182, 212, 0.85)"
        opacity={0.8}
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.0}
        speedScale={0.8}
      />

      {/* Gradient fade to blend with sections above and below */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Heading */}
          <h2 className="heading-2 mb-6 text-left">
            Design Systems Through Chat
          </h2>

          {/* Body text */}
          <p className="body-large text-left max-w-2xl">
            Metis is an MCP server that gives Claude master-level design capabilities.
            Simply describe what you want in chat, and Metis applies professional
            typography, color theory, depth systems, and accessibility—instantly
            transforming basic layouts into polished interfaces.
          </p>

          {/* Optional stats or bullet points */}
          <div className="mt-8 flex flex-wrap gap-6 text-left">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="body-regular font-medium">Chat-Driven Design</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cyan-600" />
              <span className="body-regular font-medium">Instant Polish</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="body-regular font-medium">Production-Ready Code</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Plug,
  Zap,
  Wrench,
  Blocks,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  fadeInUp,
  staggerContainer,
  scrollAnimationConfig,
} from "~/lib/animations";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    title: "Type-Safe Integration",
    description:
      "Built with TypeScript for end-to-end type safety. Catch errors at compile time and enjoy intelligent autocomplete throughout your development workflow.",
    icon: Shield,
  },
  {
    title: "MCP Protocol Native",
    description:
      "Fully compliant with the Model Context Protocol specification. Works seamlessly with Claude Desktop, Claude CLI, and any MCP-compatible client.",
    icon: Plug,
  },
  {
    title: "Lightning Fast",
    description:
      "Optimized for performance with efficient resource management. Handle multiple concurrent requests without breaking a sweat.",
    icon: Zap,
  },
  {
    title: "Developer Friendly",
    description:
      "Simple setup, clear documentation, and intuitive APIs. Get up and running in minutes, not hours. Includes comprehensive examples.",
    icon: Wrench,
  },
  {
    title: "Extensible Architecture",
    description:
      "Built on modern patterns with clean abstractions. Easily extend functionality with custom tools, prompts, and resources.",
    icon: Blocks,
  },
  {
    title: "Production Ready",
    description:
      "Battle-tested error handling, logging, and monitoring. Deploy with confidence knowing your MCP server can handle production workloads.",
    icon: Rocket,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle" />

      <div className="container relative mx-auto px-4">
        {/* Section header with animation */}
        <motion.div
          {...scrollAnimationConfig}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything You Need
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Metis MCP Server provides all the tools and features you need to build
            powerful AI integrations.
          </p>
        </motion.div>

        {/* Feature cards with stagger animation */}
        <motion.div
          {...scrollAnimationConfig}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="relative h-full overflow-hidden border-2 shadow-md hover:shadow-xl transition-shadow duration-300">
                  {/* Subtle gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />

                  <CardHeader className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10"
                    >
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

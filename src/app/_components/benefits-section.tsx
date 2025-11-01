"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Zap, Settings, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  fadeInUp,
  staggerContainer,
  scrollAnimationConfig,
} from "~/lib/animations";

interface Benefit {
  title: string;
  description: string;
  metric: string;
  displayMetric: string;
  icon: typeof Clock;
}

const benefits: Benefit[] = [
  {
    title: "Save 10+ Hours Per Week",
    description:
      "Eliminate repetitive integration work with pre-built MCP tools and utilities. Focus on building features that matter.",
    metric: "10",
    displayMetric: "10+ hrs",
    icon: Clock,
  },
  {
    title: "Reduce Integration Time by 80%",
    description:
      "Get your AI assistant connected in minutes instead of days. Our streamlined setup process removes friction.",
    metric: "80",
    displayMetric: "80%",
    icon: Zap,
  },
  {
    title: "Zero Configuration Complexity",
    description:
      "Smart defaults mean you can start immediately. Advanced customization available when you need it.",
    metric: "0",
    displayMetric: "0 config",
    icon: Settings,
  },
  {
    title: "Enterprise-Grade Reliability",
    description:
      "Built-in error handling, retry logic, and monitoring ensure your integrations stay running 24/7.",
    metric: "99.9",
    displayMetric: "99.9%",
    icon: Shield,
  },
];

function AnimatedMetric({ value, display }: { value: string; display: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const target = parseFloat(value);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent">
      {isInView ? display.replace(/[\d.]+/, Math.floor(count).toString()) : "0"}
    </div>
  );
}

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />

      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <motion.div
          {...scrollAnimationConfig}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Developers Choose Metis
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Join thousands of developers who trust Metis MCP Server for their AI
            integration needs
          </p>
        </motion.div>

        {/* Benefit cards */}
        <motion.div
          {...scrollAnimationConfig}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="relative h-full overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent pointer-events-none" />

                  <CardHeader className="relative">
                    {/* Icon */}
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                      <benefit.icon className="h-7 w-7 text-blue-600" />
                    </div>

                    {/* Animated metric */}
                    <AnimatedMetric
                      value={benefit.metric}
                      display={benefit.displayMetric}
                    />

                    <CardTitle className="mt-3 text-xl">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative">
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
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

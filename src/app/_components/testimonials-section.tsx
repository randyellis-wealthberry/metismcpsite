"use client";

import { Clock, Zap, Settings, Shield } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    metric: "Instant",
    label: "Design Polish",
    icon: Zap,
  },
  {
    metric: "WCAG AA",
    label: "Accessibility",
    icon: Shield,
  },
  {
    metric: "6 Tools",
    label: "Design Systems",
    icon: Settings,
  },
  {
    metric: "Chat UI",
    label: "No Code Needed",
    icon: Clock,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-12 px-6 md:space-y-16">
        {/* Main heading */}
        <div className="relative z-10 max-w-2xl space-y-6">
          <h2 className="heading-2">
            Stop Tweaking. Start Shipping.
          </h2>
          <p className="body-large">
            Frontend developers waste hours on{" "}
            <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
              design decisions AI should handle
            </span>
            —font sizing, shadow depth, color contrast, spacing. Métis encodes those decisions
            into Claude, so you can build features instead of bikeshedding button styles.
          </p>
        </div>

        {/* Benefits metrics grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="group relative overflow-hidden border bg-card p-6 cursor-pointer"
                style={{
                  borderRadius: 'var(--radius-2xl)',
                  borderColor: 'var(--border-default)',
                  boxShadow: 'var(--shadow-sm)',
                  backgroundColor: 'var(--bg-surface)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={(e) => {
                  const target = e.currentTarget as HTMLElement | null;
                  if (!target) return;
                  target.style.borderColor = 'var(--color-brand-primary)';
                  target.style.boxShadow = 'var(--shadow-xl)';
                  target.style.backgroundColor = 'var(--bg-elevated)';
                }}
                onHoverEnd={(e) => {
                  const target = e.currentTarget as HTMLElement | null;
                  if (!target) return;
                  target.style.borderColor = 'var(--border-default)';
                  target.style.boxShadow = 'var(--shadow-sm)';
                  target.style.backgroundColor = 'var(--bg-surface)';
                }}
              >
                {/* Top highlight for light reflection */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                />
                {/* Depth gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.03), transparent)'
                  }}
                />
                {/* Brand gradient glow */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom right, hsl(220, 80%, 50%, 0.03), hsl(180, 80%, 50%, 0.03), transparent)'
                  }}
                />
                <div className="relative space-y-3">
                  <motion.div
                    className="inline-flex h-10 w-10 items-center justify-center"
                    style={{
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'hsl(220, 80%, 50%, 0.1)'
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -10, 10, -10, 0],
                      transition: {
                        scale: { type: "spring", stiffness: 400, damping: 10 },
                        rotate: { duration: 0.5 }
                      }
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: 'var(--color-brand-primary)' }} />
                  </motion.div>
                  <div
                    className="text-3xl font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(to bottom right, var(--color-brand-primary), var(--color-brand-light))'
                    }}
                  >
                    {benefit.metric}
                  </div>
                  <p className="body-small">
                    {benefit.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Ecosystem stats and testimonial */}
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="space-y-6">
            <p className="body-regular">
              Six design systems. Zero Figma files. Zero documentation to read.
              Just chat with Claude and get production code that looks intentional.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  90s
                </div>
                <p className="body-small">Setup Time</p>
              </div>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  0
                </div>
                <p className="body-small">Design Degree Required</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <blockquote
              className="border-l-4 pl-4"
              style={{ borderColor: 'var(--color-brand-primary)' }}
            >
              <p className="body-regular">
                Built an entire dashboard in one afternoon that actually looks good. Before Métis,
                I'd spend 30 minutes picking shadow values for a single button. Now I just tell
                Claude &quot;add depth to this&quot; and ship. Our designer stopped sending revision notes.
              </p>

              <div className="mt-6 space-y-3">
                <cite className="block font-medium not-italic" style={{ color: 'var(--text-primary)' }}>
                  Alex Chen, Frontend Engineer
                </cite>
                <img
                  className="h-5 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/openai.svg"
                  alt="Company Logo"
                  height="20"
                  width="auto"
                />
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

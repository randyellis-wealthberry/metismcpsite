"use client";

import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const steps = [
  {
    step: 1,
    title: "One Config Entry",
    description:
      "Paste three lines into Claude Desktop's config. No npm install, no dependencies in your project, no setup docs to read. Takes 90 seconds.",
    code: `// claude_desktop_config.json
{
  "mcpServers": {
    "metis": {
      "command": "npx",
      "args": ["-y", "metis-mcp-server"]
    }
  }
}`,
  },
  {
    step: 2,
    title: "Describe What You Need",
    description:
      "Talk to Claude like a designer who codes. Say \"make this card pop\" or \"fix the typography hierarchy.\" No design jargon required—Métis translates intent into implementation.",
    code: `You: "Create a dashboard card with proper depth and typography"

Claude: "I'll create a professional dashboard card using:
- Typography hierarchy (heading-3 + body-regular)
- Dual-shadow depth system
- HSL color variables for theming
- WCAG AA contrast ratios

Here's the component..."`,
  },
  {
    step: 3,
    title: "Ship Production-Ready Code",
    description:
      "Get components with real design tokens, theme support, and accessibility baked in. Not demo code—actual production code you can commit without shame.",
    code: `<div className="
  bg-bg-surface shadow-md
  rounded-xl p-6
  border-t border-white/10
">
  <div className="space-y-3">
    <h3 className="heading-3">Revenue</h3>
    <p className="text-4xl font-bold">$24,531</p>
    <p className="body-small text-text-secondary">
      +12.5% from last month
    </p>
  </div>
</div>`,
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="get-started"
      className="relative py-24"
      style={{ backgroundColor: 'var(--bg-surface)' }}
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
      <div className="container relative mx-auto px-4">
        {/* Section header with typography hierarchy */}
        <div className="mb-16 text-center">
          <h2
            className="mb-4 text-3xl font-bold sm:text-4xl"
            style={{
              lineHeight: 'var(--leading-tight)',
              color: 'var(--text-primary)'
            }}
          >
            Three Steps to Designer-Quality UI
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg"
            style={{
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--text-body)'
            }}
          >
            Five-minute setup, zero learning curve. After that, every conversation with Claude becomes
            a design session—just describe what you need and watch professional UI appear.
          </p>
        </div>

        {/* Step cards with elevation */}
        <div className="mx-auto max-w-4xl space-y-8">
          {steps.map((item) => (
            <Card
              key={item.step}
              className="relative overflow-hidden group transition-all duration-300"
              style={{
                boxShadow: 'var(--shadow-lg)',
                backgroundColor: 'var(--bg-elevated)',
                borderRadius: 'var(--radius-2xl)',
                borderColor: 'var(--border-default)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-2xl)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Top highlight for light reflection */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              />
              {/* Subtle gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              {/* Enhanced depth on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.02), transparent)'
                }}
              />

              <CardHeader className="relative">
                <div className="flex items-start gap-4">
                  <Badge
                    variant="default"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-semibold bg-blue-600 text-white dark:bg-blue-500 border-2 border-blue-700 dark:border-blue-400"
                    style={{
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    {item.step}
                  </Badge>
                  <div>
                    <CardTitle
                      className="text-xl"
                      style={{
                        color: 'var(--text-primary)',
                        lineHeight: 'var(--leading-snug)'
                      }}
                    >
                      {item.title}
                    </CardTitle>
                    <CardDescription
                      className="mt-2 text-base"
                      style={{
                        color: 'var(--text-body)',
                        lineHeight: 'var(--leading-relaxed)'
                      }}
                    >
                      {item.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative">
                {/* Enhanced code block with depth */}
                <div
                  className="overflow-hidden"
                  style={{
                    boxShadow: 'var(--shadow-md)',
                    borderRadius: 'var(--radius-lg)'
                  }}
                >
                  <pre
                    className="overflow-x-auto bg-slate-950 p-4 text-sm text-slate-50 dark:bg-slate-900"
                    style={{
                      fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                      lineHeight: 'var(--leading-relaxed)'
                    }}
                  >
                    <code>{item.code}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

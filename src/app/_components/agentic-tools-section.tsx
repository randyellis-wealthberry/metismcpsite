"use client";

import { motion, type Variants } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Cpu, Globe, Terminal } from "lucide-react";

interface ToolCardProps {
  name: string;
  description: string;
  pricing?: string;
  valuation?: string;
  category: "desktop" | "web" | "cli";
}

const ToolCard = ({ name, description, pricing, valuation }: ToolCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <Card
        className="h-full transition-all duration-300"
        style={{
          backgroundColor: 'var(--bg-elevated)',
          borderColor: 'var(--border-default)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-sm)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <CardHeader className="pb-3">
          <CardTitle
            className="text-lg font-semibold flex items-center gap-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {name}
            {(pricing ?? valuation) && (
              <Badge variant="secondary" className="text-xs font-normal">
                {valuation ?? pricing}
              </Badge>
            )}
          </CardTitle>
          <CardDescription
            className="text-sm"
            style={{ color: 'var(--text-body)' }}
          >
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

interface UseCaseCardProps {
  title: string;
  description: string;
  tools: string[];
  icon: React.ReactNode;
}

const UseCaseCard = ({ title, description, tools, icon }: UseCaseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Card
        className="h-full transition-all duration-300"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-default)',
          borderRadius: 'var(--radius-xl)',
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
        <CardHeader>
          <div
            className="w-fit p-3 mb-4"
            style={{
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--bg-muted)',
              border: '1px solid var(--border-default)'
            }}
          >
            {icon}
          </div>
          <CardTitle
            className="text-xl"
            style={{ color: 'var(--text-primary)' }}
          >
            {title}
          </CardTitle>
          <CardDescription
            className="text-base mt-2"
            style={{ color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)' }}
          >
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Badge
                key={tool}
                variant="outline"
                className="text-xs"
                style={{
                  borderColor: 'var(--border-default)',
                  color: 'var(--text-secondary)'
                }}
              >
                {tool}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
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

export function AgenticToolsSection() {
  const desktopTools = [
    { name: "Cursor", description: "AI-first code editor", valuation: "$10B", pricing: "$20/mo", category: "desktop" as const },
    { name: "Windsurf", description: "Cascade agentic interface", pricing: "$15/mo", category: "desktop" as const },
    { name: "GitHub Copilot", description: "Most widely adopted", category: "desktop" as const },
    { name: "Cline", description: "Open-source VS Code agent", category: "desktop" as const },
    { name: "Claude Code", description: "Advanced reasoning", category: "desktop" as const },
    { name: "Augment Code", description: "Context awareness", category: "desktop" as const },
    { name: "Supermaven", description: "300k token context", category: "desktop" as const },
    { name: "Tabnine", description: "Enterprise privacy-focused", category: "desktop" as const },
  ];

  const webPlatforms = [
    { name: "v0 by Vercel", description: "React/Next.js prototyping", category: "web" as const },
    { name: "Bolt by StackBlitz", description: "Full-stack prototyping", category: "web" as const },
    { name: "Lovable", description: "Natural language apps", category: "web" as const },
    { name: "Replit Agent", description: "50+ languages", category: "web" as const },
  ];

  const cliTools = [
    { name: "Gemini CLI", description: "Google terminal AI", category: "cli" as const },
    { name: "Aider", description: "AI pair programming", category: "cli" as const },
    { name: "Amazon Q", description: "AWS-focused", category: "cli" as const },
  ];

  const useCases = [
    {
      title: "Using Metis with Cursor for multi-file design consistency",
      description: "Maintain perfect typography scales, color systems, and spacing across your entire codebase. Cursor's AI-first editor combined with Metis ensures every component follows your design system automatically.",
      tools: ["Cursor", "Metis MCP"],
      icon: <Cpu className="h-6 w-6" style={{ color: 'var(--text-secondary)' }} />
    },
    {
      title: "Integrating Metis with v0 for rapid prototyping",
      description: "Generate beautiful React components with v0, then refine them with Metis's professional design tools. Get production-ready components with proper depth, accessibility, and theming in minutes.",
      tools: ["v0 by Vercel", "Metis MCP"],
      icon: <Globe className="h-6 w-6" style={{ color: 'var(--text-secondary)' }} />
    },
    {
      title: "Windsurf Cascade + Metis design automation",
      description: "Let Windsurf's Cascade agentic interface handle complex multi-step tasks while Metis ensures every UI element meets professional design standards. Perfect for building entire features with consistent styling.",
      tools: ["Windsurf", "Metis MCP"],
      icon: <Cpu className="h-6 w-6" style={{ color: 'var(--text-secondary)' }} />
    },
  ];

  return (
    <section
      id="agentic-tools"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-page)' }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, var(--bg-surface), transparent, transparent)',
          opacity: 0.3
        }}
      />
      {/* Top border */}
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
            className="heading-2 mb-4 tracking-tight"
          >
            Built for Agentic Coding Workflows
          </h2>
          <p className="body-large mx-auto max-w-2xl">
            Accelerate design in your favorite AI IDE. Metis brings professional design consistency to agentic workflows, ensuring every AI-generated component meets production standards.
          </p>
        </motion.div>

        {/* Desktop/IDE Tools */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="h-5 w-5" style={{ color: 'var(--text-secondary)' }} />
            <h3
              className="text-2xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              Desktop & IDE Tools
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {desktopTools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </div>

        {/* Web Platforms */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="h-5 w-5" style={{ color: 'var(--text-secondary)' }} />
            <h3
              className="text-2xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              Web Platforms
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {webPlatforms.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </div>

        {/* CLI Tools */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="h-5 w-5" style={{ color: 'var(--text-secondary)' }} />
            <h3
              className="text-2xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              CLI Tools
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cliTools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-8 text-center"
          >
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              Popular Integration Patterns
            </h3>
            <p
              className="text-lg mx-auto max-w-2xl"
              style={{ color: 'var(--text-body)' }}
            >
              See how teams combine Metis with leading agentic tools for faster, more consistent UI development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <UseCaseCard key={useCase.title} {...useCase} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

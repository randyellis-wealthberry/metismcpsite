"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { GlowingEffect } from "~/components/ui/glowing-effect";
import { Star } from "lucide-react";

interface MCPServerProps {
  name: string;
  description: string;
  stars?: string;
  logo?: string;
}

const MCPServerCard = ({ name, description, stars, logo }: MCPServerProps) => {
  return (
    <li className="list-none">
      <div
        className="relative h-full border p-2 transition-all duration-300 group"
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
          className="border-0.75 relative flex h-full flex-col justify-between gap-4 overflow-hidden p-5"
          style={{
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-sm)',
            backgroundColor: 'var(--bg-surface)'
          }}
        >
          <div className="relative flex flex-col gap-3">
            {/* Logo/Icon */}
            <div className="flex items-center justify-between">
              {logo ? (
                <Image
                  src={logo}
                  alt={`${name} logo - design tools integration`}
                  width={128}
                  height={32}
                  className="h-8 w-auto dark:invert"
                />
              ) : (
                <div
                  className="w-fit border p-2"
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    borderColor: 'var(--border-default)',
                    backgroundColor: 'var(--bg-muted)'
                  }}
                >
                  <div className="h-4 w-4 rounded bg-gradient-to-br from-blue-500 to-cyan-500" />
                </div>
              )}
              {stars && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                  <span>{stars}</span>
                </div>
              )}
            </div>
            {/* Content */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold">
                {name}
              </h3>
              <p className="text-sm text-muted-foreground">
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
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const staggerItem: Variants = {
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

export function CompatibleMCPServersSection() {
  const generalServers: MCPServerProps[] = [
    {
      name: "GitHub MCP Server",
      description: "Developer workflows",
      stars: "15.2k",
      logo: "https://html.tailus.io/blocks/customers/github.svg"
    },
    {
      name: "Playwright MCP",
      description: "Browser automation",
      stars: "11.6k"
    },
    {
      name: "AWS Labs MCP",
      description: "Cloud infrastructure",
      stars: "3.7k"
    },
    {
      name: "MongoDB MCP Server",
      description: "Database access"
    },
    {
      name: "Slack MCP",
      description: "Communication"
    },
    {
      name: "Google Drive MCP",
      description: "Document management"
    },
    {
      name: "Notion MCP",
      description: "Knowledge management"
    },
    {
      name: "Terraform MCP Server",
      description: "Infrastructure as Code"
    },
    {
      name: "Sentry MCP",
      description: "Error tracking"
    },
    {
      name: "DBT MCP",
      description: "Analytics workflows"
    }
  ];

  const designServers: MCPServerProps[] = [
    {
      name: "Figma MCP Server",
      description: "Design to code workflows"
    },
    {
      name: "shadcn/ui MCP Server",
      description: "Component design system"
    },
    {
      name: "shadcn-vue MCP Server",
      description: "Vue ecosystem"
    },
    {
      name: "Tailwind CSS MCPs",
      description: "Utility-first CSS"
    }
  ];

  return (
    <section
      id="compatible-mcp-servers"
      data-testid="compatible-mcp-servers-section"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-page)' }}
    >
      {/* Background gradient - subtle depth enhancement */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--bg-surface), transparent)',
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
            data-testid="compatible-mcp-servers-heading"
            className="heading-2 mb-4 tracking-tight"
          >
            Compatible with Popular MCP Servers
          </h2>
          <p className="body-large mx-auto max-w-2xl mb-2">
            Metis works seamlessly with the MCP ecosystem
          </p>
          <p className="body-regular mx-auto max-w-3xl text-muted-foreground">
            While other MCP servers provide powerful integrations with external tools and services,
            Metis specializes in design systems and UI development. Use Metis alongside your favorite
            MCP servers to enhance Claude&apos;s capabilities across development, design, and infrastructure.
          </p>
        </motion.div>

        {/* General MCP Servers Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px", amount: 0.2 }}
          variants={fadeInUp}
          className="mb-8"
        >
          <h3 className="heading-4 mb-6 text-center">
            General MCP Servers
          </h3>
          <motion.ul
            variants={staggerContainer}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {generalServers.map((server, index) => (
              <motion.div key={index} variants={staggerItem}>
                <MCPServerCard {...server} />
              </motion.div>
            ))}
          </motion.ul>
        </motion.div>

        {/* Design MCP Servers Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px", amount: 0.2 }}
          variants={fadeInUp}
          className="mt-12"
        >
          <h3 className="heading-4 mb-6 text-center">
            Design MCP Servers
          </h3>
          <motion.ul
            variants={staggerContainer}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto"
          >
            {designServers.map((server, index) => (
              <motion.div key={index} variants={staggerItem}>
                <MCPServerCard {...server} />
              </motion.div>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

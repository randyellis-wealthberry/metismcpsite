"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Terminal } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { fadeInUp, scrollAnimationConfig } from "~/lib/animations";

const codeExamples = {
  install: {
    title: "Installation",
    description: "Get started with a single command",
    code: `npm install @metis/mcp-server

# Or with yarn
yarn add @metis/mcp-server`,
    language: "bash",
  },
  config: {
    title: "Configuration",
    description: "Configure your MCP server",
    code: `import { createMCPServer } from '@metis/mcp-server';

const server = createMCPServer({
  name: 'my-mcp-server',
  version: '1.0.0',
  tools: [
    // Your custom tools
  ],
  resources: [
    // Your resources
  ]
});

await server.start();`,
    language: "typescript",
  },
  usage: {
    title: "Usage",
    description: "Connect with Claude Desktop",
    code: `// claude_desktop_config.json
{
  "mcpServers": {
    "metis": {
      "command": "node",
      "args": ["./dist/index.js"],
      "env": {
        "API_KEY": "your-api-key"
      }
    }
  }
}`,
    language: "json",
  },
};

type ExampleKey = keyof typeof codeExamples;

export function CodeDemoSection() {
  const [activeTab, setActiveTab] = useState<ExampleKey>("install");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeExamples[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container relative mx-auto px-4">
        <motion.div
          {...scrollAnimationConfig}
          variants={fadeInUp}
          className="mb-12 text-center"
        >
          <h2 className="heading-2 mb-4 tracking-tight">
            Quick Start Guide
          </h2>
          <p className="body-large mx-auto max-w-2xl">
            Get up and running in minutes with our simple integration process
          </p>
        </motion.div>

        <motion.div
          {...scrollAnimationConfig}
          variants={fadeInUp}
          className="mx-auto max-w-4xl"
        >
          <Card
            className="overflow-hidden border-2"
            style={{
              boxShadow: 'var(--shadow-xl)',
              borderColor: 'var(--border-strong)'
            }}
          >
            <CardHeader className="border-b bg-muted/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-muted-foreground" />
                  <CardTitle className="heading-5">
                    {codeExamples[activeTab].title}
                  </CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="h-8"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <CardDescription className="body-regular">
                {codeExamples[activeTab].description}
              </CardDescription>
            </CardHeader>

            {/* Tab navigation */}
            <div className="flex border-b bg-muted/30">
              {(Object.keys(codeExamples) as ExampleKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === key
                      ? "border-b-2 border-primary bg-background text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {codeExamples[key].title}
                </button>
              ))}
            </div>

            <CardContent className="p-0">
              <div className="relative">
                <pre className="overflow-x-auto p-6 text-sm leading-relaxed">
                  <code className="font-mono text-foreground">
                    {codeExamples[activeTab].code}
                  </code>
                </pre>

                {/* Terminal dots decoration */}
                <div className="absolute top-4 right-6 flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/20" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
                  <div className="h-3 w-3 rounded-full bg-green-500/20" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional info */}
          <motion.div
            {...scrollAnimationConfig}
            variants={fadeInUp}
            className="mt-8 text-center"
          >
            <p className="body-small">
              Need help getting started?{" "}
              <a
                href="#"
                className="font-medium hover:underline"
                style={{ color: 'var(--color-brand-primary)' }}
              >
                Read the full documentation
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

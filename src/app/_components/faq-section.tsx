'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'
import Link from 'next/link'

export function FAQSection() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What is the Model Context Protocol (MCP)?',
            answer: 'MCP is an open protocol that standardizes how applications provide context to LLMs. It enables seamless integration between AI assistants like Claude and external data sources, tools, and services.',
        },
        {
            id: 'item-2',
            question: 'How do I install Metis MCP Server?',
            answer: 'Installation is simple! Run "npm install metis-mcp-server" in your project. Configure your server settings in a config file, and you\'re ready to start building custom tools and prompts for your AI assistant.',
        },
        {
            id: 'item-3',
            question: 'Is Metis MCP compatible with Claude Desktop?',
            answer: 'Yes! Metis MCP Server is fully compatible with Claude Desktop, Claude CLI, and any other MCP-compliant client. It follows the official MCP specification for maximum compatibility.',
        },
        {
            id: 'item-4',
            question: 'Does Metis work with Figma MCP Server?',
            answer: 'Yes, Metis is designed to work seamlessly with Figma MCP Server and other design tools. While Figma MCP handles design file access and manipulation, Metis provides the design system tools for typography, colors, spacing, and accessibility. Use them together for a complete design-to-code workflow.',
        },
        {
            id: 'item-5',
            question: 'Can I use Metis with GitHub MCP?',
            answer: 'Absolutely! Metis complements GitHub MCP perfectly. While GitHub MCP manages repository operations, pull requests, and issues, Metis focuses on UI design systems and component styling. Together, they enable Claude to handle both code management and professional UI development.',
        },
        {
            id: 'item-6',
            question: 'Is Metis compatible with shadcn MCP?',
            answer: 'Yes, Metis works alongside shadcn MCP and shadcn-vue MCP servers. While shadcn MCPs provide component libraries and design systems for React and Vue, Metis offers specialized design tools for typography, color palettes, depth, spacing, theming, and accessibility checking that enhance any component library.',
        },
        {
            id: 'item-7',
            question: 'Does Metis work with Cursor?',
            answer: 'Yes, Metis is built for Cursor workflows! It integrates seamlessly through the Model Context Protocol, giving Cursor\'s AI-first editor access to professional design tools. Maintain consistent typography, color systems, and spacing across your entire codebase automatically.',
        },
        {
            id: 'item-8',
            question: 'Can I use Metis with v0 by Vercel?',
            answer: 'Absolutely! Metis integrates seamlessly with v0 for rapid React prototyping. Generate beautiful components with v0, then refine them with Metis\'s professional design tools to get production-ready code with proper depth, accessibility, and theming in minutes.',
        },
        {
            id: 'item-9',
            question: 'Is Metis compatible with Windsurf?',
            answer: 'Yes, Metis works perfectly with Windsurf Cascade! Let Windsurf\'s agentic interface handle complex multi-step tasks while Metis ensures every UI element meets professional design standards. This combination is ideal for building entire features with consistent styling.',
        },
        {
            id: 'item-10',
            question: 'How does Metis integrate with GitHub Copilot?',
            answer: 'Metis complements Copilot by providing specialized design system tools that Copilot can invoke through MCP. While Copilot handles code completion and suggestions, Metis ensures the generated UI components follow professional design principles with proper typography, colors, spacing, and accessibility.',
        },
        {
            id: 'item-11',
            question: 'Can I use Metis MCP in production?',
            answer: "Absolutely! Metis MCP Server includes battle-tested error handling, comprehensive logging, and monitoring capabilities. It's designed to handle production workloads with confidence and includes performance optimizations for high-volume requests.",
        },
        {
            id: 'item-12',
            question: 'How do I create custom tools and prompts?',
            answer: 'Metis MCP provides an intuitive API for creating custom tools, prompts, and resources. Check our comprehensive documentation and examples to get started. You can extend functionality with clean abstractions and modern patterns.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Find answers to common questions about Metis MCP Server, installation, compatibility, and getting started with the Model Context Protocol.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1">
                        {faqItems.map((item) => (
                            <div
                                className="group"
                                key={item.id}>
                                <AccordionItem
                                    value={item.id}
                                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">
                                            {item.id === 'item-12' ? (
                                                <>
                                                    Metis MCP provides an intuitive API for creating custom tools, prompts, and resources. Learn more about our{' '}
                                                    <Link href="#features" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline">
                                                        six design tools
                                                    </Link>. Check our comprehensive documentation and examples to get started. You can extend functionality with clean abstractions and modern patterns.
                                                </>
                                            ) : (
                                                item.answer
                                            )}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                            </div>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Can&apos;t find what you&apos;re looking for? Check out our{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            documentation
                        </Link>
                        {' '}or reach out to the community.
                    </p>
                </div>
            </div>
        </section>
    )
}

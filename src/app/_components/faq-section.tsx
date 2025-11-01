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
            question: 'Can I use Metis MCP in production?',
            answer: "Absolutely! Metis MCP Server includes battle-tested error handling, comprehensive logging, and monitoring capabilities. It's designed to handle production workloads with confidence and includes performance optimizations for high-volume requests.",
        },
        {
            id: 'item-5',
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
                                        <p className="text-base">{item.answer}</p>
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

import { Button } from '~/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export function PricingSection() {
    return (
        <div className="relative py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="heading-2 text-balance">
                        Less Than One Coffee Per Month
                    </h2>
                    <p className="body-large mt-4">
                        Stop spending hours on design decisions. Métis pays for itself in the first week. Start free,
                        upgrade when you&apos;re shipping daily.
                    </p>
                </div>

                {/* Pricing Card */}
                <div className="mt-8 md:mt-20">
                    <div className="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5">
                        <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">

                            {/* Left Column - Pricing */}
                            <div className="pb-12 text-center md:pb-0 md:pr-12">
                                <h3 className="heading-3">Pro</h3>
                                <p className="body-regular mt-2">
                                    For developers shipping daily
                                </p>
                                <span className="mb-6 mt-12 inline-block text-6xl font-bold">
                                    <span className="text-4xl">$</span>5
                                </span>

                                <div className="flex justify-center">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                                        style={{ boxShadow: 'var(--shadow-lg)' }}
                                    >
                                        <Link href="#">Upgrade to Pro</Link>
                                    </Button>
                                </div>

                                <p className="text-muted-foreground mt-12 text-sm">
                                    2,000 cycles/day • All 6 systems • Priority support
                                </p>
                                <p className="text-muted-foreground/60 mt-2 text-xs">
                                    * Free tier: 50 cycles/day. Perfect for side projects.
                                </p>
                            </div>

                            {/* Right Column - Features & Logos */}
                            <div className="relative">
                                <ul
                                    role="list"
                                    className="space-y-4">
                                    {[
                                        'Typography System - Never eyeball font sizes again',
                                        'Color System - Generate full palettes from one hue',
                                        'Depth & Shadows - Realistic depth, not muddy blur',
                                        'Layout & Spacing - End margin chaos with 4px scales',
                                        'Theme Engine - Dark mode that actually looks good',
                                        'Accessibility - Auto WCAG AA validation'
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3">
                                            <Check className="size-5 shrink-0 mt-0.5 text-blue-600" />
                                            <span className="body-regular">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-muted-foreground mt-6 text-sm">
                                    Integrates with Claude through the Model Context Protocol. Used by developers at:
                                </p>

                                {/* Companies/Tools Logos */}
                                <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
                                    <img
                                        className="h-5 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                        alt="Nvidia Logo"
                                        height="20"
                                        width="auto"
                                    />
                                    <img
                                        className="h-4 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/github.svg"
                                        alt="GitHub Logo"
                                        height="16"
                                        width="auto"
                                    />
                                    <img
                                        className="h-6 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/openai.svg"
                                        alt="OpenAI Logo"
                                        height="24"
                                        width="auto"
                                    />
                                    <img
                                        className="h-5 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/nike.svg"
                                        alt="Nike Logo"
                                        height="20"
                                        width="auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

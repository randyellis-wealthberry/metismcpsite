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
                        Professional Design Tools for Claude
                    </h2>
                    <p className="body-large mt-4">
                        Transform your UI workflow with master-level design systems. Start free, upgrade when you&apos;re ready.
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
                                    For professionals building production UIs
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
                                    2,000 cycles per day • All 6 design tools • Priority support
                                </p>
                                <p className="text-muted-foreground/60 mt-2 text-xs">
                                    * Free tier available with 50 cycles/day limit
                                </p>
                            </div>

                            {/* Right Column - Features & Logos */}
                            <div className="relative">
                                <ul
                                    role="list"
                                    className="space-y-4">
                                    {[
                                        'Typography System - Perfect type scales & hierarchies',
                                        'Color System - HSL/OKLCH palettes with semantic variables',
                                        'Depth & Shadows - Dual-shadow elevation system',
                                        'Layout & Spacing - Systematic spacing scales',
                                        'Theme Engine - Seamless light/dark mode switching',
                                        'Accessibility Checker - WCAG AA compliance built-in'
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
                                    Works seamlessly with Claude through the Model Context Protocol. Trusted by developers building with:
                                </p>

                                {/* Companies/Tools Logos */}
                                <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
                                    <img
                                        className="h-5 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/vercel.svg"
                                        alt="Vercel"
                                        height="20"
                                        width="auto"
                                    />
                                    <img
                                        className="h-5 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/github.svg"
                                        alt="GitHub"
                                        height="20"
                                        width="auto"
                                    />
                                    <img
                                        className="h-5 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/openai.svg"
                                        alt="OpenAI"
                                        height="20"
                                        width="auto"
                                    />
                                    <img
                                        className="h-5 w-fit dark:invert"
                                        src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg"
                                        alt="Claude"
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

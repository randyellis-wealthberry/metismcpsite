import { Button } from '~/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export function PricingSection() {
    return (
        <div className="relative py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                        Professional Design Tools for Claude
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Transform your UI workflow with master-level design systems. Start free, upgrade when you&apos;re ready.
                    </p>
                </div>
                <div className="mt-8 md:mt-20">
                    <div className="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5">
                        <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
                            {/* Left column - Pricing */}
                            <div className="pb-12 text-center md:pb-0 md:pr-12">
                                <h3 className="text-2xl font-semibold">Pro</h3>
                                <p className="mt-2 text-lg text-muted-foreground">
                                    For professionals building production UIs
                                </p>
                                <span className="mb-2 mt-12 inline-block text-6xl font-bold">
                                    <span className="text-4xl">$</span>5
                                </span>
                                <p className="text-muted-foreground text-sm">per month</p>
                                <p className="mt-2 text-lg font-medium">2,000 cycles per day</p>
                                <p className="mt-1 text-xs text-muted-foreground/60">
                                    * Free tier available with 50 cycles/day limit
                                </p>

                                <div className="mt-8 flex justify-center">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                                    >
                                        <Link href="#">Upgrade to Pro</Link>
                                    </Button>
                                </div>

                                <p className="text-muted-foreground mt-8 text-sm">
                                    All 6 design tools included. No hidden fees, cancel anytime.
                                </p>
                            </div>

                            {/* Right column - Features */}
                            <div className="relative md:pl-12">
                                <h4 className="mb-6 text-lg font-semibold">6 Professional Design Tools</h4>
                                <ul
                                    role="list"
                                    className="space-y-4">
                                    {[
                                        'Typography System - Perfect type scales & hierarchies',
                                        'Color System - HSL/OKLCH palettes with semantic variables',
                                        'Depth & Shadows - Dual-shadow elevation system',
                                        'Layout & Spacing - Systematic spacing scales',
                                        'Theme Engine - Seamless light/dark mode switching',
                                        'Accessibility Checker - WCAG AA compliance built-in',
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3">
                                            <Check className="mt-0.5 size-5 shrink-0 text-blue-600" />
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 space-y-3">
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-0.5 size-5 shrink-0 text-blue-600" />
                                        <span className="text-sm">Priority support</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-0.5 size-5 shrink-0 text-blue-600" />
                                        <span className="text-sm">Early access to new tools</span>
                                    </div>
                                </div>
                                <p className="text-muted-foreground mt-8 text-sm">
                                    Works seamlessly with Claude through the Model Context Protocol. Just describe what you want in chat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

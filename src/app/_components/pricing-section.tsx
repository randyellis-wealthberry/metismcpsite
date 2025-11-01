import { Button } from '~/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export function PricingSection() {
    return (
        <div className="relative py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="heading-2 text-balance">
                        Professional Design Tools for Claude
                    </h2>
                    <p className="body-large mt-4">
                        Transform your UI workflow with master-level design systems. Start free, upgrade when you&apos;re ready.
                    </p>
                </div>
                <div className="mt-8 md:mt-20">
                    <div className="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5">
                        <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
                            <div className="pb-12 text-center md:pb-0 md:pr-12">
                                <h3 className="heading-3">Pro</h3>
                                <p className="body-regular mt-2 text-muted-foreground">
                                    For professionals building production UIs
                                </p>
                                <span className="mb-6 mt-12 inline-block text-6xl font-bold">
                                    <span className="text-4xl">$</span>5
                                </span>

                                <div className="flex justify-center">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
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

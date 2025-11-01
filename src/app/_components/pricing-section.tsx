import { Button } from '~/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export function PricingSection() {
    return (
        <div className="relative py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                {/* Section Header with Typography Hierarchy */}
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
                    <div
                        className="bg-card relative rounded-3xl border shadow-2xl"
                        style={{
                            boxShadow: 'var(--shadow-2xl)',
                            borderColor: 'var(--border-default)'
                        }}
                    >
                        <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">

                            {/* Left column - Pricing */}
                            <div className="pb-12 text-center md:pb-0 md:pr-12">
                                <h3 className="heading-3">Pro</h3>
                                <p className="body-regular mt-2" style={{ color: 'var(--text-secondary)' }}>
                                    For professionals building production UIs
                                </p>

                                {/* Price Display with Typography */}
                                <div className="mb-2 mt-12">
                                    <span className="text-6xl font-bold" style={{
                                        color: 'var(--text-primary)',
                                        lineHeight: 'var(--leading-none)'
                                    }}>
                                        <span className="text-4xl">$</span>5
                                    </span>
                                </div>
                                <p className="body-small">per month</p>
                                <p className="mt-2 text-lg font-medium" style={{
                                    color: 'var(--text-primary)',
                                    lineHeight: 'var(--leading-snug)'
                                }}>
                                    2,000 cycles per day
                                </p>
                                <p className="body-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>
                                    * Free tier available with 50 cycles/day limit
                                </p>

                                {/* CTA Button */}
                                <div className="mt-8 flex justify-center">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                                        style={{ boxShadow: 'var(--shadow-lg)' }}
                                    >
                                        <Link href="#">Upgrade to Pro</Link>
                                    </Button>
                                </div>

                                <p className="body-small mt-8">
                                    All 6 design tools included. No hidden fees, cancel anytime.
                                </p>
                            </div>

                            {/* Right column - Features */}
                            <div className="relative md:pl-12">
                                <h4 className="heading-5 mb-6">6 Professional Design Tools</h4>

                                {/* Design Tools List */}
                                <ul role="list" className="space-y-4">
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
                                            className="body-regular flex items-start gap-3">
                                            <Check
                                                className="mt-0.5 size-5 shrink-0"
                                                style={{ color: 'var(--color-brand-primary)' }}
                                            />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Additional Features */}
                                <div className="mt-8 space-y-3">
                                    <div className="body-regular flex items-start gap-3">
                                        <Check
                                            className="mt-0.5 size-5 shrink-0"
                                            style={{ color: 'var(--color-brand-primary)' }}
                                        />
                                        <span>Priority support</span>
                                    </div>
                                    <div className="body-regular flex items-start gap-3">
                                        <Check
                                            className="mt-0.5 size-5 shrink-0"
                                            style={{ color: 'var(--color-brand-primary)' }}
                                        />
                                        <span>Early access to new tools</span>
                                    </div>
                                </div>

                                <p className="body-small mt-8">
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

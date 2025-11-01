import { Button } from '~/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export function PricingSection() {
    return (
        <div className="relative py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="heading-2 text-balance">Simple, Transparent Pricing</h2>
                    <p className="body-large mt-4">
                        Professional design tools for your Claude workflow. Start free, upgrade when you&apos;re ready.
                    </p>
                </div>

                <div className="max-w-md mx-auto">
                    <div
                        className="relative border-2 bg-card"
                        style={{
                            borderRadius: 'var(--radius-2xl)',
                            boxShadow: 'var(--shadow-2xl)',
                            borderColor: 'var(--color-brand-primary)',
                        }}
                    >
                        {/* Most Popular Badge */}
                        <div
                            className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full"
                            style={{ boxShadow: 'var(--shadow-md)' }}
                        >
                            Most Popular
                        </div>

                        <div className="p-8">
                            {/* Tier name and description */}
                            <div className="text-center">
                                <h3 className="heading-3">Pro</h3>
                                <p className="body-regular mt-2 text-text-secondary">
                                    For professionals building production UIs
                                </p>
                            </div>

                            {/* Pricing */}
                            <div className="mt-8 text-center">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-5xl font-bold">$5</span>
                                    <span className="body-regular text-text-secondary">/month</span>
                                </div>
                                <p className="body-small mt-2 text-text-secondary">
                                    2,000 cycles per day
                                </p>
                                <p className="body-xs mt-1" style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>
                                    * Free tier available with 50 cycles/day limit
                                </p>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-8">
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full"
                                    variant="default"
                                    style={{
                                        background: 'linear-gradient(to right, hsl(220, 80%, 50%), hsl(180, 80%, 50%))',
                                        boxShadow: 'var(--shadow-lg)',
                                    }}
                                >
                                    <Link href="#">Upgrade to Pro</Link>
                                </Button>
                            </div>

                            {/* Features list - All 6 design tools */}
                            <ul role="list" className="mt-8 space-y-3">
                                <li className="body-regular flex items-start gap-3">
                                    <Check
                                        className="size-5 shrink-0 mt-0.5"
                                        style={{ color: 'var(--color-brand-primary)' }}
                                    />
                                    <span>All 6 design tools</span>
                                </li>
                                <li className="body-regular flex items-start gap-3">
                                    <Check
                                        className="size-5 shrink-0 mt-0.5"
                                        style={{ color: 'var(--color-brand-primary)' }}
                                    />
                                    <span>Typography system</span>
                                </li>
                                <li className="body-regular flex items-start gap-3">
                                    <Check
                                        className="size-5 shrink-0 mt-0.5"
                                        style={{ color: 'var(--color-brand-primary)' }}
                                    />
                                    <span>Color system</span>
                                </li>
                                <li className="body-regular flex items-start gap-3">
                                    <Check
                                        className="size-5 shrink-0 mt-0.5"
                                        style={{ color: 'var(--color-brand-primary)' }}
                                    />
                                    <span>Depth & shadows</span>
                                </li>
                                <li className="body-regular flex items-start gap-3">
                                    <Check
                                        className="size-5 shrink-0 mt-0.5"
                                        style={{ color: 'var(--color-brand-primary)' }}
                                    />
                                    <span>Layout & spacing</span>
                                </li>
                                <li className="body-regular flex items-start gap-3">
                                    <Check
                                        className="size-5 shrink-0 mt-0.5"
                                        style={{ color: 'var(--color-brand-primary)' }}
                                    />
                                    <span>Theme engine</span>
                                </li>
                                <li className="body-regular flex items-start gap-3">
                                    <Check
                                        className="size-5 shrink-0 mt-0.5"
                                        style={{ color: 'var(--color-brand-primary)' }}
                                    />
                                    <span>Accessibility checker</span>
                                </li>
                                <li className="body-regular flex items-start gap-3">
                                    <Check
                                        className="size-5 shrink-0 mt-0.5"
                                        style={{ color: 'var(--color-brand-primary)' }}
                                    />
                                    <span>2,000 cycles per day</span>
                                </li>
                                <li className="body-regular flex items-start gap-3">
                                    <Check
                                        className="size-5 shrink-0 mt-0.5"
                                        style={{ color: 'var(--color-brand-primary)' }}
                                    />
                                    <span>Priority support</span>
                                </li>
                                <li className="body-regular flex items-start gap-3">
                                    <Check
                                        className="size-5 shrink-0 mt-0.5"
                                        style={{ color: 'var(--color-brand-primary)' }}
                                    />
                                    <span>Early access to new tools</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Additional info */}
                <div className="mt-12 text-center">
                    <p className="body-small text-text-secondary">
                        All 6 design tools included. No hidden fees, cancel anytime.
                    </p>
                </div>
            </div>
        </div>
    )
}

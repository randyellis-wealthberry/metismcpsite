import { Button } from '~/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    cycles: '50',
    period: 'forever',
    description: 'Perfect for trying out Metis design tools',
    cta: 'Get Started',
    features: [
      'All 6 design tools',
      'Typography system',
      'Color system',
      'Depth & shadows',
      'Theme engine',
      'Accessibility checker',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$5',
    cycles: '2,000',
    period: 'per month',
    description: 'For professionals building production UIs',
    cta: 'Upgrade to Pro',
    features: [
      'Everything in Free',
      '2,000 cycles per day',
      'Priority support',
      'Early access to new tools',
      'Advanced theme variants',
      'Custom color palettes',
    ],
    popular: true,
  },
]

export function PricingSection() {
    return (
        <div className="relative py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="heading-2 text-balance">Simple, Transparent Pricing</h2>
                    <p className="body-large mt-4">
                        Choose the plan that fits your needs. Start free, upgrade when you're ready.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {pricingTiers.map((tier) => (
                        <div
                            key={tier.name}
                            className="relative border bg-card"
                            style={{
                                borderRadius: 'var(--radius-2xl)',
                                boxShadow: tier.popular ? 'var(--shadow-2xl)' : 'var(--shadow-lg)',
                                borderColor: tier.popular ? 'var(--color-brand-primary)' : 'var(--border-default)',
                                borderWidth: tier.popular ? '2px' : '1px',
                            }}
                        >
                            {tier.popular && (
                                <div
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full"
                                    style={{ boxShadow: 'var(--shadow-md)' }}
                                >
                                    Most Popular
                                </div>
                            )}

                            <div className="p-8">
                                {/* Tier name and description */}
                                <div className="text-center">
                                    <h3 className="heading-3">{tier.name}</h3>
                                    <p className="body-regular mt-2 text-text-secondary">
                                        {tier.description}
                                    </p>
                                </div>

                                {/* Pricing */}
                                <div className="mt-8 text-center">
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-5xl font-bold">{tier.price}</span>
                                        <span className="body-regular text-text-secondary">/{tier.period}</span>
                                    </div>
                                    <p className="body-small mt-2 text-text-secondary">
                                        {tier.cycles} cycles per day
                                    </p>
                                    {tier.name === 'Free' && (
                                        <p className="body-xs mt-1" style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>
                                            * Free tier limited to 50 cycles/day
                                        </p>
                                    )}
                                </div>

                                {/* CTA Button */}
                                <div className="mt-8">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="w-full"
                                        variant={tier.popular ? 'default' : 'outline'}
                                        style={tier.popular ? {
                                            background: 'linear-gradient(to right, hsl(220, 80%, 50%), hsl(180, 80%, 50%))',
                                            boxShadow: 'var(--shadow-lg)',
                                        } : undefined}
                                    >
                                        <Link href="#">{tier.cta}</Link>
                                    </Button>
                                </div>

                                {/* Features list */}
                                <ul role="list" className="mt-8 space-y-3">
                                    {tier.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="body-regular flex items-start gap-3"
                                        >
                                            <Check
                                                className="size-5 shrink-0 mt-0.5"
                                                style={{ color: 'var(--color-brand-primary)' }}
                                            />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional info */}
                <div className="mt-12 text-center">
                    <p className="body-small text-text-secondary">
                        All plans include access to all 6 design tools. No hidden fees, cancel anytime.
                    </p>
                </div>
            </div>
        </div>
    )
}

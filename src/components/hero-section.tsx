'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '~/components/ui/button'
import { HeroHeader } from './header'
import { InfiniteSlider } from '~/components/ui/infinite-slider'
import { ProgressiveBlur } from '~/components/ui/progressive-blur'
import { ArrowRight, Github, Sparkles } from 'lucide-react'
import { useAnimeScroll, useAnimeStagger } from '~/hooks/useAnimeScroll'

export default function HeroSection() {
    // Animation refs for scroll-triggered animations
    const badgeRef = useAnimeScroll({ preset: 'scaleIn', delay: 200 })
    const headlineRef = useAnimeScroll({ preset: 'fadeInUp', delay: 400 })
    const descriptionRef = useAnimeScroll({ preset: 'fadeInUp', delay: 600 })
    const ctaContainerRef = useAnimeStagger({
        preset: 'fadeInUp',
        childSelector: '.cta-button',
        staggerDelay: 100,
        delay: 800
    })
    const statsRef = useAnimeStagger({
        preset: 'fadeInUp',
        childSelector: '.stat-item',
        staggerDelay: 100,
        delay: 1000
    })

    return (
        <>
            <HeroHeader />
            <section className="relative">
                    <div className="py-12 md:pb-32 lg:pb-36 lg:pt-32">
                        <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12 z-20">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                {/* Badge */}
                                <div
                                    ref={badgeRef}
                                    className="inline-flex items-center gap-2 border border-border bg-background/50 px-4 py-1.5 text-sm backdrop-blur-sm opacity-0"
                                    style={{ borderRadius: 'var(--radius-full)' }}>
                                    <Sparkles
                                        className="h-4 w-4"
                                        style={{ color: 'var(--color-brand-primary)' }}
                                    />
                                    <span className="font-medium">Production-Ready MCP Server</span>
                                </div>

                                <h1
                                    ref={headlineRef}
                                    className="heading-1 mt-8 max-w-2xl text-balance opacity-0">
                                    Supercharge Your AI Applications with{' '}
                                    <span
                                        className="bg-clip-text text-transparent"
                                        style={{
                                            backgroundImage: 'linear-gradient(to right, var(--color-brand-gradient-start), var(--color-brand-gradient-mid), var(--color-brand-gradient-end))'
                                        }}>
                                        Metis MCP Server
                                    </span>
                                </h1>
                                <p
                                    ref={descriptionRef}
                                    className="body-large mt-8 max-w-2xl text-balance opacity-0">
                                    A powerful Model Context Protocol server that seamlessly integrates with Claude and other AI assistants. Build smarter, faster, and more reliable AI-powered tools.
                                </p>

                                <div
                                    ref={ctaContainerRef}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <div className="cta-button opacity-0">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="h-12 pl-5 pr-3 text-base transition-all duration-300 group depth-glow-brand hover:translate-y-[-3px] hover:scale-[1.03]"
                                            style={{
                                                borderRadius: 'var(--radius-full)',
                                                background: 'linear-gradient(135deg, hsl(220, 80%, 55%), hsl(180, 80%, 55%))'
                                            }}
                                        >
                                            <Link href="#get-started" className="inline-flex items-center justify-center">
                                                <span className="text-nowrap">Get Started</span>
                                                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </div>
                                    <div className="cta-button opacity-0">
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="ghost"
                                            className="h-12 px-5 text-base group transition-all duration-300"
                                            style={{ borderRadius: 'var(--radius-full)' }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = 'var(--bg-interactive)';
                                                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                                e.currentTarget.style.boxShadow = 'none';
                                            }}>
                                            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-2 h-4 w-4" />
                                                <span className="text-nowrap">View on GitHub</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                {/* Social proof stats */}
                                <div
                                    ref={statsRef}
                                    className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground lg:justify-start">
                                    <div className="stat-item flex items-center gap-2 opacity-0">
                                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                        <span>Open Source</span>
                                    </div>
                                    <div className="stat-item flex items-center gap-2 opacity-0">
                                        <span className="font-semibold text-foreground">TypeScript</span>
                                    </div>
                                    <div className="stat-item flex items-center gap-2 opacity-0">
                                        <span className="font-semibold text-foreground">Production Ready</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Animated Gradient Background */}
                        <div
                            className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden border border-black/10 lg:aspect-video dark:border-white/5 pointer-events-none"
                            style={{ borderRadius: 'var(--radius-3xl)' }}
                            data-testid="hero-background"
                            aria-hidden="true"
                        >
                            {/* Animated gradient */}
                            <div
                                className="absolute inset-0 animate-pulse"
                                style={{
                                    background: 'linear-gradient(to bottom right, hsl(220, 80%, 50%, 0.2), hsl(180, 80%, 50%, 0.1), hsl(220, 80%, 50%, 0.2))'
                                }}
                            />

                            {/* Dot grid pattern */}
                            <div
                                className="absolute inset-0 opacity-30"
                                style={{
                                    backgroundImage: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
                                    backgroundSize: "32px 32px",
                                }}
                            />

                            {/* Gradient overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background pointer-events-none" />
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-2">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Powering the best teams</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                            alt="Nvidia - Trusted by leading AI companies"
                                            height={20}
                                            width={80}
                                        />
                                    </div>

                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/column.svg"
                                            alt="Column - Building better interfaces with Claude"
                                            height={16}
                                            width={64}
                                        />
                                    </div>
                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/github.svg"
                                            alt="GitHub - AI-powered development workflows"
                                            height={16}
                                            width={64}
                                        />
                                    </div>
                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nike.svg"
                                            alt="Nike - Enterprise design automation"
                                            height={20}
                                            width={80}
                                        />
                                    </div>
                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                            alt="Lemon Squeezy - Modern UI design tools"
                                            height={20}
                                            width={80}
                                        />
                                    </div>
                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/laravel.svg"
                                            alt="Laravel - Professional design systems"
                                            height={16}
                                            width={64}
                                        />
                                    </div>
                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-7 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lilly.svg"
                                            alt="Lilly - Accessible UI automation"
                                            height={28}
                                            width={112}
                                        />
                                    </div>

                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-6 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/openai.svg"
                                            alt="OpenAI - Claude design integration"
                                            height={24}
                                            width={96}
                                        />
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}

"use client";

import { useEffect, useRef } from "react";
import { animate, utils } from "animejs";

export default function AnimeDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Animation 1: Staggered Grid Animation
    animate(".grid-item", {
      scale: [0.8, 1],
      duration: 800,
      delay: utils.stagger(80, { grid: [6, 6], from: "center" }),
      loop: true,
      alternate: true,
    });

    // Animation 2: Floating Particles
    animate(".particle", {
      translateY: [-20, 20],
      translateX: [-10, 10],
      opacity: [0.3, 0.8],
      duration: 2000,
      delay: utils.stagger(200),
      loop: true,
      alternate: true,
    });

    // Animation 3: SVG Wave Animation
    const animateWave = () => {
      if (waveRef.current) {
        animate(waveRef.current, {
          d: [
            "M0,50 Q25,30 50,50 T100,50 T150,50 T200,50 T250,50 T300,50 T350,50 T400,50",
            "M0,50 Q25,70 50,50 T100,50 T150,50 T200,50 T250,50 T300,50 T350,50 T400,50",
          ],
          duration: 2000,
          loop: true,
          alternate: true,
        });
      }
    };

    animateWave();

    // Animation 4: Text Reveal
    animate(".text-reveal .letter", {
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 1200,
      delay: utils.stagger(50),
    });

    // Animation 5: Morphing Circle
    animate(".morph-circle", {
      r: [20, 30],
      fill: ["hsl(280, 70%, 60%)", "hsl(200, 70%, 60%)"],
      duration: 2000,
      loop: true,
      alternate: true,
    });

    // Animation 6: Rotating Loader
    animate(".loader-segment", {
      rotate: [0, 360],
      duration: 3000,
      loop: true,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-bg-page via-bg-surface to-bg-elevated p-8 overflow-hidden"
    >
      {/* Floating Particles Background */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="particle absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-text-primary text-reveal">
            {"Anime.js Showcase".split("").map((letter, i) => (
              <span
                key={`letter-${i}`}
                className="letter inline-block"
                style={{ display: letter === " " ? "inline" : "inline-block" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
          <p className="text-text-body text-lg">
            Powerful JavaScript animation library with a simple API
          </p>
        </div>

        {/* Staggered Grid */}
        <div className="bg-bg-elevated border border-border-default rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-text-primary mb-6">
            1. Staggered Grid Animation
          </h2>
          <div className="grid grid-cols-6 gap-3">
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={`grid-${i}`}
                className="grid-item aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {/* SVG Wave */}
        <div className="bg-bg-elevated border border-border-default rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-text-primary mb-6">
            2. SVG Path Morphing
          </h2>
          <svg
            viewBox="0 0 400 100"
            className="w-full h-32"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              ref={waveRef}
              d="M0,50 Q25,30 50,50 T100,50 T150,50 T200,50 T250,50 T300,50 T350,50 T400,50"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(280, 70%, 60%)" />
                <stop offset="50%" stopColor="hsl(240, 70%, 60%)" />
                <stop offset="100%" stopColor="hsl(200, 70%, 60%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Morphing Circles */}
        <div className="bg-bg-elevated border border-border-default rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-text-primary mb-6">
            3. Color & Size Morphing
          </h2>
          <svg viewBox="0 0 400 100" className="w-full h-32">
            {Array.from({ length: 8 }).map((_, i) => (
              <circle
                key={`morph-${i}`}
                className="morph-circle"
                cx={50 + i * 50}
                cy="50"
                r="20"
                fill={`hsl(${i * 45}, 70%, 60%)`}
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </svg>
        </div>

        {/* Rotating Loader */}
        <div className="bg-bg-elevated border border-border-default rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-text-primary mb-6">
            4. Circular Loader Animation
          </h2>
          <div className="flex justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-32 h-32"
              fill="none"
            >
              <circle
                className="loader-segment"
                cx="50"
                cy="50"
                r="40"
                stroke="url(#loaderGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="251.2"
              />
              <defs>
                <linearGradient
                  id="loaderGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="hsl(280, 70%, 60%)" />
                  <stop offset="100%" stopColor="hsl(200, 70%, 60%)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-text-primary mb-4">
            Key Features Demonstrated:
          </h3>
          <ul className="space-y-2 text-text-body">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Stagger animations with grid patterns
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              SVG path morphing and animations
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Property transitions (color, size, position)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Custom easing functions
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Loop and alternate directions
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Timeline and sequence control
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

interface WaveBackgroundProps {
  className?: string;
}

export function WaveBackground({ className = "" }: WaveBackgroundProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const wave1Ref = useRef<SVGPathElement>(null);
  const wave2Ref = useRef<SVGPathElement>(null);
  const wave3Ref = useRef<SVGPathElement>(null);
  const mouseYRef = useRef(0.5); // Normalized 0-1
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Generate sine wave path
  const generateWavePath = (
    amplitude: number,
    frequency: number,
    phase: number,
    verticalOffset: number
  ): string => {
    const width = 1440;
    const height = 600;
    const segments = 100;
    const points: string[] = [];

    // Start from bottom left
    points.push(`M 0,${height}`);

    // Generate wave points
    for (let i = 0; i <= segments; i++) {
      const x = (width / segments) * i;
      const y =
        height / 2 +
        verticalOffset +
        amplitude * Math.sin((x / width) * Math.PI * frequency + phase);
      points.push(`${i === 0 ? "L" : ""} ${x},${y}`);
    }

    // Close the path to bottom right
    points.push(`L ${width},${height}`);
    points.push("Z");

    return points.join(" ");
  };

  useEffect(() => {
    if (!isClient) return;

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (!svgRef.current) return;

      const rect = svgRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const normalizedY = Math.max(0, Math.min(1, y / rect.height));

      // Smooth interpolation
      mouseYRef.current = mouseYRef.current * 0.9 + normalizedY * 0.1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Wave 1 - Background wave (slow, large amplitude)
    const wave1Animation = () => {
      if (!wave1Ref.current) return;

      const mouseInfluence = (mouseYRef.current - 0.5) * 100;

      animate(wave1Ref.current, {
        d: [
          generateWavePath(40 + mouseInfluence * 0.3, 1.5, 0, -50),
          generateWavePath(40 + mouseInfluence * 0.3, 1.5, Math.PI * 2, -50),
        ],
        duration: 8000,
        loop: true,
        alternate: false,
      });
    };

    // Wave 2 - Middle wave (medium speed, medium amplitude)
    const wave2Animation = () => {
      if (!wave2Ref.current) return;

      const mouseInfluence = (mouseYRef.current - 0.5) * 100;

      animate(wave2Ref.current, {
        d: [
          generateWavePath(30 + mouseInfluence * 0.5, 2, Math.PI * 0.5, 0),
          generateWavePath(30 + mouseInfluence * 0.5, 2, Math.PI * 2.5, 0),
        ],
        duration: 6000,
        loop: true,
        alternate: false,
      });
    };

    // Wave 3 - Foreground wave (fast, small amplitude)
    const wave3Animation = () => {
      if (!wave3Ref.current) return;

      const mouseInfluence = (mouseYRef.current - 0.5) * 100;

      animate(wave3Ref.current, {
        d: [
          generateWavePath(20 + mouseInfluence * 0.7, 3, Math.PI, 50),
          generateWavePath(20 + mouseInfluence * 0.7, 3, Math.PI * 3, 50),
        ],
        duration: 4000,
        loop: true,
        alternate: false,
      });
    };

    // Start animations
    wave1Animation();
    wave2Animation();
    wave3Animation();

    // Update wave positions based on mouse movement
    const updateInterval = setInterval(() => {
      // Trigger subtle re-renders based on mouse position
      if (wave1Ref.current && wave2Ref.current && wave3Ref.current) {
        // Adjust opacity based on mouse position for added effect
        wave1Ref.current.style.opacity = String(0.3 + mouseYRef.current * 0.1);
        wave2Ref.current.style.opacity = String(0.35 + mouseYRef.current * 0.1);
        wave3Ref.current.style.opacity = String(0.4 + mouseYRef.current * 0.1);
      }
    }, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(updateInterval);
    };
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Blue to Cyan Gradient - Background Wave */}
          <linearGradient
            id="wave-gradient-1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(195, 92%, 57%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.3" />
          </linearGradient>

          {/* Blue to Cyan Gradient - Middle Wave */}
          <linearGradient
            id="wave-gradient-2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="hsl(195, 92%, 57%)" stopOpacity="0.35" />
            <stop offset="50%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="hsl(195, 92%, 57%)" stopOpacity="0.35" />
          </linearGradient>

          {/* Blue to Cyan Gradient - Foreground Wave */}
          <linearGradient
            id="wave-gradient-3"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="hsl(195, 92%, 57%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Background Wave */}
        <path
          ref={wave1Ref}
          d={generateWavePath(40, 1.5, 0, -50)}
          fill="url(#wave-gradient-1)"
          opacity="0.3"
        />

        {/* Middle Wave */}
        <path
          ref={wave2Ref}
          d={generateWavePath(30, 2, Math.PI * 0.5, 0)}
          fill="url(#wave-gradient-2)"
          opacity="0.35"
        />

        {/* Foreground Wave */}
        <path
          ref={wave3Ref}
          d={generateWavePath(20, 3, Math.PI, 50)}
          fill="url(#wave-gradient-3)"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}

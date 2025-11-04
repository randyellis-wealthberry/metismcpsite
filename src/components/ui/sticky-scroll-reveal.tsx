"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "~/lib/utils";

export interface StickyScrollContent {
  title: string;
  description: string;
  content?: React.ReactNode | string;
}

interface StickyScrollRevealProps {
  content: StickyScrollContent[];
  contentClassName?: string;
}

export const StickyScroll = ({
  content,
  contentClassName,
}: StickyScrollRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const [activeCard, setActiveCard] = React.useState(0);

  // Update active card based on scroll position
  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const cardIndex = Math.min(
        Math.floor(latest * content.length),
        content.length - 1
      );
      setActiveCard(cardIndex);
    });

    return () => unsubscribe();
  }, [content.length, scrollYProgress]);

  const backgroundColors = [
    "var(--bg-surface)",
    "var(--bg-elevated)",
    "var(--bg-surface)",
  ];

  return (
    <motion.div
      ref={containerRef}
      className="relative flex flex-col md:flex-row space-y-10 md:space-y-0 p-6 md:p-10"
      style={{
        background: backgroundColors[activeCard % backgroundColors.length],
      }}
    >
      {/* Sticky Content Container */}
      <div className="relative flex items-start md:px-4">
        <div className="hidden md:block max-w-2xl lg:sticky lg:top-20">
          {content[activeCard]?.content ?? null}
        </div>
      </div>

      {/* Scrolling Text Content */}
      <div className={cn("relative md:ml-10 flex-1", contentClassName)}>
        {content.map((item, index) => (
          <div key={item.title + index} className="my-20 md:my-40">
            {/* Show content on mobile inline */}
            <div className="md:hidden mb-8">
              {item.content ?? null}
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-3 mb-4"
            >
              {item.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="body-large max-w-xl"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
        <div className="h-40" />
      </div>
    </motion.div>
  );
};

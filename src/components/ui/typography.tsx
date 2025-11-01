import * as React from "react";
import { cn } from "~/lib/utils";

/**
 * Typography Component System
 *
 * Based on UI Depth & Color Masterclass principles:
 * - Clear hierarchy through size, weight, and color
 * - Proper line heights for readability
 * - Semantic HTML with visual consistency
 * - Theme-aware color system
 */

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export const Typography = {
  /**
   * Display - Hero sections, landing pages
   * 60px (3.75rem), Bold (700), Tight line height (1.1)
   */
  Display: ({ children, className, ...props }: TypographyProps) => (
    <h1
      className={cn(
        "text-5xl font-bold leading-tight tracking-tight",
        "text-[var(--text-primary)]",
        "md:text-6xl lg:text-7xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  ),

  /**
   * H1 - Page titles
   * 36px (2.25rem), Bold (700), Tight line height (1.2)
   */
  H1: ({ children, className, ...props }: TypographyProps) => (
    <h1
      className={cn(
        "text-3xl font-bold leading-tight tracking-tight",
        "text-[var(--text-primary)]",
        "sm:text-4xl md:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  ),

  /**
   * H2 - Section headings
   * 30px (1.875rem), Semibold (600), Snug line height (1.3)
   */
  H2: ({ children, className, ...props }: TypographyProps) => (
    <h2
      className={cn(
        "text-2xl font-semibold leading-snug tracking-tight",
        "text-[var(--text-primary)]",
        "sm:text-3xl md:text-4xl",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  ),

  /**
   * H3 - Subsection headings
   * 24px (1.5rem), Semibold (600), Normal line height (1.4)
   */
  H3: ({ children, className, ...props }: TypographyProps) => (
    <h3
      className={cn(
        "text-xl font-semibold leading-normal tracking-tight",
        "text-[var(--text-primary)]",
        "sm:text-2xl",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  ),

  /**
   * H4 - Card titles, minor headings
   * 20px (1.25rem), Semibold (600), Normal line height (1.5)
   */
  H4: ({ children, className, ...props }: TypographyProps) => (
    <h4
      className={cn(
        "text-lg font-semibold leading-normal",
        "text-[var(--text-primary)]",
        "sm:text-xl",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  ),

  /**
   * Body - Primary reading text
   * 16px (1rem), Regular (400), Relaxed line height (1.6)
   */
  Body: ({ children, className, ...props }: TypographyProps) => (
    <p
      className={cn(
        "text-base font-normal leading-relaxed",
        "text-[var(--text-body)]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  ),

  /**
   * Lead - Emphasized body text (intro paragraphs)
   * 18px (1.125rem), Regular (400), Relaxed line height (1.6)
   */
  Lead: ({ children, className, ...props }: TypographyProps) => (
    <p
      className={cn(
        "text-lg font-normal leading-relaxed",
        "text-[var(--text-body)]",
        "md:text-xl",
        className
      )}
      {...props}
    >
      {children}
    </p>
  ),

  /**
   * Small - Secondary information
   * 14px (0.875rem), Regular (400), Normal line height (1.5)
   */
  Small: ({ children, className, ...props }: TypographyProps) => (
    <p
      className={cn(
        "text-sm font-normal leading-normal",
        "text-[var(--text-secondary)]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  ),

  /**
   * Caption - Captions, metadata, timestamps
   * 12px (0.75rem), Regular (400), Tight line height (1.4)
   */
  Caption: ({ children, className, ...props }: TypographyProps) => (
    <p
      className={cn(
        "text-xs font-normal leading-tight",
        "text-[var(--text-tertiary)]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  ),

  /**
   * Label - Form labels, UI labels
   * 14px (0.875rem), Medium (500), Normal line height (1.5)
   */
  Label: ({ children, className, ...props }: TypographyProps) => (
    <label
      className={cn(
        "text-sm font-medium leading-normal",
        "text-[var(--text-primary)]",
        className
      )}
      {...props}
    >
      {children}
    </label>
  ),

  /**
   * Code - Inline code
   * 14px (0.875rem), Medium (500), Mono font
   */
  Code: ({ children, className, ...props }: TypographyProps) => (
    <code
      className={cn(
        "text-sm font-medium font-mono",
        "bg-[var(--bg-muted)] text-[var(--text-primary)]",
        "px-1.5 py-0.5 rounded",
        className
      )}
      {...props}
    >
      {children}
    </code>
  ),

  /**
   * Muted - De-emphasized text
   * Inherits size, Regular (400), Muted color
   */
  Muted: ({ children, className, ...props }: TypographyProps) => (
    <p
      className={cn(
        "font-normal leading-relaxed",
        "text-[var(--text-secondary)]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  ),

  /**
   * Link - Styled anchor text
   * Inherits size, Medium (500), Brand color
   */
  Link: ({ children, className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        "font-medium underline underline-offset-4",
        "text-[var(--brand-primary)] hover:text-[var(--brand-light)]",
        "transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </a>
  ),
};

/**
 * Usage Examples:
 *
 * <Typography.Display>Hero Title</Typography.Display>
 * <Typography.H1>Page Title</Typography.H1>
 * <Typography.Body>Content goes here</Typography.Body>
 * <Typography.Caption>Last updated today</Typography.Caption>
 */

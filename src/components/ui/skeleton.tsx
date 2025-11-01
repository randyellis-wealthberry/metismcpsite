import { cn } from "~/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "card" | "text" | "circle";
}

function Skeleton({ className, variant = "default", ...props }: SkeletonProps) {
  const baseClasses = "animate-pulse rounded-md";

  const variantClasses = {
    default: "bg-muted",
    card: "bg-muted border border-border-subtle",
    text: "bg-muted h-4 w-full",
    circle: "bg-muted rounded-full"
  };

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className)}
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
      {...props}
    >
      {/* Shimmer overlay */}
      <div
        className="shimmer absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0.3) 60%, transparent 100%)'
        }}
      />

      {/* Depth gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.02), transparent)',
          opacity: 0.5
        }}
      />
    </div>
  );
}

/**
 * Card skeleton for loading states
 */
function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn("rounded-2xl border p-6 space-y-4", className)}
      style={{
        borderRadius: 'var(--radius-2xl)',
        borderColor: 'var(--border-default)',
        backgroundColor: 'var(--bg-surface)',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      {/* Icon skeleton */}
      <Skeleton variant="circle" className="h-10 w-10" />

      {/* Title skeleton */}
      <Skeleton className="h-6 w-3/4" />

      {/* Description skeleton */}
      <div className="space-y-2">
        <Skeleton variant="text" />
        <Skeleton variant="text" className="w-5/6" />
      </div>
    </div>
  );
}

/**
 * Text line skeletons
 */
function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={i === lines - 1 ? "w-4/5" : "w-full"}
        />
      ))}
    </div>
  );
}

export { Skeleton, SkeletonCard, SkeletonText };

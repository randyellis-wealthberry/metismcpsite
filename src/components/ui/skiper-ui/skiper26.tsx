'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '~/lib/utils'

interface ThemeToggleButtonProps {
  variant?: string
  start?: string
  blur?: boolean
  className?: string
  gifUrl?: string
}

/**
 * Animated theme toggle button with smooth transitions
 * Features spring physics, icon animations, and depth effects
 */
export function ThemeToggleButton({ className }: ThemeToggleButtonProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isHovered, setIsHovered] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return (
      <button
        type="button"
        className={cn(
          'h-9 w-9 rounded-full inline-flex items-center justify-center transition-colors',
          'hover:bg-accent hover:text-accent-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          className
        )}
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4" />
      </button>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative h-9 w-9 rounded-full inline-flex items-center justify-center overflow-hidden',
        'hover:bg-accent hover:text-accent-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className
      )}
      aria-label="Toggle theme"
      whileHover={{
        scale: 1.1,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      whileTap={{
        scale: 0.95,
        rotate: theme === 'dark' ? 180 : -180,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      animate={{
        rotate: 0,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
    >
      {/* Subtle glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle, rgba(250, 204, 21, 0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)'
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.2 : 0.8,
          transition: { duration: 0.3 }
        }}
      />

      {/* Animated icon swap */}
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{
              y: -20,
              opacity: 0,
              rotate: -90,
              scale: 0.6
            }}
            animate={{
              y: 0,
              opacity: 1,
              rotate: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
              }
            }}
            exit={{
              y: 20,
              opacity: 0,
              rotate: 90,
              scale: 0.6,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              animate={{
                rotate: isHovered ? [0, 12, -12, 0] : 0,
                transition: { duration: 0.5 }
              }}
            >
              <Sun className="h-4 w-4" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{
              y: 20,
              opacity: 0,
              rotate: 90,
              scale: 0.6
            }}
            animate={{
              y: 0,
              opacity: 1,
              rotate: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
              }
            }}
            exit={{
              y: -20,
              opacity: 0,
              rotate: -90,
              scale: 0.6,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              animate={{
                rotate: isHovered ? [0, -12, 12, 0] : 0,
                transition: { duration: 0.5 }
              }}
            >
              <Moon className="h-4 w-4" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

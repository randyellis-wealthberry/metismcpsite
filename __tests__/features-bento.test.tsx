/**
 * @file features-bento.test.tsx
 * @description Comprehensive test suite for the Bento Grid Features Section
 *
 * This is the RED phase of TDD - tests are written BEFORE implementation.
 * All tests should FAIL initially until the component is properly implemented.
 *
 * Tests cover:
 * - Component rendering and structure
 * - Grid layout and responsive design
 * - Hover effects and animations
 * - Modal interactions
 * - Accessibility features
 * - Theme support
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, cleanup, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { FeaturesBentoSection } from '@/app/_components/features-section';

/**
 * Mock Setup
 *
 * We mock external dependencies to isolate component behavior:
 * - @kokonutui/bento-grid: UI library component
 * - framer-motion: Animation library
 * - animejs: Animation engine
 * - next-themes: Theme management
 * - IntersectionObserver: Scroll animations
 */

// Mock @kokonutui/bento-grid
vi.mock('@kokonutui/bento-grid', () => ({
  BentoGrid: ({ children, className, ...props }: any) => (
    <div data-testid="bento-grid" className={className} {...props}>
      {children}
    </div>
  ),
  BentoGridItem: ({ children, className, ...props }: any) => (
    <div data-testid="bento-grid-item" className={className} {...props}>
      {children}
    </div>
  ),
}));

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, ...props }: any) => (
      <div className={className} {...props}>
        {children}
      </div>
    ),
    section: ({ children, className, ...props }: any) => (
      <section className={className} {...props}>
        {children}
      </section>
    ),
    button: ({ children, className, ...props }: any) => (
      <button className={className} {...props}>
        {children}
      </button>
    ),
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock animejs
vi.mock('animejs', () => ({
  default: vi.fn(() => ({
    play: vi.fn(),
    pause: vi.fn(),
    restart: vi.fn(),
  })),
  anime: vi.fn(() => ({
    play: vi.fn(),
    pause: vi.fn(),
    restart: vi.fn(),
  })),
}));

// Mock next-themes
vi.mock('next-themes', () => ({
  useTheme: vi.fn(() => ({
    theme: 'light',
    setTheme: vi.fn(),
    systemTheme: 'light',
  })),
}));

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
window.IntersectionObserver = mockIntersectionObserver as any;

// Mock matchMedia for responsive tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock prefers-reduced-motion
const mockPrefersReducedMotion = (value: boolean) => {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: query === '(prefers-reduced-motion: reduce)' ? value : false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
};

/**
 * Test Suite: Component Rendering
 *
 * Validates that all core elements render correctly:
 * - Section heading
 * - All 6 feature items
 * - Icons, titles, and descriptions
 */
describe('A. Component Rendering Tests', () => {
  beforeEach(() => {
    cleanup();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders section with "Everything You Need" heading', () => {
    render(<FeaturesBentoSection />);
    const heading = screen.getByTestId('features-heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Everything You Need');
  });

  it('renders features section container', () => {
    render(<FeaturesBentoSection />);
    const section = screen.getByTestId('features-section');
    expect(section).toBeInTheDocument();
  });

  it('renders 6 bento grid items with correct data-testid', () => {
    render(<FeaturesBentoSection />);
    for (let i = 0; i < 6; i++) {
      const item = screen.getByTestId(`bento-item-${i}`);
      expect(item).toBeInTheDocument();
    }
  });

  it('renders "Type-Safe Integration" feature with correct title', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-0');
    expect(within(item).getByText('Type-Safe Integration')).toBeInTheDocument();
  });

  it('renders "MCP Protocol Native" feature with correct title', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-1');
    expect(within(item).getByText('MCP Protocol Native')).toBeInTheDocument();
  });

  it('renders "Lightning Fast" feature with correct title', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-2');
    expect(within(item).getByText('Lightning Fast')).toBeInTheDocument();
  });

  it('renders "Developer Friendly" feature with correct title', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-3');
    expect(within(item).getByText('Developer Friendly')).toBeInTheDocument();
  });

  it('renders "Extensible Architecture" feature with correct title', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-4');
    expect(within(item).getByText('Extensible Architecture')).toBeInTheDocument();
  });

  it('renders "Production Ready" feature with correct title', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-5');
    expect(within(item).getByText('Production Ready')).toBeInTheDocument();
  });

  it('renders description text for Type-Safe Integration', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-0');
    expect(within(item).getByText(/Built with TypeScript/i)).toBeInTheDocument();
  });

  it('renders icons for all features', () => {
    render(<FeaturesBentoSection />);
    for (let i = 0; i < 6; i++) {
      const icon = screen.getByTestId(`bento-icon-${i}`);
      expect(icon).toBeInTheDocument();
    }
  });
});

/**
 * Test Suite: Grid Layout
 *
 * Validates CSS Grid layout classes for asymmetric bento design:
 * - Column spans (1, 2, 3)
 * - Row spans (1, 2)
 * - Spotlight and featured items
 */
describe('B. Grid Layout Tests', () => {
  beforeEach(() => {
    cleanup();
  });

  it('applies grid container classes', () => {
    render(<FeaturesBentoSection />);
    const grid = screen.getByTestId('bento-grid');
    expect(grid).toHaveClass('grid');
  });

  it('spotlight item (index 0) has col-span-2', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-0');
    expect(item).toHaveClass('col-span-2');
  });

  it('spotlight item (index 0) has row-span-2', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-0');
    expect(item).toHaveClass('row-span-2');
  });

  it('tall item (index 1) has col-span-1', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-1');
    expect(item).toHaveClass('col-span-1');
  });

  it('tall item (index 1) has row-span-2', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-1');
    expect(item).toHaveClass('row-span-2');
  });

  it('standard items have col-span-1', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-2');
    expect(item).toHaveClass('col-span-1');
  });

  it('wide item (index 3) has col-span-3', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-3');
    expect(item).toHaveClass('col-span-3');
  });

  it('wide item (index 3) has row-span-1', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-3');
    expect(item).toHaveClass('row-span-1');
  });
});

/**
 * Test Suite: Hover Effects
 *
 * Validates interactive hover states:
 * - Scale transformations
 * - Shadow elevations
 * - Icon rotations
 * - Smooth transitions
 */
describe('C. Hover Effects Tests', () => {
  beforeEach(() => {
    cleanup();
  });

  it('items have hover scale transformation class', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-0');
    expect(item).toHaveClass('hover:scale-105');
  });

  it('items have shadow elevation on hover', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-0');
    expect(item).toHaveClass('hover:shadow-xl');
  });

  it('hover transitions have smooth duration', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-0');
    expect(item).toHaveClass('transition-all', 'duration-300');
  });

  it('icons have hover rotation class', async () => {
    render(<FeaturesBentoSection />);
    const icon = screen.getByTestId('bento-icon-0');
    expect(icon).toHaveClass('transition-transform');
  });

  it('parent hover triggers icon rotation', () => {
    render(<FeaturesBentoSection />);
    const icon = screen.getByTestId('bento-icon-0');
    expect(icon).toHaveClass('group-hover:rotate-5');
  });
});

/**
 * Test Suite: Modal Interactions
 *
 * Validates click-to-expand modal functionality:
 * - Open/close behavior
 * - Content display
 * - Multiple interaction methods (click, ESC, backdrop)
 */
describe('D. Modal Interaction Tests', () => {
  beforeEach(() => {
    cleanup();
  });

  it('modal is not visible initially', () => {
    render(<FeaturesBentoSection />);
    expect(screen.queryByTestId('bento-modal')).not.toBeInTheDocument();
  });

  it('clicking item opens modal', async () => {
    const user = userEvent.setup();
    render(<FeaturesBentoSection />);

    const item = screen.getByTestId('bento-item-0');
    await user.click(item);

    await waitFor(() => {
      expect(screen.getByTestId('bento-modal')).toBeInTheDocument();
    });
  });

  it('modal displays correct feature data', async () => {
    const user = userEvent.setup();
    render(<FeaturesBentoSection />);

    const item = screen.getByTestId('bento-item-0');
    await user.click(item);

    await waitFor(() => {
      const modal = screen.getByTestId('bento-modal');
      expect(within(modal).getByText('Type-Safe Integration')).toBeInTheDocument();
    });
  });

  it('modal has backdrop with correct testid', async () => {
    const user = userEvent.setup();
    render(<FeaturesBentoSection />);

    const item = screen.getByTestId('bento-item-0');
    await user.click(item);

    await waitFor(() => {
      expect(screen.getByTestId('modal-backdrop')).toBeInTheDocument();
    });
  });

  it('clicking backdrop closes modal', async () => {
    const user = userEvent.setup();
    render(<FeaturesBentoSection />);

    const item = screen.getByTestId('bento-item-0');
    await user.click(item);

    await waitFor(() => {
      expect(screen.getByTestId('bento-modal')).toBeInTheDocument();
    });

    const backdrop = screen.getByTestId('modal-backdrop');
    await user.click(backdrop);

    await waitFor(() => {
      expect(screen.queryByTestId('bento-modal')).not.toBeInTheDocument();
    });
  });

  it('clicking close button closes modal', async () => {
    const user = userEvent.setup();
    render(<FeaturesBentoSection />);

    const item = screen.getByTestId('bento-item-0');
    await user.click(item);

    await waitFor(() => {
      expect(screen.getByTestId('bento-modal')).toBeInTheDocument();
    });

    const closeButton = screen.getByTestId('modal-close-button');
    await user.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByTestId('bento-modal')).not.toBeInTheDocument();
    });
  });

  it('ESC key closes modal', async () => {
    const user = userEvent.setup();
    render(<FeaturesBentoSection />);

    const item = screen.getByTestId('bento-item-0');
    await user.click(item);

    await waitFor(() => {
      expect(screen.getByTestId('bento-modal')).toBeInTheDocument();
    });

    await user.keyboard('{Escape}');

    await waitFor(() => {
      expect(screen.queryByTestId('bento-modal')).not.toBeInTheDocument();
    });
  });

  it('multiple clicks open different features', async () => {
    const user = userEvent.setup();
    render(<FeaturesBentoSection />);

    // Open first feature
    const item0 = screen.getByTestId('bento-item-0');
    await user.click(item0);

    await waitFor(() => {
      const modal = screen.getByTestId('bento-modal');
      expect(within(modal).getByText('Type-Safe Integration')).toBeInTheDocument();
    });

    // Close modal
    const closeButton = screen.getByTestId('modal-close-button');
    await user.click(closeButton);

    // Open second feature
    const item1 = screen.getByTestId('bento-item-1');
    await user.click(item1);

    await waitFor(() => {
      const modal = screen.getByTestId('bento-modal');
      expect(within(modal).getByText('MCP Protocol Native')).toBeInTheDocument();
    });
  });
});

/**
 * Test Suite: Animations
 *
 * Validates animation behavior:
 * - Entrance animations
 * - Stagger effects
 * - Scroll-triggered animations
 * - Reduced motion support
 */
describe('E. Animation Tests', () => {
  beforeEach(() => {
    cleanup();
    mockPrefersReducedMotion(false);
  });

  it('items have initial opacity-0 class', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-0');
    expect(item).toHaveClass('opacity-0');
  });

  it('items fade in after mount', async () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-0');

    await waitFor(() => {
      expect(item).toHaveClass('animate-fade-in');
    }, { timeout: 1000 });
  });

  it('IntersectionObserver is created on mount', () => {
    render(<FeaturesBentoSection />);
    expect(mockIntersectionObserver).toHaveBeenCalled();
  });

  it('items have stagger delay classes', () => {
    render(<FeaturesBentoSection />);

    const item0 = screen.getByTestId('bento-item-0');
    const item1 = screen.getByTestId('bento-item-1');
    const item2 = screen.getByTestId('bento-item-2');

    expect(item0).toHaveClass('animation-delay-0');
    expect(item1).toHaveClass('animation-delay-100');
    expect(item2).toHaveClass('animation-delay-200');
  });

  it('icons have pulse animation', () => {
    render(<FeaturesBentoSection />);
    const icon = screen.getByTestId('bento-icon-0');
    expect(icon).toHaveClass('animate-pulse');
  });

  it('respects prefers-reduced-motion preference', () => {
    mockPrefersReducedMotion(true);
    render(<FeaturesBentoSection />);

    const item = screen.getByTestId('bento-item-0');
    expect(item).not.toHaveClass('animate-fade-in');
  });

  it('animation duration is appropriate', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-0');
    expect(item).toHaveClass('duration-500');
  });
});

/**
 * Test Suite: Responsive Design
 *
 * Validates layout behavior across breakpoints:
 * - Mobile (single column)
 * - Tablet (2 columns)
 * - Desktop (3 columns)
 */
describe('F. Responsive Design Tests', () => {
  beforeEach(() => {
    cleanup();
  });

  it('applies mobile grid-cols-1 class', () => {
    render(<FeaturesBentoSection />);
    const grid = screen.getByTestId('bento-grid');
    expect(grid).toHaveClass('grid-cols-1');
  });

  it('applies tablet md:grid-cols-2 class', () => {
    render(<FeaturesBentoSection />);
    const grid = screen.getByTestId('bento-grid');
    expect(grid).toHaveClass('md:grid-cols-2');
  });

  it('applies desktop lg:grid-cols-3 class', () => {
    render(<FeaturesBentoSection />);
    const grid = screen.getByTestId('bento-grid');
    expect(grid).toHaveClass('lg:grid-cols-3');
  });

  it('items adapt layout on mobile', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-0');
    expect(item).toHaveClass('col-span-2', 'md:col-span-2', 'lg:col-span-2');
  });

  it('section has responsive padding', () => {
    render(<FeaturesBentoSection />);
    const section = screen.getByTestId('features-section');
    expect(section).toHaveClass('px-4', 'md:px-6', 'lg:px-8');
  });

  it('heading has responsive text size', () => {
    render(<FeaturesBentoSection />);
    const heading = screen.getByTestId('features-heading');
    expect(heading).toHaveClass('text-3xl', 'md:text-4xl', 'lg:text-5xl');
  });
});

/**
 * Test Suite: Accessibility
 *
 * Validates WCAG compliance:
 * - ARIA attributes
 * - Keyboard navigation
 * - Focus management
 * - Screen reader support
 */
describe('G. Accessibility Tests', () => {
  beforeEach(() => {
    cleanup();
  });

  it('items have appropriate ARIA labels', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-0');
    expect(item).toHaveAttribute('aria-label', 'Type-Safe Integration feature');
  });

  it('items have button role', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-0');
    expect(item).toHaveAttribute('role', 'button');
  });

  it('items are keyboard navigable with Tab', async () => {
    const user = userEvent.setup();
    render(<FeaturesBentoSection />);

    const item0 = screen.getByTestId('bento-item-0');
    const item1 = screen.getByTestId('bento-item-1');

    await user.tab();
    expect(item0).toHaveFocus();

    await user.tab();
    expect(item1).toHaveFocus();
  });

  it('Enter key opens modal when item focused', async () => {
    const user = userEvent.setup();
    render(<FeaturesBentoSection />);

    const item = screen.getByTestId('bento-item-0');
    item.focus();

    await user.keyboard('{Enter}');

    await waitFor(() => {
      expect(screen.getByTestId('bento-modal')).toBeInTheDocument();
    });
  });

  it('modal has role="dialog"', async () => {
    const user = userEvent.setup();
    render(<FeaturesBentoSection />);

    const item = screen.getByTestId('bento-item-0');
    await user.click(item);

    await waitFor(() => {
      const modal = screen.getByTestId('bento-modal');
      expect(modal).toHaveAttribute('role', 'dialog');
    });
  });

  it('modal has aria-modal="true"', async () => {
    const user = userEvent.setup();
    render(<FeaturesBentoSection />);

    const item = screen.getByTestId('bento-item-0');
    await user.click(item);

    await waitFor(() => {
      const modal = screen.getByTestId('bento-modal');
      expect(modal).toHaveAttribute('aria-modal', 'true');
    });
  });

  it('modal has aria-labelledby attribute', async () => {
    const user = userEvent.setup();
    render(<FeaturesBentoSection />);

    const item = screen.getByTestId('bento-item-0');
    await user.click(item);

    await waitFor(() => {
      const modal = screen.getByTestId('bento-modal');
      expect(modal).toHaveAttribute('aria-labelledby');
    });
  });

  it('close button has accessible label', async () => {
    const user = userEvent.setup();
    render(<FeaturesBentoSection />);

    const item = screen.getByTestId('bento-item-0');
    await user.click(item);

    await waitFor(() => {
      const closeButton = screen.getByTestId('modal-close-button');
      expect(closeButton).toHaveAttribute('aria-label', 'Close modal');
    });
  });

  it('items have focus-visible styles', () => {
    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-0');
    expect(item).toHaveClass('focus-visible:ring-2', 'focus-visible:ring-offset-2');
  });
});

/**
 * Test Suite: Theme Support
 *
 * Validates dark mode integration:
 * - Light mode styles
 * - Dark mode styles
 * - Theme transitions
 */
describe('H. Theme Support Tests', () => {
  beforeEach(() => {
    cleanup();
  });

  it('renders in light mode by default', () => {
    const { useTheme } = require('next-themes');
    useTheme.mockReturnValue({ theme: 'light' });

    render(<FeaturesBentoSection />);
    const section = screen.getByTestId('features-section');
    expect(section).toBeInTheDocument();
  });

  it('items have dark mode classes', () => {
    const { useTheme } = require('next-themes');
    useTheme.mockReturnValue({ theme: 'dark' });

    render(<FeaturesBentoSection />);
    const item = screen.getByTestId('bento-item-0');
    expect(item).toHaveClass('dark:bg-zinc-800', 'dark:border-zinc-700');
  });

  it('heading has dark mode text color', () => {
    const { useTheme } = require('next-themes');
    useTheme.mockReturnValue({ theme: 'dark' });

    render(<FeaturesBentoSection />);
    const heading = screen.getByTestId('features-heading');
    expect(heading).toHaveClass('dark:text-white');
  });

  it('modal backdrop has dark mode styles', async () => {
    const user = userEvent.setup();
    const { useTheme } = require('next-themes');
    useTheme.mockReturnValue({ theme: 'dark' });

    render(<FeaturesBentoSection />);

    const item = screen.getByTestId('bento-item-0');
    await user.click(item);

    await waitFor(() => {
      const backdrop = screen.getByTestId('modal-backdrop');
      expect(backdrop).toHaveClass('dark:bg-black/80');
    });
  });

  it('icons have theme-aware colors', () => {
    const { useTheme } = require('next-themes');
    useTheme.mockReturnValue({ theme: 'dark' });

    render(<FeaturesBentoSection />);
    const icon = screen.getByTestId('bento-icon-0');
    expect(icon).toHaveClass('dark:text-blue-400');
  });
});

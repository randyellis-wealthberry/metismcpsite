import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroSection from "~/components/hero-section";

describe("HeroSection", () => {
  beforeEach(() => {
    // Reset any mocks or state before each test
    vi.clearAllMocks();
  });

  describe("Core Content Rendering", () => {
    it("should render without crashing", () => {
      const { container } = render(<HeroSection />);
      expect(container).toBeTruthy();
    });

    it("should display the production-ready badge", () => {
      render(<HeroSection />);
      const badge = screen.getByText("Production-Ready MCP Server");
      expect(badge).toBeInTheDocument();
    });

    it("should display the main headline", () => {
      render(<HeroSection />);
      const headline = screen.getByText(/Supercharge Your AI Applications/i);
      expect(headline).toBeInTheDocument();
      expect(headline).toHaveTextContent("Metis MCP Server");
    });

    it("should display the subheadline with full description", () => {
      render(<HeroSection />);
      const subheadline = screen.getByText(
        /A powerful Model Context Protocol server/i
      );
      expect(subheadline).toBeInTheDocument();
      expect(subheadline).toHaveTextContent(
        "seamlessly integrates with Claude"
      );
    });

    it("should render Get Started CTA button", () => {
      render(<HeroSection />);
      const getStartedButton = screen.getByRole("link", {
        name: /get started/i,
      });
      expect(getStartedButton).toBeInTheDocument();
      expect(getStartedButton).toHaveAttribute("href", "#get-started");
    });

    it("should render View on GitHub CTA button", () => {
      render(<HeroSection />);
      const githubButton = screen.getByRole("link", {
        name: /view on github/i,
      });
      expect(githubButton).toBeInTheDocument();
      expect(githubButton).toHaveAttribute("href", "https://github.com");
      expect(githubButton).toHaveAttribute("target", "_blank");
    });

    it("should display all social proof stats", () => {
      render(<HeroSection />);
      expect(screen.getByText("Open Source")).toBeInTheDocument();
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
      expect(screen.getByText("Production Ready")).toBeInTheDocument();
    });
  });

  describe("Hero Background", () => {
    it("should render hero background element", () => {
      render(<HeroSection />);
      const background = screen.queryByTestId("hero-background");
      expect(background).toBeInTheDocument();
    });

    it("should position background behind content (z-index layering)", () => {
      const { container } = render(<HeroSection />);
      const background = container.querySelector("[data-testid='hero-background']");

      if (background) {
        // Background should be positioned absolutely and behind content
        expect(background).toHaveClass("absolute");
        // Should not block pointer events
        expect(background).toHaveClass("pointer-events-none");
      }
    });

    it("should ensure background does not block user interactions", () => {
      const { container } = render(<HeroSection />);
      const background = container.querySelector("[data-testid='hero-background']");

      if (background) {
        expect(background).toHaveClass("pointer-events-none");
      }
    });
  });

  describe("Accessibility", () => {
    it("should have proper heading hierarchy", () => {
      render(<HeroSection />);
      const headings = screen.getAllByRole("heading");
      expect(headings.length).toBeGreaterThan(0);
      // Main headline should be h1
      const mainHeading = screen.getByText(/Supercharge Your AI Applications/i);
      expect(mainHeading.tagName).toBe("H1");
    });

    it("should have accessible button labels", () => {
      render(<HeroSection />);
      const buttons = screen.getAllByRole("link");
      buttons.forEach((button) => {
        expect(button).toHaveAccessibleName();
      });
    });

    it("should have external links with proper security attributes", () => {
      render(<HeroSection />);
      const githubLink = screen.getByRole("link", { name: /view on github/i });
      expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("should hide background from screen readers", () => {
      const { container } = render(<HeroSection />);
      const background = container.querySelector("[data-testid='hero-background']");

      if (background) {
        expect(background).toHaveAttribute("aria-hidden", "true");
      }
    });
  });

  describe("Visual Structure", () => {
    it("should have proper section structure", () => {
      const { container } = render(<HeroSection />);
      const section = container.querySelector("section");
      expect(section).toBeInTheDocument();
      expect(section).toHaveClass("relative");
    });

    it("should have max-width container and centered content", () => {
      const { container } = render(<HeroSection />);
      // New Tailark structure uses max-w-7xl instead of .container
      const contentContainer = container.querySelector(".max-w-7xl");
      expect(contentContainer).toBeInTheDocument();
    });

    it("should have background and content layers", () => {
      const { container } = render(<HeroSection />);
      const background = container.querySelector("[data-testid='hero-background']");
      const contentContainer = container.querySelector(".max-w-7xl");

      // Should have both background and content
      expect(background).toBeInTheDocument();
      expect(contentContainer).toBeInTheDocument();
    });
  });

  describe("Motion and Animations", () => {
    it("should respect reduced motion preferences", () => {
      // Set prefers-reduced-motion
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: query === "(prefers-reduced-motion: reduce)",
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }));

      render(<HeroSection />);
      // Component should render successfully even with reduced motion
      expect(screen.getByText(/Supercharge Your AI Applications/i)).toBeInTheDocument();
    });
  });

  describe("Content Integrity (Ensure existing copy is preserved)", () => {
    it("should maintain exact badge text", () => {
      render(<HeroSection />);
      expect(
        screen.getByText("Production-Ready MCP Server")
      ).toBeInTheDocument();
    });

    it("should maintain exact headline text", () => {
      render(<HeroSection />);
      expect(
        screen.getByText(/Supercharge Your AI Applications with/i)
      ).toBeInTheDocument();
      expect(screen.getByText("Metis MCP Server")).toBeInTheDocument();
    });

    it("should maintain exact subheadline text", () => {
      render(<HeroSection />);
      const subheadline = screen.getByText(
        /A powerful Model Context Protocol server that seamlessly integrates with Claude and other AI assistants/i
      );
      expect(subheadline).toBeInTheDocument();
    });

    it("should maintain exact CTA button text", () => {
      render(<HeroSection />);
      expect(screen.getByText("Get Started")).toBeInTheDocument();
      expect(screen.getByText("View on GitHub")).toBeInTheDocument();
    });

    it("should maintain exact social proof stats text", () => {
      render(<HeroSection />);
      expect(screen.getByText("Open Source")).toBeInTheDocument();
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
      expect(screen.getByText("Production Ready")).toBeInTheDocument();
    });
  });
});

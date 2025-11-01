import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Polyfill for jsdom
if (typeof global.structuredClone === "undefined") {
  global.structuredClone = (val: any) => JSON.parse(JSON.stringify(val));
}

// Cleanup after each test case (e.g., clearing jsdom)
afterEach(() => {
  cleanup();
});

// Mock Next.js router
vi.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
      back: vi.fn(),
      pathname: "/",
      query: {},
      asPath: "/",
    };
  },
  usePathname() {
    return "/";
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: "div",
    section: "section",
    h1: "h1",
    h2: "h2",
    p: "p",
    button: "button",
    a: "a",
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  useInView: () => true,
  useScroll: () => ({ scrollY: { get: () => 0 } }),
  useTransform: (value: any) => value,
}));

// Mock Tailark components
vi.mock("~/components/header", () => {
  const React = require("react");
  return {
    HeroHeader: () => React.createElement("header", { "data-testid": "hero-header" }, "Header"),
  };
});

vi.mock("~/components/ui/infinite-slider", () => {
  const React = require("react");
  return {
    InfiniteSlider: ({ children }: any) =>
      React.createElement("div", { "data-testid": "infinite-slider" }, children),
  };
});

vi.mock("~/components/ui/progressive-blur", () => {
  const React = require("react");
  return {
    ProgressiveBlur: ({ className }: any) =>
      React.createElement("div", { "data-testid": "progressive-blur", className }),
  };
});

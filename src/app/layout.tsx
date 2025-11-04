import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/components/theme-provider";

export const metadata: Metadata = {
  title: "Metis MCP Server - Powerful Model Context Protocol Integration",
  description:
    "Build powerful AI integrations with Metis MCP Server. Type-safe, production-ready Model Context Protocol server for Claude and other AI assistants. Get started in minutes.",
  keywords: [
    "MCP",
    "Model Context Protocol",
    "Claude",
    "AI integration",
    "TypeScript",
    "AI assistant",
    "Metis",
  ],
  authors: [{ name: "Metis Team" }],
  creator: "Metis",
  publisher: "Metis",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL("https://metis-mcp.dev"), // Update with actual domain
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://metis-mcp.dev",
    title: "Metis MCP Server - Powerful Model Context Protocol Integration",
    description:
      "Build powerful AI integrations with Metis MCP Server. Type-safe, production-ready Model Context Protocol server for Claude and other AI assistants.",
    siteName: "Metis MCP Server",
    images: [
      {
        url: "/og-image.png", // Add an actual OG image later
        width: 1200,
        height: 630,
        alt: "Metis MCP Server",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metis MCP Server - Powerful Model Context Protocol Integration",
    description:
      "Build powerful AI integrations with Metis MCP Server. Type-safe and production-ready.",
    images: ["/og-image.png"], // Add an actual Twitter image later
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} overflow-x-hidden`} suppressHydrationWarning>
      <body className="overflow-x-hidden min-w-0">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

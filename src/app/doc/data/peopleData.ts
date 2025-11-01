interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Lead Developer at TechCorp AI",
    content:
      "Metis MCP Server made integrating with Claude effortless. The type-safe API saved us countless hours of debugging.",
    avatar: "sarah-chen",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO at StartupHub",
    content:
      "The best MCP server implementation I've used. Clean architecture, excellent documentation, and blazing fast performance.",
    avatar: "michael-rodriguez",
  },
  {
    name: "Emily Watson",
    role: "Product Engineer at DataFlow Inc",
    content:
      "We deployed our first AI assistant in under an hour thanks to Metis. The extensible architecture is exactly what we needed.",
    avatar: "emily-watson",
  },
  {
    name: "David Kim",
    role: "Senior Developer at AI Labs",
    content:
      "Production-ready from day one. The error handling and logging capabilities gave us confidence to deploy immediately.",
    avatar: "david-kim",
  },
];

/**
 * Get a list of testimonials
 * @param count - Number of testimonials to return
 * @returns Array of testimonials
 */
export function getTestimonials(count: number): Testimonial[] {
  return testimonialsData.slice(0, count);
}

/**
 * Generate avatar URL using UI Avatars service
 * @param avatar - Avatar identifier (name)
 * @param size - Size of the avatar in pixels
 * @returns Avatar URL
 */
export function getAvatarUrl(avatar: string, size: number): string {
  // Convert avatar identifier to initials for UI Avatars
  const name = avatar
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Use UI Avatars service for consistent avatar generation
  // Format: https://ui-avatars.com/api/?name=Name&size=96&background=random
  const encodedName = encodeURIComponent(name);
  return `https://ui-avatars.com/api/?name=${encodedName}&size=${size}&background=3b82f6&color=fff&bold=true`;
}

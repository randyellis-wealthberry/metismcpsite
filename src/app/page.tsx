import HeroSection from "~/components/hero-section";
import { DottedGlowSection } from "~/app/_components/dotted-glow-section";
import { FeaturesSection } from "~/app/_components/features-section";
import { CodeDemoSection } from "~/app/_components/code-demo-section";
import { HowItWorksSection } from "~/app/_components/how-it-works-section";
import { PricingSection } from "~/app/_components/pricing-section";
import { TestimonialsSection } from "~/app/_components/testimonials-section";
import { FinalCTASection } from "~/app/_components/final-cta-section";
import { FAQSection } from "~/app/_components/faq-section";
import { Footer } from "~/app/_components/footer";

export default function Home() {
  return (
    <>
      {/* HeroSection includes HeroHeader (navbar) and hero content with logo slider */}
      <HeroSection />

      {/* Dotted Glow Background Section */}
      <DottedGlowSection />

      <main className="min-h-screen smooth-scroll">
        <FeaturesSection />
        <CodeDemoSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <FinalCTASection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}

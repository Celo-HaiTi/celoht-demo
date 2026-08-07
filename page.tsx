import { Hero } from "@/components/marketing/hero";
import { LiveStats } from "@/components/marketing/live-stats";
import { RoadmapSection } from "@/components/marketing/roadmap-section";
import { EcosystemSection } from "@/components/marketing/ecosystem-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <LiveStats />
      <RoadmapSection />
      <EcosystemSection />
      <TestimonialsSection />
    </main>
  );
}

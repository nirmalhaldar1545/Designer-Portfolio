import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { SimpleEtherealDemo } from "@/components/ui/simple-ethereal-demo";

export default function Home() {
  return (
    <main className="min-h-screen w-full smooth-scroll mobile-text-optimized">
      {/* Hero Section with geometric shapes and animations - Enhanced with Ethereal Shadows */}
      <HeroGeometric
        title1 = "Crafting Exceptional"
        title2 = "Digital Experiences"
      />

      {/* Simple Demo Section - Ethereal Shadows showcase */}
      <SimpleEtherealDemo />

      {/* Content sections removed */}
    </main>
  );
}

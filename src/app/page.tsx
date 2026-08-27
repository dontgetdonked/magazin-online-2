import { Hero } from "@/components/sections/hero";
import { BrandMarquee } from "@/components/sections/brand-marquee";
import { CategoriesSection } from "@/components/sections/categories-section";
import { FeaturedSection } from "@/components/sections/featured-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <CategoriesSection />
      <FeaturedSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}

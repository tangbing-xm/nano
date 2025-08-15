import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { GeneratorSection } from "@/components/generator-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { ReviewsSection } from "@/components/reviews-section"
import { FAQSection } from "@/components/faq-section"
import { GridBackground } from "@/components/grid-background"
import { FadeInSection } from "@/components/fade-in-section"

export default function Home() {
  return (
    <GridBackground>
      <main className="text-foreground">
        <FadeInSection delay={200} direction="down">
          <HeroSection />
        </FadeInSection>
        
        <FadeInSection delay={100} direction="up">
          <GeneratorSection />
        </FadeInSection>
        
        <FadeInSection delay={150} direction="up">
          <FeaturesSection />
        </FadeInSection>
        
        <FadeInSection delay={200} direction="up">
          <ShowcaseSection />
        </FadeInSection>
        
        <FadeInSection delay={250} direction="up">
          <ReviewsSection />
        </FadeInSection>
        
        <FadeInSection delay={300} direction="up">
          <FAQSection />
        </FadeInSection>
      </main>
    </GridBackground>
  )
}

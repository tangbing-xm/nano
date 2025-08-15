import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Zap, Users, MessageCircle } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-max">
        {/* Announcement Banner */}
        <div className="text-center mb-8">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-6 py-3 text-sm">
            🍌 The AI model that outperforms Flux Kontext
            <Link href="#generator" className="ml-2 text-primary hover:text-primary/80 transition-colors">
              Try Now
              <ArrowRight className="w-4 h-4 ml-1 inline" />
            </Link>
          </Badge>
        </div>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-firecrawl-gradient leading-tight">
            Nano Banana
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform any image with simple text prompts. Nano-banana&apos;s advanced model delivers consistent character editing and scene preservation that surpasses Flux Kontext. Experience the future of AI image editing.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="text-lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Start Editing
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              View Examples
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center space-x-3 text-muted-foreground">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <span className="text-base">One-shot editing</span>
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-base">Multi-image support</span>
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <span className="text-base">Natural language</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
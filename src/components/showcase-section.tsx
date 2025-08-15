import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ShowcaseSection() {
  const showcaseItems = [
    {
      title: "Ultra-Fast Mountain Generation",
      description: "Created in 0.8 seconds with Nano Banana's optimized neural engine",
      image: "/api/placeholder/400/300",
      alt: "AI Generated Mountain"
    },
    {
      title: "Instant Garden Creation",
      description: "Complex scene rendered in milliseconds using Nano Banana technology",
      image: "/api/placeholder/400/300",
      alt: "AI Generated Garden"
    },
    {
      title: "Real-time Beach Synthesis",
      description: "Nano Banana delivers photorealistic results at lightning speed",
      image: "/api/placeholder/400/300",
      alt: "AI Generated Beach"
    },
    {
      title: "Rapid Aurora Generation",
      description: "Advanced effects processed instantly with Nano Banana AI",
      image: "/api/placeholder/400/300",
      alt: "AI Generated Aurora"
    }
  ]

  return (
    <section id="showcase" className="py-20 bg-muted/50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Showcase</h2>
          <p className="text-xl text-secondary mb-2">Lightning-Fast AI Creations</p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            See what Nano Banana generates in milliseconds
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {showcaseItems.map((item, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden hover:border-muted-foreground transition-colors">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Placeholder for image */}
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <div className="text-center">
                                              <div className="w-16 h-16 bg-firecrawl-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <p className="text-muted-foreground text-sm">{item.alt}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black border-0">
                      <Zap className="w-3 h-3 mr-1" />
                      Nano Banana Speed
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">Experience the power of Nano Banana yourself</p>
          <Link href="#generator">
            <Button className="bg-primary hover:bg-primary/90">
              <Zap className="w-4 h-4 mr-2" />
              Try Nano Banana Generator
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 
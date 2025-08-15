import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function ReviewsSection() {
  const reviews = [
    {
      name: "AIArtistPro",
      role: "Digital Creator",
      content: "This editor completely changed my workflow. The character consistency is incredible - miles ahead of Flux Kontext!",
      avatar: "AA"
    },
    {
      name: "ContentCreator",
      role: "UGC Specialist", 
      content: "Creating consistent AI influencers has never been easier. It maintains perfect face details across edits!",
      avatar: "CC"
    },
    {
      name: "PhotoEditor",
      role: "Professional Editor",
      content: "One-shot editing is basically solved with this tool. The scene blending is so natural and realistic!",
      avatar: "PE"
    }
  ]

  return (
    <section className="py-20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">User Reviews</h2>
          <p className="text-xl text-muted-foreground">What creators are saying</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card/50 border-border hover:border-muted-foreground transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-firecrawl-gradient rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>
                
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-muted-foreground mb-2" />
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{review.content}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 
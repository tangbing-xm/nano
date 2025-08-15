import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Users, Layers, Zap, Image as ImageIcon, Camera } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: MessageCircle,
      title: "Natural Language Editing",
      description: "Edit images using simple text prompts. Nano-banana AI understands complex instructions like GPT for images",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Character Consistency",
      description: "Maintain perfect character details across edits. This model excels at preserving faces and identities",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Layers,
      title: "Scene Preservation",
      description: "Seamlessly blend edits with original backgrounds. Superior scene fusion compared to Flux Kontext",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "One-Shot Editing",
      description: "Perfect results in a single attempt. Nano-banana solves one-shot image editing challenges effortlessly",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: ImageIcon,
      title: "Multi-Image Context",
      description: "Process multiple images simultaneously. Support for advanced multi-image editing workflows",
      gradient: "from-red-500 to-rose-500"
    },
    {
      icon: Camera,
      title: "AI UGC Creation",
      description: "Create consistent AI influencers and UGC content. Perfect for social media and marketing campaigns",
      gradient: "from-indigo-500 to-blue-500"
    }
  ]

  return (
    <section id="features" className="py-20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Features</h2>
          <p className="text-xl text-secondary mb-2">Why Choose Nano Banana?</p>
                      <p className="text-muted-foreground max-w-3xl mx-auto">
            Nano-banana is the most advanced AI image editor on LMArena. Revolutionize your photo editing with natural language understanding
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 border-border hover:border-muted-foreground transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center`}>
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 
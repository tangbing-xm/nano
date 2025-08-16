import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export interface PricingTier {
  id: string
  name: string
  price: number
  currency: string
  period: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaText: string
}

interface PricingCardProps {
  tier: PricingTier
  className?: string
  onSelect?: (tierId: string) => void
  isLoading?: boolean
}

export function PricingCard({ tier, className, onSelect, isLoading = false }: PricingCardProps) {
  const handleSelect = () => {
    onSelect?.(tier.id)
  }

  return (
    <Card 
      className={cn(
        "relative transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group cursor-pointer",
        "border-2 hover:border-primary/30",
        tier.highlighted && "border-primary/50 shadow-lg shadow-primary/10 ring-1 ring-primary/20 bg-gradient-to-br from-card to-card/80",
        className
      )}
      onClick={handleSelect}
    >
      {/* Popular Badge */}
      {tier.highlighted && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-primary text-primary-foreground px-4 py-1 shadow-lg">
            <Star className="w-3 h-3 mr-1 fill-current" />
            Most Popular
          </Badge>
        </div>
      )}

      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl md:text-2xl font-bold">{tier.name}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm md:text-base">
          {tier.description}
        </CardDescription>
        
        {/* Price Display */}
        <div className="mt-4">
          <div className="flex items-baseline justify-center">
            <span className="text-sm text-muted-foreground mr-1">$</span>
            <span className={cn(
              "font-bold transition-colors duration-200",
              "text-4xl sm:text-5xl",
              tier.highlighted 
                ? "text-primary group-hover:text-primary/90" 
                : "text-foreground group-hover:text-primary"
            )}>
              {tier.price}
            </span>
            <span className="text-muted-foreground ml-1 text-sm sm:text-base">
              /{tier.period}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Features List */}
        <div className="space-y-3">
          {tier.features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3 group-hover:translate-x-1 transition-transform duration-200" style={{ transitionDelay: `${index * 50}ms` }}>
              <div className={cn(
                "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-all duration-200 shadow-sm",
                tier.highlighted 
                  ? "bg-primary/20 group-hover:bg-primary/30 group-hover:shadow-primary/20" 
                  : "bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-primary/10"
              )}>
                <Check className="w-3 h-3 text-primary font-bold" />
              </div>
              <span className="text-sm md:text-base text-foreground leading-relaxed font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button 
          className={cn(
            "w-full mt-6 group-hover:shadow-lg transition-all duration-200",
            tier.highlighted 
              ? "bg-primary hover:bg-primary/90 text-primary-foreground group-hover:scale-[1.02]" 
              : "group-hover:border-primary/50 group-hover:text-primary"
          )}
          variant={tier.highlighted ? "default" : "outline"}
          disabled={isLoading}
          onClick={(e) => {
            e.stopPropagation()
            handleSelect()
          }}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            tier.ctaText
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
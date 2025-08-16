"use client"

import { useState } from "react"
import { PricingCard, type PricingTier } from "@/components/ui/pricing-card"

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'prod_basic_plan_nano_banana', // Replace with your actual Creem product ID
    name: 'Basic Plan',
    price: 9.9,
    currency: 'USD',
    period: 'month',
    description: 'Perfect for individuals and small projects',
    features: [
      '100 image generations per month',
      'Text-to-image functionality',
      'Basic image editing',
      'Standard resolution output',
      'Email support'
    ],
    ctaText: 'Upgrade to Basic',
    highlighted: false
  },
  {
    id: 'prod_pro_plan_nano_banana', // Replace with your actual Creem product ID
    name: 'Pro Plan',
    price: 19.9,
    currency: 'USD',
    period: 'month',
    description: 'Ideal for professionals and teams',
    features: [
      '500 image generations per month',
      'Text-to-image functionality',
      'Advanced image editing',
      'High resolution output',
      'Image-to-image conversion',
      'Batch processing',
      'Priority support',
      'API access'
    ],
    ctaText: 'Upgrade to Pro',
    highlighted: true
  }
]

interface PricingSectionProps {
  className?: string
}

export function PricingSection({ className }: PricingSectionProps) {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null)

  const handlePlanSelect = async (tierId: string) => {
    setLoadingPlan(tierId)
    const selectedTier = PRICING_TIERS.find(tier => tier.id === tierId)
    if (!selectedTier) return

    try {
      // Create checkout session
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId: selectedTier.id,
          planName: selectedTier.name,
          price: selectedTier.price
        })
      })

      const data = await response.json()

      if (data.success && data.checkout_url) {
        // Redirect to Creem checkout page
        window.location.href = data.checkout_url
      } else {
        console.error('Failed to create checkout session:', data.error)
        alert('Failed to start checkout process. Please try again.')
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setLoadingPlan(null)
    }
  }

  return (
    <section id="pricing" className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 ${className || ''}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            Choose the perfect plan for your AI image generation needs.
            Start with our Basic plan or unlock advanced features with Pro.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <div
              key={tier.id}
              className="animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'both'
              }}
            >
              <PricingCard
                tier={tier}
                onSelect={handlePlanSelect}
                isLoading={loadingPlan === tier.id}
                className="h-full"
              />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 md:mt-12 px-4">
          <p className="text-sm md:text-base text-muted-foreground">
            All plans include a 7-day free trial. No credit card required to start.
          </p>
        </div>
      </div>
    </section>
  )
}
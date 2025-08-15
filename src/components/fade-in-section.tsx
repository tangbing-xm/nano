"use client"

import { useEffect, useRef, useState } from "react"

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function FadeInSection({ 
  children, 
  className = "", 
  delay = 0,
  duration = 600,
  direction = "up"
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true)
            setHasAnimated(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px"
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay, hasAnimated])

  const getTransformStyle = () => {
    if (isVisible) return "translate3d(0, 0, 0)"
    
    switch (direction) {
      case "up":
        return "translate3d(0, 40px, 0)"
      case "down":
        return "translate3d(0, -40px, 0)"
      case "left":
        return "translate3d(40px, 0, 0)"
      case "right":
        return "translate3d(-40px, 0, 0)"
      default:
        return "translate3d(0, 0, 0)"
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransformStyle(),
        transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        willChange: "opacity, transform"
      }}
    >
      {children}
    </div>
  )
} 
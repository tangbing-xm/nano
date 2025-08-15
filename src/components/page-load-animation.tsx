"use client"

import { useEffect, useState } from "react"

interface PageLoadAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function PageLoadAnimation({ 
  children, 
  className = "",
  delay = 0
}: PageLoadAnimationProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={className}
      style={{
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "translateY(0)" : "translateY(-20px)",
        transition: "all 800ms cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "opacity, transform"
      }}
    >
      {children}
    </div>
  )
} 
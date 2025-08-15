"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Sparkles } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { PageLoadAnimation } from "@/components/page-load-animation"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <PageLoadAnimation delay={100}>
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-firecrawl-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🍌</span>
            </div>
            <span className="font-bold text-xl">Nano Banana</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#showcase" className="text-muted-foreground hover:text-foreground transition-colors">
              Showcase
            </Link>
            <Link href="#generator" className="text-muted-foreground hover:text-foreground transition-colors">
              Try Generator
            </Link>
            <Link href="/generator" className="text-muted-foreground hover:text-foreground transition-colors">
              Full Generator
            </Link>
            <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-primary hover:bg-primary/90">
              <Sparkles className="w-4 h-4 mr-2" />
              Launch Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#showcase" className="text-muted-foreground hover:text-foreground transition-colors">
                Showcase
              </Link>
              <Link href="#generator" className="text-muted-foreground hover:text-foreground transition-colors">
                Try Generator
              </Link>
              <Link href="/generator" className="text-muted-foreground hover:text-foreground transition-colors">
                Full Generator
              </Link>
              <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
              <Button className="bg-primary hover:bg-primary/90 w-full mt-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Launch Now
              </Button>
            </div>
          </div>
        )}
        </div>
      </nav>
    </PageLoadAnimation>
  )
} 
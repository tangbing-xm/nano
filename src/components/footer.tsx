import Link from "next/link"
import { Twitter, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>

          {/* Company Info */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded flex items-center justify-center">
                <span className="text-black text-xs">🍌</span>
              </div>
              <span className="text-sm text-muted-foreground">
                © 2025 Nano-banana - Advanced AI Image Editing Technology.
              </span>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <div>BRAIN AI LIMITED</div>
              <div>Registered Address: RM 509, 5/F THE CLOUD 111</div>
              <div>TUNG CHAU ST TAI KOK TSUI</div>
              <div>HONG KONG</div>
              <div className="pt-2">
                <div>Phone: +86 19840820296</div>
                <div>Email: support@nanobanana.ai</div>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex justify-center md:justify-end space-x-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 
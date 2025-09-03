import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scale } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Scale className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">XDARKLEGAL</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#servicios" className="text-sm font-medium hover:text-primary transition-colors">
            Servicios
          </Link>
          <Link href="#nosotros" className="text-sm font-medium hover:text-primary transition-colors">
            Nosotros
          </Link>
          <Link href="#precios" className="text-sm font-medium hover:text-primary transition-colors">
            Precios
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </Link>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="mailto:xdark170@gmail.com">Contactar</a>
          </Button>
        </nav>
      </div>
    </header>
  )
}

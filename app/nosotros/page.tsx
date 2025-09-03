import { Scale, Mail, Phone, MapPin, User, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">XDARKLEGAL</span>
          </Link>
          <Button asChild variant="outline">
            <Link href="/">Volver al Inicio</Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Sobre Nosotros</h1>
            <p className="text-xl text-muted-foreground">Conoce al equipo profesional detrás de XDARKLEGAL</p>
          </div>

          {/* Team Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-semibold">Dr. Carlos Mendoza</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href="mailto:xdark170@gmail.com" className="text-primary hover:underline">
                      xdark170@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>+34 900 123 456</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span>Socio Fundador - Especialista en Derecho Civil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>15+ años de experiencia</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-semibold">Dra. Ana García</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href="mailto:xdark170@gmail.com" className="text-primary hover:underline">
                      xdark170@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>+34 900 654 321</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span>Socia - Especialista en Derecho Mercantil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>12+ años de experiencia</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Office Information */}
          <Card className="p-6 mb-8">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Nuestra Oficina
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold">Dirección</h3>
                  <p className="text-muted-foreground">
                    Calle Principal 123
                    <br />
                    28001 Madrid, España
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Horarios de Atención</h3>
                  <p className="text-muted-foreground">
                    Lunes a Viernes: 9:00 - 18:00
                    <br />
                    Sábados: 9:00 - 14:00
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">¿Necesitas Asesoría Legal?</h2>
            <p className="text-muted-foreground mb-6">Contáctanos para una consulta gratuita y personalizada</p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="mailto:xdark170@gmail.com">Contactar Ahora</a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

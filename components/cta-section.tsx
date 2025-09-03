import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-balance">¿Necesitas Asesoría Legal Inmediata?</h2>
        <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
          No dejes que los problemas legales se compliquen. Contacta con nuestros expertos y obtén la tranquilidad que
          mereces.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="mailto:contacto@xdarklegal.com" className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Enviar Email
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            <a href="tel:+34900000000" className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Llamar Ahora
            </a>
          </Button>
        </div>

        <p className="text-sm text-primary-foreground/70 mt-4">Consulta gratuita • Respuesta en 24h • Sin compromiso</p>
      </div>
    </section>
  )
}

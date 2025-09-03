import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
              Asesoría Legal Profesional y Confiable
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Protegemos tus intereses con experiencia jurídica especializada y atención personalizada.
            </p>
            <div className="space-y-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="mailto:contacto@xdarklegal.com" className="inline-flex items-center gap-2">
                  Consulta Gratuita
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Respuesta garantizada en menos de 24 horas. Sin compromiso inicial.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/simple-line-drawing-of-a-lawyer-helping-multiple-c.jpg"
              alt="Abogado ayudando a múltiples clientes con documentos legales"
              className="max-w-full h-auto"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import { Shield, Clock, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Shield,
    title: "Protección Legal Completa",
    description:
      "Defendemos tus derechos con estrategias jurídicas sólidas y experiencia comprobada en múltiples áreas del derecho.",
  },
  {
    icon: Clock,
    title: "Respuesta Inmediata",
    description:
      "Atención urgente 24/7 para casos críticos. Tu tranquilidad no puede esperar cuando se trata de asuntos legales.",
  },
  {
    icon: Users,
    title: "Equipo Especializado",
    description:
      "Abogados expertos en derecho civil, mercantil, laboral y penal. Cada caso recibe la atención de un especialista.",
  },
]

export function Benefits() {
  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">¿Por qué elegir XDARKLEGAL?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Más de 15 años de experiencia respaldando a empresas y particulares en sus desafíos legales más complejos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <benefit.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

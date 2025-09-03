import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto cuesta una consulta inicial?",
    answer:
      "La primera consulta es completamente gratuita. Durante esta sesión evaluamos tu caso y te proporcionamos una estrategia inicial sin ningún compromiso económico.",
  },
  {
    question: "¿En qué áreas del derecho se especializan?",
    answer:
      "Nos especializamos en derecho civil, mercantil, laboral, penal y administrativo. Nuestro equipo cuenta con abogados expertos en cada una de estas ramas del derecho.",
  },
  {
    question: "¿Cuánto tiempo toma resolver un caso legal?",
    answer:
      "El tiempo varía según la complejidad del caso. Los asuntos simples pueden resolverse en semanas, mientras que casos complejos pueden tomar meses. Te mantendremos informado en cada etapa del proceso.",
  },
  {
    question: "¿Ofrecen servicios de asesoría preventiva?",
    answer:
      "Sí, ofrecemos servicios de asesoría preventiva para empresas y particulares. Esto incluye revisión de contratos, compliance legal y estrategias para evitar futuros conflictos legales.",
  },
  {
    question: "¿Cómo puedo contactar en caso de emergencia legal?",
    answer:
      "Contamos con un servicio de atención de emergencias 24/7. Puedes contactarnos por teléfono o email y recibirás respuesta inmediata para casos urgentes.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-muted-foreground">Resolvemos las dudas más comunes sobre nuestros servicios legales</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

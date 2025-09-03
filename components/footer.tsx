import Link from "next/link"
import { Scale, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="h-6 w-6" />
              <span className="text-lg font-bold">XDARKLEGAL</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Consultoría legal profesional con más de 15 años de experiencia defendiendo tus derechos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Derecho Civil
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Derecho Mercantil
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Derecho Laboral
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Derecho Penal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Nuestro Equipo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Blog Legal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contacto@xdarklegal.com" className="hover:text-accent transition-colors">
                  contacto@xdarklegal.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+34900000000" className="hover:text-accent transition-colors">
                  +34 900 000 000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  Calle Principal 123
                  <br />
                  28001 Madrid, España
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; 2024 XDARKLEGAL. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6 mt-2">
            <Link href="#" className="hover:text-accent transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Términos de Servicio
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

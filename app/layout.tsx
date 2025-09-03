import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "XDARKLEGAL - Consultoría Legal Profesional | Abogados Expertos",
  description:
    "Servicios de consultoría legal profesional con abogados expertos. Asesoramiento jurídico especializado para empresas y particulares. Contacta ahora.",
  keywords:
    "abogados, consultoría legal, asesoramiento jurídico, servicios legales, derecho empresarial, derecho civil",
  authors: [{ name: "XDARKLEGAL" }],
  creator: "XDARKLEGAL",
  publisher: "XDARKLEGAL",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://xdarklegal.com",
    siteName: "XDARKLEGAL",
    title: "XDARKLEGAL - Consultoría Legal Profesional",
    description: "Servicios de consultoría legal profesional con abogados expertos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "XDARKLEGAL - Consultoría Legal Profesional",
    description: "Servicios de consultoría legal profesional con abogados expertos.",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

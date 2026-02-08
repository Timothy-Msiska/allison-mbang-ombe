import React from "react"
import type { Metadata } from "next"
import { Montserrat, Playfair_Display } from "next/font/google"

import "./globals.css"

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Allison Thoko Mbangombe, SC | Senior Counsel',
  description: 'Senior Counsel & Legal Specialist with 30+ years of experience in public law, PPPs, project finance, and legislative drafting.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}

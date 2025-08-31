import { Orbitron, Roboto_Mono } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto-mono",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${robotoMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {
            ('@context": "https://schema.org',
            '@type": "SoftwareApplication',
            'name": "DeagleLabs',
            'applicationCategory": "LegalSoftware',
            'operatingSystem": "All',
            'description": "DeagleLabs offers a secure, offline AI solution for legal professionals, enhancing case research and strategy with cutting-edge technology.')
          }
        </script>
      </head>
      <body>
        {children}
        <script src="https://unpkg.com/htmx.org@1.9.6"></script>
      </body>
    </html>
  )
}

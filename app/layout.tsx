import { Orbitron, Roboto_Mono } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
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
  title: "DEAGLE AI | by DEAGLE LABS",
  description: "Secure, offline AI solution for legal professionals",
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
        {/* <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> */}
        {/* <link rel="alternate icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/favicon.ico"/>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "DEAGLE AI",
            "applicationCategory": "LegalSoftware",
            "operatingSystem": "All",
            "description": "DEAGLE AI by DEAGLE LABS offers a secure, offline AI solution for legal professionals, enhancing case research and strategy with cutting-edge technology."
          })}
        </script>
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script src="https://unpkg.com/htmx.org@1.9.6" strategy="lazyOnload" />
      </body>
    </html>
  )
}

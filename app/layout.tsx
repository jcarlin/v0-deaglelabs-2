import { Orbitron, Roboto_Mono } from "next/font/google"
import localFont from "next/font/local"
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

// Load SF Mono as a local font
const sfMono = localFont({
  src: [
    {
      path: "../public/fonts/SFMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sf-mono",
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
    <html lang="en" className={`${orbitron.variable} ${robotoMono.variable} ${sfMono.variable}`}>
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
        <style>
          {`
            @font-face {
              font-family: 'SF Mono';
              src: url('/fonts/SFMono-Regular.woff2') format('woff2');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
          `}
        </style>
      </head>
      <body>
        {children}
        <script src="https://unpkg.com/htmx.org@1.9.6"></script>
      </body>
    </html>
  )
}

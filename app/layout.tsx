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
  title: "DEAGLE AI | Offline Legal Document Intelligence Platform",
  description: "Enterprise-grade offline AI for legal document analysis. Process contracts, briefs & case files locally with complete data sovereignty. No cloud required.",
  generator: "Next.js",
  applicationName: "DEAGLE AI",
  referrer: "origin-when-cross-origin",
  keywords: ["legal AI", "document intelligence", "offline AI", "legal tech", "contract analysis", "law firm software"],
  authors: [{ name: "DEAGLE LABS" }],
  creator: "DEAGLE LABS",
  publisher: "DEAGLE LABS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
        <meta name="google-site-verification" content="WXMltUMqMyoU99yCkjTvcpAP0sO5DVhQHg-km8DlpPM" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2"/>
        <link rel="shortcut icon" href="/favicon.ico?v=2"/>
        <link rel="apple-touch-icon" href="/favicon.ico?v=2"/>
        <link rel="manifest" href="/manifest.json" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "DEAGLE AI",
            "applicationCategory": "LegalSoftware",
            "applicationSubCategory": "Document Intelligence",
            "operatingSystem": "Windows, macOS, Linux",
            "description": "DEAGLE AI is an enterprise-grade offline legal document intelligence platform that processes contracts, briefs, and case files locally with military-grade security and complete data sovereignty.",
            "url": "https://deaglelabs.ai",
            "author": {
              "@type": "Organization",
              "name": "DEAGLE LABS",
              "url": "https://deaglelabs.ai"
            },
            "offers": {
              "@type": "Offer",
              "category": "Enterprise Software",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            },
            "featureList": [
              "Offline document processing",
              "AI-powered contract analysis",
              "Legal brief summarization",
              "Case law research",
              "Document classification",
              "Data sovereignty compliance",
              "Military-grade encryption",
              "On-premise deployment",
              "GDPR compliance",
              "Zero cloud dependency"
            ],
            "screenshot": "https://deaglelabs.ai/images/platform-screenshot.png",
            "softwareVersion": "2.0",
            "releaseNotes": "https://deaglelabs.ai/releases",
            "keywords": "legal AI, document intelligence, offline AI platform, contract analysis, legal research automation"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DEAGLE LABS",
            "legalName": "DEAGLE LABS Inc.",
            "url": "https://deaglelabs.ai",
            "logo": "https://deaglelabs.ai/logo.png",
            "description": "DEAGLE LABS develops cutting-edge AI solutions for the legal industry with a focus on data privacy and offline capabilities.",
            "sameAs": [
              "https://www.linkedin.com/company/deaglelabs",
              "https://twitter.com/deaglelabs",
              "https://github.com/deaglelabs"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Sales",
              "email": "sales@deaglelabs.ai",
              "availableLanguage": ["English"]
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is DEAGLE AI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "DEAGLE AI is an offline-capable legal document intelligence platform that allows law firms to process sensitive documents using AI without any cloud dependency, ensuring complete data sovereignty."
                }
              },
              {
                "@type": "Question",
                "name": "How does offline AI processing work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "DEAGLE AI can be deployed entirely on-premise or on local machines, processing all documents locally without sending any data to external servers, ensuring maximum security and compliance."
                }
              },
              {
                "@type": "Question",
                "name": "Is DEAGLE AI GDPR compliant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, DEAGLE AI is fully GDPR compliant. Since all processing happens locally without cloud transmission, you maintain complete control over your data."
                }
              }
            ]
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

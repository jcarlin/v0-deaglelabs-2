import LoadingScreen from "@/components/loading-screen"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DEAGLE AI | Offline Legal Document Intelligence Platform - Secure AI for Law Firms",
  description:
    "Transform legal research with DEAGLE AI's offline-capable document intelligence platform. Process contracts, briefs, and case files locally with military-grade security. No cloud dependency, complete data sovereignty for law firms and legal departments.",
  keywords: "offline legal AI, legal document intelligence, secure legal AI platform, law firm AI software, legal document analysis, contract intelligence AI, case law research AI, legal brief analyzer, offline document processing, legal tech AI, law practice management AI, legal research automation, AI contract review, legal document automation, privacy-focused legal AI, on-premise legal AI, legal analytics platform, AI for lawyers, legal workflow automation, document discovery AI, legal compliance AI, contract analysis software, legal AI no cloud, secure document intelligence, GDPR compliant legal AI, legal NLP platform, AI litigation support, legal document classification, intelligent contract management, legal knowledge management",
  metadataBase: new URL("https://deaglelabs.ai"),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "DEAGLE LABS", url: "https://deaglelabs.ai" }],
  creator: "DEAGLE LABS",
  publisher: "DEAGLE LABS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Legal Technology",
  classification: "Legal AI Software",
  openGraph: {
    title: "DEAGLE AI - Offline Legal Document Intelligence | Secure AI for Law Firms",
    description:
      "Revolutionary offline-capable AI platform for legal professionals. Process sensitive documents locally, maintain complete data sovereignty, and accelerate legal research without cloud dependencies. Enterprise-grade security meets cutting-edge AI.",
    type: "website",
    url: "https://deaglelabs.ai",
    siteName: "DEAGLE AI",
    locale: "en_US",
    images: [
      {
        url: "https://deaglelabs.ai/images/deagle-ai-og.png",
        width: 1200,
        height: 630,
        alt: "DEAGLE AI - Secure Offline Legal Intelligence Platform",
        type: "image/png",
      },
      {
        url: "https://deaglelabs.ai/images/deagle-ai-twitter.png",
        width: 1200,
        height: 600,
        alt: "DEAGLE AI Platform Preview",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@deaglelabs",
    creator: "@deaglelabs",
    title: "DEAGLE AI - Offline Legal Document Intelligence Platform",
    description:
      "Process legal documents with AI that never leaves your premises. Complete data sovereignty, military-grade security, and zero cloud dependency for modern law firms.",
    images: ["https://deaglelabs.ai/images/deagle-ai-twitter.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "WXMltUMqMyoU99yCkjTvcpAP0sO5DVhQHg-km8DlpPM",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <LoadingScreen />
    </main>
  )
}

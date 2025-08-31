import LoadingScreen from "@/components/loading-screen"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DeagleLabs | Offline Legal AI Platform",
  description:
    "DeagleLabs offers a secure, offline AI solution for legal professionals, enhancing case research and strategy with cutting-edge technology.",
  keywords: "offline legal AI, case research automation, decentralized legal intelligence, legal tech solutions",
  openGraph: {
    title: "DeagleLabs | Offline Legal AI Platform",
    description:
      "Secure, offline AI solutions for legal professionals. Enhance your case research and strategy with DeagleLabs.",
    type: "website",
    url: "https://deaglelabs.ai",
    images: [
      {
        url: "/images/deaglelabs-og.png",
        width: 1200,
        height: 630,
        alt: "DeagleLabs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeagleLabs | Offline Legal AI Platform",
    description:
      "Secure, offline AI solutions for legal professionals. Enhance your case research and strategy with DeagleLabs.",
    images: ["/images/deaglelabs-og.png"],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <LoadingScreen />
    </main>
  )
}

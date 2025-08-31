import LoadingScreen from "@/components/loading-screen"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DEAGLE AI | Offline Legal AI Platform by DEAGLE LABS",
  description:
    "DEAGLE AI by DEAGLE LABS offers a secure, offline AI solution for legal professionals, enhancing case research and strategy with cutting-edge technology.",
  keywords: "offline legal AI, case research automation, decentralized legal intelligence, legal tech solutions",
  openGraph: {
    title: "DEAGLE AI | Offline Legal AI Platform by DEAGLE LABS",
    description:
      "Secure, offline AI solutions for legal professionals. Enhance your case research and strategy with DEAGLE AI by DEAGLE LABS.",
    type: "website",
    url: "https://deaglelabs.ai",
    images: [
      {
        url: "/images/deaglelabs-og.png",
        width: 1200,
        height: 630,
        alt: "DEAGLE AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEAGLE AI | Offline Legal AI Platform by DEAGLE LABS",
    description:
      "Secure, offline AI solutions for legal professionals. Enhance your case research and strategy with DEAGLE AI by DEAGLE LABS.",
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

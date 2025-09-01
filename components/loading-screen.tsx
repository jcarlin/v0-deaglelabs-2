"use client"

import { useEffect, useState } from "react"
import { DeagleLabsLogo } from "./deaglelabs-logo"

const messages = [
  "DEAGLE AI System Boot Initiated...",
  "Verifying offline security protocols...",
  "Engaging document intelligence modules...",
  "Initializing DEAGLE AI Core...",
  "Case strategy systems: Operational",
  "System status: Loading",
]

export default function LoadingScreen() {
  const [displayedTextIndex, setDisplayedTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [loadingDots, setLoadingDots] = useState("")

  useEffect(() => {
    // Handle typewriter effect for current message
    if (displayedTextIndex < messages.length) {
      const currentMessage = messages[displayedTextIndex]

      if (currentText.length < currentMessage.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentMessage.substring(0, currentText.length + 1))
        }, 25) // Speed of typing (doubled speed)

        return () => clearTimeout(timeout)
      } else {
        // Move to next message after a delay
        const timeout = setTimeout(() => {
          setDisplayedTextIndex(displayedTextIndex + 1)
          setCurrentText("")
        }, 400) // Delay between messages (doubled speed)

        return () => clearTimeout(timeout)
      }
    } else if (!isComplete) {
      setIsComplete(true)
    }
  }, [currentText, displayedTextIndex, isComplete])

  // Blinking cursor effect
  useEffect(() => {
    if (isComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 500) // Cursor blink rate

      return () => clearInterval(cursorInterval)
    }
  }, [isComplete])

  // Animated dots for loading message
  useEffect(() => {
    if (isComplete) {
      const dotsInterval = setInterval(() => {
        setLoadingDots((prev) => {
          if (prev.length >= 3) return ""
          return prev + "."
        })
      }, 500) // Dots animation speed

      return () => clearInterval(dotsInterval)
    }
  }, [isComplete])

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-black p-4">
      <div className="mb-12">
        <DeagleLabsLogo className="w-64 h-auto" />
      </div>

      <div className="font-sf-mono max-w-lg w-full">
        {messages.slice(0, displayedTextIndex).map((message, index) => (
          <div key={index} className="mb-4">
            <span className="text-[#CCCCCC] text-lg sm:text-xl">
              {message}
              {index === messages.length - 1 && isComplete && (
                <span className="inline-block w-12">{loadingDots}</span>
              )}
            </span>
          </div>
        ))}

        {displayedTextIndex < messages.length && (
          <div className="mb-4">
            <span className="text-[#CCCCCC] text-lg sm:text-xl">{currentText}</span>
            <span className={`text-[#CCCCCC] text-lg sm:text-xl ${showCursor ? "opacity-100" : "opacity-0"}`}>_</span>
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { DeagleLabsLogo } from "./deaglelabs-logo"

const messages = [
  "DeagleLabs System Boot Initiated...",
  "Verifying offline security protocols...",
  "Engaging document intelligence modules...",
  "Initializing decentralized AI core...",
  "Case strategy systems: Operational",
  "System status: Ready.",
]

export default function LoadingScreen() {
  const [displayedTextIndex, setDisplayedTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    // Handle typewriter effect for current message
    if (displayedTextIndex < messages.length) {
      const currentMessage = messages[displayedTextIndex]

      if (currentText.length < currentMessage.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentMessage.substring(0, currentText.length + 1))
        }, 50) // Speed of typing

        return () => clearTimeout(timeout)
      } else {
        // Move to next message after a delay
        const timeout = setTimeout(() => {
          setDisplayedTextIndex(displayedTextIndex + 1)
          setCurrentText("")
        }, 800) // Delay between messages

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

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-black p-4">
      <div className="mb-12">
        <DeagleLabsLogo className="w-64 h-auto" />
      </div>

      <div className="font-sf-mono max-w-lg w-full">
        {messages.slice(0, displayedTextIndex).map((message, index) => (
          <div key={index} className="mb-4">
            <span className="text-[#CCCCCC] text-lg sm:text-xl">{message}</span>
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

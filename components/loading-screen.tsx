"use client"

import { useEffect, useState } from "react"
import { DeagleLabsLogo } from "./deaglelabs-logo"

const messages = [
  "DEAGLE AI Systems Initializing...",
  "Validating secure offline environment...",
  "Activating document intelligence systems...",
  "System status: DeagleAI platform under active development",
]

export default function LoadingScreen() {
  const [displayedTextIndex, setDisplayedTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [loadingDots, setLoadingDots] = useState("")
  const [showFinalStatus, setShowFinalStatus] = useState(false)

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

  // Animated dots for loading message and final status
  useEffect(() => {
    if (isComplete && !showFinalStatus) {
      const dotsInterval = setInterval(() => {
        setLoadingDots((prev) => {
          if (prev.length >= 3) return ""
          return prev + "."
        })
      }, 500) // Dots animation speed

      return () => clearInterval(dotsInterval)
    }
  }, [isComplete, showFinalStatus])

  // Show final status after delay
  useEffect(() => {
    if (isComplete) {
      const finalStatusTimeout = setTimeout(() => {
        setShowFinalStatus(true)
        setLoadingDots("...") // Set dots to full state when stopping animation
      }, 3000)

      return () => clearTimeout(finalStatusTimeout)
    }
  }, [isComplete])

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-black p-4">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        <div className="mb-12">
          <DeagleLabsLogo className="w-64 h-auto" />
        </div>

        <div className="font-sf-mono w-full text-left pl-8 sm:pl-16 md:pl-24">
          {messages.slice(0, displayedTextIndex).map((message, index) => (
            <div key={index} className="mb-2 whitespace-normal sm:whitespace-nowrap">
              <span className="text-[#CCCCCC] text-base sm:text-lg font-mono">
                {'> '}{message}
                {index === messages.length - 1 && isComplete && (
                  <span className="inline-block w-12">{loadingDots}</span>
                )}
              </span>
            </div>
          ))}

          {displayedTextIndex < messages.length && (
            <div className="mb-2 whitespace-normal sm:whitespace-nowrap">
              <span className="text-[#CCCCCC] text-base sm:text-lg font-mono">{'> '}{currentText}</span>
              <span className={`text-[#CCCCCC] text-base sm:text-lg font-mono ${showCursor ? "opacity-100" : "opacity-0"}`}>_</span>
            </div>
          )}

          {showFinalStatus && (
            <div className="mb-2 mt-2 whitespace-normal sm:whitespace-nowrap">
              <span className="text-[#CCCCCC] text-base sm:text-lg font-mono">
                {':: Launching Fall 2025.'}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

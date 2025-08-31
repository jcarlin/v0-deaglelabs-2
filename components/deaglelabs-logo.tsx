export function DeagleLabsLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`font-orbitron font-bold tracking-wider uppercase text-center ${className}`}>
      <div className="flex items-center justify-center">
        <span className="text-4xl md:text-5xl text-[#D4AF37] mr-3">DEAGLE</span>
        <span className="text-4xl md:text-5xl text-[#606060] flex items-center">
          LABS
        </span>
      </div>
      <div className="text-[#CCCCCC] text-sm md:text-base mt-3 tracking-widest font-light">
        SECURE. OFFLINE. INTELLIGENCE.
      </div>
    </div>
  )
}

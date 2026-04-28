import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlitchBackground from './components/GlitchBackground'
import LandingScreen from './components/LandingScreen'
import BreachScreen from './components/BreachScreen'

function App() {
  const [isBreached, setIsBreached] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleAccess = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setIsBreached(true)
      setIsTransitioning(false)
    }, 1000)
  }

  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Layer */}
      <GlitchBackground />

      {/* Signal Distortion Overlay (Active during transition) */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-red-950/20 backdrop-invert pointer-events-none"
            style={{ 
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
              backgroundSize: '100% 2px'
            }}
          />
        )}
      </AnimatePresence>

      {/* Content Layer */}
      <AnimatePresence mode="wait">
        {!isBreached ? (
          <LandingScreen key="landing" onAccess={handleAccess} />
        ) : (
          <BreachScreen key="breach" />
        )}
      </AnimatePresence>

      {/* Audio Element (Hidden) */}
      {/* Note: Autoplay might be blocked without user interaction, button click can trigger it */}
    </div>
  )
}

export default App

import { motion } from 'framer-motion'
import { ShieldAlert } from 'lucide-react'

interface LandingScreenProps {
  onAccess: () => void
}

const LandingScreen = ({ onAccess }: LandingScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      className="z-10 flex items-center justify-center w-full h-full p-4"
    >
      <div className="glass-container max-w-lg w-full p-8 md:p-12 text-center relative overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />
        
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <ShieldAlert className="text-red-600 w-12 h-12 animate-pulse" />
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          <span className="text-white">Access </span>
          <span className="text-red-600 neon-glow glitch-text inline-block">CODE RED</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-red-500/70 text-xs md:text-sm mb-8 tracking-[0.2em] font-bold uppercase"
        >
          Restricted System // Authorization Required
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 0, 0, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onAccess}
          className="group relative px-8 py-4 bg-red-600 hover:bg-red-500 text-black font-black text-lg tracking-widest uppercase transition-all duration-300"
          style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
        >
          <span className="relative z-10">Initiate Access</span>
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]" />
        </motion.button>

        <div className="mt-8 grid grid-cols-3 gap-2 opacity-30">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-0.5 bg-red-600" />
          ))}
        </div>
      </div>

      {/* Decorative Corner Brackets */}
      <div className="fixed top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-red-900/50" />
      <div className="fixed top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-red-900/50" />
      <div className="fixed bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-red-900/50" />
      <div className="fixed bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-red-900/50" />
    </motion.div>
  )
}

export default LandingScreen

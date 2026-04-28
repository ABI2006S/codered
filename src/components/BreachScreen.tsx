import { motion } from 'framer-motion'

const BreachScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="z-10 flex flex-col items-center justify-center w-full h-full p-6 text-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
        className="glass-container p-8 md:p-12 max-w-md w-full relative"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-2 tracking-widest uppercase neon-glow">
            System Access Granted
          </h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto mb-10" />
          
          <div className="flex flex-col items-center gap-6">
            <p className="text-white/90 font-mono text-base md:text-lg animate-pulse uppercase tracking-wider">
              Scan and register:
            </p>
            
            <motion.div 
              className="relative p-2 bg-white rounded-lg shadow-[0_0_30px_rgba(255,0,0,0.4)] group"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="/codered.png" 
                alt="Registration QR" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover"
              />
              {/* Corner Accents for the QR */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-red-600" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-red-600" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-red-600" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-red-600" />
            </motion.div>

            <p className="mt-6 text-[10px] text-red-500/60 font-mono uppercase tracking-[0.3em]">
              Authorized Personnel Only
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Background Terminal Lines (Mobile Hidden or Simplified) */}
      <div className="fixed bottom-6 left-6 right-6 hidden md:flex justify-between items-end pointer-events-none opacity-40">
        <div className="text-[10px] text-red-600 font-mono text-left">
          [SEC_PROTOCOL_ALPHA]<br />
          [TRACE_DETECTION_DISABLED]<br />
          [ENCRYPTION_LEVEL_9]
        </div>
        <div className="text-[10px] text-red-600 font-mono text-right">
          LAT: 40.7128° N<br />
          LONG: 74.0060° W<br />
          STATUS: BREACHED
        </div>
      </div>
    </motion.div>
  )
}

export default BreachScreen

import { motion } from "framer-motion";
import { FileSpreadsheet, Cloud, TrendingUp } from "lucide-react";

export default function DataFlow() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* 3D MacBook Container */}
      <div className="relative perspective-1000">
        {/* MacBook Keyboard Base */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-8 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg shadow-lg"
             style={{ transform: 'translateX(-50%) rotateX(75deg) translateZ(-15px)' }}>
          {/* Keyboard Grid */}
          <div className="absolute inset-2 grid grid-cols-16 gap-px opacity-60">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="bg-gray-400 rounded-sm h-1"></div>
            ))}
          </div>
          {/* Trackpad */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-gray-100 rounded border border-gray-300"></div>
        </div>

        {/* MacBook Screen */}
        <div className="relative bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-xl p-2 shadow-2xl border-2 border-gray-300"
             style={{ transform: 'rotateX(-5deg) translateZ(25px)' }}>
          
          {/* Apple Logo */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-7 opacity-20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-500">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </div>

          {/* Screen Bezel */}
          <div className="bg-black rounded-xl p-4 relative overflow-hidden">
            {/* macOS Menu Bar */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800/90 backdrop-blur-sm rounded-t-xl flex items-center justify-between px-4 z-20">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-white text-xs font-medium">Lestar Data Platform</div>
              <div className="w-12"></div>
            </div>

            {/* Screen Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--lestar-teal)]/20 via-transparent to-[var(--lestar-blue)]/20 rounded-xl"></div>
            
            {/* Screen Content */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-b-xl pt-10 p-6 min-h-[380px]">
              <h3 className="text-xl font-semibold mb-6 text-white text-center">Your Data Journey</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                {/* Data Sources */}
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="interactive-card bg-gradient-to-br from-blue-500/20 to-indigo-600/20 p-6 rounded-2xl border border-blue-400/30 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-blue-500/30 rounded-xl flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <FileSpreadsheet className="text-blue-300" size={20} />
                  </div>
                  <h4 className="font-semibold text-sm text-center text-white">Data Sources</h4>
                  <p className="text-xs text-blue-200 text-center mt-2">Excel, Databases, Files</p>
                </motion.div>
                
                {/* Animated Arrow */}
                <div className="hidden md:block">
                  <motion.div 
                    className="relative h-1 bg-gradient-to-r from-[var(--lestar-teal)] to-[var(--lestar-blue)] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  >
                    <motion.div
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-2 border-b-2 border-l-[var(--lestar-blue)] border-t-transparent border-b-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.5 }}
                    />
                  </motion.div>
                </div>
                
                {/* Data Lake */}
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="interactive-card bg-gradient-to-br from-teal-500/20 to-cyan-600/20 p-6 rounded-2xl border border-teal-400/30 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-teal-500/30 rounded-xl flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <Cloud className="text-teal-300" size={20} />
                  </div>
                  <h4 className="font-semibold text-sm text-center text-white">Data Lake</h4>
                  <p className="text-xs text-teal-200 text-center mt-2">Azure, S3, MongoDB</p>
                </motion.div>
                
                {/* Animated Arrow */}
                <div className="hidden md:block">
                  <motion.div 
                    className="relative h-1 bg-gradient-to-r from-[var(--lestar-teal)] to-[var(--lestar-blue)] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                  >
                    <motion.div
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-2 border-b-2 border-l-[var(--lestar-blue)] border-t-transparent border-b-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3 }}
                    />
                  </motion.div>
                </div>
                
                {/* Insights */}
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="interactive-card bg-gradient-to-br from-purple-500/20 to-pink-600/20 p-6 rounded-2xl border border-purple-400/30 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-purple-500/30 rounded-xl flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <TrendingUp className="text-purple-300" size={20} />
                  </div>
                  <h4 className="font-semibold text-sm text-center text-white">AI Insights</h4>
                  <p className="text-xs text-purple-200 text-center mt-2">ESG & CEO360</p>
                </motion.div>
              </div>
              
              {/* Floating Data Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[var(--lestar-teal)] rounded-full opacity-30"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

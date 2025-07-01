import { motion } from "framer-motion";
import { FileSpreadsheet, Cloud, TrendingUp } from "lucide-react";

export default function DataFlow() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* 3D Computer Screen Container */}
      <div className="relative">
        {/* Computer Frame */}
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-3xl p-6 shadow-2xl">
          {/* Screen Bezel */}
          <div className="bg-black rounded-2xl p-6 relative overflow-hidden">
            {/* Screen Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--lestar-teal)]/20 via-transparent to-[var(--lestar-blue)]/20 rounded-2xl"></div>
            
            {/* Screen Content */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 min-h-[400px]">
              <h3 className="text-2xl font-semibold mb-8 text-white text-center">Your Data Journey</h3>
              
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
        
        {/* Computer Stand */}
        <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-8 w-32 mx-auto rounded-b-2xl shadow-lg"></div>
        <div className="bg-gray-800 h-4 w-48 mx-auto rounded-full shadow-inner"></div>
      </div>
    </div>
  );
}

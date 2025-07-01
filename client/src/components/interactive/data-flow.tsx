import { motion } from "framer-motion";
import { FileSpreadsheet, Cloud, TrendingUp } from "lucide-react";

export default function DataFlow() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 mx-auto max-w-5xl">
      <h3 className="text-2xl font-semibold mb-8 text-gray-800">Your Data Journey</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        {/* Data Sources */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="interactive-card bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <FileSpreadsheet className="text-blue-600" size={20} />
          </div>
          <h4 className="font-semibold text-sm text-center text-gray-800">Data Sources</h4>
          <p className="text-xs text-gray-600 text-center mt-2">Excel, Databases, Files</p>
        </motion.div>
        
        {/* Arrow */}
        <div className="hidden md:block">
          <motion.div 
            className="data-flow-line w-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </div>
        
        {/* Data Lake */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="interactive-card bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl border border-teal-100"
        >
          <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Cloud className="text-teal-600" size={20} />
          </div>
          <h4 className="font-semibold text-sm text-center text-gray-800">Data Lake</h4>
          <p className="text-xs text-gray-600 text-center mt-2">Azure, S3, MongoDB</p>
        </motion.div>
        
        {/* Arrow */}
        <div className="hidden md:block">
          <motion.div 
            className="data-flow-line w-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </div>
        
        {/* Insights */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="interactive-card bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100"
        >
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <TrendingUp className="text-purple-600" size={20} />
          </div>
          <h4 className="font-semibold text-sm text-center text-gray-800">AI Insights</h4>
          <p className="text-xs text-gray-600 text-center mt-2">ESG & CEO360</p>
        </motion.div>
      </div>
    </div>
  );
}

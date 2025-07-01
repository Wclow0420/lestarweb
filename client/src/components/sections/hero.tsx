import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import DataFlow from "@/components/interactive/data-flow";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-[var(--apple-gray)] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            Unlock the Power of<br />
            <span className="gradient-text">
              Intelligent Data Management
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            AI-Driven Centralized Data Repository that transforms your data chaos into actionable insights. 
            Reduce reporting time from days to minutes with our intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-[var(--lestar-blue)] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-600 transition-all transform hover:scale-105">
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <Play className="text-[var(--lestar-blue)]" size={20} />
              Watch Demo
            </Button>
          </div>
        </motion.div>
        
        {/* Interactive Data Flow Preview */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20"
        >
          <DataFlow />
        </motion.div>
      </div>
    </section>
  );
}

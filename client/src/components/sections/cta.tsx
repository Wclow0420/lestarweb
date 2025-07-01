import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold mb-6"
        >
          Ready to Transform Your Data Management?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Join leading organizations using Lestar to revolutionize their data operations. 
          Start your free trial today and experience the power of AI-driven insights.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button className="bg-[var(--lestar-blue)] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg">
            Start Free Trial
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-[var(--lestar-blue)] text-[var(--lestar-blue)] px-8 py-4 rounded-full text-lg font-medium hover:bg-[var(--lestar-blue)] hover:text-white transition-all"
          >
            Schedule Demo
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-sm text-gray-500"
        >
          <p>No credit card required • 14-day free trial • Setup in minutes</p>
        </motion.div>
      </div>
    </section>
  );
}

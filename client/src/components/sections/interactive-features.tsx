import { motion } from "framer-motion";
import { Bot, Table } from "lucide-react";
import AIChatbot from "@/components/interactive/ai-chatbot";
import DataTable from "@/components/interactive/data-table";

export default function InteractiveFeatures() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            AI-Driven Data Insight
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Experience the power of artificial intelligence in data management and analysis
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* AI Chatbot Demo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-3xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Bot className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-bold">Generative AI Chatbot</h3>
            </div>
            <AIChatbot />
          </motion.div>
          
          {/* Interactive Data Table */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-3xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Table className="text-white" size={20} />
                </div>
                <h3 className="text-2xl font-bold">Interactive Data Tables</h3>
              </div>
            </div>
            <DataTable />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

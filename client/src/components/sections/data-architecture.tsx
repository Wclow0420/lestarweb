import { useState } from "react";
import { motion } from "framer-motion";
import { DATA_LAKES, DATA_WAREHOUSES } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export default function DataArchitecture() {
  const [selectedLake, setSelectedLake] = useState('azure');
  const [selectedWarehouse, setSelectedWarehouse] = useState('aws');

  return (
    <section className="py-20 bg-white" id="architecture">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            How does our data architecture work?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Three-stage intelligent data processing pipeline that transforms raw data into actionable insights
          </motion.p>
        </div>
        
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          {/* Stage Headers */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              { stage: 1, title: "Stage 1: Integration", description: "Connect and extract from multiple data sources", color: "bg-[var(--lestar-blue)]" },
              { stage: 2, title: "Stage 2: Processing", description: "Clean, transform and analyze data using AI", color: "bg-[var(--lestar-teal)]" },
              { stage: 3, title: "Stage 3: Insights", description: "Generate dashboards and AI-powered analytics", color: "bg-purple-600" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-xl">{item.stage}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Interactive Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
              {/* Data Sources */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 mb-4">Data Sources</h4>
                {['Files', 'Database', 'Web Applications'].map((source, index) => (
                  <motion.div
                    key={source}
                    whileHover={{ scale: 1.05 }}
                    className="interactive-card bg-blue-50 p-4 rounded-xl border border-blue-100 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        index === 0 ? 'bg-green-500' : index === 1 ? 'bg-indigo-500' : 'bg-purple-500'
                      }`}>
                        <span className="text-white text-xs">●</span>
                      </div>
                      <span className="text-sm font-medium">{source}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Lestar Processing */}
              <div className="lg:col-span-2 bg-gradient-to-r from-[var(--lestar-teal)]/10 to-[var(--lestar-blue)]/10 rounded-2xl p-6 border-2 border-dashed border-[var(--lestar-teal)]/30">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <div className="w-6 h-6 bg-gradient-to-r from-[var(--lestar-teal)] to-[var(--lestar-blue)] rounded-lg"></div>
                    <span className="font-semibold text-[var(--lestar-blue)]">lestar</span>
                  </div>
                </div>
                
                {/* Data Lake Options */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <h5 className="font-semibold text-sm text-gray-800 mb-3">Data Lake</h5>
                    <div className="space-y-2">
                      {DATA_LAKES.map((lake) => (
                        <Badge
                          key={lake.id}
                          variant={selectedLake === lake.id ? "default" : "secondary"}
                          className={`cursor-pointer transition-all ${lake.color} text-white text-xs hover:scale-105`}
                          onClick={() => setSelectedLake(lake.id)}
                        >
                          {lake.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <h5 className="font-semibold text-sm text-gray-800 mb-3">Data Warehouse</h5>
                    <div className="space-y-2">
                      {DATA_WAREHOUSES.map((warehouse) => (
                        <Badge
                          key={warehouse.id}
                          variant={selectedWarehouse === warehouse.id ? "default" : "secondary"}
                          className={`cursor-pointer transition-all ${warehouse.color} text-white text-xs hover:scale-105`}
                          onClick={() => setSelectedWarehouse(warehouse.id)}
                        >
                          {warehouse.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Processing Steps */}
                <div className="flex justify-center space-x-2">
                  {['Quality Check', 'Clean', 'Transform'].map((step, index) => (
                    <Badge
                      key={step}
                      className={`text-white text-sm ${
                        index === 0 ? 'bg-[var(--lestar-teal)]' : 
                        index === 1 ? 'bg-[var(--lestar-blue)]' : 'bg-purple-600'
                      }`}
                    >
                      {step}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Output Products */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 mb-4">Analytics & Insights</h4>
                {[
                  { name: 'Lestar ESG', description: 'Sustainability Analytics', color: 'from-green-50 to-emerald-50 border-green-200' },
                  { name: 'Lestar CEO360', description: 'Financial Command Center', color: 'from-blue-50 to-indigo-50 border-blue-200' },
                  { name: 'AI Chatbot', description: 'Conversational Analytics', color: 'from-purple-50 to-violet-50 border-purple-200' }
                ].map((product, index) => (
                  <motion.div
                    key={product.name}
                    whileHover={{ scale: 1.05 }}
                    className={`interactive-card bg-gradient-to-br ${product.color} p-4 rounded-xl border cursor-pointer`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        index === 0 ? 'bg-green-500' : index === 1 ? 'bg-blue-500' : 'bg-purple-500'
                      }`}>
                        <span className="text-white text-xs">●</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium">{product.name}</div>
                        <div className="text-xs text-gray-600">{product.description}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

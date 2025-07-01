import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DATA_LAKES, DATA_WAREHOUSES } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileSpreadsheet, Database, Cloud, BarChart3, Zap, Cog, TrendingUp, Brain } from "lucide-react";

export default function DataArchitecture() {
  const [selectedLake, setSelectedLake] = useState('azure');
  const [selectedWarehouse, setSelectedWarehouse] = useState('aws');
  const [activeStage, setActiveStage] = useState(1);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  const stages = [
    { 
      stage: 1, 
      title: "Stage 1: Integration", 
      description: "Connect and extract from multiple data sources", 
      color: "bg-[var(--lestar-blue)]",
      icon: Database
    },
    { 
      stage: 2, 
      title: "Stage 2: Processing", 
      description: "Clean, transform and analyze data using AI", 
      color: "bg-[var(--lestar-teal)]",
      icon: Cog
    },
    { 
      stage: 3, 
      title: "Stage 3: Insights", 
      description: "Generate dashboards and AI-powered analytics", 
      color: "bg-purple-600",
      icon: Brain
    }
  ];

  const handleGenerateReport = () => {
    setIsGeneratingReport(true);
    setTimeout(() => {
      setIsGeneratingReport(false);
    }, 3000);
  };

  const renderStageContent = () => {
    switch(activeStage) {
      case 1:
        return (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="text-xl font-bold mb-4 text-center">Data Integration Sources</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Excel Files', icon: FileSpreadsheet, color: 'bg-green-500', description: 'CSV, XLSX spreadsheets' },
                { name: 'Databases', icon: Database, color: 'bg-blue-500', description: 'SQL, NoSQL systems' },
                { name: 'Web APIs', icon: Cloud, color: 'bg-purple-500', description: 'REST APIs, webhooks' }
              ].map((source, index) => (
                <motion.div
                  key={source.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-gray-200 hover:border-[var(--lestar-blue)] transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-16 h-16 ${source.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    <source.icon className="text-white" size={24} />
                  </div>
                  <h5 className="font-semibold text-center mb-2">{source.name}</h5>
                  <p className="text-sm text-gray-600 text-center">{source.description}</p>
                  <div className="mt-4 bg-white rounded-lg p-2">
                    <div className="h-2 bg-[var(--lestar-blue)] rounded-full animate-pulse"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold mb-6 text-center">AI-Powered Data Processing</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h5 className="font-semibold text-lg mb-4">Choose Your Data Lake</h5>
                <div className="grid grid-cols-2 gap-3">
                  {DATA_LAKES.map((lake) => (
                    <motion.div
                      key={lake.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedLake(lake.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedLake === lake.id 
                          ? 'border-[var(--lestar-teal)] bg-[var(--lestar-teal)]/10' 
                          : 'border-gray-200 hover:border-[var(--lestar-teal)]'
                      }`}
                    >
                      <div className={`w-8 h-8 ${lake.color} rounded-lg mb-2`}></div>
                      <span className="text-sm font-medium">{lake.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h5 className="font-semibold text-lg mb-4">Select Data Warehouse</h5>
                <div className="grid grid-cols-2 gap-3">
                  {DATA_WAREHOUSES.map((warehouse) => (
                    <motion.div
                      key={warehouse.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedWarehouse(warehouse.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedWarehouse === warehouse.id 
                          ? 'border-[var(--lestar-blue)] bg-[var(--lestar-blue)]/10' 
                          : 'border-gray-200 hover:border-[var(--lestar-blue)]'
                      }`}
                    >
                      <div className={`w-8 h-8 ${warehouse.color} rounded-lg mb-2`}></div>
                      <span className="text-sm font-medium">{warehouse.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 bg-gradient-to-r from-[var(--lestar-teal)]/10 to-[var(--lestar-blue)]/10 rounded-xl p-6">
              <h5 className="font-semibold mb-4 text-center">AI Processing Pipeline</h5>
              <div className="flex justify-center space-x-4">
                {['Quality Check', 'Clean', 'Transform', 'Validate'].map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      index === 0 ? 'bg-[var(--lestar-teal)]' : 
                      index === 1 ? 'bg-[var(--lestar-blue)]' : 
                      index === 2 ? 'bg-purple-600' : 'bg-green-600'
                    }`}>
                      <Zap className="text-white" size={16} />
                    </div>
                    <span className="text-xs font-medium">{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold mb-6 text-center">AI-Generated Insights & Reports</h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                { name: 'Lestar ESG', description: 'Sustainability Analytics', color: 'from-green-400 to-emerald-600' },
                { name: 'Lestar CEO360', description: 'Financial Command Center', color: 'from-blue-400 to-indigo-600' },
                { name: 'Custom Reports', description: 'AI-Generated Insights', color: 'from-purple-400 to-violet-600' }
              ].map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-br ${product.color} p-6 rounded-xl text-white cursor-pointer`}
                >
                  <BarChart3 className="mb-4" size={32} />
                  <h5 className="font-semibold mb-2">{product.name}</h5>
                  <p className="text-sm opacity-90">{product.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button
                onClick={handleGenerateReport}
                disabled={isGeneratingReport}
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-purple-600 hover:to-indigo-700 transition-all transform hover:scale-105"
              >
                {isGeneratingReport ? (
                  <div className="flex items-center space-x-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>AI Generating Report...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <TrendingUp size={20} />
                    <span>Generate AI Report</span>
                  </div>
                )}
              </Button>
            </div>

            {isGeneratingReport && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-6 bg-gray-50 rounded-xl p-6"
              >
                <div className="text-center mb-4">
                  <h5 className="font-semibold">AI is analyzing your data...</h5>
                </div>
                <div className="space-y-3">
                  {['Processing ESG metrics...', 'Analyzing financial trends...', 'Generating insights...'].map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.8 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-[var(--lestar-blue)] rounded-full animate-pulse"></div>
                      <span className="text-sm">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-12 bg-white" id="architecture">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold mb-4"
          >
            How does our data architecture work?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Three-stage intelligent data processing pipeline that transforms raw data into actionable insights
          </motion.p>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
          {/* Compact Interactive Stage Headers */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            {stages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveStage(item.stage)}
                className={`text-center cursor-pointer transition-all duration-300 p-4 rounded-xl ${
                  activeStage === item.stage 
                    ? 'bg-white shadow-lg scale-102' 
                    : 'hover:bg-white/50 hover:scale-101'
                }`}
              >
                <motion.div 
                  className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3 ${
                    activeStage === item.stage ? 'shadow-lg' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="text-white" size={20} />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                {activeStage === item.stage && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    className="h-0.5 bg-gradient-to-r from-[var(--lestar-teal)] to-[var(--lestar-blue)] rounded-full mt-3"
                  />
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Dynamic Stage Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              {renderStageContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

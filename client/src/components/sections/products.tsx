import { motion } from "framer-motion";
import { CheckCircle, Leaf, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ESGChart from "@/components/charts/esg-chart";
import FinancialChart from "@/components/charts/financial-chart";
import { MOCK_ESG_DATA, MOCK_FINANCIAL_DATA } from "@/lib/constants";

export default function Products() {
  return (
    <section className="py-20 bg-[var(--apple-gray)]" id="products">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Unlocking Business Potential
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Two specialized solutions designed to transform how you manage ESG data and financial insights
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lestar ESG */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="interactive-card bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Leaf className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">lestar ESG</h3>
                <p className="text-gray-600">Your Comprehensive ESG Solution</p>
              </div>
            </div>
            
            {/* Mock ESG Dashboard */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-800">ESG Performance Overview</h4>
                <span className="text-sm text-gray-500">Real-time data</span>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {MOCK_ESG_DATA.map((item, index) => (
                  <div key={item.name} className="bg-white rounded-lg p-3 text-center">
                    <div className={`text-2xl font-bold ${
                      index === 0 ? 'text-green-600' : 
                      index === 1 ? 'text-blue-600' : 'text-purple-600'
                    }`}>
                      {item.score}
                    </div>
                    <div className="text-xs text-gray-600">{item.name}</div>
                  </div>
                ))}
              </div>
              <ESGChart />
            </div>
            
            <div className="space-y-4">
              {[
                "Centralized ESG Data Platform - Consolidate ESG information seamlessly",
                "Predictive ESG Analytics - Forecast trends and set achievable goals",
                "AI-Powered ESG Insights - Generative AI chatbot for data access"
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={16} />
                  <div>
                    <div className="font-medium">{feature.split(' - ')[0]}</div>
                    <div className="text-sm text-gray-600">{feature.split(' - ')[1]}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-medium mt-6 hover:from-green-600 hover:to-emerald-700 transition-all">
              Explore Lestar ESG
            </Button>
          </motion.div>
          
          {/* Lestar CEO360 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="interactive-card bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center">
                <BarChart3 className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">lestar CEO360</h3>
                <p className="text-gray-600">Your Financial Command Center</p>
              </div>
            </div>
            
            {/* Mock Financial Dashboard */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-800">Financial Health Overview</h4>
                <span className="text-sm text-gray-500">Last updated: 2 min ago</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {MOCK_FINANCIAL_DATA.map((item, index) => (
                  <div key={item.metric} className="bg-white rounded-lg p-3">
                    <div className={`text-lg font-bold ${index === 0 ? 'text-blue-600' : 'text-green-600'}`}>
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-600">{item.metric}</div>
                    <div className="text-xs text-green-600">↗ {item.change}</div>
                  </div>
                ))}
              </div>
              <FinancialChart />
            </div>
            
            <div className="space-y-4">
              {[
                "Real-Time Financial Insights - Comprehensive financial health monitoring",
                "24/7 Advanced Monitoring - Anomaly detection and risk alerts",
                "Predictive Financial Forecasting - AI-powered future performance insights"
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-500 mt-1" size={16} />
                  <div>
                    <div className="font-medium">{feature.split(' - ')[0]}</div>
                    <div className="text-sm text-gray-600">{feature.split(' - ')[1]}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-medium mt-6 hover:from-blue-600 hover:to-indigo-700 transition-all">
              Explore Lestar CEO360
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

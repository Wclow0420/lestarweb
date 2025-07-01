import { motion } from "framer-motion";
import { Leaf, BarChart3, TrendingUp, Users, Factory, Recycle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import ESGChart from "@/components/charts/esg-chart";
import DataTable from "@/components/interactive/data-table";
import AIChatbot from "@/components/interactive/ai-chatbot";

export default function LestarESG() {
  const esgMetrics = [
    { 
      category: "Environmental", 
      icon: Leaf, 
      color: "text-green-600", 
      bgColor: "bg-green-100",
      metrics: [
        { name: "Carbon Emissions", value: "12% reduction", trend: "down" },
        { name: "Energy Efficiency", value: "18% improvement", trend: "up" },
        { name: "Waste Reduction", value: "22% decrease", trend: "down" },
        { name: "Water Usage", value: "15% optimization", trend: "up" }
      ]
    },
    { 
      category: "Social", 
      icon: Users, 
      color: "text-blue-600", 
      bgColor: "bg-blue-100",
      metrics: [
        { name: "Employee Satisfaction", value: "89% positive", trend: "up" },
        { name: "Diversity Index", value: "94% compliant", trend: "up" },
        { name: "Training Hours", value: "340 hrs/employee", trend: "up" },
        { name: "Safety Incidents", value: "67% reduction", trend: "down" }
      ]
    },
    { 
      category: "Governance", 
      icon: Factory, 
      color: "text-purple-600", 
      bgColor: "bg-purple-100",
      metrics: [
        { name: "Compliance Score", value: "98% rating", trend: "up" },
        { name: "Transparency Index", value: "95% disclosure", trend: "up" },
        { name: "Risk Assessment", value: "Low risk", trend: "stable" },
        { name: "Stakeholder Engagement", value: "92% active", trend: "up" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Lestar ESG</h1>
            <p className="text-xl mb-8 text-green-100">
              Comprehensive Environmental, Social, and Governance data management platform. 
              Track, analyze, and report on your sustainability metrics with AI-powered insights.
            </p>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-white/20 text-white px-4 py-2">
                <Leaf size={16} className="mr-2" />
                Carbon Tracking
              </Badge>
              <Badge className="bg-white/20 text-white px-4 py-2">
                <Users size={16} className="mr-2" />
                Social Impact
              </Badge>
              <Badge className="bg-white/20 text-white px-4 py-2">
                <Factory size={16} className="mr-2" />
                Governance
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ESG Metrics Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Real-Time ESG Performance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Monitor your organization's environmental, social, and governance performance 
              with comprehensive analytics and automated reporting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {esgMetrics.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                    <category.icon className={category.color} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{metric.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{metric.value}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          metric.trend === 'up' ? 'bg-green-500' :
                          metric.trend === 'down' ? 'bg-red-500' : 'bg-gray-400'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">ESG Analytics Dashboard</h2>
            <p className="text-lg text-gray-600">
              Interactive charts and data visualization for comprehensive ESG analysis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* ESG Chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">ESG Performance Trends</h3>
              <ESGChart />
            </motion.div>

            {/* AI Chatbot */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-4">ESG AI Assistant</h3>
              <AIChatbot />
            </motion.div>
          </div>

          {/* Data Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Detailed ESG Metrics</h3>
            <DataTable />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your ESG Reporting?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join leading organizations using Lestar ESG to streamline sustainability reporting 
              and drive meaningful environmental and social impact.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-2xl font-semibold">
                Schedule Demo
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-2xl font-semibold">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
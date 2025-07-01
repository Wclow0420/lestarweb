import { motion } from "framer-motion";
import { DollarSign, TrendingUp, BarChart3, Target, PieChart, LineChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import FinancialChart from "@/components/charts/financial-chart";
import DataTable from "@/components/interactive/data-table";
import AIChatbot from "@/components/interactive/ai-chatbot";

export default function LestarCEO360() {
  const kpiMetrics = [
    { 
      name: "Revenue Growth", 
      value: "$24.8M", 
      change: "+18.5%", 
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    { 
      name: "Profit Margin", 
      value: "34.2%", 
      change: "+2.1%", 
      trend: "up",
      icon: TrendingUp,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    { 
      name: "Operational Efficiency", 
      value: "91.5%", 
      change: "+5.3%", 
      trend: "up",
      icon: Target,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    { 
      name: "Market Share", 
      value: "28.7%", 
      change: "+1.8%", 
      trend: "up",
      icon: BarChart3,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  const departmentPerformance = [
    { name: "Sales", performance: 94, budget: "$2.1M", roi: "312%" },
    { name: "Marketing", performance: 87, budget: "$890K", roi: "245%" },
    { name: "Operations", performance: 91, budget: "$1.5M", roi: "198%" },
    { name: "R&D", performance: 83, budget: "$1.2M", roi: "156%" },
    { name: "Finance", performance: 96, budget: "$650K", roi: "189%" },
    { name: "HR", performance: 89, budget: "$780K", roi: "134%" }
  ];

  const strategicInsights = [
    {
      title: "Revenue Opportunity",
      description: "Market expansion in Q2 could yield $3.2M additional revenue",
      impact: "High",
      timeline: "3 months",
      color: "border-green-500"
    },
    {
      title: "Cost Optimization",
      description: "Supply chain automation could reduce costs by 12%",
      impact: "Medium",
      timeline: "6 months",
      color: "border-blue-500"
    },
    {
      title: "Risk Mitigation",
      description: "Diversify supplier base to reduce dependency risk",
      impact: "Medium",
      timeline: "4 months",
      color: "border-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Lestar CEO360</h1>
            <p className="text-xl mb-8 text-blue-100">
              Executive dashboard providing comprehensive financial data consolidation and analytics. 
              Make informed strategic decisions with real-time insights and predictive analytics.
            </p>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-white/20 text-white px-4 py-2">
                <DollarSign size={16} className="mr-2" />
                Financial Analytics
              </Badge>
              <Badge className="bg-white/20 text-white px-4 py-2">
                <TrendingUp size={16} className="mr-2" />
                Performance Tracking
              </Badge>
              <Badge className="bg-white/20 text-white px-4 py-2">
                <BarChart3 size={16} className="mr-2" />
                Strategic Insights
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KPI Dashboard */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Executive KPI Overview</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-time performance metrics across all business functions with 
              intelligent alerts and trend analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {kpiMetrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${metric.bgColor} rounded-xl flex items-center justify-center`}>
                    <metric.icon className={metric.color} size={24} />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    metric.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {metric.change}
                  </div>
                </div>
                <h3 className="text-sm text-gray-600 mb-1">{metric.name}</h3>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Performance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Department Performance Analysis</h2>
            <p className="text-lg text-gray-600">
              Comprehensive view of departmental efficiency, budget utilization, and ROI
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl p-6 shadow-lg mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b border-gray-200">
                  <tr>
                    <th className="pb-4 font-semibold">Department</th>
                    <th className="pb-4 font-semibold">Performance Score</th>
                    <th className="pb-4 font-semibold">Budget Allocated</th>
                    <th className="pb-4 font-semibold">ROI</th>
                    <th className="pb-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {departmentPerformance.map((dept, index) => (
                    <motion.tr
                      key={dept.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="py-4 font-medium">{dept.name}</td>
                      <td className="py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div 
                              className="h-2 bg-blue-500 rounded-full"
                              style={{ width: `${dept.performance}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">{dept.performance}%</span>
                        </div>
                      </td>
                      <td className="py-4 text-gray-600">{dept.budget}</td>
                      <td className="py-4 font-medium text-green-600">{dept.roi}</td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          dept.performance >= 90 ? 'bg-green-100 text-green-800' :
                          dept.performance >= 80 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {dept.performance >= 90 ? 'Excellent' :
                           dept.performance >= 80 ? 'Good' : 'Needs Attention'}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Analytics */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Interactive Financial Analytics</h2>
            <p className="text-lg text-gray-600">
              Deep dive into financial trends with interactive charts and AI-powered insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Financial Chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Revenue & Growth Trends</h3>
              <FinancialChart />
            </motion.div>

            {/* AI Assistant */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-4">CEO AI Assistant</h3>
              <AIChatbot />
            </motion.div>
          </div>

          {/* Strategic Insights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6">AI-Powered Strategic Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {strategicInsights.map((insight, index) => (
                <div key={index} className={`border-l-4 ${insight.color} pl-4`}>
                  <h4 className="font-semibold mb-2">{insight.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{insight.description}</p>
                  <div className="flex justify-between text-xs">
                    <span className={`px-2 py-1 rounded ${
                      insight.impact === 'High' ? 'bg-red-100 text-red-800' :
                      insight.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {insight.impact} Impact
                    </span>
                    <span className="text-gray-500">{insight.timeline}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Elevate Your Executive Decision Making</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Transform your organization's financial data into strategic competitive advantages 
              with Lestar CEO360's comprehensive analytics platform.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-2xl font-semibold">
                Book Executive Demo
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-2xl font-semibold">
                Download ROI Report
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
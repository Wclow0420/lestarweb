import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, BarChart3, TrendingUp, PieChart as PieChartIcon, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { MOCK_CHAT_MESSAGES } from "@/lib/constants";

export default function AIChatbot() {
  const [messages, setMessages] = useState(MOCK_CHAT_MESSAGES);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const generateSmartResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('report')) {
      return {
        type: 'table',
        message: "Here's a comprehensive data report based on your request:",
        data: [
          { department: 'Operations', q1: 94.2, q2: 96.1, q3: 92.8, q4: 98.3, status: 'Excellent' },
          { department: 'Finance', q1: 87.8, q2: 89.4, q3: 91.2, q4: 88.7, status: 'Good' },
          { department: 'HR', q1: 76.5, q2: 78.9, q3: 74.3, q4: 80.1, status: 'Improving' },
          { department: 'Sales', q1: 91.3, q2: 93.7, q3: 95.1, q4: 94.8, status: 'Excellent' }
        ]
      };
    }
    
    if (input.includes('graph') || input.includes('line')) {
      return {
        type: 'line',
        message: "I've generated a line graph showing performance trends:",
        data: [
          { month: 'Jan', performance: 85 },
          { month: 'Feb', performance: 88 },
          { month: 'Mar', performance: 82 },
          { month: 'Apr', performance: 91 },
          { month: 'May', performance: 94 },
          { month: 'Jun', performance: 96 }
        ]
      };
    }
    
    if (input.includes('pie')) {
      return {
        type: 'pie',
        message: "Here's a pie chart breakdown of your data distribution:",
        data: [
          { name: 'ESG Score', value: 35, color: '#10B981' },
          { name: 'Financial Health', value: 28, color: '#3B82F6' },
          { name: 'Operational Efficiency', value: 22, color: '#8B5CF6' },
          { name: 'Risk Assessment', value: 15, color: '#F59E0B' }
        ]
      };
    }
    
    if (input.includes('bar')) {
      return {
        type: 'bar',
        message: "Here's a bar chart comparing departmental performance:",
        data: [
          { department: 'Operations', score: 94 },
          { department: 'Finance', score: 89 },
          { department: 'Sales', score: 93 },
          { department: 'HR', score: 78 },
          { department: 'IT', score: 91 }
        ]
      };
    }
    
    return {
      type: 'text',
      message: "I understand your request. Based on your data, I can provide insights on ESG metrics, financial performance, and operational efficiency. Try asking for a 'report', 'graph', 'pie chart', or 'bar chart' to see interactive visualizations."
    };
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const userMessage = {
      id: messages.length + 1,
      message: newMessage,
      isUser: true,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    const inputText = newMessage;
    setNewMessage("");
    setIsTyping(true);
    
    // Generate smart AI response based on keywords
    setTimeout(() => {
      const response = generateSmartResponse(inputText);
      const aiResponse = {
        id: messages.length + 2,
        message: response.message,
        isUser: false,
        timestamp: new Date().toISOString(),
        type: response.type,
        data: response.data
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const renderVisualization = (message: any) => {
    if (!message.type || !message.data) return null;

    switch (message.type) {
      case 'table':
        return (
          <div className="bg-white rounded-lg mt-3 overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left font-medium">Department</th>
                    <th className="px-3 py-2 text-left font-medium">Q1</th>
                    <th className="px-3 py-2 text-left font-medium">Q2</th>
                    <th className="px-3 py-2 text-left font-medium">Q3</th>
                    <th className="px-3 py-2 text-left font-medium">Q4</th>
                    <th className="px-3 py-2 text-left font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {message.data.map((row: any, index: number) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-3 py-2 font-medium">{row.department}</td>
                      <td className="px-3 py-2">{row.q1}</td>
                      <td className="px-3 py-2">{row.q2}</td>
                      <td className="px-3 py-2">{row.q3}</td>
                      <td className="px-3 py-2">{row.q4}</td>
                      <td className="px-3 py-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          row.status === 'Excellent' ? 'bg-green-100 text-green-800' :
                          row.status === 'Good' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'line':
        return (
          <div className="bg-white rounded-lg p-4 mt-3 border border-gray-200">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={message.data}>
                <XAxis dataKey="month" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="performance" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );

      case 'bar':
        return (
          <div className="bg-white rounded-lg p-4 mt-3 border border-gray-200">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={message.data}>
                <XAxis dataKey="department" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Bar dataKey="score" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );

      case 'pie':
        return (
          <div className="bg-white rounded-lg p-4 mt-3 border border-gray-200">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={message.data}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  dataKey="value"
                >
                  {message.data.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {message.data.map((item: any, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-6">
        <div className="space-y-4">
          <AnimatePresence>
            {messages.map((message: any) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex ${message.isUser ? 'justify-end' : 'space-x-3'}`}
              >
                {!message.isUser && (
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Bot className="text-white" size={16} />
                  </div>
                )}
                
                <div className={`max-w-sm rounded-2xl px-4 py-3 ${
                  message.isUser 
                    ? 'bg-[var(--lestar-blue)] text-white rounded-br-md' 
                    : 'bg-gray-100 rounded-bl-md'
                }`}>
                  <p className={`text-sm ${message.isUser ? 'text-white' : 'text-gray-800'}`}>
                    {message.message}
                  </p>
                  
                  {/* Dynamic Visualization Rendering */}
                  {!message.isUser && renderVisualization(message)}
                  
                  {/* Legacy ESG data display */}
                  {!message.isUser && message.id === 4 && !message.type && (
                    <div className="bg-white rounded-lg p-3 mt-3">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Carbon Emissions</span>
                          <span className="text-green-600">-12%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Energy Efficiency</span>
                          <span className="text-green-600">+18%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Waste Reduction</span>
                          <span className="text-green-600">+22%</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {message.isUser && (
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center ml-3">
                    <User className="text-gray-600" size={16} />
                  </div>
                )}
              </motion.div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex space-x-3"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Bot className="text-white" size={16} />
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          delay: i * 0.2 
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Chat Input */}
      <div className="border-t border-gray-200 p-4">
        {/* Quick Action Suggestions */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-2">
            {[
              { text: "Generate report", icon: FileText },
              { text: "Show bar chart", icon: BarChart3 },
              { text: "Create pie chart", icon: PieChartIcon },
              { text: "Display graph", icon: TrendingUp }
            ].map((suggestion, index) => (
              <motion.button
                key={suggestion.text}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setNewMessage(suggestion.text)}
                className="flex items-center space-x-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs transition-colors"
              >
                <suggestion.icon size={12} />
                <span>{suggestion.text}</span>
              </motion.button>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-3">
          <Input 
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Try: 'report', 'bar chart', 'pie chart', or 'graph'..." 
            className="flex-1 border-gray-300 rounded-2xl focus:ring-2 focus:ring-[var(--lestar-blue)] focus:border-transparent"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button 
            onClick={handleSendMessage}
            disabled={isTyping}
            className="bg-[var(--lestar-blue)] text-white px-6 py-3 rounded-2xl hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            <Send size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MOCK_CHAT_MESSAGES } from "@/lib/constants";

export default function AIChatbot() {
  const [messages, setMessages] = useState(MOCK_CHAT_MESSAGES);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const userMessage = {
      id: messages.length + 1,
      message: newMessage,
      isUser: true,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        message: "Thank you for your question. I'm analyzing the data and will provide insights based on your request.",
        isUser: false,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-6">
        <div className="space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
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
                  {!message.isUser && message.id === 4 && (
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
          </AnimatePresence>
        </div>
      </div>
      
      {/* Chat Input */}
      <div className="border-t border-gray-200 p-4 flex space-x-3">
        <Input 
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Ask about your data..." 
          className="flex-1 border-gray-300 rounded-2xl focus:ring-2 focus:ring-[var(--lestar-blue)] focus:border-transparent"
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <Button 
          onClick={handleSendMessage}
          className="bg-[var(--lestar-blue)] text-white px-6 py-3 rounded-2xl hover:bg-blue-600 transition-colors"
        >
          <Send size={16} />
        </Button>
      </div>
    </div>
  );
}

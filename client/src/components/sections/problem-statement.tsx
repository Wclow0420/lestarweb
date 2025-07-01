import { motion } from "framer-motion";
import { PROBLEM_CARDS } from "@/lib/constants";

export default function ProblemStatement() {
  return (
    <section className="py-20 bg-gray-900" id="problems">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Market Problem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            As businesses handle vast volumes of data daily, traditional approaches create significant challenges
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {PROBLEM_CARDS.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <card.icon className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-400 text-sm">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

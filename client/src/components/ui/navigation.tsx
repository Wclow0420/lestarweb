import { useState } from "react";
import { Database, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect bg-white/80 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[var(--lestar-teal)] to-[var(--lestar-blue)] rounded-lg flex items-center justify-center">
              <Database className="text-white" size={16} />
            </div>
            <span className="text-xl font-semibold">lestar</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Platform
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('architecture')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              How it Works
            </button>
            <Button className="bg-[var(--lestar-blue)] text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="text-gray-600" size={24} /> : <Menu className="text-gray-600" size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200/50 py-4"
            >
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-left"
                >
                  Platform
                </button>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-left"
                >
                  Products
                </button>
                <button 
                  onClick={() => scrollToSection('architecture')}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-left"
                >
                  How it Works
                </button>
                <Button className="bg-[var(--lestar-blue)] text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors w-fit">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

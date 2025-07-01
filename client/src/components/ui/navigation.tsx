import { useState } from "react";
import { Database, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const isActive = (path: string) => location === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect bg-white/80 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-[var(--lestar-teal)] to-[var(--lestar-blue)] rounded-lg flex items-center justify-center">
                <Database className="text-white" size={16} />
              </div>
              <span className="text-xl font-semibold">lestar</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className={`transition-colors cursor-pointer ${
                isActive('/') ? 'text-[var(--lestar-blue)] font-medium' : 'text-gray-600 hover:text-gray-900'
              }`}>
                Home
              </span>
            </Link>
            <Link href="/lestar-esg">
              <span className={`transition-colors cursor-pointer ${
                isActive('/lestar-esg') ? 'text-[var(--lestar-blue)] font-medium' : 'text-gray-600 hover:text-gray-900'
              }`}>
                Lestar ESG
              </span>
            </Link>
            <Link href="/lestar-ceo360">
              <span className={`transition-colors cursor-pointer ${
                isActive('/lestar-ceo360') ? 'text-[var(--lestar-blue)] font-medium' : 'text-gray-600 hover:text-gray-900'
              }`}>
                Lestar CEO360
              </span>
            </Link>
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
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <span className={`transition-colors text-left ${
                    isActive('/') ? 'text-[var(--lestar-blue)] font-medium' : 'text-gray-600 hover:text-gray-900'
                  }`}>
                    Home
                  </span>
                </Link>
                <Link href="/lestar-esg" onClick={() => setIsOpen(false)}>
                  <span className={`transition-colors text-left ${
                    isActive('/lestar-esg') ? 'text-[var(--lestar-blue)] font-medium' : 'text-gray-600 hover:text-gray-900'
                  }`}>
                    Lestar ESG
                  </span>
                </Link>
                <Link href="/lestar-ceo360" onClick={() => setIsOpen(false)}>
                  <span className={`transition-colors text-left ${
                    isActive('/lestar-ceo360') ? 'text-[var(--lestar-blue)] font-medium' : 'text-gray-600 hover:text-gray-900'
                  }`}>
                    Lestar CEO360
                  </span>
                </Link>
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

import { Database, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-[var(--lestar-teal)] to-[var(--lestar-blue)] rounded-lg flex items-center justify-center">
                <Database className="text-white" size={16} />
              </div>
              <span className="text-xl font-semibold">lestar</span>
            </div>
            <p className="text-gray-400 mb-6">
              AI-Driven Centralized Data Repository platform transforming how businesses manage and analyze their data.
            </p>
            <div className="text-sm text-gray-400">
              <p>Developed by</p>
              <p className="font-medium text-white">Mandrill Tech Sdn Bhd</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Lestar ESG</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lestar CEO360</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Chatbot</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="text-[var(--lestar-teal)]" size={16} />
                <a href="tel:+60162226899" className="hover:text-white transition-colors">+60 16 222 6899</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[var(--lestar-teal)]" size={16} />
                <a href="mailto:hello@mandrill.com.my" className="hover:text-white transition-colors">hello@mandrill.com.my</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-[var(--lestar-teal)] mt-1" size={16} />
                <div>
                  <p>A-18-5, The Vertical Business Suite,</p>
                  <p>Tower A, No. 8 Jalan Kerinchi,</p>
                  <p>Bangsar South, 59200</p>
                  <p>Kuala Lumpur, Malaysia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Mandrill Tech Sdn Bhd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

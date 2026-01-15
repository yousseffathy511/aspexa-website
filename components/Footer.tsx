import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

// Custom TikTok icon component matching Lucide style
const Tiktok = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-aspexa-black border-t border-gray-900 pt-16 pb-8 text-aspexa-gray-text">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        {/* Column 1: Brand */}
        <div className="col-span-1 lg:col-span-1">
          <img src="/logos/Aspexa_Logo_2025_Primary_White.png" alt="ASPEXA" className="h-8 mb-6 -ml-3" />
          <p className="mb-6 text-sm leading-relaxed">
            AI Security. Arabic Native.<br/>MENA Focused.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-aspexa-red transition-colors duration-400">
              <Instagram size={20} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-aspexa-red transition-colors duration-400">
              <Tiktok size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-aspexa-red transition-colors duration-400">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-aspexa-red transition-colors duration-400">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="text-white font-bold uppercase mb-6 tracking-wider">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services#red-teaming" className="hover:text-aspexa-red transition-colors duration-400">AI Red-Teaming Audit</Link></li>
            <li><Link to="/services#rag-security" className="hover:text-aspexa-red transition-colors duration-400">RAG Security Assessment</Link></li>
            <li><Link to="/services#arabic-dialect" className="hover:text-aspexa-red transition-colors duration-400">Arabic Dialect Testing</Link></li>
            <li><Link to="/services#compliance" className="hover:text-aspexa-red transition-colors duration-400">Compliance Assurance</Link></li>
            <li><Link to="/services#incident-readiness" className="hover:text-aspexa-red transition-colors duration-400">Incident Readiness</Link></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="text-white font-bold uppercase mb-6 tracking-wider">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-aspexa-red transition-colors duration-400">About Us</Link></li>
            <li><Link to="/team" className="hover:text-aspexa-red transition-colors duration-400">Team</Link></li>
            <li><Link to="/contact" className="hover:text-aspexa-red transition-colors duration-400">Contact</Link></li>
            <li><Link to="/pricing" className="hover:text-aspexa-red transition-colors duration-400">Pricing</Link></li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div>
          <h4 className="text-white font-bold uppercase mb-6 tracking-wider">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/privacy" className="hover:text-aspexa-red transition-colors duration-400">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-aspexa-red transition-colors duration-400">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Column 5: Contact */}
        <div>
          <h4 className="text-white font-bold uppercase mb-6 tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="text-white"><a href="mailto:info@aspexa.tech" className="hover:text-aspexa-red transition-colors">info@aspexa.tech</a></li>
            <li>+971 (0) 4 123 4567</li>
            <li>United Arab Emirates</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; 2025 ASPEXA. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built for MENA Cyber Resilience.</p>
      </div>
    </footer>
  );
};

export default Footer;
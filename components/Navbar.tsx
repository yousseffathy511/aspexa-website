import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const getAssetPath = (path: string) => {
  const base = import.meta.env.BASE_URL || '/';
  if (!path) return base;
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Initialize state based on actual scroll position to prevent "double" jump on load
  const [scrolled, setScrolled] = useState(() => 
    typeof window !== 'undefined' ? window.scrollY > 50 : false
  );
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      // Hysteresis logic:
      // Scroll DOWN past 50px -> shrink
      // Scroll UP past 20px -> expand
      // The gap (20px to 50px) is the "buffer zone" where no changes happen.
      // This stops the jitter/flicker behavior.
      if (currentScroll > 50) {
        setScrolled(true);
      } else if (currentScroll < 20) {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Container: Fixed at top, transitions padding smoothly
  const navContainerClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] flex justify-center ${
    scrolled ? 'pt-4' : 'pt-8'
  }`;

  // Inner Navbar: Transitions width, height, background, border
  // Note: We keep 'border' class in both states but change color/transparency to prevent layout shifts (1px jump)
  const navInnerClasses = `
    relative flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
    border
    ${scrolled 
      ? 'w-[90%] md:w-[60%] bg-black/80 backdrop-blur-md border-white/10 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.8)] h-14 px-6' 
      : 'w-full bg-transparent border-transparent h-24 px-6 md:px-12'
    }
  `;

  const linkClasses = "relative text-sm font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300 px-4 py-2 group";
  const activeLinkClasses = "text-white";

  return (
    <div className={navContainerClasses}>
      <nav className={navInnerClasses}>
        {/* Logo */}
        <Link to="/" className="flex items-center group relative z-50">
          <img
            src={getAssetPath("/logos/Aspexa_Logo_2025_Primary_White.png")}
            alt="ASPEXA" 
            className={`object-contain transition-all duration-500 ${scrolled ? 'h-6' : 'h-8 md:h-10'}`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {['Home', 'Services', 'Team', 'Pricing', 'About'].map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <Link key={item} to={path} className={`${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
                {item}
                {/* Underline animation */}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-aspexa-red transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className={`
              transition-all duration-500 font-bold uppercase tracking-widest rounded-full flex items-center gap-2
              ${scrolled 
                ? 'bg-aspexa-red text-white px-5 py-2 hover:bg-red-600 text-xs' 
                : 'bg-white text-black px-8 py-3 hover:bg-aspexa-red hover:text-white text-sm'
              }
            `}
          >
             <span className="relative top-[1px]">Get Briefing</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white relative z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Overlay */}
      {createPortal(
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 flex items-center justify-center transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
           <div className="flex flex-col gap-8 text-center">
              {['Home', 'Services', 'Team', 'Pricing', 'About', 'Contact'].map((item, i) => (
                <Link 
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white hover:to-aspexa-red transition-all transform hover:scale-105"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {item}
                </Link>
              ))}
           </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Navbar;
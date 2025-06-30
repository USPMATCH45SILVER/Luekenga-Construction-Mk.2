import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { NAVIGATION_ITEMS } from '../utils/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  const handleNavClick = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 smooth-transition ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200' : 'bg-white/90 backdrop-blur-sm shadow-sm'
    } ${isVisible ? 'animate-slide-in-down' : 'opacity-0 -translate-y-full'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-fade-in-left min-w-0">
            <div className="w-12 h-12 bg-white p-1 shadow-lg rounded-lg hover-lift gpu-accelerated flex-shrink-0">
              <img 
                src="/LC Logo.jpg" 
                alt="Jeff Luekenga Logo" 
                className="w-full h-full object-contain rounded"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="w-full h-full bg-gradient-to-r from-red-600 to-red-700 rounded flex items-center justify-center hidden">
                <span className="text-white font-bold text-lg">JL</span>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-bold text-gray-900 hover:text-red-600 smooth-transition truncate">Jeff Luekenga</h1>
              <p className="text-xs font-semibold text-blue-600 truncate">Residential Construction Specialist</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 animate-fade-in-right">
            {NAVIGATION_ITEMS.map((item, index) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className="font-semibold border-b-2 border-transparent hover:border-red-600 smooth-transition text-gray-900 hover:text-red-600 hover-lift animate-fade-in-up whitespace-nowrap"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-900 hover-lift smooth-transition animate-fade-in-right flex-shrink-0"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm rounded-lg animate-slide-in-down">
            <div className="flex flex-col space-y-3 pt-4">
              {NAVIGATION_ITEMS.map((item, index) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="text-gray-900 hover:text-red-600 smooth-transition text-left font-semibold px-4 py-2 rounded hover:bg-gray-50 hover-lift animate-fade-in-left"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
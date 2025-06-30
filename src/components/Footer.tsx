import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { NAVIGATION_ITEMS } from '../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-white p-1 rounded">
                <img 
                  src="/LC Logo.jpg" 
                  alt="Jeff Luekenga Logo" 
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="w-full h-full bg-gradient-to-r from-red-600 to-red-700 rounded flex items-center justify-center hidden">
                  <span className="text-white font-bold text-lg">JL</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Jeff Luekenga</h3>
                <p className="text-blue-400 text-sm font-semibold">Residential Construction Specialist</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building quality homes for over 30 years in the Treasure Valley. Jeff is committed to delivering 
              exceptional residential construction services that exceed expectations and stand the test of time.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAVIGATION_ITEMS.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-gray-400 hover:text-red-400 transition-colors font-semibold"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-400" />
                <a href="tel:+12088802636" className="text-gray-300 hover:text-white transition-colors">
                  (208) 880-2636
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:luekengabros@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  luekengabros@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">Treasure Valley, Idaho</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Jeff Luekenga. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">Privacy Policy</button>
              <button className="text-gray-400 hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
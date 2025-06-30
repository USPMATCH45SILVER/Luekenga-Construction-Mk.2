import React, { useEffect, useState } from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { scrollToContact } from '../utils/scrollUtils';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay to ensure smooth initial render
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 pt-24">
      {/* Optimized background elements */}
      <div className="absolute inset-0 gpu-accelerated">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/2 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-blue-600 text-white text-sm font-bold mb-8 shadow-lg rounded-full smooth-transition ${
          isVisible ? 'animate-slide-in-down opacity-100' : 'opacity-0'
        }`}>
          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
          Licensed Residential Construction Specialist
        </div>

        {/* Main heading */}
        <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight smooth-transition ${
          isVisible ? 'animate-fade-in-up opacity-100 animate-delay-200' : 'opacity-0'
        }`}>
          Building Your
          <span className="block text-transparent bg-gradient-to-r from-red-600 via-red-500 to-blue-600 bg-clip-text font-bold">
            Dream Home
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed smooth-transition ${
          isVisible ? 'animate-fade-in-up opacity-100 animate-delay-400' : 'opacity-0'
        }`}>
          Expert residential construction, remodeling, and home improvement services. 
          Quality craftsmanship for your most important investment.
        </p>

        {/* Stats */}
        <div className={`flex flex-wrap justify-center gap-8 mb-12 smooth-transition ${
          isVisible ? 'animate-scale-in opacity-100 animate-delay-600' : 'opacity-0'
        }`}>
          <div className="text-center bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-red-600 hover:shadow-xl hover-lift smooth-transition gpu-accelerated">
            <div className="text-3xl font-bold text-red-600">500+</div>
            <div className="text-gray-600 font-semibold">Homes Built & Renovated</div>
          </div>
          <div className="text-center bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-blue-600 hover:shadow-xl hover-lift smooth-transition gpu-accelerated">
            <div className="text-3xl font-bold text-blue-600">30+</div>
            <div className="text-gray-600 font-semibold">Years Experience</div>
          </div>
          <div className="text-center bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-red-600 hover:shadow-xl hover-lift smooth-transition gpu-accelerated">
            <div className="text-3xl font-bold text-red-600">100%</div>
            <div className="text-gray-600 font-semibold">Customer Satisfaction</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center smooth-transition ${
          isVisible ? 'animate-fade-in-up opacity-100 animate-delay-800' : 'opacity-0'
        }`}>
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg shadow-xl hover:shadow-red-600/25 hover-lift smooth-transition gpu-accelerated"
          >
            <span>Get Free Estimate</span>
            <ArrowRight className="h-5 w-5 inline ml-2 group-hover:translate-x-1 smooth-transition" />
          </button>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:+12088802636"
              className="flex items-center justify-center space-x-2 px-6 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white smooth-transition font-semibold rounded-lg hover-lift gpu-accelerated"
            >
              <Phone className="h-5 w-5" />
              <span>(208) 880-2636</span>
            </a>
            <a
              href="mailto:luekengabros@gmail.com"
              className="flex items-center justify-center space-x-2 px-6 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white smooth-transition font-semibold rounded-lg hover-lift gpu-accelerated"
            >
              <Mail className="h-5 w-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
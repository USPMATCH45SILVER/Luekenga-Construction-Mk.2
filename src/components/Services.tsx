import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { scrollToContact } from '../utils/scrollUtils';
import { SERVICES } from '../data/servicesData';

const Services = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.getAttribute('data-index') || '0');
        setVisibleItems(prev => new Set(prev).add(index));
        
        // Clean up will-change after animation
        setTimeout(() => {
          entry.target.classList.add('animate-complete');
        }, 600);
      }
    });
  }, []);

  const { observe } = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: '50px',
    onIntersect: handleIntersection
  });

  useEffect(() => {
    const serviceCards = sectionRef.current?.querySelectorAll('.service-card');
    serviceCards?.forEach((card) => observe(card));
  }, [observe]);

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Residential Construction
            <span className="block bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Comprehensive residential construction services for homeowners who demand quality, 
            reliability, and exceptional craftsmanship in every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={`${service.title}-${index}`}
              data-index={index}
              className={`service-card group bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-red-600 smooth-transition shadow-lg hover:shadow-xl hover-lift gpu-accelerated ${
                visibleItems.has(index) 
                  ? 'fade-in-observer visible' 
                  : 'fade-in-observer'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-lg group-hover:shadow-red-600/25 smooth-transition hover-lift gpu-accelerated">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4 group-hover:text-red-600 smooth-transition">{service.title}</h3>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li 
                    key={`${feature}-${idx}`}
                    className="flex items-center text-gray-600 smooth-transition"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="group-hover:text-gray-800 smooth-transition">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up animate-delay-600">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg shadow-xl hover:shadow-red-600/25 hover-lift smooth-transition gpu-accelerated"
          >
            Request Service Estimate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
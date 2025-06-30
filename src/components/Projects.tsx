import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useImagePreloader } from '../hooks/useImagePreloader';
import { scrollToContact } from '../utils/scrollUtils';
import { PROJECTS } from '../data/projectsData';

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  const imageItems = PROJECTS.map(project => ({
    src: project.image,
    fallback: project.fallbackImage
  }));

  const { getImageSrc } = useImagePreloader(imageItems);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.getAttribute('data-index') || '0');
        setVisibleItems(prev => new Set(prev).add(index));
        
        // Clean up will-change after animation
        setTimeout(() => {
          entry.target.classList.add('animate-complete');
        }, 500);
      }
    });
  }, []);

  const { observe } = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: '50px',
    onIntersect: handleIntersection
  });

  useEffect(() => {
    const projectCards = sectionRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach((card) => observe(card));
  }, [observe]);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured
            <span className="block bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Explore our portfolio of residential construction projects throughout the Treasure Valley, 
            showcasing Jeff's commitment to quality craftsmanship and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              data-index={index}
              className={`project-card group bg-white rounded-lg border-2 border-gray-200 overflow-hidden hover:border-blue-600 smooth-transition shadow-lg hover:shadow-xl hover-lift gpu-accelerated ${
                visibleItems.has(index) 
                  ? 'fade-in-observer visible' 
                  : 'fade-in-observer'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={getImageSrc(index)}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 smooth-transition gpu-accelerated"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white transform scale-0 group-hover:scale-100 smooth-transition" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 smooth-transition">{project.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1 group-hover:text-blue-600 smooth-transition">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 group-hover:text-red-600 smooth-transition">
                    <Calendar className="h-4 w-4 text-red-600" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up animate-delay-600">
          <p className="text-gray-700 mb-6 font-semibold">Ready to start your home project?</p>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg shadow-xl hover:shadow-red-600/25 hover-lift smooth-transition gpu-accelerated"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
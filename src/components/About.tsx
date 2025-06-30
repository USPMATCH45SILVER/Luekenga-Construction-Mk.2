import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Award, Shield, Users, Clock } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { scrollToContact } from '../utils/scrollUtils';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleAchievements, setVisibleAchievements] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  const achievements = [
    {
      icon: Award,
      title: 'Licensed & Certified',
      description: 'Fully licensed residential contractor with all necessary certifications and insurance coverage.'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'All work comes with comprehensive warranties and our commitment to excellence.'
    },
    {
      icon: Users,
      title: 'Trusted Professional',
      description: 'Skilled craftsman with decades of experience in residential construction.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Proven track record of completing home projects on schedule and within budget.'
    }
  ];

  const bulletPoints = [
    'Over 500 successful residential projects completed',
    'Licensed, bonded, and fully insured',
    '100% customer satisfaction guarantee',
    'Free consultations and detailed estimates'
  ];

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === sectionRef.current) {
          setIsVisible(true);
        } else {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleAchievements(prev => new Set(prev).add(index));
          
          // Clean up will-change after animation
          setTimeout(() => {
            entry.target.classList.add('animate-complete');
          }, 500);
        }
      }
    });
  }, []);

  const { observe } = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: '50px',
    onIntersect: handleIntersection
  });

  useEffect(() => {
    if (sectionRef.current) {
      observe(sectionRef.current);
    }

    const achievementCards = sectionRef.current?.querySelectorAll('.achievement-card');
    achievementCards?.forEach((card) => observe(card));
  }, [observe]);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`smooth-transition ${
            isVisible ? 'animate-fade-in-left opacity-100' : 'opacity-0 translate-x-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose
              <span className="block bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Jeff Luekenga
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              With over 30 years of experience in residential construction, Jeff has built his reputation 
              on delivering exceptional quality, reliability, and personal service. Every home project is 
              approached with meticulous attention to detail and a commitment to exceeding expectations.
            </p>
            
            <div className="space-y-4 mb-8">
              {bulletPoints.map((item, index) => (
                <div 
                  key={`bullet-${index}`}
                  className={`flex items-center text-gray-700 smooth-transition ${
                    isVisible ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
                >
                  <div className={`w-2 h-2 ${index % 2 === 0 ? 'bg-red-600' : 'bg-blue-600'} rounded-full mr-3 flex-shrink-0`}></div>
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className={`px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg shadow-xl hover:shadow-red-600/25 hover-lift smooth-transition gpu-accelerated ${
                isVisible ? 'animate-fade-in-up animate-delay-600' : 'opacity-0'
              }`}
            >
              Get Your Free Consultation
            </button>
          </div>

          <div className={`grid grid-cols-2 gap-6 smooth-transition ${
            isVisible ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-8'
          }`} style={{ animationDelay: '0.3s' }}>
            {achievements.map((achievement, index) => (
              <div
                key={`achievement-${index}`}
                data-index={index}
                className={`achievement-card bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-blue-600 smooth-transition shadow-lg hover:shadow-xl hover-lift gpu-accelerated ${
                  visibleAchievements.has(index) 
                    ? 'fade-in-observer visible' 
                    : 'fade-in-observer'
                }`}
                style={{ 
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg w-fit mb-4 hover-lift smooth-transition gpu-accelerated">
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-red-600 smooth-transition">{achievement.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { CONTACT_INFO, SERVICE_OPTIONS } from '../utils/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === sectionRef.current) {
          setIsVisible(true);
        } else {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleItems(prev => new Set(prev).add(index));
          
          // Clean up will-change after animation
          setTimeout(() => {
            entry.target.classList.add('animate-complete');
          }, 600);
        }
      }
    });
  }, []);

  const { observe } = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: '50px',
    onIntersect: handleIntersection
  });

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `New Project Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Needed: ${formData.service}

Project Details:
${formData.message}

---
This inquiry was submitted through your website contact form.
    `.trim();

    const mailtoLink = `mailto:luekengabros@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  }, [formData]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      observe(sectionRef.current);
    }

    const contactItems = sectionRef.current?.querySelectorAll('.contact-item');
    contactItems?.forEach((item) => observe(item));
  }, [observe]);

  const getContactIcon = (type: string) => {
    switch (type) {
      case 'phone': return Phone;
      case 'email': return Mail;
      case 'location': return MapPin;
      case 'hours': return Clock;
      default: return Phone;
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 smooth-transition ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Home Project
            <span className="block bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Started Today
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to bring your home improvement vision to life? Contact Jeff for a free consultation 
            and detailed project estimate. He's here to help make your dream home a reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`smooth-transition ${
            isVisible ? 'animate-fade-in-left opacity-100' : 'opacity-0 translate-x-8'
          }`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {CONTACT_INFO.map((info, index) => {
                const IconComponent = getContactIcon(info.type);
                return (
                  <div 
                    key={`contact-${info.type}`}
                    data-index={index}
                    className={`contact-item flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 smooth-transition hover-lift gpu-accelerated ${
                      visibleItems.has(index) 
                        ? 'fade-in-observer visible' 
                        : 'fade-in-observer'
                    }`}
                    style={{ transitionDelay: `${0.3 + (index * 0.1)}s` }}
                  >
                    <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover-lift smooth-transition gpu-accelerated">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold">{info.title}</p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-blue-600 hover:text-blue-700 smooth-transition font-semibold"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-semibold whitespace-pre-line">{info.content}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`smooth-transition ${
            isVisible ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-8'
          }`} style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Request an Estimate</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-900 font-bold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 focus:border-red-600 focus:ring-1 focus:ring-red-600 smooth-transition hover-lift"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-900 font-bold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 focus:border-red-600 focus:ring-1 focus:ring-red-600 smooth-transition hover-lift"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-900 font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 focus:border-red-600 focus:ring-1 focus:ring-red-600 smooth-transition hover-lift"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-900 font-bold mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 focus:border-red-600 focus:ring-1 focus:ring-red-600 smooth-transition hover-lift"
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 font-bold mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 focus:border-red-600 focus:ring-1 focus:ring-red-600 smooth-transition resize-none hover-lift"
                  placeholder="Please describe your home project in detail..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg shadow-xl hover:shadow-red-600/25 hover-lift smooth-transition flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed gpu-accelerated"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>Email Opened!</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-gray-600 text-sm text-center font-semibold">
                * Required fields. Clicking "Send Message" will open your email client with the form details pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
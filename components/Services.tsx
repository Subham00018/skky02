'use client';

import { useEffect, useState } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites, responsive design, UI development with modern frameworks and technologies',
      icon: 'ri-code-line',
      features: ['Responsive Design', 'Modern Frameworks', 'UI/UX Implementation', 'Performance Optimization'],
      color: 'blue'
    },
    {
      title: 'Graphic Design',
      description: 'Branding, posters, social media creatives, and more visual content creation',
      icon: 'ri-palette-line',
      features: ['Brand Identity', 'Social Media Graphics', 'Print Design', 'Digital Illustrations'],
      color: 'purple'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Services</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transform transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className={`bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-${service.color}-400/50 transition-all duration-300 transform hover:scale-105 group cursor-pointer h-full`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-${service.color}-500/20 group-hover:bg-${service.color}-500/30 transition-colors duration-300 mr-4`}>
                    <i className={`${service.icon} text-${service.color}-400 text-3xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-${service.color}-400 rounded-full`}></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <button className={`text-${service.color}-400 hover:text-${service.color}-300 font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap`}>
                    Learn More <i className="ri-arrow-right-line ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
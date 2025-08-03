
'use client';

import { useEffect, useState } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [skillProgress, setSkillProgress] = useState<{[key: string]: number}>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill progress
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setSkillProgress(prev => ({ ...prev, [skill.name]: skill.level }));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: 'HTML/CSS',
      icon: 'ri-html5-fill',
      level: 90,
      color: 'from-orange-400 to-red-400',
      shadowColor: 'shadow-orange-500/20'
    },
    {
      name: 'JavaScript',
      icon: 'ri-javascript-fill',
      level: 85,
      color: 'from-yellow-400 to-yellow-300',
      shadowColor: 'shadow-yellow-500/20'
    },
    {
      name: 'Python',
      icon: 'ri-code-s-slash-line',
      level: 80,
      color: 'from-green-400 to-emerald-400',
      shadowColor: 'shadow-green-500/20'
    },
    {
      name: 'Figma',
      icon: 'ri-pen-nib-fill',
      level: 88,
      color: 'from-purple-400 to-violet-400',
      shadowColor: 'shadow-purple-500/20'
    },
    {
      name: 'Photoshop',
      icon: 'ri-image-edit-line',
      level: 85,
      color: 'from-blue-400 to-cyan-400',
      shadowColor: 'shadow-blue-500/20'
    },
    {
      name: 'Canva',
      icon: 'ri-palette-line',
      level: 92,
      color: 'from-pink-400 to-rose-400',
      shadowColor: 'shadow-pink-500/20'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 relative inline-block">
              Skills
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`transform transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-6 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 group cursor-pointer hover:shadow-2xl ${skill.shadowColor} backdrop-blur-sm`}>
                {/* Skill header with animated icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r ${skill.color} shadow-lg transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                      <i className={`${skill.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                      {skill.name}
                    </h3>
                  </div>
                  <span className={`text-gray-400 text-sm font-bold transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${skill.color}`}>
                    {skillProgress[skill.name] || 0}%
                  </span>
                </div>
                
                {/* Animated progress bar */}
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div className="relative h-full">
                    <div 
                      className={`h-3 rounded-full transition-all duration-2000 ease-out bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                      style={{ 
                        width: `${skillProgress[skill.name] || 0}%` 
                      }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer" style={{ animation: 'shimmer 2s infinite' }}></div>
                    </div>
                  </div>
                </div>

                {/* Skill level indicator */}
                <div className="mt-4 text-center">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} bg-opacity-10 border border-gray-600`}>
                    <span className="text-xs font-medium text-gray-300">
                      {skillProgress[skill.name] >= 90 ? 'Expert' : 
                       skillProgress[skill.name] >= 80 ? 'Advanced' : 
                       skillProgress[skill.name] >= 70 ? 'Intermediate' : 'Beginner'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}

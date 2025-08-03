
'use client';

import { useEffect, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [countUp, setCountUp] = useState({ years: 0, projects: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start count up animation
          let yearsCount = 0;
          let projectsCount = 0;
          const yearsTarget = 2;
          const projectsTarget = 10;
          
          const interval = setInterval(() => {
            if (yearsCount < yearsTarget) {
              yearsCount++;
              setCountUp(prev => ({ ...prev, years: yearsCount }));
            }
            if (projectsCount < projectsTarget) {
              projectsCount++;
              setCountUp(prev => ({ ...prev, projects: projectsCount }));
            }
            if (yearsCount >= yearsTarget && projectsCount >= projectsTarget) {
              clearInterval(interval);
            }
          }, 100);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 relative">
              Me
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform scale-x-0 animate-pulse" style={{ animation: 'scaleX 2s ease-in-out infinite' }}></div>
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image with enhanced effects */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                src="https://static.readdy.ai/image/e46ac4c6acc190b907bf35c6190b6f1d/40bbd8e5a0d63a4432cc266de768bfac.jfif"
                alt="Subham Biswas Working"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content with staggered animations */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-6">
              {/* Animated text reveal */}
              <div className="overflow-hidden">
                <p className={`text-gray-300 text-lg leading-relaxed transform transition-all duration-1000 delay-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}>
                  I am a passionate and creative{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
                    graphic designer
                  </span>{' '}
                  and{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                    web developer
                  </span>{' '}
                  currently pursuing a Bachelor of Computer Applications (BCA) at Siliguri College. With a keen eye for detail and a strong drive to continuously improve, I am always eager to learn and stay updated with the latest trends and tools.
                </p>
              </div>
              
              {/* Education card with hover effects */}
              <div className={`bg-gradient-to-r from-gray-800/50 to-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-500 transform ${
                isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              } hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10`}>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    <i className="ri-graduation-cap-line text-blue-400 animate-bounce"></i>
                  </div>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Education
                  </span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <div>
                      <h4 className="text-white font-medium">Bachelor of Computer Applications (BCA)</h4>
                      <p className="text-gray-400">Siliguri College</p>
                      <p className="text-gray-500 text-sm animate-pulse">Currently Pursuing</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated statistics */}
              <div className="grid grid-cols-2 gap-4">
                <div className={`bg-gradient-to-br from-gray-800/50 to-gray-800/30 p-4 rounded-xl border border-gray-700 hover:border-blue-400/50 text-center transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-3xl font-bold">
                    {countUp.years}+
                  </div>
                  <div className="text-gray-300 text-sm">Years Learning</div>
                </div>
                <div className={`bg-gradient-to-br from-gray-800/50 to-gray-800/30 p-4 rounded-xl border border-gray-700 hover:border-purple-400/50 text-center transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-3xl font-bold">
                    {countUp.projects}+
                  </div>
                  <div className="text-gray-300 text-sm">Projects Done</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleX {
          0%, 100% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
        }
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </section>
  );
}

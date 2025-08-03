
'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Web Developer',
    'Graphic Designer',
    'UI/UX Designer',
    'Creative Artist'
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const text = texts[currentText];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.substring(0, displayText.length + 1));
        if (displayText === text) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(text.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentText((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://static.readdy.ai/image/e46ac4c6acc190b907bf35c6190b6f1d/b96224c2fa947031e3a6f449a1b4ece7.jfif)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className={`mb-8 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse"></div>
            <div className="relative p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
              <img
                src="https://static.readdy.ai/image/e46ac4c6acc190b907bf35c6190b6f1d/99d70e80ec4e76823896684660672a02.jfif"
                alt="Subham Biswas"
                className="w-56 h-56 rounded-full object-cover shadow-2xl hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <div className={`transform transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-blue-400 text-lg md:text-xl mb-4 font-medium animate-pulse">
            Hello, I'm Subham Biswas
          </p>
        </div>

        <div className={`transform transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Creative
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 inline-block animate-pulse">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <div className="overflow-hidden mb-8">
            <p className={`text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}>
              Turning ideas into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold">
                functional
              </span>
              and
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-semibold">
                aesthetic
              </span>
              digital experiences
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative overflow-hidden border-2 border-transparent bg-gradient-to-r from-blue-400 to-purple-400 p-[2px] rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap group"
            >
              <div className="bg-gray-900 px-6 py-2 rounded-full group-hover:bg-transparent transition-colors duration-300">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group-hover:text-white font-semibold">
                  Get In Touch
                </span>
              </div>
            </button>
          </div>
        </div>

        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col items-center text-gray-400 cursor-pointer group" onClick={() => scrollToSection('about')}>
            <span className="text-sm mb-2 group-hover:text-blue-400 transition-colors duration-300">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-400 group-hover:border-blue-400 rounded-full flex justify-center transition-colors duration-300">
              <div className="w-1 h-3 bg-gray-400 group-hover:bg-blue-400 rounded-full animate-bounce mt-2 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


'use client';

import { useEffect, useState } from 'react';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('portfolio');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'College Comparison Website',
      description: 'Clean layout, comparative features, responsive design for educational institutions',
      category: 'web',
      image: 'https://readdy.ai/api/search-image?query=Modern%20college%20comparison%20website%20interface%20showing%20clean%20layout%20with%20educational%20institution%20cards%2C%20comparison%20tables%2C%20responsive%20design%20elements%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20educational%20web%20design%2C%20modern%20UI%20elements&width=500&height=300&seq=college-comparison&orientation=landscape',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI-Based Automation Assistant',
      description: 'Interactive elements, intelligent UI for automation and productivity enhancement',
      category: 'web',
      image: 'https://readdy.ai/api/search-image?query=AI%20automation%20assistant%20interface%20with%20modern%20dashboard%2C%20interactive%20elements%2C%20intelligent%20UI%20design%2C%20dark%20theme%20with%20blue%20accents%2C%20futuristic%20tech%20aesthetics%2C%20clean%20and%20professional%20web%20application%20design&width=500&height=300&seq=ai-assistant&orientation=landscape',
      tech: ['Python', 'JavaScript', 'AI Integration', 'UI/UX'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Online Grocery Shop',
      description: 'E-commerce interface, product listings, and cart functionality for online shopping',
      category: 'web',
      image: 'https://readdy.ai/api/search-image?query=Online%20grocery%20shopping%20website%20interface%20showing%20product%20listings%2C%20shopping%20cart%2C%20e-commerce%20layout%2C%20fresh%20vegetables%20and%20fruits%2C%20clean%20modern%20design%2C%20green%20and%20white%20color%20scheme%2C%20professional%20online%20store%20design&width=500&height=300&seq=grocery-shop&orientation=landscape',
      tech: ['React', 'E-commerce', 'Shopping Cart', 'Database'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Brand Identity Design',
      description: 'Complete branding package including logo, color palette, and brand guidelines',
      category: 'design',
      image: 'https://readdy.ai/api/search-image?query=Brand%20identity%20design%20showcase%20with%20modern%20logo%20designs%2C%20color%20palettes%2C%20typography%20samples%2C%20brand%20guidelines%2C%20professional%20graphic%20design%20portfolio%20presentation%2C%20clean%20and%20organized%20layout&width=500&height=300&seq=brand-identity&orientation=landscape',
      tech: ['Figma', 'Adobe Photoshop', 'Brand Design', 'Typography'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Social Media Graphics',
      description: 'Creative social media posts, banners, and promotional materials',
      category: 'design',
      image: 'https://readdy.ai/api/search-image?query=Social%20media%20graphics%20portfolio%20showing%20Instagram%20posts%2C%20Facebook%20banners%2C%20promotional%20materials%2C%20colorful%20and%20engaging%20designs%2C%20modern%20social%20media%20aesthetic%2C%20creative%20digital%20graphics&width=500&height=300&seq=social-media&orientation=landscape',
      tech: ['Canva', 'Photoshop', 'Social Media', 'Creative Design'],
      gradient: 'from-pink-500 to-violet-500'
    },
    {
      title: 'Print Design Portfolio',
      description: 'Posters, flyers, and print materials with creative layouts and typography',
      category: 'design',
      image: 'https://readdy.ai/api/search-image?query=Print%20design%20portfolio%20showing%20creative%20posters%2C%20flyers%2C%20brochures%2C%20professional%20typography%2C%20colorful%20layouts%2C%20modern%20graphic%20design%20for%20print%20media%2C%20organized%20portfolio%20presentation&width=500&height=300&seq=print-design&orientation=landscape',
      tech: ['Adobe Photoshop', 'Print Design', 'Typography', 'Layout'],
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 relative inline-block">
              Portfolio
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-8"></div>
          
          {/* Enhanced Filter Buttons */}
          <div className="flex justify-center space-x-2 flex-wrap gap-2">
            {[
              { key: 'all', label: 'All Projects', icon: 'ri-stack-line' },
              { key: 'web', label: 'Web Development', icon: 'ri-code-line' },
              { key: 'design', label: 'Graphic Design', icon: 'ri-palette-line' }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setFilter(item.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-500 cursor-pointer whitespace-nowrap transform hover:scale-105 ${
                  filter === item.key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600 hover:border-blue-400/50'
                }`}
              >
                <i className={`${item.icon} text-sm`}></i>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`transform transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 group cursor-pointer backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 z-10`}></div>
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-top transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button className={`w-full bg-gradient-to-r ${project.gradient} text-white py-2 px-4 rounded-lg font-semibold transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 whitespace-nowrap hover:shadow-lg`}>
                        <i className="ri-external-link-line mr-2"></i>
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold text-white mb-2 transition-all duration-300 ${
                    hoveredProject === index ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400' : ''
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-300 transform hover:scale-105`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more button */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl">
            <i className="ri-add-line mr-2"></i>
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
}

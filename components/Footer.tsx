'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-400">S</span>ubham <span className="text-purple-400">B</span>iswas
            </div>
            <p className="text-gray-300 mb-4">
              Creative Web Developer & Graphic Designer passionate about turning ideas into beautiful digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:subhambiswas3815@gmail.com"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-500 text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 cursor-pointer"
              >
                <i className="ri-mail-line"></i>
              </a>
              <a
                href="https://linkedin.com/in/subham-biswas-95b252372"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-500 text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 cursor-pointer"
              >
                <i className="ri-linkedin-box-line"></i>
              </a>
              <a
                href="tel:9339532179"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-500 text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 cursor-pointer"
              >
                <i className="ri-phone-line"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Web Development</li>
              <li className="text-gray-300">Graphic Design</li>
              <li className="text-gray-300">UI/UX Design</li>
              <li className="text-gray-300">Brand Identity</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Subham Biswas. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-blue-500 rounded-full transition-all duration-300">
              <i className="ri-arrow-up-line"></i>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
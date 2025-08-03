
'use client';

import { useEffect, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      value: 'subhambiswas3815@gmail.com',
      link: 'mailto:subhambiswas3815@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      value: '9339532179',
      link: 'tel:9339532179',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'ri-linkedin-box-line',
      title: 'LinkedIn',
      value: 'linkedin.com/in/subham-biswas-95b252372',
      link: 'https://linkedin.com/in/subham-biswas-95b252372',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 relative inline-block">
              Touch
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information with enhanced animations */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-8">
              <div className="overflow-hidden">
                <h3 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 transform transition-all duration-1000 delay-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}>
                  Let's work together!
                </h3>
                <p className={`text-gray-300 leading-relaxed transform transition-all duration-1000 delay-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}>
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hello, feel free to reach out!
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`transform transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200 + 800}ms` }}
                >
                  <a
                    href={info.link}
                    className="group relative flex items-center space-x-4 p-6 bg-gradient-to-r from-gray-800/50 to-gray-800/30 rounded-xl border border-gray-700 hover:border-transparent transition-all duration-500 transform hover:scale-105 cursor-pointer overflow-hidden"
                  >
                    {/* Gradient border on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl`}></div>
                    
                    <div className={`relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r ${info.gradient} shadow-lg transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                      <i className={`${info.icon} text-white text-xl`}></i>
                    </div>
                    <div className="relative">
                      <h4 className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label htmlFor="name" className={`block text-gray-300 font-medium mb-2 transition-colors duration-300 ${
                  focusedField === 'name' ? 'text-blue-400' : ''
                }`}>
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your Name"
                  />
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
                    focusedField === 'name' ? 'opacity-100' : ''
                  }`}></div>
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label htmlFor="email" className={`block text-gray-300 font-medium mb-2 transition-colors duration-300 ${
                  focusedField === 'email' ? 'text-blue-400' : ''
                }`}>
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
                    focusedField === 'email' ? 'opacity-100' : ''
                  }`}></div>
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label htmlFor="message" className={`block text-gray-300 font-medium mb-2 transition-colors duration-300 ${
                  focusedField === 'message' ? 'text-blue-400' : ''
                }`}>
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300 resize-none backdrop-blur-sm"
                    placeholder="Your message here..."
                  />
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
                    focusedField === 'message' ? 'opacity-100' : ''
                  }`}></div>
                </div>
                <div className="text-right text-gray-500 text-sm mt-1">
                  <span className={`transition-colors duration-300 ${
                    formData.message.length > 450 ? 'text-orange-400' : 
                    formData.message.length > 400 ? 'text-yellow-400' : ''
                  }`}>
                    {formData.message.length}/500
                  </span>
                </div>
              </div>

              {/* Success Message */}
              {submitStatus && (
                <div className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-xl text-green-400 text-sm animate-pulse">
                  <i className="ri-check-line mr-2"></i>
                  {submitStatus}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="relative w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white py-4 px-6 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 cursor-pointer whitespace-nowrap overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2"></i>
                      Send Message
                    </>
                  )}
                </span>
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

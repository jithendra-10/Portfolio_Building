import React, { useEffect, useRef } from 'react';
import { ArrowDown, FileText, MessageSquare } from 'lucide-react';

const Home: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation on load
    const elements = [titleRef.current, subtitleRef.current, ctaRef.current];
    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.classList.add('translate-y-0', 'opacity-100');
        }, 300 * index);
      }
    });
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-16 bg-white dark:bg-transparent">
      {/* Content */}
      <div className="p-8 md:p-12 rounded-2xl bg-white dark:bg-slate-900/70 dark:backdrop-blur-sm dark:border dark:border-slate-700/50 dark:shadow-2xl dark:shadow-purple-700/20">
        <div className="text-center">
          <h1 
            ref={titleRef} 
            className="text-4xl md:text-6xl font-bold mb-6 transform translate-y-10 opacity-0 transition-all duration-700 ease-out"
          >
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Jithendra Gudidha</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto transform translate-y-10 opacity-0 transition-all duration-700 ease-out delay-300"
          >
            Full Stack Developer and AI Engineer with a passion for creating smart, efficient, and user-focused applications across web and intelligent systems.
          </p>
          
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 transform translate-y-10 opacity-0 transition-all duration-700 ease-out delay-600"
          >
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center"
            >
              <MessageSquare size={18} className="mr-2" />
              Contact Me
            </a>
            <a 
              href="#" 
              className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg border border-gray-300 dark:border-gray-700 transition-colors duration-300 flex items-center"
            >
              <FileText size={18} className="mr-2" />
              View Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <ArrowDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default Home;

import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Smartphone } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
    }
    
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fade-in');
      }
    }, 300);
    
    setTimeout(() => {
      if (iconsRef.current) {
        iconsRef.current.classList.add('animate-fade-in');
      }
    }, 600);
    
    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.add('animate-fade-in');
      }
    }, 900);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 pb-20 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
        
        {/* Background elements - android outlines */}
        <div className="absolute top-20 left-10 opacity-5 dark:opacity-10">
          <Smartphone className="w-64 h-64 text-green-600 dark:text-green-400" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-5 dark:opacity-10">
          <Smartphone className="w-96 h-96 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="opacity-0 transition-opacity duration-700" ref={titleRef}>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 text-transparent bg-clip-text">
                Praveen B
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
                Software Developer
              </p>
            </div>
            {/* Image: show below text on mobile, hidden on desktop */}
            <div className="flex justify-center w-full mb-8 md:hidden">
              <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
                <img 
                  src={`https://praveenb1402.github.io/Praveen-Portfolio/profile_pic.jpg`}
                  alt="Praveen B"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="opacity-0 transition-opacity duration-700" ref={subtitleRef}>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                I create intuitive and innovative Software that deliver exceptional user experiences. 
                Specializing in Flutter, Java, and modern Android development practices.
              </p>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 mb-10 opacity-0 transition-opacity duration-700" ref={iconsRef}>
              <a 
                href="#contact" 
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-900 transition-colors text-gray-700 dark:text-gray-300"
                aria-label="Email me"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/Praveenb1402" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-900 transition-colors text-gray-700 dark:text-gray-300"
                aria-label="GitHub profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/praveen-b-8685632a1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-900 transition-colors text-gray-700 dark:text-gray-300"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="text-center md:text-left opacity-0 transition-opacity duration-700">
              <a 
                href="#projects" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 text-white font-medium rounded-full transition-transform hover:scale-105 hover:shadow-lg"
                ref={ctaRef}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          {/* Image Section */}
          <div className="hidden md:flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
              <img 
                src={`https://praveenb1402.github.io/Praveen-Portfolio/profile_pic.jpg`}
                alt="Praveen   B"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

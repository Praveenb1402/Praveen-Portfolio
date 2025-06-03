import React from 'react';
import { Heart, Smartphone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Smartphone className="h-6 w-6 text-green-500 mr-2" />
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
              Praveen B
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a 
              href="#home"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a 
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a 
              href="#skills"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a 
              href="#experience"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a 
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 dark:border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* <p className="text-gray-400 text-sm">
            {currentYear} Praveen B.
          </p> */}
          
          {/* <div className="flex items-center mt-4 md:mt-0">
            <p className="text-gray-400 text-sm flex items-center">
              Made with 
              <Heart className="mx-1 h-4 w-4 text-red-500" />
              and React
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
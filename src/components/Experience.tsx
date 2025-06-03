import React from 'react';
import { experiences } from '../data/experience';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 text-transparent bg-clip-text">
            My Experience
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A timeline of my professional journey in Android development.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`mb-12 flex flex-col ${
                index % 2 === 0 
                  ? 'md:flex-row' 
                  : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className="md:w-1/2 md:pr-8 md:pl-8">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <Briefcase className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {exp.role}
                    </h3>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <Calendar className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2" />
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {exp.period} | {exp.company}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Timeline dot for desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-green-600 dark:bg-green-500 border-4 border-white dark:border-gray-800" style={{ top: `${index * 224 + 56}px` }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
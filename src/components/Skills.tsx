import React from 'react';
import { skillCategories } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 text-transparent bg-clip-text">
            My Skills
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I specialize in Android development with a focus on creating clean, efficient, and user-friendly applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level * 20}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                        style={{ 
                          width: `${skill.level * 20}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Development Process
          </h3>
          
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-y-0 md:space-x-4">
            {[
              { 
                title: "Research & Planning", 
                description: "Understanding requirements and planning architecture" 
              },
              { 
                title: "Design & Prototype", 
                description: "Creating UI/UX designs and interactive prototypes" 
              },
              { 
                title: "Development", 
                description: "Writing clean, maintainable code following best practices" 
              },
              { 
                title: "Testing & Deployment", 
                description: "Thorough testing and continuous deployment" 
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="w-full md:w-1/4 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 dark:bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mt-2 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { Code, Coffee, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate Android developer with a keen eye for creating intuitive and efficient mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Android Developer with hands-on experience building scalable and intuitive mobile applications. With a solid background in Java, Firebase, and Flutter, I focus on delivering clean, efficient, and user-friendly solutions.


            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
             My journey in mobile development has allowed me to work on meaningful projects and continuously grow my skills. I'm always eager to learn new technologies and contribute to building high-quality digital experiences.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">What I Do</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-4">
                  <Code className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Clean Code
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Writing maintainable, efficient, and well-documented code following best practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-4">
                  <Star className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Modern Development
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Implementing latest Android technologies and architectural patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-4">
                  <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    User Experience
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Creating intuitive and engaging user interfaces with Material Design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">1+</div>
            <div className="text-gray-700 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">20+</div>
            <div className="text-gray-700 dark:text-gray-300">Apps Developed</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">1M+</div>
            <div className="text-gray-700 dark:text-gray-300">App Downloads</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              <Coffee className="h-8 w-8 mx-auto" />
            </div>
            <div className="text-gray-700 dark:text-gray-300">Coffee Lover</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
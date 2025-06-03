import React from 'react';
import { Project } from '../data/projects';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-end space-x-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900/80 text-white rounded-full hover:bg-gray-800 transition-colors"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.playstore && (
              <a
                href={project.playstore}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-600/90 text-white rounded-full hover:bg-green-500 transition-colors"
                aria-label={`Google Play Store link for ${project.title}`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
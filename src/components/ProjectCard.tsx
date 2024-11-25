import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';

export default function ProjectCard(project: Project) {
  // Use the first section's image as the card image
  const mainImage = project.sections[0]?.image || '';

  return (
    <div className="group bg-gray-900 rounded-lg overflow-hidden transition-transform hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={mainImage} 
          alt={project.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="text-sm px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link 
          to={`/project/${project.id}`}
          className="inline-flex items-center text-blue-500 hover:text-blue-400"
        >
          View Project <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import { projects } from '../data/projects';
import VideoPlayer from '../components/VideoPlayer';

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-950 text-white">
        <Header />
        <div className="container mx-auto max-w-6xl px-4 pt-32">
          <h1 className="text-4xl font-bold">Project not found</h1>
          <Link to="/" className="text-blue-500 hover:text-blue-400 inline-flex items-center mt-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      
      <div className="container mx-auto max-w-6xl px-4 pt-32 pb-20">
        <Link to="/" className="text-blue-500 hover:text-blue-400 inline-flex items-center mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="text-sm px-3 py-1 bg-gray-900 text-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-lg">{project.description}</p>
        </div>

        <div className="space-y-24">
          {project.sections.map((section, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-12 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Overview</h3>
                    <p className="text-gray-400">{section.description}</p>
                  </div>
                  
                  {section.challenges && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Challenges</h3>
                      <p className="text-gray-400">{section.challenges}</p>
                    </div>
                  )}
                  
                  {section.results && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Results</h3>
                      <p className="text-gray-400">{section.results}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </div>
          ))}
        </div>

        {(project.additionalPhotos?.length > 0 || project.videos?.length > 0) && (
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-8">Project Photos and Videos</h2>
            <div className="space-y-12">
              {project.additionalPhotos && project.additionalPhotos.length > 0 && (
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Additional Photos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.additionalPhotos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`Additional Photo ${index + 1}`}
                        className="w-full rounded-lg shadow-xl"
                      />
                    ))}
                  </div>
                </div>
              )}

              {project.videos && project.videos.length > 0 && (
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Videos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.videos.map((video, index) => (
                      <VideoPlayer
                        key={index}
                        src={video.url}
                        poster={video.thumbnail}
                        title={video.title}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {project.link && (
          <div className="mt-12">
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-500 hover:text-blue-400"
            >
              View Project <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
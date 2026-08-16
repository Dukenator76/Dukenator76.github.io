import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';

type ProjectCardProps = Project & { featured?: boolean };

export default function ProjectCard(project: ProjectCardProps) {
  const image = project.heroImage || project.sections[0]?.image || '';
  const imageAlt = project.heroAlt || project.sections[0]?.imageAlt || project.title;
  const summary = project.summary || project.description;

  return (
    <Link
      to={`/project/${project.id}`}
      className={`glow-card group block overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 ${
        project.featured ? 'md:grid md:grid-cols-2' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          project.featured ? 'aspect-video md:aspect-auto md:h-full' : 'aspect-video'
        }`}
      >
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />
        {project.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
            Flagship Project
          </span>
        )}
      </div>

      <div className="flex flex-col p-7">
        {project.role && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">{project.role}</p>
        )}

        <h3 className="font-display text-2xl font-bold text-white transition-colors group-hover:text-blue-400">
          {project.title}
        </h3>

        <p className="mt-3 leading-relaxed text-gray-400">{summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-700/80 bg-gray-800/60 px-3 py-1 text-xs font-medium text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors group-hover:text-cyan-400">
          View project
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}

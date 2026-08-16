import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Camera, Film } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import VideoPlayer from '../components/VideoPlayer';
import { projects } from '../data/projects';

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Keep the document title in step with the project being viewed
  useEffect(() => {
    const previous = document.title;
    if (project) {
      document.title = `${project.title} | Ducati Mondani`;
    }
    return () => {
      document.title = previous;
    };
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-950 text-white">
        <Header />
        <div className="container mx-auto max-w-6xl px-4 pt-32">
          <h1 className="font-display text-4xl font-bold">Project not found</h1>
          <Link to="/" className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const heroImage = project.heroImage || project.sections[0]?.image || '';
  const heroAlt = project.heroAlt || project.sections[0]?.imageAlt || project.title;

  const photos = project.additionalPhotos ?? [];
  const videos = project.videos ?? [];
  const hasPhotos = photos.length > 0;
  const hasVideos = videos.length > 0;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />

      <main>
        {/* Hero — text and image side by side so the photo is never crop-starved */}
        <section className="blueprint-grid relative overflow-hidden border-b border-gray-800/60">
          <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="container relative mx-auto max-w-6xl px-4 pb-16 pt-28 md:pt-36">
            <Reveal>
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900/70 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-blue-500/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                <ArrowLeft className="h-4 w-4" />
                All projects
              </Link>
            </Reveal>

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
              <Reveal delay={80}>
                {project.role && (
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    {project.role}
                  </p>
                )}
                <h1 className="mt-3 font-display text-4xl font-bold leading-[1.08] md:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-gray-300">{project.description}</p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {project.tags.slice(0, 8).map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-sm text-blue-200"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal direction="right" delay={160}>
                <figure className="overflow-hidden rounded-2xl border border-gray-800 shadow-2xl shadow-blue-950/50">
                  <img
                    src={heroImage}
                    alt={heroAlt}
                    className="aspect-[4/3] w-full object-cover"
                    fetchPriority="high"
                  />
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        <div className="container mx-auto max-w-6xl px-4 pb-24 pt-16">
          {/* Quick facts — objective, role, constraints, fabrication, outcome */}
          {project.facts && project.facts.length > 0 && (
            <Reveal>
              <section aria-labelledby="project-overview" className="border-y border-gray-800 py-12">
                <h2
                  id="project-overview"
                  className="font-display text-sm font-bold uppercase tracking-[0.25em] text-cyan-400"
                >
                  Project Overview
                </h2>
                <dl className="mt-9 grid gap-x-16 gap-y-10 md:grid-cols-2">
                  {project.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                        {fact.label}
                      </dt>
                      <dd className="mt-3 leading-relaxed text-gray-300">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </Reveal>
          )}

          {/* Scope — resume-style bullets */}
          {project.highlights && project.highlights.length > 0 && (
            <Reveal delay={80}>
              <section aria-labelledby="project-scope" className="mt-12">
                <h2
                  id="project-scope"
                  className="font-display text-sm font-bold uppercase tracking-[0.25em] text-cyan-400"
                >
                  Scope
                </h2>
                <ul className="mt-6 grid gap-4 md:grid-cols-2 md:gap-x-14">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-gray-300">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          )}

          {/* Tools & technologies, grouped by discipline */}
          {project.toolGroups && project.toolGroups.length > 0 && (
            <Reveal delay={100}>
              <section aria-labelledby="project-tools" className="mt-12">
                <h2
                  id="project-tools"
                  className="font-display text-sm font-bold uppercase tracking-[0.25em] text-cyan-400"
                >
                  Tools &amp; Technologies
                </h2>
                <div className="mt-6 grid gap-5 md:grid-cols-3">
                  {project.toolGroups.map((group) => (
                    <div key={group.label} className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                        {group.label}
                      </h3>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-gray-700/80 bg-gray-800/60 px-3 py-1 text-xs font-medium text-gray-300"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          )}

          {/* Alternating narrative sections */}
          <div className="mt-24 space-y-24">
            {project.sections.map((section, index) => (
              <section
                key={index}
                aria-label={section.title}
                className={`grid items-center gap-12 md:grid-cols-2 ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                <Reveal
                  direction={index % 2 === 1 ? 'right' : 'left'}
                  className={index % 2 === 1 ? 'md:col-start-2' : ''}
                >
                  {project.sections.length > 1 && (
                    <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  )}
                  <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">{section.title}</h2>

                  <p className="mt-6 text-lg leading-relaxed text-gray-300">{section.description}</p>

                  <div className="mt-8 space-y-6">
                    {section.challenges && <DetailBlock label="Constraints" text={section.challenges} />}
                    {section.results && <DetailBlock label="Result" text={section.results} />}
                  </div>
                </Reveal>

                <Reveal
                  direction={index % 2 === 1 ? 'left' : 'right'}
                  delay={120}
                  className={index % 2 === 1 ? 'md:col-start-1' : ''}
                >
                  <figure className="overflow-hidden rounded-2xl border border-gray-800 shadow-2xl shadow-blue-950/40">
                    <img
                      src={section.image}
                      alt={section.imageAlt || section.title}
                      loading="lazy"
                      className="w-full"
                    />
                    {section.caption && (
                      <figcaption className="border-t border-gray-800 bg-gray-900/80 px-4 py-3 text-sm text-gray-400">
                        {section.caption}
                      </figcaption>
                    )}
                  </figure>
                </Reveal>
              </section>
            ))}
          </div>

          {/* Gallery */}
          {(hasPhotos || hasVideos) && (
            <div className="mt-28">
              <Reveal>
                <h2 className="text-center font-display text-3xl font-bold md:text-4xl">
                  {hasPhotos ? (
                    <>
                      Gallery &amp; <span className="text-gradient">Media</span>
                    </>
                  ) : (
                    <>
                      In <span className="text-gradient">Operation</span>
                    </>
                  )}
                </h2>
              </Reveal>

              <div className="mt-12 space-y-16">
                {hasPhotos && (
                  <section aria-label="Project photos">
                    <Reveal>
                      <h3 className="mb-6 flex items-center gap-2.5 font-display text-xl font-semibold text-gray-200">
                        <Camera className="h-5 w-5 text-cyan-400" />
                        Photos
                      </h3>
                    </Reveal>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      {photos.map((photo, index) => (
                        <Reveal key={photo.src} delay={index * 100} direction="scale">
                          <figure className="overflow-hidden rounded-2xl border border-gray-800 shadow-xl">
                            <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full" />
                            {photo.caption && (
                              <figcaption className="border-t border-gray-800 bg-gray-900/80 px-4 py-3 text-sm text-gray-400">
                                {photo.caption}
                              </figcaption>
                            )}
                          </figure>
                        </Reveal>
                      ))}
                    </div>
                  </section>
                )}

                {hasVideos && (
                  <section aria-label="Project videos">
                    {hasPhotos && (
                      <Reveal>
                        <h3 className="mb-6 flex items-center gap-2.5 font-display text-xl font-semibold text-gray-200">
                          <Film className="h-5 w-5 text-cyan-400" />
                          Videos
                        </h3>
                      </Reveal>
                    )}
                    <div className={`grid grid-cols-1 gap-8 ${videos.length > 1 ? 'md:grid-cols-2' : 'mx-auto max-w-3xl'}`}>
                      {videos.map((video, index) => (
                        <Reveal key={video.url} delay={index * 100} direction="scale">
                          <VideoPlayer
                            src={video.url}
                            poster={video.thumbnail}
                            title={video.title}
                            caption={video.caption}
                          />
                        </Reveal>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>
          )}

          {/* Next / previous navigation */}
          <ProjectNav currentId={project.id} />

          {project.link && (
            <div className="mt-16 text-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300"
              >
                View Project <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

const DetailBlock = ({ label, text }: { label: string; text: string }) => (
  <div className="border-l-2 border-blue-500/40 pl-5">
    <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">{label}</h3>
    <p className="mt-2.5 leading-relaxed text-gray-400">{text}</p>
  </div>
);

const ProjectNav = ({ currentId }: { currentId: string }) => {
  const index = projects.findIndex((p) => p.id === currentId);
  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  if (!previous && !next) return null;

  return (
    <nav aria-label="Project navigation" className="mt-24 grid gap-4 border-t border-gray-800 pt-10 sm:grid-cols-2">
      {previous ? (
        <Link
          to={`/project/${previous.id}`}
          className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-5 transition-colors hover:border-blue-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">Previous</span>
          <p className="mt-2 font-display font-semibold text-gray-200 group-hover:text-blue-400">{previous.title}</p>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          to={`/project/${next.id}`}
          className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-5 text-right transition-colors hover:border-blue-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 sm:col-start-2"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">Next</span>
          <p className="mt-2 font-display font-semibold text-gray-200 group-hover:text-blue-400">{next.title}</p>
        </Link>
      )}
    </nav>
  );
};

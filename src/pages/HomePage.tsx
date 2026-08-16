import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Linkedin,
  Mail,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  FileText,
  Briefcase,
} from 'lucide-react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import AnimatedCounter from '../components/AnimatedCounter';
import { projects } from '../data/projects';
import { experience } from '../data/experience';
import { skillGroups } from '../data/skills';

/** Capability strip — mechanical design tools lead, controls follow. */
const MARQUEE_ITEMS = [
  'SolidWorks',
  'Mechanical Design',
  'Sheet Metal',
  'GD&T',
  'Design for Manufacturing',
  'FEA',
  'Solid Edge',
  'CNC Machining',
  'Weldments',
  'Robotics',
  'Omron',
  'Universal Robots',
  'Allen-Bradley',
  'Ignition SCADA',
  'EPLAN',
  'EtherNet/IP',
  'Python',
];

/**
 * Measured from the start of the first professional role in industry — Manufacturing
 * Support Specialist at Vesuvius USA, January 2017 (per resume).
 */
const CAREER_START = new Date(2017, 0);
const yearsOfExperience = Math.floor(
  (Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
);

function HomePage() {
  const location = useLocation();

  // Support /#section deep links coming from other pages
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      // Wait a frame so the page has laid out before scrolling
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />

      <main id="top">
        {/* ============ HERO — full-bleed background video ============ */}
        <section
          className="relative flex min-h-[92vh] items-center overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <HeroVideo />

          {/* Scrims. The robot and arm hold to the left/centre-left of frame throughout this cut,
              so the copy sits right and the gradient weights that side. A light uniform pass
              underneath covers the opening shot, where the platform drifts closer to centre.
              Below lg the copy returns to the left, so the whole frame is dimmed instead. */}
          <div className="pointer-events-none absolute inset-0 bg-gray-950/80 lg:bg-gray-950/20" />
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-l from-gray-950 via-gray-950/65 to-transparent lg:block" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/55" />

          <div className="container relative mx-auto max-w-6xl px-4 pb-24 pt-32 md:pt-40">
            <div className="max-w-3xl lg:ml-auto">
              <Reveal>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-gray-950/60 px-4 py-1.5 text-sm text-blue-200 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                  </span>
                  Mechanical Design · Robotics · Automation
                </div>
              </Reveal>

              <Reveal delay={100}>
                <p className="font-display text-base font-semibold uppercase tracking-[0.2em] text-gray-300">
                  Ducati Mondani
                </p>
                <h1
                  id="hero-heading"
                  className="mt-3 font-display text-[2.4rem] font-bold leading-[1.06] sm:text-5xl lg:text-[3.35rem]"
                >
                  Mechanical Design Engineer
                  <span className="mt-2 block text-gradient">Robotics &amp; Systems Engineering</span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
                  I design and develop complex electromechanical and robotic systems from concept
                  through fabrication, integration, and commissioning.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:shadow-blue-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                  >
                    View Projects
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="/Ducati_Mondani_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-600 bg-gray-950/70 px-7 py-3 font-semibold text-gray-100 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                  >
                    <FileText className="h-4 w-4" />
                    View Resume
                  </a>
                  <div className="flex items-center gap-3">
                    <SocialLink href="https://www.linkedin.com/in/ducatimondani/" label="LinkedIn profile">
                      <Linkedin className="h-5 w-5" />
                    </SocialLink>
                    <SocialLink href="mailto:ducatimondani@gmail.com" label="Email Ducati Mondani">
                      <Mail className="h-5 w-5" />
                    </SocialLink>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Caption identifying the footage, so the hero doubles as project evidence */}
          <p className="pointer-events-none absolute bottom-8 left-6 hidden max-w-[16rem] text-xs leading-relaxed text-gray-300 lg:block">
            Mobile collaborative robotic platform — designed, fabricated, and commissioned as
            primary engineer
          </p>

          <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
            <ChevronDown className="h-6 w-6 animate-bounce text-gray-500" />
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="border-y border-gray-800/60 bg-gray-950 py-10" aria-label="Career at a glance">
          <div className="container mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                <StatCard
                  value={<AnimatedCounter value={yearsOfExperience} suffix="+" />}
                  label="Years in industry"
                />
                <StatCard value={<AnimatedCounter value={10} suffix="+" />} label="Major installations led" />
                <StatCard value={<AnimatedCounter value={1} prefix="$" suffix="M+" />} label="Peak project value" />
                <StatCard value={<AnimatedCounter value={30} suffix="+" />} label="Precision motors delivered" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ CAPABILITY STRIP ============ */}
        <section className="border-y border-gray-800/60 bg-gray-900/40 py-5" aria-hidden="true">
          <div className="pause-on-hover overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-10">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-10 whitespace-nowrap text-sm font-medium uppercase tracking-widest text-gray-500"
                >
                  {item}
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500/50" />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FEATURED PROJECTS ============ */}
        <section id="projects" className="relative bg-gray-900/30 py-24" aria-labelledby="projects-heading">
          <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />
          <div className="container mx-auto max-w-6xl px-4">
            <SectionTitle
              id="projects-heading"
              eyebrow="Portfolio"
              title="Featured Projects"
              subtitle="Hardware I designed, detailed for manufacture, and saw through fabrication, integration, and commissioning."
            />

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <Reveal
                  key={project.id}
                  delay={index === 0 ? 0 : 100}
                  className={index === 0 ? 'md:col-span-2' : ''}
                >
                  <ProjectCard {...project} featured={index === 0} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ EXPERIENCE ============ */}
        <section id="experience" className="relative py-24" aria-labelledby="experience-heading">
          <div className="container mx-auto max-w-6xl px-4">
            <SectionTitle
              id="experience-heading"
              eyebrow="Career"
              title="Experience"
              subtitle="Hands-on manufacturing to mechanical and electrical engineering, project engineering, and systems engineering."
            />

            <div className="relative mt-16 space-y-8">
              {/* Timeline rail */}
              <div className="absolute bottom-10 left-[19px] top-4 hidden w-px bg-gradient-to-b from-blue-500 via-cyan-500/40 to-transparent md:block" />

              {experience.map((entry) => (
                <ExperienceCard key={`${entry.company}-${entry.title}`} entry={entry} />
              ))}
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" className="relative bg-gray-900/30 py-24" aria-labelledby="about-heading">
          <div className="container mx-auto max-w-6xl px-4">
            <SectionTitle
              id="about-heading"
              eyebrow="About"
              title="Engineering Across Disciplines"
              subtitle="Mechanical design is the centre of my work — the rest of the stack is what lets me design machines that actually run."
            />

            <Reveal>
              <div className="mx-auto mt-14 max-w-3xl space-y-6 text-lg leading-relaxed text-gray-400">
                <p>
                  I am a Systems Engineer with a mechanical engineering background and hands-on
                  experience designing, building, integrating, and troubleshooting complex
                  electromechanical systems.
                </p>
                <p>
                  My work spans mechanical design, robotics, electrical systems, industrial
                  automation, controls, and software integration. I particularly enjoy projects that
                  begin with a mechanical concept and require taking a design all the way through
                  CAD, fabrication, assembly, testing, and commissioning.
                </p>
                <p className="text-gray-300">
                  My experience with electrical systems, PLCs, robotics, SCADA, and software allows
                  me to design mechanical systems with a strong understanding of how the complete
                  machine will ultimately operate.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <dl className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
                <AboutFact term="Education" detail="BS Mechanical Engineering, University of Nevada, Reno" />
                <AboutFact term="Minors" detail="Manufacturing Quality & Mathematics" />
                <AboutFact
                  term="Certifications"
                  detail="SolidWorks Associate (CSWA) · Inductive Automation Ignition Core"
                />
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ============ SKILLS ============ */}
        <section id="skills" className="py-24" aria-labelledby="skills-heading">
          <div className="container mx-auto max-w-6xl px-4">
            <SectionTitle
              id="skills-heading"
              eyebrow="Toolbox"
              title="Technical Skills"
              subtitle="Grouped by discipline, in the order I use them."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {skillGroups.map((group, index) => (
                <Reveal key={group.title} delay={index * 90}>
                  <div className="glow-card h-full p-7">
                    <h3 className="font-display text-lg font-bold text-white">{group.title}</h3>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-gray-700 bg-gray-800/60 px-3.5 py-1.5 text-sm text-gray-300"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="relative overflow-hidden py-24" aria-labelledby="contact-heading">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="container relative mx-auto max-w-4xl px-4">
            <Reveal direction="scale">
              <div className="rounded-3xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 p-10 text-center shadow-2xl shadow-blue-950/50 md:p-16">
                <h2 id="contact-heading" className="font-display text-3xl font-bold md:text-5xl">
                  Let&apos;s talk <span className="text-gradient">engineering</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
                  I am open to mechanical design, product development, machine design, and robotics
                  engineering roles. Reach out any time.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="mailto:ducatimondani@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:shadow-blue-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                  >
                    <Mail className="h-5 w-5" />
                    ducatimondani@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ducatimondani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900/60 px-8 py-3.5 font-semibold text-gray-200 transition-all duration-300 hover:border-blue-500/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                  <a
                    href="/Ducati_Mondani_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900/60 px-8 py-3.5 font-semibold text-gray-200 transition-all duration-300 hover:border-blue-500/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                  >
                    <FileText className="h-5 w-5" />
                    Resume
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ---------- Local building blocks ---------- */

/**
 * Full-bleed hero background video of the mobile manipulator in operation.
 * Muted and loops — muted is a hard browser requirement for autoplay, and it also
 * means the page never makes noise on load. Falls back to the poster frame for
 * anyone who has asked for reduced motion.
 *
 * Short, sped-up cut supplied specifically for the hero (~1.6 MB) — the full-length walkthrough
 * lives on the project page as a click-to-play video rather than autoplaying on every visit.
 */
const HeroVideo = () => {
  const ref = useRef<HTMLVideoElement>(null);
  const [motionOk, setMotionOk] = useState(true);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      setMotionOk(!query.matches);
      if (query.matches) {
        ref.current?.pause();
      } else {
        // Autoplay can still be refused (e.g. battery saver); the poster stays up.
        ref.current?.play().catch(() => undefined);
      }
    };
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      poster="/images/mobile-manipulator/hero-poster.jpg"
      autoPlay={motionOk}
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/videos/mobile-manipulator-hero.mp4" type="video/mp4" />
    </video>
  );
};

const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    aria-label={label}
    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-800 bg-gray-900/60 text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/60 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const StatCard = ({ value, label }: { value: React.ReactNode; label: string }) => (
  <div className="glass-card rounded-2xl p-6 text-center">
    <p className="font-display text-3xl font-bold text-gradient md:text-4xl">{value}</p>
    <p className="mt-2 text-sm text-gray-400">{label}</p>
  </div>
);

const AboutFact = ({ term, detail }: { term: string; detail: string }) => (
  <div className="glass-card rounded-2xl p-5">
    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">{term}</dt>
    <dd className="mt-2 text-sm leading-relaxed text-gray-300">{detail}</dd>
  </div>
);

const SectionTitle = ({
  id,
  eyebrow,
  title,
  subtitle,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}) => (
  <Reveal>
    <div className="mx-auto max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">{eyebrow}</p>
      <h2 id={id} className="font-display text-3xl font-bold md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-gray-400">{subtitle}</p>
    </div>
  </Reveal>
);

const VISIBLE_BULLETS = 3;

const ExperienceCard = ({ entry }: { entry: (typeof experience)[number] }) => {
  const [expanded, setExpanded] = useState(false);
  const isFeatured = entry.tier === 'featured';
  const collapsible = isFeatured && entry.bullets.length > VISIBLE_BULLETS;
  const visible = collapsible && !expanded ? entry.bullets.slice(0, VISIBLE_BULLETS) : entry.bullets;

  return (
    <Reveal>
      <div className="relative md:pl-16">
        {/* Timeline node — larger and brighter for current/primary roles */}
        <div
          className={`absolute left-0 hidden items-center justify-center rounded-full border bg-gray-950 md:flex ${
            isFeatured
              ? 'top-7 h-10 w-10 border-blue-500/60 text-blue-400 shadow-lg shadow-blue-900/50'
              : 'left-[9px] top-7 h-5 w-5 border-gray-700 text-gray-500'
          }`}
        >
          {isFeatured && <Briefcase className="h-4 w-4" />}
        </div>

        <div className={`glow-card ${isFeatured ? 'p-8' : 'border-gray-800/70 bg-gray-900/50 p-6'}`}>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className={`font-display font-bold ${isFeatured ? 'text-2xl' : 'text-lg text-gray-200'}`}>
                {entry.title}
              </h3>
              <p className={`mt-1 text-gray-400 ${isFeatured ? '' : 'text-sm'}`}>{entry.company}</p>
            </div>
            {entry.period && (
              <span
                className={`rounded-full px-4 py-1.5 font-medium ${
                  isFeatured
                    ? 'border border-blue-500/30 bg-blue-500/10 text-sm text-blue-300'
                    : 'border border-gray-700 bg-gray-800/50 text-xs text-gray-400'
                }`}
              >
                {entry.period}
              </span>
            )}
          </div>

          {entry.summary && <p className="mt-5 leading-relaxed text-gray-300">{entry.summary}</p>}

          <ul className={`space-y-3 ${isFeatured ? 'mt-6' : 'mt-4'}`}>
            {visible.map((point, index) => (
              <li key={index} className={`flex gap-3 ${isFeatured ? 'text-gray-400' : 'text-sm text-gray-400'}`}>
                <span
                  className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                    isFeatured ? 'bg-gradient-to-r from-blue-500 to-cyan-400' : 'bg-gray-600'
                  }`}
                />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          {collapsible && (
            <button
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              className="mt-6 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-blue-400 transition-colors hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              {expanded ? (
                <>
                  Show less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show all {entry.bullets.length} highlights <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </Reveal>
  );
};

export default HomePage;

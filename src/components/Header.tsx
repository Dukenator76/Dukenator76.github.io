import { useEffect, useState } from 'react';
import { Menu, X, Settings, FileText } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const SECTIONS = ['projects', 'experience', 'about', 'contact'] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      setScrolled(scrollTop > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track which section is in view (home page only)
  useEffect(() => {
    if (!isHomePage) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHomePage]);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    if (!isHomePage) {
      navigate(`/#${sectionId}`);
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNameClick = () => {
    setIsOpen(false);
    if (!isHomePage) {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled ? 'border-b border-gray-800/80 bg-gray-950/80 shadow-lg shadow-gray-950/50 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-blue-600 focus:px-5 focus:py-2 focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      {/* Scroll progress bar */}
      <div
        className="absolute left-0 top-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transition-transform duration-100"
        style={{ width: '100%', transform: `scaleX(${progress})`, transformOrigin: 'left' }}
      />

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handleNameClick}
            aria-label="Ducati Mondani — back to top"
            className="group flex items-center space-x-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            <Settings className="h-8 w-8 text-blue-500 transition-transform duration-700 group-hover:rotate-180" />
            <span className="font-display text-xl font-bold text-white">
              Ducati<span className="text-gradient"> Mondani</span>
            </span>
          </button>

          <div className="hidden items-center space-x-1 md:flex">
            {SECTIONS.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                aria-current={activeSection === id && isHomePage ? 'true' : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 ${
                  activeSection === id && isHomePage
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-gray-300 hover:bg-gray-800/60 hover:text-white'
                }`}
              >
                {id}
              </button>
            ))}
            <a
              href="/Ducati_Mondani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 flex items-center space-x-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:shadow-blue-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              <FileText className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </div>

          <button
            className="rounded-md p-1 text-white transition-colors hover:bg-gray-800 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`grid transition-all duration-300 ease-out md:hidden ${
            isOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-1 rounded-2xl border border-gray-800 bg-gray-900/90 p-3 backdrop-blur-md">
              {SECTIONS.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full rounded-lg px-4 py-2.5 text-left capitalize text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                >
                  {id}
                </button>
              ))}
              <a
                href="/Ducati_Mondani_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2.5 font-semibold text-white"
              >
                <FileText className="h-4 w-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

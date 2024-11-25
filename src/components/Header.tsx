import React from 'react';
import { Menu, X, Settings, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      // If not on home page, navigate to home page with section in URL
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If on home page, scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNameClick = () => {
    if (!isHomePage) {
      // If not on home page, navigate to home
      window.location.href = '/';
    } else {
      // If on home page, smooth scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Add a small delay to let the scroll finish before focusing the email button
    setTimeout(() => {
      const emailButton = document.querySelector('a[href^="mailto:"]');
      if (emailButton) {
        emailButton.classList.remove('animate-custom-flash');
        // Trigger reflow to restart animation
        void emailButton.offsetWidth;
        emailButton.classList.add('animate-custom-flash');
        setTimeout(() => {
          emailButton.classList.remove('animate-custom-flash');
        }, 1000);
      }
    }, 500);
  };

  return (
    <header className="fixed w-full bg-gray-950/95 backdrop-blur-sm z-50 border-b border-gray-900">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={handleNameClick} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Settings className="w-8 h-8 text-blue-500 animate-spin-slow" />
            <span className="text-xl font-bold text-white">Ducati Mondani</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink onClick={() => scrollToSection('experience')}>Experience</NavLink>
            <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
            <NavLink onClick={() => scrollToSection('skills')}>Skills</NavLink>
            <NavLink onClick={scrollToTop}>Contact</NavLink>
            <a 
              href="/Ducati_Mondani_Resume.pdf"
              download
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('/Ducati_Mondani_Resume.pdf', '_blank');
              }}
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <MobileNavLink onClick={() => { scrollToSection('about'); setIsOpen(false); }}>About</MobileNavLink>
            <MobileNavLink onClick={() => { scrollToSection('experience'); setIsOpen(false); }}>Experience</MobileNavLink>
            <MobileNavLink onClick={() => { scrollToSection('projects'); setIsOpen(false); }}>Projects</MobileNavLink>
            <MobileNavLink onClick={() => { scrollToSection('skills'); setIsOpen(false); }}>Skills</MobileNavLink>
            <MobileNavLink onClick={() => { scrollToTop(); setIsOpen(false); }}>Contact</MobileNavLink>
            <a 
              href="/Ducati_Mondani_Resume.pdf"
              download
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors w-full"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('/Ducati_Mondani_Resume.pdf', '_blank');
                setIsOpen(false);
              }}
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

const NavLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="text-gray-300 hover:text-white transition-colors"
  >
    {children}
  </button>
);

const MobileNavLink = ({ 
  onClick,
  children,
}: { 
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className="block w-full text-left text-gray-300 hover:text-white transition-colors"
  >
    {children}
  </button>
);
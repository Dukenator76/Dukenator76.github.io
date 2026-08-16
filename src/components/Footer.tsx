import { Linkedin, Mail, Settings, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/80 bg-gray-950">
      <div className="container mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <Settings className="h-6 w-6 text-blue-500" />
            <span className="font-display font-bold text-white">
              Ducati<span className="text-gradient"> Mondani</span>
            </span>
          </div>

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Ducati Mondani · Mechanical Design &amp; Systems Engineering
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/ducatimondani/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-all duration-300 hover:border-blue-500/60 hover:text-blue-400"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:ducatimondani@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-all duration-300 hover:border-blue-500/60 hover:text-blue-400"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:text-blue-400"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

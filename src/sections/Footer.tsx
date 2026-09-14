import React from 'react';
import { Terminal, Github, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      role="contentinfo"
      className="bg-[var(--bg-surface)] text-[var(--text-secondary)] border-t border-[var(--border-subtle)] py-12 text-sm transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[var(--border-subtle)]">
          {/* Brand & Persona */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center space-x-2 text-[var(--text-primary)]">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Terminal className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="font-display font-bold text-lg text-[var(--text-primary)]">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
              {PERSONAL_INFO.role}. 5th-year undergraduate based in Ethiopia, completing final degree requirements and engineering practical software.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] block mb-2">
              Navigation
            </span>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-emerald-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-500 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-emerald-500 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#featured-project" className="hover:text-emerald-500 transition-colors">
                  Featured Capstone
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-emerald-500 transition-colors">
                  All Projects
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-emerald-500 transition-colors">
                  Development Journey
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-emerald-500 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Top */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] block mb-2">
              Connect
            </span>
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-2 text-[var(--text-secondary)] hover:text-emerald-500 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[var(--text-secondary)] hover:text-emerald-500 transition-colors"
                title="GitHub Profile Placeholder"
              >
                <Github className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                <span>GitHub (Placeholder)</span>
              </a>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="interactive-btn group inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] bg-[var(--bg-muted)] transition-all"
                aria-label="Scroll to top of page"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-4">
          <p>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Designed for accessibility, transparency, and honest representation.
          </p>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Terminal, ArrowUpRight, Github } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#education', label: 'Education' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileDrawerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for sticky shadow & active link detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const scrollPosition = window.scrollY + 120;
      for (const link of NAV_LINKS) {
        const targetId = link.href.replace('#', '');
        const sectionEl = document.getElementById(targetId);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          const height = sectionEl.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(targetId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center space-x-2.5 text-[var(--text-primary)] group focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none rounded-md px-1 py-0.5"
            aria-label="Nigusu Tigabu - Return to top"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center text-white shadow-xs group-hover:bg-emerald-700 transition-colors">
              <Terminal className="w-4 h-4" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-[var(--text-primary)] leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                Software Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-navigation"
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center space-x-1"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link-animated px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none ${
                    isActive
                      ? 'text-emerald-600 dark:text-emerald-400 font-semibold is-active'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Theme Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <ThemeToggle />

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-btn hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-card)] hover:bg-[var(--bg-muted)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
              title="GitHub Profile"
              aria-label="Visit Nigusu's GitHub profile (opens in new tab)"
            >
              <Github className="w-3.5 h-3.5" aria-hidden="true" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="interactive-btn hidden sm:inline-flex items-center px-3.5 py-1.5 text-xs font-semibold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-xs focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
            >
              Get in Touch
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              ref={menuButtonRef}
              type="button"
              id="mobile-menu-toggle-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close main navigation menu' : 'Open main navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              className="lg:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-muted)] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none border border-[var(--border-subtle)]"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Modal */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex justify-end"
          onClick={closeMenu}
          aria-hidden={!mobileMenuOpen}
        >
          <div
            ref={mobileDrawerRef}
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile site navigation"
            className="w-4/5 max-w-sm h-full bg-[var(--bg-primary)] p-6 shadow-2xl border-l border-[var(--border-subtle)] flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[var(--border-subtle)]">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-md bg-emerald-600 flex items-center justify-center text-white">
                    <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span className="font-bold text-sm text-[var(--text-primary)]">
                    {PERSONAL_INFO.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="p-1.5 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Status Note */}
              <div className="my-4 p-3 rounded-lg bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] flex items-center justify-between">
                <div>
                  <span className="font-semibold text-[var(--text-primary)] block">5th Year Student</span>
                  1 semester remaining
                </div>
                <ThemeToggle showLabel={true} />
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col space-y-1 mt-2" aria-label="Mobile Navigation Links">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="px-3 py-2.5 rounded-md text-base font-medium text-[var(--text-secondary)] hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-[var(--bg-muted)] transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile Footer Actions */}
            <div className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
              <a
                href="#contact"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center py-2.5 px-4 text-sm font-semibold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 transition-colors shadow-xs"
              >
                Contact Me
              </a>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center space-x-2 py-2 px-4 text-sm font-medium rounded-lg text-[var(--text-secondary)] bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:bg-[var(--bg-muted)]"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

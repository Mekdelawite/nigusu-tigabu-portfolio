import React, { useState, useEffect } from 'react';
import {
  FolderGit2,
  Mail,
  Github,
  ExternalLink,
  Copy,
  Check,
  MapPin,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Code2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroVisual } from '../components/HeroVisual';

interface HeroProps {
  onCopyEmail: () => void;
  emailCopied: boolean;
}

const ROTATING_ROLES = [
  'Software Engineering Student',
  'Backend Developer',
  'AI & Machine Learning Enthusiast',
  'Aspiring Software Developer',
];

export const Hero: React.FC<HeroProps> = ({ onCopyEmail, emailCopied }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isRoleTransitioning, setIsRoleTransitioning] = useState(false);

  // Staggered entrance timing on mount
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // Quick microtask trigger for staggered entry
    const timer = setTimeout(() => setIsMounted(true), 40);
    return () => clearTimeout(timer);
  }, []);

  // Text Rotator with fade-in/fade-out
  useEffect(() => {
    // Respect reduced motion: don't rotate if reduced motion preferred
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const interval = setInterval(() => {
      setIsRoleTransitioning(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
        setIsRoleTransitioning(false);
      }, 250);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-24 lg:pb-32 overflow-hidden"
    >
      {/* =========================================================================
          ANIMATED HERO BACKGROUND & LIGHT EFFECTS (User Requirements #4, #5, #6)
          ========================================================================= */}
      
      {/* Animated gentle gradient mesh across hero */}
      <div
        className="absolute inset-0 pointer-events-none -z-20 opacity-60 dark:opacity-40 hero-gradient-animated"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16, 185, 129, 0.15), transparent 70%), radial-gradient(circle at 85% 30%, rgba(14, 165, 233, 0.08), transparent 50%), radial-gradient(circle at 15% 70%, rgba(168, 85, 247, 0.06), transparent 50%)',
        }}
        aria-hidden="true"
      />

      {/* Large Soft Glow directly behind the main heading (User Requirement #6) */}
      <div
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[360px] bg-emerald-500/15 dark:bg-emerald-500/20 rounded-full blur-3xl pointer-events-none -z-10 hero-glow-pulse"
        aria-hidden="true"
      />

      {/* Secondary accent ambient light */}
      <div
        className="absolute top-1/2 right-12 w-[340px] h-[340px] bg-sky-500/10 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10 float-reverse"
        aria-hidden="true"
      />

      {/* Subtle modern dot matrix grid */}
      <div
        className="absolute inset-0 -z-10 opacity-30 dark:opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px',
          color: 'var(--border-hover)',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: HERO CONTENT & STAGGERED ENTRANCE
              ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 1. Modern Hero Badge (User Requirement: AI • BACKEND • FULL-STACK • BIG DATA) */}
            <div
              className={`inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full text-xs font-semibold theme-badge font-mono mb-6 shadow-sm transition-all duration-500 ease-out ${
                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>AI • BACKEND • FULL-STACK • BIG DATA</span>
            </div>

            {/* 2. Main Hero Heading (User Requirement: NIGUSU TIGABU) */}
            <h1
              id="hero-heading"
              style={{ transitionDelay: '100ms' }}
              className={`font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] mb-4 text-[var(--text-primary)] transition-all duration-500 ease-out ${
                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {PERSONAL_INFO.name}
            </h1>

            {/* 3. Sub-headline with Animated Text Rotator */}
            <div
              style={{ transitionDelay: '200ms' }}
              className={`min-h-[2.25rem] flex items-center mb-6 transition-all duration-500 ease-out ${
                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {/* Screen reader static description for accessible semantics */}
              <span className="sr-only">
                Software Engineering Student &amp; Aspiring Software Developer
              </span>

              {/* Visual animated rotating text */}
              <h2
                aria-hidden="true"
                className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400 flex items-center"
              >
                <span
                  className={`inline-block transition-all duration-300 transform ${
                    isRoleTransitioning
                      ? 'opacity-0 -translate-y-1.5'
                      : 'opacity-100 translate-y-0'
                  }`}
                >
                  {ROTATING_ROLES[roleIndex]}
                </span>
              </h2>
            </div>

            {/* 4. Supporting Description (User Requirement) */}
            <p
              style={{ transitionDelay: '300ms' }}
              className={`text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-8 transition-all duration-500 ease-out ${
                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              I build practical software systems and AI-powered applications that turn real-world problems into useful technology.
            </p>

            {/* Quick Context Highlights */}
            <div
              style={{ transitionDelay: '350ms' }}
              className={`grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-xl mb-8 text-xs sm:text-sm transition-all duration-500 ease-out ${
                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="theme-card flex items-center space-x-3 p-3.5 shadow-2xs group">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] text-[var(--text-muted)] block font-medium">Location</span>
                  <span className="font-semibold text-[var(--text-primary)]">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              <div className="theme-card flex items-center space-x-3 p-3.5 shadow-2xs group">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] text-[var(--text-muted)] block font-medium">Degree Program</span>
                  <span className="font-semibold text-[var(--text-primary)]">B.Sc. Software Engineering</span>
                </div>
              </div>
            </div>

            {/* 5. Premium Action Buttons with Micro-interactions (User Requirement #12) */}
            <div
              style={{ transitionDelay: '400ms' }}
              className={`flex flex-wrap items-center gap-3.5 w-full sm:w-auto transition-all duration-500 ease-out ${
                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="#projects"
                id="hero-view-projects-button"
                className="btn-premium-primary group shadow-md"
              >
                <FolderGit2 className="w-4 h-4" aria-hidden="true" />
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                id="hero-contact-button"
                className="btn-premium-secondary group"
              >
                <Mail className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span>Contact Me</span>
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-button"
                className="btn-premium-secondary group"
                aria-label="Visit Nigusu's GitHub profile (external link)"
              >
                <Github className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </a>

              {/* Copy Email Quick Utility */}
              <button
                type="button"
                onClick={onCopyEmail}
                id="hero-copy-email-button"
                className="interactive-btn inline-flex items-center justify-center space-x-1.5 px-3.5 py-3 rounded-xl text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] border border-transparent hover:border-[var(--border-subtle)] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
                title="Click to copy email address"
                aria-label={emailCopied ? 'Email copied' : `Copy email: ${PERSONAL_INFO.email}`}
              >
                {emailCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: INTERACTIVE HERO VISUAL (User Requirements #9, #10, #11)
              ========================================================================= */}
          <div className="lg:col-span-5 w-full">
            <HeroVisual isMounted={isMounted} />
          </div>

        </div>
      </div>
    </section>
  );
};


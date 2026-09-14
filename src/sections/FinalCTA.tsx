import React from 'react';
import { ArrowRight, Mail, Sparkles, Send } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FinalCTAProps {
  onCopyEmail?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = () => {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
  });

  return (
    <section
      aria-label="Final Call to Action"
      className="py-16 md:py-24 relative overflow-hidden border-t border-[var(--border-subtle)]"
    >
      {/* Animated Glowing Background (User Requirement: Glowing background) */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(16, 185, 129, 0.12), rgba(14, 165, 233, 0.06), transparent 75%)',
        }}
        aria-hidden="true"
      />

      {/* Radiant ambient glow orbs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10 hero-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/4 w-[300px] h-[250px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10 float-satellite-1"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`relative rounded-3xl p-8 sm:p-12 md:p-16 text-center border border-emerald-500/30 bg-gradient-to-b from-[var(--bg-card)]/90 to-[var(--bg-secondary)]/90 backdrop-blur-md shadow-2xl overflow-hidden transition-all duration-700 reveal-item ${
            isRevealed ? 'is-revealed' : ''
          }`}
        >
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/20 to-transparent pointer-events-none rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-sky-500/15 to-transparent pointer-events-none rounded-tr-full" />

          {/* Status Chip */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <span>OPEN FOR OPPORTUNITIES • ETHIOPIA &amp; REMOTE</span>
          </div>

          {/* Main Headline (User Requirement: Have an idea, project, or opportunity? Let's talk.) */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-5 max-w-2xl mx-auto leading-tight">
            Have an idea, project, or opportunity?{' '}
            <span className="text-emerald-600 dark:text-emerald-400">Let&#39;s talk.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you are discussing engineering roles, exploring research collaborations in AI &amp; agricultural computer vision, or building distributed systems.
          </p>

          {/* Action Button (User Requirement: Button 'Contact Me →') */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              id="final-cta-contact-button"
              className="interactive-btn group/cta w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-5 h-5 transform group-hover/cta:translate-x-1.5 transition-transform duration-200" aria-hidden="true" />
            </a>

            <a
              href="mailto:nigusu.tigabu.dev@gmail.com"
              className="interactive-btn group w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-2xl text-sm font-semibold text-[var(--text-primary)] bg-[var(--bg-card)] hover:bg-[var(--bg-muted)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              <span>nigusu.tigabu.dev@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import {
  Milestone,
  CheckCircle2,
  BookOpen,
  Layers,
  BrainCircuit,
  Sparkles,
  GitBranch,
} from 'lucide-react';
import { JOURNEY_DATA } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Journey: React.FC = () => {
  const { ref: timelineRef, isRevealed: timelineRevealed } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="py-16 md:py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Accent Line Animation */}
        <SectionHeader
          id="journey-heading"
          badgeText="Honest Progression"
          badgeIcon={<Milestone className="w-3.5 h-3.5" aria-hidden="true" />}
          title="Learning &amp; Development Journey"
          description="As a 5th-year Software Engineering student approaching graduation, my background is rooted in academic computer science and intensive self-driven development of practical software."
          className="max-w-3xl mb-12"
        />

        {/* Timeline Container with Staggered Scroll Reveal */}
        <div
          ref={timelineRef}
          className="relative border-l-2 border-[var(--border-subtle)] ml-4 md:ml-6 space-y-12"
        >
          {JOURNEY_DATA.map((item, idx) => (
            <div
              key={item.id}
              style={{ transitionDelay: `${idx * 120}ms` }}
              className={`relative pl-8 sm:pl-10 group reveal-item ${
                timelineRevealed ? 'is-revealed' : ''
              }`}
            >
              {/* Timeline Marker Bullet with Ripple/Glow */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-surface)] border-2 border-emerald-500 group-hover:bg-emerald-500 group-hover:scale-125 transition-all duration-300 shadow-2xs group-hover:shadow-[0_0_12px_rgba(16,185,129,0.5)]" />

              {/* Phase Header */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  {item.phase}
                </span>
                <span className="text-[var(--text-muted)]">•</span>
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-[var(--bg-muted)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                  {item.period}
                </span>
              </div>

              {/* Title & Card with Hover Motion */}
              <div className="theme-card p-6 shadow-2xs hover:shadow-xl dark:hover:shadow-emerald-950/20 group-hover:border-emerald-500/40 hover:-translate-y-1.5 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-3">
                  {item.focus}
                </p>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Specific key accomplishments */}
                <div className="space-y-2 mb-4">
                  <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider block">
                    Key Competencies Developed:
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech badges with Micro Hover */}
                <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] text-[var(--text-muted)] mr-1">Tools practiced:</span>
                  {item.technologiesUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-muted)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-emerald-500/50 hover:text-[var(--text-primary)] hover:-translate-y-0.5 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { GraduationCap, BookOpen, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Education: React.FC = () => {
  const { ref: cardRef, isRevealed: cardRevealed } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-16 md:py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Accent Line Animation */}
        <SectionHeader
          id="education-heading"
          badgeText="Academic Background"
          badgeIcon={<GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />}
          title="Formal Software Engineering Education"
          description="A comprehensive 5-year curriculum combining theoretical computer science, software engineering principles, and applied system design."
          className="max-w-3xl mb-12"
        />

        {/* Education Highlight Card with Scroll Reveal */}
        <div
          ref={cardRef}
          className={`theme-card p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all duration-300 reveal-item ${
            cardRevealed ? 'is-revealed' : ''
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[var(--border-subtle)]">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 mb-3 animate-pulse">
                {EDUCATION_DATA.currentYear}
              </span>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">
                {EDUCATION_DATA.degree}
              </h3>
              <p className="text-sm font-medium text-[var(--text-secondary)] mb-2">
                {EDUCATION_DATA.field}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)]">
                <div className="flex items-center space-x-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  <span>{EDUCATION_DATA.location}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  <span>Currently completing final year with one semester remaining</span>
                </div>
              </div>
            </div>

            {/* Status callout */}
            <div className="p-4 rounded-xl bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] max-w-sm">
              <span className="font-bold text-[var(--text-primary)] block mb-1">
                Academic Standing
              </span>
              Currently completing my final year with one semester remaining before official graduation.
            </div>
          </div>

          {/* Key coursework list */}
          <div className="pt-6">
            <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-4 flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <span>Relevant Coursework &amp; Curricular Foundations</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {EDUCATION_DATA.coursework.map((course, idx) => (
                <div
                  key={idx}
                  style={{ transitionDelay: `${idx * 40}ms` }}
                  className={`flex items-center space-x-2 p-3 rounded-lg bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-secondary)] hover:border-emerald-500/40 hover:bg-emerald-500/5 hover:-translate-y-0.5 transition-all duration-200 cursor-default reveal-item ${
                    cardRevealed ? 'is-revealed' : ''
                  }`}
                >
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" aria-hidden="true" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

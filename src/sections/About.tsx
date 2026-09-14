import React from 'react';
import {
  GraduationCap,
  BrainCircuit,
  Laptop,
  Globe2,
  Compass,
  Sparkles,
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const About: React.FC = () => {
  const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 md:py-24 border-t border-[var(--border-subtle)] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Accent Line Animation */}
        <SectionHeader
          id="about-heading"
          badgeText="About Me"
          badgeIcon={<Compass className="w-3.5 h-3.5" aria-hidden="true" />}
          title="Engineering Practical Solutions for Real-World Problems"
        />

        {/* Narrative & Information Card Grid with Scroll Reveal */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          {/* Left Column: Short Professional Introduction */}
          <div
            className={`lg:col-span-7 space-y-5 text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed slide-in-left-item ${
              contentRevealed ? 'is-revealed' : ''
            }`}
          >
            <p>
              I am an Ethiopian Software Engineering student in my 5th year, with one semester remaining before graduation. My work is focused on becoming a practical software developer who builds reliable, useful applications rather than purely academic exercises.
            </p>

            <p>
              Throughout my degree, I have developed strong foundations in computer science, software architecture, relational database engineering, and full-stack development. I build backend services using <strong className="text-[var(--text-primary)] font-semibold">Python &amp; Flask</strong>, design database schemas with <strong className="text-[var(--text-primary)] font-semibold">PostgreSQL</strong>, create responsive interfaces with <strong className="text-[var(--text-primary)] font-semibold">React</strong>, and deploy computer vision models with <strong className="text-[var(--text-primary)] font-semibold">TensorFlow &amp; MobileNetV2</strong>.
            </p>

            <p>
              My primary technical focus is my final-year capstone project: an <strong className="text-[var(--text-primary)] font-semibold">AI-Based Maize Disease Detection System</strong> tailored for Ethiopian agriculture. By pairing explainable deep learning (Grad-CAM) with bilingual recommendations in English and Amharic, the system provides actionable diagnostics for smallholder farmers.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-[var(--text-muted)] border-t border-[var(--border-subtle)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>Actively seeking junior software developer roles, internships, and collaborative projects.</span>
            </div>
          </div>

          {/* Right Column: Beautiful Information Card */}
          <div
            className={`lg:col-span-5 slide-in-right-item ${
              contentRevealed ? 'is-revealed' : ''
            }`}
          >
            <div className="theme-card p-6 sm:p-7 relative overflow-hidden shadow-xs hover:shadow-md transition-all">
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />

              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Quick Profile Summary</span>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                Developer Identity &amp; Ambition
              </h3>

              <div className="space-y-3.5">
                {/* 1. Software Engineering Student */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[var(--bg-muted)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">
                      Software Engineering Student
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                      5th-year undergraduate student in Ethiopia with one semester remaining until graduation.
                    </p>
                  </div>
                </div>

                {/* 2. AI & Machine Learning */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[var(--bg-muted)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <BrainCircuit className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">
                      AI &amp; Machine Learning
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                      Applied computer vision, MobileNetV2 transfer learning, and Grad-CAM visual explainability.
                    </p>
                  </div>
                </div>

                {/* 3. Full-Stack Development */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[var(--bg-muted)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Laptop className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">
                      Full-Stack Development
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                      Python/Flask REST APIs, PostgreSQL relational databases, React SPAs, and PWAs.
                    </p>
                  </div>
                </div>

                {/* 4. Real-World Solutions */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[var(--bg-muted)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Globe2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">
                      Real-World Problem Solving
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                      Building technology with local purpose, addressing real agricultural and community needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


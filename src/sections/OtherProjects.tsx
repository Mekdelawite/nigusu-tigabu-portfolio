import React, { useState, useEffect } from 'react';
import {
  FolderGit2,
  Filter,
  ExternalLink,
  Github,
  X,
  CheckCircle2,
  Layers,
  Info,
  ArrowRight,
} from 'lucide-react';
import { OTHER_PROJECTS, FEATURED_PROJECT } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface OtherProjectsProps {
  onPlaceholderClick: (msg: string) => void;
}

export const OtherProjects: React.FC<OtherProjectsProps> = ({ onPlaceholderClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });
  const { ref: bannerRef, isRevealed: bannerRevealed } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  const allProjects = [FEATURED_PROJECT, ...OTHER_PROJECTS];

  const filteredProjects =
    selectedCategory === 'all'
      ? OTHER_PROJECTS
      : OTHER_PROJECTS.filter((p) => p.category === selectedCategory);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeProjectModal) {
        setActiveProjectModal(null);
      }
    };
    if (activeProjectModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProjectModal]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 md:py-24 border-t border-[var(--border-subtle)] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Accent Line Animation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <SectionHeader
            id="projects-heading"
            badgeText="Project Portfolio"
            badgeIcon={<FolderGit2 className="w-3.5 h-3.5" aria-hidden="true" />}
            title="Practical Projects &amp; Software Prototypes"
            description="Real projects built to practice software architecture, database design, API routing, and user interface workflows. No invented client claims."
            className="mb-0 max-w-2xl"
          />

          {/* Category Filter Tabs (User Requirement: ALL, AI / ML, BIG DATA, WEB DEVELOPMENT) */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none"
          >
            {[
              { key: 'all', label: 'ALL' },
              { key: 'ai-ml', label: 'AI / ML' },
              { key: 'big-data', label: 'BIG DATA' },
              { key: 'web', label: 'WEB DEVELOPMENT' },
            ].map((tab) => {
              const isSelected = selectedCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(tab.key as ProjectCategory)}
                  className={`interactive-btn px-4 py-2 rounded-xl text-xs font-mono font-semibold tracking-wider transition-all duration-200 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/20'
                      : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-emerald-500/40 hover:bg-[var(--bg-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid with Staggered Scroll Reveal */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className={`reveal-item flex flex-col ${gridRevealed ? 'is-revealed' : ''}`}
            >
              <ProjectCard
                project={project}
                onOpenDetails={(proj) => setActiveProjectModal(proj)}
                onPlaceholderClick={onPlaceholderClick}
              />
            </div>
          ))}
        </div>

        {/* Capstone Promotion Banner with Scroll Reveal */}
        <div
          ref={bannerRef}
          className={`mt-12 p-6 sm:p-8 rounded-2xl theme-card flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs hover:shadow-md transition-all reveal-item ${
            bannerRevealed ? 'is-revealed' : ''
          }`}
        >
          <div className="space-y-1.5 text-left">
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase font-semibold">
              Looking for the Capstone Project?
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
              AI-Based Maize Disease Detection System
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl">
              Features MobileNetV2 deep learning inference, Grad-CAM explainability heatmaps, and bilingual agronomic advisory for Ethiopian maize growers.
            </p>
          </div>
          <a
            href="#featured-project"
            className="interactive-btn group shrink-0 inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-xs"
          >
            <span>Explore Capstone Deep Dive</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            className="bg-[var(--bg-card)] rounded-2xl p-6 sm:p-8 max-w-2xl w-full border border-[var(--border-subtle)] shadow-2xl relative my-8 scale-in-item is-revealed"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveProjectModal(null)}
              aria-label="Close project modal"
              className="interactive-btn absolute top-5 right-5 p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-muted)] focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Modal Header */}
            <div className="pr-10 mb-5">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800">
                  {activeProjectModal.category}
                </span>
                <span className="text-xs text-[var(--text-muted)]">
                  {activeProjectModal.status}
                </span>
              </div>
              <h3 id="project-modal-title" className="text-2xl font-bold text-[var(--text-primary)]">
                {activeProjectModal.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                {activeProjectModal.tagline}
              </p>
            </div>

            {/* Long Description */}
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              {activeProjectModal.longDescription || activeProjectModal.description}
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                Key Technical Features
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                {activeProjectModal.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Highlights */}
            {activeProjectModal.architectureHighlights.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                  System Architecture &amp; Design Decisions
                </h4>
                <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                  {activeProjectModal.architectureHighlights.map((arch, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-emerald-500 font-mono">›</span>
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeProjectModal.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-[var(--bg-muted)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Placeholder / Links Notice */}
            <div className="p-3.5 rounded-lg bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] flex items-start space-x-2.5 mb-6">
              <Info className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                To configure live URLs or public GitHub repositories for this project, update the entries in{' '}
                <code className="font-mono text-emerald-600 dark:text-emerald-400">src/data/portfolioData.ts</code>.
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-end space-x-3 pt-4 border-t border-[var(--border-subtle)]">
              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 text-xs font-medium rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-muted)]"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveProjectModal(null);
                  onPlaceholderClick(
                    `Project repository: Update githubUrl in src/data/portfolioData.ts.`
                  );
                }}
                className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>GitHub Info</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import {
  ExternalLink,
  Github,
  ChevronRight,
  Server,
  Database,
  Globe,
  BrainCircuit,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Plane,
  Droplets,
  Cpu,
  Camera,
  Activity,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
  onPlaceholderClick: (msg: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenDetails,
  onPlaceholderClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // Interactive state for Water Quality simulation
  const [waterPh, setWaterPh] = useState<number>(7.2);
  const isPotable = waterPh >= 6.5 && waterPh <= 8.5;

  // 3D Tilt calculation (max 3-5 degrees, disabled on touch/reduced motion)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Relative mouse position percentage for radial spotlight glow
    setMousePos({
      x: Math.round((x / rect.width) * 100),
      y: Math.round((y / rect.height) * 100),
    });

    // 3-4 degrees max tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = -((y - centerY) / centerY) * 3.5;
    const tiltY = ((x - centerX) / centerX) * 3.5;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const getCategoryBadgeColor = () => {
    switch (project.category) {
      case 'ai-ml':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      case 'big-data':
        return 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20';
      case 'web':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      default:
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
    }
  };

  const renderProjectVisualHeader = () => {
    if (project.previewType === 'water-quality') {
      return (
        <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950/80 to-slate-900 border border-sky-500/30 p-4 flex flex-col justify-between mb-5 group/visual">
          {/* Header indicator */}
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center space-x-1.5 font-mono text-sky-400">
              <Droplets className="w-3.5 h-3.5" />
              <span>Water Quality Telemetry</span>
            </span>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider ${
                isPotable
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
              }`}
            >
              {isPotable ? 'Safe / Potable' : 'Unsafe / Warning'}
            </span>
          </div>

          {/* Real-time parameter preview with live slider */}
          <div className="space-y-2 my-1">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
              <span>pH Level:</span>
              <span className="font-bold text-sky-300">{waterPh.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="4.0"
              max="11.0"
              step="0.1"
              value={waterPh}
              onChange={(e) => setWaterPh(parseFloat(e.target.value))}
              aria-label="Adjust pH level for water prediction"
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />

            <div className="grid grid-cols-3 gap-1.5 pt-1 text-[10px] font-mono">
              <div className="bg-slate-800/80 p-1.5 rounded border border-slate-700/60 text-center">
                <span className="text-slate-400 block">Hardness</span>
                <span className="text-emerald-400 font-semibold">186 mg/L</span>
              </div>
              <div className="bg-slate-800/80 p-1.5 rounded border border-slate-700/60 text-center">
                <span className="text-slate-400 block">Chloramines</span>
                <span className="text-sky-400 font-semibold">7.13 ppm</span>
              </div>
              <div className="bg-slate-800/80 p-1.5 rounded border border-slate-700/60 text-center">
                <span className="text-slate-400 block">Turbidity</span>
                <span className="text-purple-400 font-semibold">3.85 NTU</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/80 pt-1">
            <span>Model: Supervised Classifier</span>
            <span className="text-sky-400">Interactive ML</span>
          </div>
        </div>
      );
    }

    if (project.previewType === 'airline-delay') {
      return (
        <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950/70 to-slate-950 border border-sky-500/30 p-4 flex flex-col justify-between mb-5 group/visual">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center space-x-1.5 font-mono text-sky-400">
              <Plane className="w-3.5 h-3.5" />
              <span>Big Data Architecture Flow</span>
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30">
              Hadoop + Spark
            </span>
          </div>

          {/* Requested Visual Flow: DATA -> HADOOP -> SPARK -> ANALYSIS -> INSIGHTS */}
          <div className="py-2">
            <div className="flex items-center justify-between gap-1 text-[9px] font-mono text-center">
              <div className="bg-slate-800/90 text-slate-300 px-1.5 py-1 rounded border border-slate-700 flex-1">
                DATA
              </div>
              <ArrowRight className="w-2.5 h-2.5 text-sky-400 shrink-0" />
              <div className="bg-amber-950/60 text-amber-300 px-1.5 py-1 rounded border border-amber-600/40 flex-1">
                HADOOP
              </div>
              <ArrowRight className="w-2.5 h-2.5 text-sky-400 shrink-0" />
              <div className="bg-orange-950/60 text-orange-300 px-1.5 py-1 rounded border border-orange-600/40 flex-1">
                SPARK
              </div>
              <ArrowRight className="w-2.5 h-2.5 text-sky-400 shrink-0" />
              <div className="bg-sky-950/60 text-sky-300 px-1.5 py-1 rounded border border-sky-600/40 flex-1">
                ANALYSIS
              </div>
              <ArrowRight className="w-2.5 h-2.5 text-sky-400 shrink-0" />
              <div className="bg-emerald-950/60 text-emerald-300 px-1.5 py-1 rounded border border-emerald-600/40 flex-1">
                INSIGHTS
              </div>
            </div>

            {/* Delay factors breakdown */}
            <div className="mt-2.5 grid grid-cols-4 gap-1 text-[9px] font-mono text-center">
              <div className="bg-slate-800/70 p-1 rounded">
                <span className="text-slate-400 block">Weather</span>
                <span className="text-amber-400 font-bold">34%</span>
              </div>
              <div className="bg-slate-800/70 p-1 rounded">
                <span className="text-slate-400 block">Carrier</span>
                <span className="text-sky-400 font-bold">29%</span>
              </div>
              <div className="bg-slate-800/70 p-1 rounded">
                <span className="text-slate-400 block">NAS</span>
                <span className="text-purple-400 font-bold">23%</span>
              </div>
              <div className="bg-slate-800/70 p-1 rounded">
                <span className="text-slate-400 block">Late Aircraft</span>
                <span className="text-rose-400 font-bold">14%</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/80 pt-1">
            <span>Storage: HDFS Distributed Cluster</span>
            <span className="text-sky-400">Spark Transformations</span>
          </div>
        </div>
      );
    }

    if (project.previewType === 'electronics') {
      return (
        <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950/50 to-slate-950 border border-emerald-500/30 p-4 flex flex-col justify-between mb-5 group/visual">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center space-x-1.5 font-mono text-emerald-400">
              <Cpu className="w-3.5 h-3.5" />
              <span>Service &amp; Diagnostic UI</span>
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Mobile-First
            </span>
          </div>

          {/* Diagnostic Triage mockup */}
          <div className="space-y-1.5 py-1">
            <div className="flex items-center justify-between bg-slate-800/80 px-2.5 py-1.5 rounded-lg border border-slate-700/60 text-[11px]">
              <span className="text-slate-200 font-mono">Screen &amp; OLED Replacement</span>
              <span className="text-emerald-400 font-mono text-[10px]">Diagnostics OK</span>
            </div>
            <div className="flex items-center justify-between bg-slate-800/80 px-2.5 py-1.5 rounded-lg border border-slate-700/60 text-[11px]">
              <span className="text-slate-200 font-mono">Motherboard Circuit Triage</span>
              <span className="text-sky-400 font-mono text-[10px]">Continuity PASS</span>
            </div>
            <div className="flex items-center justify-between bg-slate-800/80 px-2.5 py-1.5 rounded-lg border border-slate-700/60 text-[11px]">
              <span className="text-slate-200 font-mono">Battery Calibration &amp; Power IC</span>
              <span className="text-amber-400 font-mono text-[10px]">Intake Verified</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/80 pt-1">
            <span>Customer Inquiry &amp; Tracking Flow</span>
            <span className="text-emerald-400">Responsive UI</span>
          </div>
        </div>
      );
    }

    if (project.previewType === 'photography') {
      return (
        <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-neutral-900 to-slate-950 border border-purple-500/30 p-4 flex flex-col justify-between mb-5 group/visual">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center space-x-1.5 font-mono text-purple-400">
              <Camera className="w-3.5 h-3.5" />
              <span>Studio Visual Experience</span>
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Gallery Showcase
            </span>
          </div>

          {/* Masonry gallery mini preview grid */}
          <div className="grid grid-cols-3 gap-2 py-1">
            <div className="h-16 rounded-lg bg-slate-800/90 border border-slate-700/70 overflow-hidden relative group/item">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent flex items-end p-1.5">
                <span className="text-[9px] font-mono text-purple-200">Portraits</span>
              </div>
            </div>
            <div className="h-16 rounded-lg bg-slate-800/90 border border-slate-700/70 overflow-hidden relative group/item">
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent flex items-end p-1.5">
                <span className="text-[9px] font-mono text-sky-200">Commercial</span>
              </div>
            </div>
            <div className="h-16 rounded-lg bg-slate-800/90 border border-slate-700/70 overflow-hidden relative group/item">
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent flex items-end p-1.5">
                <span className="text-[9px] font-mono text-amber-200">Editorial</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/80 pt-1">
            <span>Masonry Grid &amp; Consultation Booking</span>
            <span className="text-purple-400">Modern UI/UX</span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <article
      id={`project-card-${project.id}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className="theme-card p-6 flex flex-col justify-between group rounded-2xl transition-shadow duration-300 hover:shadow-2xl dark:hover:shadow-emerald-950/25 border border-[var(--border-subtle)] hover:border-[var(--border-strong)] relative overflow-hidden"
    >
      {/* Subtle cursor-following light glow (User Requirement: 3D tilt & cursor glow) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 -z-10"
        style={{
          opacity: isHovered ? 0.15 : 0,
          background: `radial-gradient(circle 280px at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.4), transparent 80%)`,
        }}
        aria-hidden="true"
      />

      <div>
        {/* Top Meta Bar: Project Number & Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center space-x-2.5">
            {project.projectNumber && (
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-[var(--bg-muted)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                {project.projectNumber}
              </span>
            )}
            <span
              className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold uppercase tracking-wider border ${getCategoryBadgeColor()}`}
            >
              {project.category.toUpperCase()}
            </span>
          </div>

          <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{project.status}</span>
          </span>
        </div>

        {/* Visual Graphic Preview (Interactive or Diagram) */}
        {renderProjectVisualHeader()}

        {/* Project Title & One-sentence Summary */}
        <h3 className="font-display text-xl font-bold tracking-tight text-[var(--text-primary)] mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          {project.tagline}
        </p>

        {/* Problem It Addresses */}
        <div className="p-3 rounded-lg bg-[var(--bg-muted)]/70 border border-[var(--border-subtle)] mb-4 group-hover:border-[var(--border-strong)] transition-colors">
          <div className="flex items-center space-x-1.5 text-xs font-semibold text-[var(--text-primary)] mb-1">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" aria-hidden="true" />
            <span>Engineering Problem &amp; Scope</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-normal">
            {project.description}
          </p>
        </div>

        {/* Engineering Highlights / Achievements */}
        <div className="mb-5 space-y-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] block">
            Key Architecture Points:
          </span>
          <ul className="space-y-1">
            {project.keyFeatures.slice(0, 2).map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-xs text-[var(--text-secondary)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="line-clamp-2">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Pills with Micro Hover (User Requirement: 1.04x scale on hover) */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800/80 text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:scale-[1.04] transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="interactive-btn group/btn text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 inline-flex items-center space-x-1 focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1.5 py-1"
        >
          <span>Explore Architecture</span>
          <ChevronRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
        </button>

        <div className="flex items-center space-x-2">
          {project.isGithubPlaceholder ? (
            <button
              type="button"
              onClick={() =>
                onPlaceholderClick(
                  `GitHub repo for "${project.title}": Update the placeholder URL with your repository link in src/data/portfolioData.ts.`
                )
              }
              className="interactive-btn inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-slate-100 dark:hover:bg-slate-800 border border-[var(--border-subtle)] focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label={`GitHub info for ${project.title}`}
              title="GitHub Placeholder (Click for info)"
            >
              <Github className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Code</span>
            </button>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-btn inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-slate-100 dark:hover:bg-slate-800 border border-[var(--border-subtle)] focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Code</span>
            </a>
          )}

          {project.isDemoPlaceholder ? (
            <button
              type="button"
              onClick={() =>
                onPlaceholderClick(
                  `Interactive Demo for "${project.title}": Click 'Explore Architecture' to view full engineering blueprints and simulation data.`
                )
              }
              className="interactive-btn inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-slate-100 dark:hover:bg-slate-800 border border-[var(--border-subtle)] focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label={`Demo info for ${project.title}`}
              title="Demo Simulation (Click for details)"
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Demo</span>
            </button>
          ) : (
            <a
              href={project.liveDemoUrl}
              className="interactive-btn inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800/80 focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

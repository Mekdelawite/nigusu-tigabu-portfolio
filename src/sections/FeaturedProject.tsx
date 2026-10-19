import React, { useState } from 'react';
import {
  BrainCircuit,
  Eye,
  Sparkles,
  Github,
  ExternalLink,
  Languages,
  WifiOff,
  ShieldAlert,
  Info,
  ArrowRight,
} from 'lucide-react';
import { FEATURED_PROJECT, MAIZE_DISEASE_CLASSES } from '../data/portfolioData';
import { DiseaseClass } from '../types/portfolio';
import { SectionHeader } from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const FeaturedProject: React.FC = () => {
  const [selectedDisease, setSelectedDisease] = useState<DiseaseClass>(MAIZE_DISEASE_CLASSES[0]);
  const [activeAdvisoryLanguage, setActiveAdvisoryLanguage] = useState<'english' | 'amharic'>('english');
  const [showHeatmapOverlay, setShowHeatmapOverlay] = useState(true);
  const { ref: pillarsRef, isRevealed: pillarsRevealed } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: demoRef, isRevealed: demoRevealed } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="featured-project"
      aria-labelledby="featured-project-heading"
      className="py-16 md:py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Accent Line Animation */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <SectionHeader
            id="featured-project-heading"
            badgeText="Centerpiece • Final-Year Software Engineering Capstone"
            badgeIcon={<Sparkles className="w-3.5 h-3.5" aria-hidden="true" />}
            title={FEATURED_PROJECT.title}
            description={FEATURED_PROJECT.description}
            className="mb-0 max-w-3xl"
          />

          {/* Honest Status Callout */}
          <div className="theme-card p-5 max-w-sm shrink-0 shadow-xs hover:shadow-md transition-all">
            <div className="flex items-center space-x-2 text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1.5">
              <Info className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Capstone Project Scope &amp; Status</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-normal">
              Final-year university capstone currently in active development. Designed specifically for Ethiopian smallholder farmers with dual-language advisory and offline resilience.
            </p>
          </div>
        </div>

        {/* Action Buttons Header */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <a
            href="#maize-interactive-demo"
            className="interactive-btn group inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-xs hover:shadow-md focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
          >
            <Eye className="w-4 h-4" aria-hidden="true" />
            <span>Interactive Diagnostic Simulator</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>

          <a
            href={FEATURED_PROJECT.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-btn group inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium text-[var(--text-primary)] bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-muted)] shadow-2xs focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
          >
            <Github className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            <span>GitHub</span>
          </a>

          <a
            href={FEATURED_PROJECT.liveDemoUrl}
            className="interactive-btn group inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium text-[var(--text-primary)] bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-muted)] shadow-2xs focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
          >
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            <span>View Demo</span>
          </a>
        </div>

        {/* Architectural Pillars Grid with Staggered Entrance */}
        <div
          ref={pillarsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          <div
            style={{ transitionDelay: '0ms' }}
            className={`theme-card p-5 shadow-2xs group hover:shadow-md reveal-item ${
              pillarsRevealed ? 'is-revealed' : ''
            }`}
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <BrainCircuit className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">
              MobileNetV2 CNN
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Transfer learning architecture optimized for lightweight web inference without requiring high-end server GPUs.
            </p>
          </div>

          <div
            style={{ transitionDelay: '80ms' }}
            className={`theme-card p-5 shadow-2xs group hover:shadow-md reveal-item ${
              pillarsRevealed ? 'is-revealed' : ''
            }`}
          >
            <div className="w-9 h-9 rounded-lg bg-sky-100 dark:bg-sky-950/70 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Eye className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">
              Grad-CAM Explainability
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Generates visual saliency heatmaps highlighting exact leaf lesion spots so farmers verify model reasoning.
            </p>
          </div>

          <div
            style={{ transitionDelay: '160ms' }}
            className={`theme-card p-5 shadow-2xs group hover:shadow-md reveal-item ${
              pillarsRevealed ? 'is-revealed' : ''
            }`}
          >
            <div className="w-9 h-9 rounded-lg bg-purple-100 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Languages className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">
              Bilingual Advisory
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Actionable agronomic advice written in English and Amharic for immediate comprehension by local growers.
            </p>
          </div>

          <div
            style={{ transitionDelay: '240ms' }}
            className={`theme-card p-5 shadow-2xs group hover:shadow-md reveal-item ${
              pillarsRevealed ? 'is-revealed' : ''
            }`}
          >
            <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <WifiOff className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">
              Offline-First &amp; PWA Concepts
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Cached disease knowledge base and future SMS gateway architecture for rural areas with intermittent connectivity.
            </p>
          </div>
        </div>

        {/* Interactive Diagnostic Demonstration & Grad-CAM Heatmap Simulator */}
        <div
          id="maize-interactive-demo"
          ref={demoRef}
          className={`theme-card shadow-lg overflow-hidden reveal-item ${
            demoRevealed ? 'is-revealed' : ''
          }`}
        >
          {/* Header Bar */}
          <div className="px-6 py-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" aria-hidden="true" />
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
                Interactive Model &amp; Explainability Simulator
              </span>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Architecture: MobileNetV2 + Grad-CAM Heatmap Saliency
            </span>
          </div>

          <div className="p-6 lg:p-8">
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              Select one of the 4 supported disease classes below to simulate the deep learning pipeline, inspect the predicted diagnosis, examine the Grad-CAM activation heatmap, and read the farmer advisory guidelines.
            </p>

            {/* Disease Class Selector Tabs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8" role="tablist" aria-label="Maize disease classes">
              {MAIZE_DISEASE_CLASSES.map((disease) => {
                const isSelected = selectedDisease.id === disease.id;
                return (
                  <button
                    key={disease.id}
                    role="tab"
                    id={`tab-${disease.id}`}
                    aria-selected={isSelected}
                    onClick={() => setSelectedDisease(disease)}
                    className={`interactive-btn p-3.5 rounded-xl text-left border focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-500/10 dark:bg-emerald-500/15 shadow-xs'
                        : 'border-[var(--border-subtle)] hover:border-[var(--border-strong)] bg-[var(--bg-card)]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                        {disease.id === 'healthy' ? '04. Healthy' : `0${MAIZE_DISEASE_CLASSES.indexOf(disease) + 1}. Pathology`}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          disease.severity === 'High'
                            ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                            : disease.severity === 'Medium'
                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                            : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        }`}
                      >
                        {disease.severity}
                      </span>
                    </div>
                    <strong className="block text-sm text-[var(--text-primary)] font-bold truncate">
                      {disease.name}
                    </strong>
                    <span className="text-xs text-[var(--text-muted)] italic block truncate">
                      {disease.scientificName}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Simulated Scan Display & Saliency Overlay (Left slides in from left, Right slides from right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Visual Leaf Inspection Canvas with Image Zoom on Hover */}
              <div
                className={`lg:col-span-5 flex flex-col space-y-3 slide-in-left-item ${
                  demoRevealed ? 'is-revealed' : ''
                }`}
              >
                <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 aspect-4/3 flex items-center justify-center group shadow-md">
                  {/* Stylized Leaf Visual Representation with subtle hover zoom */}
                  <svg
                    viewBox="0 0 400 300"
                    className="w-full h-full transform group-hover:scale-103 transition-transform duration-500 ease-out"
                    aria-label={`Visual simulation for ${selectedDisease.name}`}
                    role="img"
                  >
                    <defs>
                      <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#15803d" />
                        <stop offset="50%" stopColor="#166534" />
                        <stop offset="100%" stopColor="#14532d" />
                      </linearGradient>

                      {/* Grad-CAM Heatmap Radial Gradient */}
                      <radialGradient id="camHeatmap" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.85" />
                        <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.75" />
                        <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#047857" stopOpacity="0.0" />
                      </radialGradient>
                    </defs>

                    {/* Background Field Atmosphere */}
                    <rect width="400" height="300" fill="#0f172a" />

                    {/* Central Maize Leaf Blade */}
                    <path
                      d="M 60,260 Q 180,60 360,40 Q 260,210 60,260 Z"
                      fill="url(#leafGrad)"
                      stroke="#22c55e"
                      strokeWidth="2"
                    />

                    {/* Central Vein */}
                    <path
                      d="M 60,260 Q 190,130 360,40"
                      stroke="#86efac"
                      strokeWidth="3"
                      strokeDasharray="6,3"
                      fill="none"
                      opacity="0.8"
                    />

                    {/* Secondary Veins */}
                    <path d="M 120,220 Q 160,180 180,165" stroke="#4ade80" strokeWidth="1.5" fill="none" opacity="0.5" />
                    <path d="M 170,185 Q 220,150 240,130" stroke="#4ade80" strokeWidth="1.5" fill="none" opacity="0.5" />
                    <path d="M 220,150 Q 270,110 300,90" stroke="#4ade80" strokeWidth="1.5" fill="none" opacity="0.5" />

                    {/* Simulated Pathological Lesions */}
                    {selectedDisease.id === 'northern-leaf-blight' && (
                      <g>
                        <ellipse cx="210" cy="140" rx="45" ry="14" transform="rotate(-30 210 140)" fill="#78350f" stroke="#b45309" strokeWidth="2" opacity="0.9" />
                        <ellipse cx="210" cy="140" rx="36" ry="8" transform="rotate(-30 210 140)" fill="#a16207" opacity="0.85" />
                      </g>
                    )}

                    {selectedDisease.id === 'common-rust' && (
                      <g>
                        <circle cx="180" cy="160" r="5" fill="#c2410c" stroke="#ea580c" />
                        <circle cx="195" cy="150" r="4.5" fill="#b45309" stroke="#f97316" />
                        <circle cx="185" cy="140" r="6" fill="#c2410c" stroke="#ea580c" />
                        <circle cx="215" cy="130" r="5.5" fill="#9a3412" stroke="#ea580c" />
                        <circle cx="230" cy="120" r="4" fill="#c2410c" stroke="#ea580c" />
                        <circle cx="225" cy="140" r="5" fill="#b45309" stroke="#f97316" />
                      </g>
                    )}

                    {selectedDisease.id === 'gray-leaf-spot' && (
                      <g>
                        <rect x="180" y="135" width="45" height="12" rx="2" transform="rotate(-28 180 135)" fill="#64748b" stroke="#94a3b8" strokeWidth="1.5" opacity="0.9" />
                        <rect x="220" y="105" width="40" height="10" rx="2" transform="rotate(-28 220 105)" fill="#475569" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.9" />
                      </g>
                    )}

                    {/* Grad-CAM Saliency Heatmap Overlay Layer */}
                    {showHeatmapOverlay && selectedDisease.id !== 'healthy' && (
                      <g className="transition-opacity duration-300">
                        <circle cx="210" cy="140" r="65" fill="url(#camHeatmap)" />
                      </g>
                    )}
                  </svg>

                  {/* On-screen badge indicator */}
                  <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-md border border-slate-700 font-mono flex items-center space-x-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Inference Result: {Math.round(selectedDisease.confidenceScore * 100)}% Confidence</span>
                  </div>
                </div>

                {/* Heatmap Toggle Control */}
                <div className="flex items-center justify-between px-2 py-1 text-xs">
                  <span className="text-[var(--text-secondary)] font-medium">
                    Grad-CAM Activation Heatmap:
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowHeatmapOverlay(!showHeatmapOverlay)}
                    aria-pressed={showHeatmapOverlay}
                    className={`interactive-btn px-2.5 py-1 rounded-md font-medium border ${
                      showHeatmapOverlay
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800 shadow-2xs'
                        : 'bg-[var(--bg-muted)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                    }`}
                  >
                    {showHeatmapOverlay ? 'Heatmap: ON' : 'Heatmap: OFF'}
                  </button>
                </div>
              </div>

              {/* Right Column: Diagnostic Breakdown & Multilingual Advisory */}
              <div
                className={`lg:col-span-7 flex flex-col justify-between space-y-6 slide-in-right-item ${
                  demoRevealed ? 'is-revealed' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-[var(--text-primary)]">
                        {selectedDisease.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                        {selectedDisease.amharicName}
                      </p>
                    </div>

                    {/* Language Switcher */}
                    <div className="flex items-center bg-[var(--bg-muted)] p-0.5 rounded-lg border border-[var(--border-subtle)]">
                      <button
                        type="button"
                        onClick={() => setActiveAdvisoryLanguage('english')}
                        aria-pressed={activeAdvisoryLanguage === 'english'}
                        className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                          activeAdvisoryLanguage === 'english'
                            ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-2xs'
                            : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        English
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveAdvisoryLanguage('amharic')}
                        aria-pressed={activeAdvisoryLanguage === 'amharic'}
                        className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                          activeAdvisoryLanguage === 'amharic'
                            ? 'bg-[var(--bg-card)] text-emerald-600 dark:text-emerald-400 shadow-2xs'
                            : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        አማርኛ (Amharic)
                      </button>
                    </div>
                  </div>

                  {/* Morphological Pathology Details */}
                  <div className="space-y-3 mb-5">
                    <div className="text-xs">
                      <strong className="text-[var(--text-primary)] block mb-1">
                        Visual Characteristics:
                      </strong>
                      <p className="text-[var(--text-secondary)]">
                        {selectedDisease.visualFeatures}
                      </p>
                    </div>

                    <div className="text-xs">
                      <strong className="text-[var(--text-primary)] block mb-1">
                        Key Symptom Checklist:
                      </strong>
                      <ul className="space-y-1 text-[var(--text-secondary)]">
                        {selectedDisease.sampleSymptoms.map((symptom, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-emerald-500 font-bold">•</span>
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actionable Agronomic Advisory Card */}
                  <div className="p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/80 shadow-2xs">
                    <div className="flex items-center space-x-2 text-xs font-bold text-emerald-900 dark:text-emerald-200 mb-1.5">
                      <ShieldAlert className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                      <span>
                        {activeAdvisoryLanguage === 'english'
                          ? 'Actionable Agronomic Advisory'
                          : 'የግብርና ባለሙያ ምክረ-ሀሳብ'}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-100 leading-relaxed font-normal">
                      {activeAdvisoryLanguage === 'english'
                        ? selectedDisease.advisoryEnglish
                        : selectedDisease.advisoryAmharic}
                    </p>
                  </div>
                </div>

                {/* Technical Architecture Notes */}
                <div className="pt-3 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] flex flex-wrap items-center gap-4">
                  <span className="font-mono">Grad-CAM: Final Conv2D Layer</span>
                  <span className="font-mono">Input: 224x224 RGB</span>
                  <span className="font-mono">Target: Smallholder Maize Plots</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Stack Tags with Micro-Hover Lift */}
        <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-[var(--text-muted)] mr-2">
            Integrated Technologies:
          </span>
          {FEATURED_PROJECT.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-emerald-500/50 hover:-translate-y-0.5 transition-all shadow-2xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

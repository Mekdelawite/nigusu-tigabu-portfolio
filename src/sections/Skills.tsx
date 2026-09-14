import React from 'react';
import {
  Code2,
  Server,
  BrainCircuit,
  Layout,
  Database,
  Wrench,
  Sparkles,
  BarChart3,
  ArrowRight,
  Cpu,
  Layers,
  Network,
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SkillCategoryGroup {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  colorClass: {
    iconBg: string;
    iconColor: string;
    borderAccent: string;
  };
  skills: {
    name: string;
    highlight?: boolean;
    note?: string;
  }[];
  customVisual?: 'ai-nodes' | 'big-data-flow';
}

const SKILL_CATEGORIES: SkillCategoryGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Layout,
    description: 'Component-driven interfaces, responsive accessibility (WCAG AA), client state management, and modern CSS architecture.',
    colorClass: {
      iconBg: 'bg-sky-100 dark:bg-sky-950',
      iconColor: 'text-sky-600 dark:text-sky-400',
      borderAccent: 'group-hover:border-sky-500/50',
    },
    skills: [
      { name: 'React', highlight: true, note: 'Modern Hooks & SPA' },
      { name: 'JavaScript (ES6+)', highlight: true, note: 'Core Language' },
      { name: 'HTML5', note: 'Semantic Markup' },
      { name: 'CSS3', note: 'Custom Properties' },
      { name: 'Tailwind CSS', highlight: true, note: 'Utility Design System' },
      { name: 'Progressive Web Apps (PWA)', note: 'Offline Caching' },
      { name: 'Responsive Layouts' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Systems',
    icon: Server,
    description: 'Server-side application logic, secure authentication, API development, and reliable data pipelines.',
    colorClass: {
      iconBg: 'bg-emerald-100 dark:bg-emerald-950',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      borderAccent: 'group-hover:border-emerald-500/50',
    },
    skills: [
      { name: 'Python', highlight: true, note: 'Primary Backend Language' },
      { name: 'Flask', highlight: true, note: 'REST Microframework' },
      { name: 'REST APIs', highlight: true, note: 'HTTP/JSON Endpoints' },
      { name: 'JWT Authentication', note: 'Token-based Security' },
      { name: 'API Routing & Middleware' },
      { name: 'JSON Data Pipelines' },
      { name: 'CORS & Security Headers' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    description: 'Applied deep learning, transfer learning classification, and explainable AI interpretability for real-world domains.',
    colorClass: {
      iconBg: 'bg-purple-100 dark:bg-purple-950',
      iconColor: 'text-purple-600 dark:text-purple-400',
      borderAccent: 'group-hover:border-purple-500/50',
    },
    customVisual: 'ai-nodes',
    skills: [
      { name: 'TensorFlow', highlight: true, note: 'Deep Learning Core' },
      { name: 'MobileNetV2', highlight: true, note: 'Transfer Learning' },
      { name: 'Grad-CAM', highlight: true, note: 'Explainable AI Heatmaps' },
      { name: 'Computer Vision', highlight: true, note: 'Image Classification' },
      { name: 'Data Preprocessing', note: 'Augmentation & Normalization' },
      { name: 'Model Evaluation', note: 'Accuracy & Confusion Matrix' },
    ],
  },
  {
    id: 'big-data',
    title: 'Big Data & Distributed Computing',
    icon: BarChart3,
    description: 'Large-scale distributed batch processing, cluster architecture, resilient distributed datasets, and analytical querying.',
    colorClass: {
      iconBg: 'bg-amber-100 dark:bg-amber-950',
      iconColor: 'text-amber-600 dark:text-amber-400',
      borderAccent: 'group-hover:border-amber-500/50',
    },
    customVisual: 'big-data-flow',
    skills: [
      { name: 'Hadoop', highlight: true, note: 'HDFS Distributed File System' },
      { name: 'Apache Spark', highlight: true, note: 'RDD & Spark SQL Processing' },
      { name: 'Big Data Processing', highlight: true, note: 'Distributed Aggregations' },
      { name: 'Data Analysis', note: 'Statistical Correlation' },
      { name: 'Cluster Computing', note: 'MapReduce Paradigm' },
      { name: 'ETL Pipelines', note: 'Transform & Load' },
    ],
  },
  {
    id: 'database',
    title: 'Database Architecture',
    icon: Database,
    description: 'Relational data modeling, schema normalization, indexing, referential integrity, and efficient SQL queries.',
    colorClass: {
      iconBg: 'bg-teal-100 dark:bg-teal-950',
      iconColor: 'text-teal-600 dark:text-teal-400',
      borderAccent: 'group-hover:border-teal-500/50',
    },
    skills: [
      { name: 'PostgreSQL', highlight: true, note: 'Primary RDBMS' },
      { name: 'SQL', highlight: true, note: 'Structured Query Language' },
      { name: 'Schema Design', note: 'Entity Relationship Modeling' },
      { name: 'Foreign Keys & Constraints' },
      { name: 'CRUD Operations' },
      { name: 'Query Optimization' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tooling & Workflow',
    icon: Wrench,
    description: 'Version control collaboration, modern developer environments, continuous integration, and command-line agility.',
    colorClass: {
      iconBg: 'bg-rose-100 dark:bg-rose-950',
      iconColor: 'text-rose-600 dark:text-rose-400',
      borderAccent: 'group-hover:border-rose-500/50',
    },
    skills: [
      { name: 'Git', highlight: true, note: 'Distributed Version Control' },
      { name: 'GitHub', highlight: true, note: 'Code Collaboration & PRs' },
      { name: 'VS Code', note: 'Configured IDE' },
      { name: 'Postman / REST Testing', note: 'Endpoint Verification' },
      { name: 'Bash / Linux CLI', note: 'Shell Scripting' },
      { name: 'Vite & npm', note: 'Build Pipelines' },
    ],
  },
];

export const Skills: React.FC = () => {
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 md:py-24 border-t border-[var(--border-subtle)] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Accent Line Animation */}
        <SectionHeader
          id="skills-heading"
          badgeText="Technical Capabilities"
          badgeIcon={<Code2 className="w-3.5 h-3.5" aria-hidden="true" />}
          title="Technical Competencies by Category"
          description="Organized into 6 core engineering disciplines: Frontend, Backend, AI & Machine Learning, Big Data, Database, and Developer Tooling. Validated through practical, working implementations."
          className="max-w-3xl mb-12"
        />

        {/* 6 Category Cards Grid with Staggered Scroll Reveal */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;

            return (
              <div
                key={cat.id}
                id={`skill-category-${cat.id}`}
                style={{ transitionDelay: `${idx * 80}ms` }}
                className={`theme-card p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-emerald-950/20 shadow-xs rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--border-strong)] reveal-item ${
                  gridRevealed ? 'is-revealed' : ''
                }`}
              >
                <div>
                  {/* Card Header: Icon & Category Title */}
                  <div className="flex items-center space-x-3.5 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl ${cat.colorClass.iconBg} ${cat.colorClass.iconColor} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {cat.title}
                      </h3>
                      <span className="text-xs font-mono text-[var(--text-muted)]">
                        {cat.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* User Requirement: AI Skill card with animated neural nodes/connections visual */}
                  {cat.customVisual === 'ai-nodes' && (
                    <div className="mb-5 p-3 rounded-xl bg-purple-950/20 border border-purple-500/30 overflow-hidden relative">
                      <div className="flex items-center justify-between text-[11px] font-mono text-purple-400 mb-2">
                        <span className="flex items-center space-x-1">
                          <BrainCircuit className="w-3.5 h-3.5" />
                          <span>Neural Network Architecture</span>
                        </span>
                        <span className="text-[10px] text-purple-300 bg-purple-500/20 px-1.5 py-0.5 rounded">
                          Active Graph
                        </span>
                      </div>

                      {/* Animated Node Canvas Representation */}
                      <div className="h-16 flex items-center justify-between px-3 relative bg-slate-900/60 rounded-lg border border-purple-500/20">
                        {/* Layer 1: Input Nodes */}
                        <div className="flex flex-col space-y-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-purple-400/80 animate-ping" />
                          <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-purple-400/80" />
                        </div>

                        {/* Connection line 1 */}
                        <div className="flex-1 mx-2 border-t border-dashed border-purple-500/40 relative">
                          <span className="absolute -top-1 left-1/3 w-1.5 h-1.5 rounded-full bg-purple-300 animate-pulse" />
                        </div>

                        {/* Layer 2: Hidden Layers (MobileNetV2 Bottlenecks) */}
                        <div className="flex flex-col space-y-1.5">
                          <span className="w-3 h-3 rounded-full bg-emerald-400/90 shadow-sm" />
                          <span className="w-3 h-3 rounded-full bg-emerald-400/90 shadow-sm" />
                          <span className="w-3 h-3 rounded-full bg-emerald-400/90 shadow-sm" />
                          <span className="w-3 h-3 rounded-full bg-emerald-400/90 shadow-sm" />
                        </div>

                        {/* Connection line 2 */}
                        <div className="flex-1 mx-2 border-t border-dashed border-emerald-500/40 relative">
                          <span className="absolute -top-1 right-1/3 w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                        </div>

                        {/* Layer 3: Output Classification + Grad-CAM Heatmap */}
                        <div className="flex flex-col space-y-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-sky-400/80" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-mono text-purple-300/80 mt-2">
                        <span>Input [224x224x3]</span>
                        <span>Dense Softmax</span>
                        <span>Grad-CAM XAI</span>
                      </div>
                    </div>
                  )}

                  {/* User Requirement: Big Data card with DATA → HADOOP → SPARK → PROCESSING → INSIGHTS visual */}
                  {cat.customVisual === 'big-data-flow' && (
                    <div className="mb-5 p-3 rounded-xl bg-amber-950/20 border border-amber-500/30 overflow-hidden">
                      <div className="flex items-center justify-between text-[11px] font-mono text-amber-400 mb-2">
                        <span className="flex items-center space-x-1">
                          <BarChart3 className="w-3.5 h-3.5" />
                          <span>Distributed Execution Pipeline</span>
                        </span>
                        <span className="text-[10px] text-amber-300 bg-amber-500/20 px-1.5 py-0.5 rounded">
                          Cluster Flow
                        </span>
                      </div>

                      {/* DATA → HADOOP → SPARK → PROCESSING → INSIGHTS */}
                      <div className="flex items-center justify-between gap-1 text-[9px] font-mono text-center py-2 px-1 bg-slate-900/60 rounded-lg border border-amber-500/20">
                        <div className="bg-slate-800/90 text-slate-300 px-1.5 py-1 rounded border border-slate-700 flex-1">
                          DATA
                        </div>
                        <ArrowRight className="w-2.5 h-2.5 text-amber-400 shrink-0" />
                        <div className="bg-amber-950/60 text-amber-300 px-1.5 py-1 rounded border border-amber-600/40 flex-1">
                          HADOOP
                        </div>
                        <ArrowRight className="w-2.5 h-2.5 text-amber-400 shrink-0" />
                        <div className="bg-orange-950/60 text-orange-300 px-1.5 py-1 rounded border border-orange-600/40 flex-1">
                          SPARK
                        </div>
                        <ArrowRight className="w-2.5 h-2.5 text-amber-400 shrink-0" />
                        <div className="bg-sky-950/60 text-sky-300 px-1.5 py-1 rounded border border-sky-600/40 flex-1">
                          PROC.
                        </div>
                        <ArrowRight className="w-2.5 h-2.5 text-amber-400 shrink-0" />
                        <div className="bg-emerald-950/60 text-emerald-300 px-1.5 py-1 rounded border border-emerald-600/40 flex-1">
                          INSIGHTS
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-mono text-amber-300/80 mt-2">
                        <span>HDFS Storage</span>
                        <span>Resilient Distributed Datasets</span>
                      </div>
                    </div>
                  )}

                  {/* Badges / Modern Pills Grid with Micro-Interactions */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-default transition-all duration-200 hover:-translate-y-0.5 ${
                          skill.highlight
                            ? 'bg-[var(--bg-muted)] text-[var(--text-primary)] border border-emerald-500/40 hover:border-emerald-500 hover:bg-emerald-500/10 shadow-2xs'
                            : 'bg-[var(--bg-muted)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        {skill.highlight && (
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse"
                            aria-hidden="true"
                          />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                  <span className="flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-emerald-500" />
                    <span>Applied in practical projects</span>
                  </span>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                    Production Grade
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

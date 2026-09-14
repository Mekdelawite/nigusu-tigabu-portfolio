import React from 'react';
import {
  Server,
  Database,
  BrainCircuit,
  Layout,
  ShieldCheck,
  WifiOff,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { CAPABILITIES_DATA } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

const renderCapabilityIcon = (iconName: string) => {
  const iconProps = { className: 'w-5 h-5 text-emerald-600 dark:text-emerald-400', 'aria-hidden': 'true' };
  switch (iconName) {
    case 'Server':
      return <Server {...iconProps} />;
    case 'Database':
      return <Database {...iconProps} />;
    case 'BrainCircuit':
      return <BrainCircuit {...iconProps} />;
    case 'Layout':
      return <Layout {...iconProps} />;
    case 'ShieldCheck':
      return <ShieldCheck {...iconProps} />;
    case 'WifiOff':
      return <WifiOff {...iconProps} />;
    default:
      return <Cpu {...iconProps} />;
  }
};

export const Capabilities: React.FC = () => {
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="py-16 md:py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Accent Line Animation */}
        <SectionHeader
          id="capabilities-heading"
          badgeText="Practical Scope"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" aria-hidden="true" />}
          title="What I Can Build"
          description="A concrete outline of the software modules, backend architectures, and AI integrations I have practical competence in engineering."
          className="max-w-3xl mb-12"
        />

        {/* Capability Cards Grid with Staggered Scroll Reveal */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CAPABILITIES_DATA.map((item, idx) => (
            <div
              key={item.id}
              style={{ transitionDelay: `${idx * 90}ms` }}
              className={`theme-card p-6 shadow-2xs hover:shadow-xl dark:hover:shadow-emerald-950/20 hover:-translate-y-2 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group reveal-item ${
                gridRevealed ? 'is-revealed' : ''
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {renderCapabilityIcon(item.iconName)}
                </div>

                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="p-3 rounded-lg bg-[var(--bg-muted)] border border-[var(--border-subtle)] mb-4 text-xs text-[var(--text-secondary)] group-hover:border-[var(--border-strong)] transition-colors">
                  <strong className="text-[var(--text-primary)] block mb-0.5 font-semibold">
                    Hands-On Example:
                  </strong>
                  {item.practicalExample}
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-muted)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-emerald-500/40 hover:text-[var(--text-primary)] hover:-translate-y-0.5 transition-all"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

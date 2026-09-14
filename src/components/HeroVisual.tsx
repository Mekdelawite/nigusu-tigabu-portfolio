import React, { useState, useRef } from 'react';
import {
  Brain,
  Layers,
  Database,
  Code2,
  Activity,
  ArrowRight,
  Sparkles,
  BarChart3,
  Server,
  Zap,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroVisualProps {
  isMounted: boolean;
}

const ORBIT_NODES = [
  { name: 'Python', role: 'Core Backend', color: 'text-emerald-400 bg-emerald-950/70 border-emerald-500/40', angle: 0 },
  { name: 'React', role: 'UI & PWA', color: 'text-sky-400 bg-sky-950/70 border-sky-500/40', angle: 51 },
  { name: 'TensorFlow', role: 'Deep Learning', color: 'text-purple-400 bg-purple-950/70 border-purple-500/40', angle: 102 },
  { name: 'Flask', role: 'REST APIs', color: 'text-teal-400 bg-teal-950/70 border-teal-500/40', angle: 154 },
  { name: 'PostgreSQL', role: 'Relational DB', color: 'text-amber-400 bg-amber-950/70 border-amber-500/40', angle: 205 },
  { name: 'Hadoop', role: 'Distributed HDFS', color: 'text-yellow-400 bg-yellow-950/70 border-yellow-500/40', angle: 257 },
  { name: 'Spark', role: 'Big Data Engine', color: 'text-orange-400 bg-orange-950/70 border-orange-500/40', angle: 308 },
];

export const HeroVisual: React.FC<HeroVisualProps> = ({ isMounted }) => {
  const [activeTab, setActiveTab] = useState<'orbit' | 'system' | 'architecture' | 'stack'>('orbit');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle Mouse Tilt Interaction (Max 3.5 degrees)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const tiltX = -(y / (rect.height / 2)) * 3.5;
    const tiltY = (x / (rect.width / 2)) * 3.5;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full transition-all duration-700 ease-out select-none ${
        isMounted ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-6'
      }`}
      style={{
        perspective: '1000px',
      }}
    >
      {/* 3D Tilt Wrapper */}
      <div
        className="relative w-full transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Soft Ambient Glow under the visual */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-sky-500/20 rounded-3xl blur-2xl -z-10 transition-opacity duration-500 pointer-events-none"
          style={{ opacity: isHovered ? 0.85 : 0.5 }}
          aria-hidden="true"
        />

        {/* Floating Badges */}
        <div
          className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-[var(--bg-card)]/95 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shadow-md backdrop-blur-md absolute -top-5 -left-3 z-20 float-satellite-1 pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-5 h-5 rounded-lg bg-emerald-500/15 flex items-center justify-center">
            <Brain className="w-3.5 h-3.5 text-emerald-500" />
          </div>
          <div>
            <span className="font-bold text-[var(--text-primary)]">MobileNetV2</span>
            <span className="text-[10px] text-[var(--text-muted)] block leading-none">AI Inference</span>
          </div>
        </div>

        <div
          className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-[var(--bg-card)]/95 text-amber-600 dark:text-amber-400 border border-amber-500/30 shadow-md backdrop-blur-md absolute -top-4 -right-3 z-20 float-satellite-2 pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-5 h-5 rounded-lg bg-amber-500/15 flex items-center justify-center">
            <BarChart3 className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <div>
            <span className="font-bold text-[var(--text-primary)]">Hadoop + Spark</span>
            <span className="text-[10px] text-[var(--text-muted)] block leading-none">Big Data</span>
          </div>
        </div>

        {/* =========================================================================
            CENTRAL ARCHITECTURAL HUB / DEVELOPER INTERFACE
            ========================================================================= */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[var(--border-color)] bg-[var(--bg-card)] transition-all duration-300">
          {/* Header Bar with Mode Switcher */}
          <div className="flex items-center justify-between px-4 py-3 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-2xs" aria-hidden="true" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-2xs" aria-hidden="true" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-2xs" aria-hidden="true" />
              <span className="ml-2 text-[var(--text-muted)] text-xs font-mono flex items-center space-x-1.5">
                <span className="text-emerald-500 font-bold">&bull;</span>
                <span className="hidden sm:inline">engine::</span>v2026
              </span>
            </div>

            {/* Interactive View Mode Tabs */}
            <div className="flex items-center space-x-1 bg-[var(--bg-card)] p-0.5 rounded-lg text-xs font-mono border border-[var(--border-subtle)]">
              <button
                type="button"
                onClick={() => setActiveTab('orbit')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  activeTab === 'orbit'
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold shadow-2xs'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                title="Interactive Technology Orbit"
              >
                tech-orbit
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('system')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  activeTab === 'system'
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold shadow-2xs'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                title="System Core Spec"
              >
                profile.ts
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('architecture')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  activeTab === 'architecture'
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold shadow-2xs'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                title="AI Capstone Architecture Flow"
              >
                ai-core.flow
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('stack')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  activeTab === 'stack'
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold shadow-2xs'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                title="Technical Stack Specifications"
              >
                stack.json
              </button>
            </div>
          </div>

          {/* Interactive Screen Canvas */}
          <div className="p-5 font-mono text-xs leading-relaxed bg-[#0a0e17] text-slate-200 min-h-[340px] flex flex-col justify-between overflow-hidden relative">
            
            {/* 1. TECHNOLOGY ORBIT (User Requirement: Center [ AI / CODE ], Surrounding: Python, React, TensorFlow, Flask, PostgreSQL, Hadoop, Spark) */}
            {activeTab === 'orbit' && (
              <div className="flex flex-col h-full justify-between">
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/80 pb-2">
                  <span className="flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Technology Orbit System</span>
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">
                    {selectedNode ? `SELECTED: ${selectedNode}` : 'HOVER OR CLICK NODES'}
                  </span>
                </div>

                {/* Orbit Graphical Area */}
                <div className="relative my-4 h-56 flex items-center justify-center">
                  {/* Concentric Orbit Rings */}
                  <div className="absolute w-48 h-48 rounded-full border border-dashed border-emerald-500/20 animate-spin" style={{ animationDuration: '40s' }} />
                  <div className="absolute w-32 h-32 rounded-full border border-slate-700/50" />

                  {/* Orbit Center: [ AI / CODE ] */}
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 border-2 border-emerald-500/60 shadow-lg shadow-emerald-500/20 flex flex-col items-center justify-center text-center p-2 group cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping absolute -top-1 -right-1" />
                    <Code2 className="w-5 h-5 text-emerald-400 mb-1" />
                    <span className="font-bold text-[11px] text-emerald-300 font-mono tracking-wider">[ AI / CODE ]</span>
                    <span className="text-[9px] text-slate-400 leading-tight mt-0.5">Core Engine</span>
                  </div>

                  {/* 7 Surrounding Nodes: Python, React, TensorFlow, Flask, PostgreSQL, Hadoop, Spark */}
                  {ORBIT_NODES.map((node) => {
                    const rad = (node.angle * Math.PI) / 180;
                    // Radius ~96px
                    const x = Math.round(Math.cos(rad) * 96);
                    const y = Math.round(Math.sin(rad) * 96);
                    const isNodeSelected = selectedNode === node.name;

                    return (
                      <button
                        key={node.name}
                        type="button"
                        onClick={() => setSelectedNode(node.name)}
                        onMouseEnter={() => setSelectedNode(node.name)}
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                        }}
                        className={`absolute z-20 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold tracking-tight border shadow-md transition-all duration-200 hover:scale-110 focus:outline-none ${
                          node.color
                        } ${isNodeSelected ? 'ring-2 ring-white scale-110' : 'opacity-90'}`}
                        title={`${node.name} (${node.role})`}
                      >
                        {node.name}
                      </button>
                    );
                  })}
                </div>

                {/* Node descriptor banner */}
                <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">
                    {selectedNode
                      ? `${selectedNode}: ${ORBIT_NODES.find((n) => n.name === selectedNode)?.role}`
                      : 'Connected architecture: Python • React • TensorFlow • Flask • PostgreSQL • Hadoop • Spark'}
                  </span>
                  <span className="text-emerald-400 font-mono text-[10px]">7 NODES LIVE</span>
                </div>
              </div>
            )}

            {/* 2. PROFILE.TS */}
            {activeTab === 'system' && (
              <div className="space-y-1.5">
                <div className="text-slate-500 select-none pb-1 flex items-center justify-between border-b border-slate-800/80">
                  <span>// Developer Profile &amp; Academic Status</span>
                  <span className="text-[10px] text-emerald-400 font-medium">READY_FOR_WORK</span>
                </div>
                <div>
                  <span className="text-purple-400">interface</span>{' '}
                  <span className="text-amber-300">SoftwareEngineer</span> &#123;
                </div>
                <div className="pl-4 space-y-1 my-1">
                  <div>
                    <span className="text-slate-400">developer:</span>{' '}
                    <span className="text-emerald-300">&quot;{PERSONAL_INFO.name}&quot;</span>;
                  </div>
                  <div>
                    <span className="text-slate-400">education:</span>{' '}
                    <span className="text-emerald-300">&quot;B.Sc. Software Engineering (5th Year)&quot;</span>;
                  </div>
                  <div>
                    <span className="text-slate-400">location:</span>{' '}
                    <span className="text-emerald-300">&quot;Ethiopia&quot;</span>;
                  </div>
                  <div>
                    <span className="text-slate-400">coreFocus:</span> [
                    <span className="text-sky-300">&quot;AI/ML&quot;</span>,{' '}
                    <span className="text-sky-300">&quot;Backend APIs&quot;</span>,{' '}
                    <span className="text-sky-300">&quot;Full-Stack Web&quot;</span>,{' '}
                    <span className="text-amber-300">&quot;Big Data&quot;</span>];
                  </div>
                  <div>
                    <span className="text-slate-400">featuredSystem:</span> &#123;
                    <div className="pl-4">
                      <span className="text-slate-400">title:</span>{' '}
                      <span className="text-emerald-300">&quot;AI Maize Disease Detection&quot;</span>,
                      <br />
                      <span className="text-slate-400">pipeline:</span>{' '}
                      <span className="text-amber-300">&quot;MobileNetV2 + Grad-CAM Heatmap&quot;</span>,
                      <br />
                      <span className="text-slate-400">bilingual:</span> [
                      <span className="text-purple-300">&quot;English&quot;</span>,{' '}
                      <span className="text-purple-300">&quot;Amharic&quot;</span>]
                    </div>
                    &#125;;
                  </div>
                </div>
                <div>&#125;</div>
              </div>
            )}

            {/* 3. AI-CORE.FLOW */}
            {activeTab === 'architecture' && (
              <div className="space-y-3">
                <div className="text-slate-500 select-none pb-1 flex items-center justify-between border-b border-slate-800/80">
                  <span>// AI Capstone: Real-world Inference Pipeline</span>
                  <span className="text-[10px] text-emerald-400 font-medium">STATUS: ACTIVE</span>
                </div>

                <div className="space-y-2 py-1">
                  <div className="flex items-center space-x-2.5 bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                    <div className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-[10px]">
                      01
                    </div>
                    <div className="flex-1">
                      <span className="text-slate-300 font-semibold">Leaf Image Capture</span>
                      <span className="text-slate-500 text-[10px] block">Field photo input from farmer or agronomist</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">224x224 RGB</span>
                  </div>

                  <div className="flex justify-center text-slate-600 my-0.5">
                    <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                  </div>

                  <div className="flex items-center space-x-2.5 bg-emerald-950/40 p-2 rounded-lg border border-emerald-500/30">
                    <div className="w-5 h-5 rounded bg-emerald-500/30 text-emerald-300 flex items-center justify-center shrink-0 font-bold text-[10px]">
                      02
                    </div>
                    <div className="flex-1">
                      <span className="text-emerald-300 font-semibold">MobileNetV2 Inference</span>
                      <span className="text-slate-400 text-[10px] block">Transfer-learning classification on 4 maize classes</span>
                    </div>
                    <span className="text-[10px] text-emerald-300 bg-emerald-500/20 px-1.5 py-0.5 rounded font-mono">Flask REST API</span>
                  </div>

                  <div className="flex justify-center text-slate-600 my-0.5">
                    <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                  </div>

                  <div className="flex items-center space-x-2.5 bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                    <div className="w-5 h-5 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 font-bold text-[10px]">
                      03
                    </div>
                    <div className="flex-1">
                      <span className="text-purple-300 font-semibold">Grad-CAM Heatmap &amp; Advisory</span>
                      <span className="text-slate-500 text-[10px] block">Visual symptom proof + English &amp; Amharic advisory</span>
                    </div>
                    <span className="text-[10px] text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded">Trust / XAI</span>
                  </div>
                </div>
              </div>
            )}

            {/* 4. STACK.JSON */}
            {activeTab === 'stack' && (
              <div className="space-y-2">
                <div className="text-slate-500 select-none pb-1 flex items-center justify-between border-b border-slate-800/80">
                  <span>// Practiced Technical Stacks</span>
                  <span className="text-[10px] text-sky-400 font-medium">VERIFIED</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                  <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                    <span className="text-purple-400 font-semibold block mb-1">AI &amp; Data:</span>
                    <span className="text-slate-300 leading-relaxed block text-[10px]">
                      • Python 3.10+ • TensorFlow<br />
                      • MobileNetV2 • Grad-CAM<br />
                      • NumPy • Pandas
                    </span>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                    <span className="text-amber-400 font-semibold block mb-1">Big Data &amp; Distr:</span>
                    <span className="text-slate-300 leading-relaxed block text-[10px]">
                      • Hadoop HDFS<br />
                      • Apache Spark RDD<br />
                      • Distributed Analytics
                    </span>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                    <span className="text-emerald-400 font-semibold block mb-1">Backend &amp; DB:</span>
                    <span className="text-slate-300 leading-relaxed block text-[10px]">
                      • Flask RESTful APIs<br />
                      • JWT Authentication<br />
                      • PostgreSQL / SQL
                    </span>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                    <span className="text-sky-400 font-semibold block mb-1">Client Interface:</span>
                    <span className="text-slate-300 leading-relaxed block text-[10px]">
                      • React 18+ (Hooks)<br />
                      • Tailwind CSS<br />
                      • Progressive Web Apps
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Status Bar */}
            <div className="pt-3 mt-2 border-t border-slate-800/90 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center space-x-2">
                <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>Ready for Software Engineering Opportunities</span>
              </div>
              <a
                href="#featured-project"
                className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center space-x-1 group"
              >
                <span>Inspect Capstone</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

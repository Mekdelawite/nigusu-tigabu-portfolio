import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SkipLink } from './components/SkipLink';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { BackToTop } from './components/BackToTop';
import { ToastContainer, ToastMessage } from './components/Toast';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { FeaturedProject } from './sections/FeaturedProject';
import { OtherProjects } from './sections/OtherProjects';
import { Journey } from './sections/Journey';
import { Education } from './sections/Education';
import { Capabilities } from './sections/Capabilities';
import { FinalCTA } from './sections/FinalCTA';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { PERSONAL_INFO } from './data/portfolioData';
import { Info, X } from 'lucide-react';

export default function App() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [emailCopied, setEmailCopied] = useState(false);
  const [placeholderModalMsg, setPlaceholderModalMsg] = useState<string | null>(null);

  const showToast = (text: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setEmailCopied(true);
      showToast(`Email copied: ${PERSONAL_INFO.email}`, 'success');
      setTimeout(() => setEmailCopied(false), 3000);
    } catch {
      showToast(`Email address: ${PERSONAL_INFO.email}`, 'info');
    }
  };

  const handlePlaceholderClick = (message: string) => {
    setPlaceholderModalMsg(message);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300 transition-colors duration-200">
        {/* WCAG AA Skip-to-content Link */}
        <SkipLink />

        {/* Reading Scroll Progress */}
        <ScrollProgress />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Landmark */}
        <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
          <Hero onCopyEmail={handleCopyEmail} emailCopied={emailCopied} />
          <About />
          <Skills />
          <FeaturedProject />
          <OtherProjects onPlaceholderClick={handlePlaceholderClick} />
          <Journey />
          <Education />
          <Capabilities />
          <FinalCTA />
          <Contact
            onCopyEmail={handleCopyEmail}
            emailCopied={emailCopied}
            onShowToast={showToast}
            onPlaceholderClick={handlePlaceholderClick}
          />
        </main>

        {/* Semantic Footer */}
        <Footer />

        {/* Back-to-Top Floating Trigger */}
        <BackToTop />

        {/* Accessible Live Toast Container */}
        <ToastContainer toasts={toasts} onDismiss={handleDismissToast} />

        {/* Accessible Placeholder Helper Dialog */}
        {placeholderModalMsg && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="placeholder-modal-heading"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
            onClick={() => setPlaceholderModalMsg(null)}
          >
            <div
              className="bg-[var(--bg-card)] rounded-2xl p-6 max-w-md w-full border border-[var(--border-subtle)] shadow-2xl space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
                  <Info className="w-5 h-5" aria-hidden="true" />
                  <h3 id="placeholder-modal-heading" className="text-base font-bold text-[var(--text-primary)]">
                    Personalization Placeholder
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setPlaceholderModalMsg(null)}
                  aria-label="Close dialog"
                  className="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {placeholderModalMsg}
              </p>

              <div className="p-3 rounded-lg bg-[var(--bg-muted)] text-xs font-mono text-[var(--text-muted)] border border-[var(--border-subtle)]">
                File: src/data/portfolioData.ts
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setPlaceholderModalMsg(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-xs"
                >
                  Got It
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

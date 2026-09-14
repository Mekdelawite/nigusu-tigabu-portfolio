import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      id="back-to-top-button"
      onClick={scrollToTop}
      aria-label="Back to top of page"
      className="interactive-btn fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/90 dark:bg-emerald-600 text-white shadow-xl hover:shadow-2xl hover:bg-slate-800 dark:hover:bg-emerald-500 transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none group scale-in-item is-revealed"
    >
      <ArrowUp className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
    </button>
  );
};

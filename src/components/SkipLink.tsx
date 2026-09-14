import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      id="skip-to-content-link"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-emerald-600 focus:text-white focus:rounded-lg focus:shadow-xl focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 font-medium text-sm transition-all"
    >
      Skip to main content
    </a>
  );
};

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      id="theme-toggle-button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      className={`group relative inline-flex items-center justify-center gap-2 px-2.5 py-2 rounded-xl transition-all duration-200 border text-xs font-medium cursor-pointer bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-muted)] text-[var(--text-primary)] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none shadow-2xs ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" aria-hidden="true" />
        ) : (
          <Moon className="w-4 h-4 text-slate-700 dark:text-slate-200 transition-transform duration-300 -rotate-12 hover:rotate-0" aria-hidden="true" />
        )}
      </div>

      {showLabel ? (
        <span className="text-xs font-medium text-[var(--text-primary)] select-none">
          {isDark ? 'Light' : 'Dark'}
        </span>
      ) : (
        <span className="sr-only">{label}</span>
      )}
    </button>
  );
};


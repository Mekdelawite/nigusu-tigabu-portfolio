import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SectionHeaderProps {
  id?: string;
  badgeText: string;
  badgeIcon?: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  id,
  badgeText,
  badgeIcon,
  title,
  description,
  className = 'mb-12',
}) => {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`max-w-3xl ${className} reveal-item ${isRevealed ? 'is-revealed' : ''}`}
    >
      {/* Badge / Pill */}
      <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
        {badgeIcon}
        <span>{badgeText}</span>
      </div>

      {/* Main Section Heading */}
      <h2
        id={id}
        className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-2"
      >
        {title}
      </h2>

      {/* Expanding Accent Underline */}
      <div className="mb-4">
        <div
          className={`accent-line ${isRevealed ? 'accent-line-active' : ''}`}
          aria-hidden="true"
        />
      </div>

      {/* Description */}
      {description && (
        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

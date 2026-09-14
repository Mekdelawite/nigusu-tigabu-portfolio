import React, { useState } from 'react';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  FileText,
  Copy,
  Check,
  ExternalLink,
  AlertCircle,
  CheckCircle2,
  Info,
  Clock,
  MapPin,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types/portfolio';
import { SectionHeader } from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ContactProps {
  onCopyEmail: () => void;
  emailCopied: boolean;
  onShowToast: (text: string, type: 'success' | 'error' | 'info') => void;
  onPlaceholderClick: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({
  onCopyEmail,
  emailCopied,
  onShowToast,
  onPlaceholderClick,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { ref: leftColRef, isRevealed: leftColRevealed } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });
  const { ref: rightColRef, isRevealed: rightColRevealed } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      onShowToast('Please review the form for errors before submitting.', 'error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate accessible network response delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      onShowToast(
        'Thank you! In this portfolio frontend, form submission is simulated. You can also contact Nigusu directly via email.',
        'success'
      );
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 md:py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Accent Line Animation */}
        <SectionHeader
          id="contact-heading"
          badgeText="Connect &amp; Collaborate"
          badgeIcon={<Mail className="w-3.5 h-3.5" aria-hidden="true" />}
          title="Get In Touch"
          description="I am actively seeking software engineering internships, junior developer positions, freelance opportunities, and collaborative technology initiatives."
          className="max-w-3xl mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact & Social Links with Scroll Reveal */}
          <div
            ref={leftColRef}
            className={`lg:col-span-5 space-y-6 reveal-item ${
              leftColRevealed ? 'is-revealed' : ''
            }`}
          >
            <div className="theme-card p-6 rounded-2xl shadow-xs hover:shadow-md transition-all space-y-5">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Direct Contact Information
              </h3>

              {/* Email Address with Copy Utility */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider block">
                  Email Address
                </span>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--bg-muted)] border border-[var(--border-subtle)]">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-mono text-emerald-600 dark:text-emerald-400 hover:underline break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    type="button"
                    onClick={onCopyEmail}
                    className="interactive-btn ml-2 p-2 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] border border-transparent hover:border-[var(--border-subtle)] focus-visible:ring-2 focus-visible:ring-emerald-500"
                    title="Copy email address"
                    aria-label="Copy email address to clipboard"
                  >
                    {emailCopied ? (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    ) : (
                      <Copy className="w-4 h-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Status */}
              <div className="space-y-2.5 pt-2 border-t border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-secondary)]">
                <div className="flex items-center space-x-2.5">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>Location: {PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>Availability: Open for Junior Roles, Internships &amp; Remote Work</span>
                </div>
              </div>
            </div>

            {/* Profile & Document Placeholders */}
            <div className="theme-card p-6 rounded-2xl shadow-xs hover:shadow-md transition-all space-y-3">
              <h3 className="text-sm font-bold text-[var(--text-primary)] mb-2">
                Profiles &amp; Documents
              </h3>

              <div className="space-y-2">
                {/* GitHub */}
                <button
                  type="button"
                  onClick={() =>
                    onPlaceholderClick(
                      `GitHub Profile: Update PERSONAL_INFO.githubUrl in src/data/portfolioData.ts with your username.`
                    )
                  }
                  className="interactive-btn w-full flex items-center justify-between p-3 rounded-lg border border-[var(--border-subtle)] hover:bg-[var(--bg-muted)] hover:border-[var(--border-strong)] text-left group"
                >
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5 text-[var(--text-primary)] group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <div>
                      <span className="text-sm font-bold text-[var(--text-primary)] block">
                        GitHub Profile
                      </span>
                      <span className="text-xs text-[var(--text-muted)] font-mono">
                        github.com/YOUR_GITHUB_USERNAME_HERE
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                    Placeholder
                  </span>
                </button>

                {/* LinkedIn */}
                <button
                  type="button"
                  onClick={() =>
                    onPlaceholderClick(
                      `LinkedIn Profile: Update PERSONAL_INFO.linkedinUrl in src/data/portfolioData.ts with your profile link.`
                    )
                  }
                  className="interactive-btn w-full flex items-center justify-between p-3 rounded-lg border border-[var(--border-subtle)] hover:bg-[var(--bg-muted)] hover:border-[var(--border-strong)] text-left group"
                >
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-sky-600 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <div>
                      <span className="text-sm font-bold text-[var(--text-primary)] block">
                        LinkedIn Profile
                      </span>
                      <span className="text-xs text-[var(--text-muted)] font-mono">
                        linkedin.com/in/YOUR_LINKEDIN_USERNAME_HERE
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                    Placeholder
                  </span>
                </button>

                {/* CV Download */}
                <button
                  type="button"
                  onClick={() =>
                    onPlaceholderClick(
                      `Curriculum Vitae (CV): Place your resume PDF in the public folder and link it via PERSONAL_INFO.cvDownloadUrl in src/data/portfolioData.ts.`
                    )
                  }
                  className="interactive-btn w-full flex items-center justify-between p-3 rounded-lg border border-[var(--border-subtle)] hover:bg-[var(--bg-muted)] hover:border-[var(--border-strong)] text-left group"
                >
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <div>
                      <span className="text-sm font-bold text-[var(--text-primary)] block">
                        Curriculum Vitae (CV)
                      </span>
                      <span className="text-xs text-[var(--text-muted)]">
                        Download resume PDF
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                    Placeholder
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Contact Form with Scroll Reveal */}
          <div
            ref={rightColRef}
            className={`lg:col-span-7 reveal-item ${
              rightColRevealed ? 'is-revealed' : ''
            }`}
          >
            <div className="theme-card p-6 sm:p-8 rounded-2xl shadow-xs hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6">
                Fill out the form below. Front-end validation and accessible state feedback are fully wired.
              </p>

              {/* Status Notice Regarding Backend */}
              <div className="p-3.5 rounded-lg bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] flex items-start space-x-2.5 mb-6">
                <Info className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>Developer Note:</strong> This frontend form simulates submission states and validates input according to WCAG AA criteria. To receive emails directly, connect this form to EmailJS, Formspree, or your custom Flask backend API.
                </span>
              </div>

              {submitStatus === 'success' && (
                <div
                  role="status"
                  className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-sm flex items-start space-x-3 mb-6 scale-in-item is-revealed"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <strong className="block font-semibold">Message Successfully Registered (Simulated)!</strong>
                    <span>Thank you for reaching out. Please also feel free to send a direct message to {PERSONAL_INFO.email}.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1.5"
                  >
                    Your Name <span className="text-rose-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    placeholder="e.g. Abebe Kebede"
                    className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-[var(--bg-muted)] text-[var(--text-primary)] border transition-all duration-200 focus:bg-[var(--bg-card)] focus-visible:outline-none focus-visible:ring-2 ${
                      errors.name
                        ? 'border-rose-400 focus-visible:ring-rose-500'
                        : 'border-[var(--border-subtle)] focus-visible:ring-emerald-500 focus:border-emerald-500'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-rose-600 dark:text-rose-400 flex items-center space-x-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1.5"
                  >
                    Your Email Address <span className="text-rose-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    placeholder="e.g. abebe@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-[var(--bg-muted)] text-[var(--text-primary)] border transition-all duration-200 focus:bg-[var(--bg-card)] focus-visible:outline-none focus-visible:ring-2 ${
                      errors.email
                        ? 'border-rose-400 focus-visible:ring-rose-500'
                        : 'border-[var(--border-subtle)] focus-visible:ring-emerald-500 focus:border-emerald-500'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-rose-600 dark:text-rose-400 flex items-center space-x-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1.5"
                  >
                    Subject <span className="text-rose-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    placeholder="e.g. Junior Developer Role / Capstone Discussion"
                    className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-[var(--bg-muted)] text-[var(--text-primary)] border transition-all duration-200 focus:bg-[var(--bg-card)] focus-visible:outline-none focus-visible:ring-2 ${
                      errors.subject
                        ? 'border-rose-400 focus-visible:ring-rose-500'
                        : 'border-[var(--border-subtle)] focus-visible:ring-emerald-500 focus:border-emerald-500'
                    }`}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-xs text-rose-600 dark:text-rose-400 flex items-center space-x-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1.5"
                  >
                    Message <span className="text-rose-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    placeholder="Write your message here..."
                    className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-[var(--bg-muted)] text-[var(--text-primary)] border transition-all duration-200 focus:bg-[var(--bg-card)] focus-visible:outline-none focus-visible:ring-2 resize-y ${
                      errors.message
                        ? 'border-rose-400 focus-visible:ring-rose-500'
                        : 'border-[var(--border-subtle)] focus-visible:ring-emerald-500 focus:border-emerald-500'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-rose-600 dark:text-rose-400 flex items-center space-x-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-submit-button"
                    disabled={isSubmitting}
                    className="interactive-btn group/btn w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-xs disabled:opacity-60 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform" aria-hidden="true" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Type definitions for Nigusu Tigabu's portfolio website.
 * Designed for strict type safety and easy future customization.
 */

export type ProficiencyLevel = 'Building With' | 'Comfortable' | 'Currently Learning';

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'ai-ml' | 'big-data' | 'tools';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  level: ProficiencyLevel;
  description: string;
  badge: string;
  iconName: string;
}

export type ProjectCategory = 'all' | 'ai-ml' | 'big-data' | 'web' | 'fullstack';

export interface Project {
  id: string;
  projectNumber?: string;
  title: string;
  tagline: string;
  category: 'ai-ml' | 'big-data' | 'web' | 'fullstack';
  description: string;
  longDescription: string;
  status:
    | 'In Active Development'
    | 'Prototype Completed'
    | 'Planned Project'
    | 'Completed Project'
    | 'Academic Project'
    | 'Active & Deployed';
  isFeatured?: boolean;
  technologies: string[];
  keyFeatures: string[];
  architectureHighlights: string[];
  githubUrl: string;
  liveDemoUrl: string;
  isGithubPlaceholder: boolean;
  isDemoPlaceholder: boolean;
  imageAlt: string;
  previewType: 'maize-demo' | 'water-quality' | 'airline-delay' | 'electronics' | 'photography' | 'standard';
}

export interface DiseaseClass {
  id: string;
  name: string;
  amharicName: string;
  scientificName: string;
  severity: 'High' | 'Medium' | 'None (Healthy)';
  visualFeatures: string;
  sampleSymptoms: string[];
  advisoryEnglish: string;
  advisoryAmharic: string;
  confidenceScore: number;
}

export interface JourneyMilestone {
  id: string;
  phase: string;
  period: string;
  title: string;
  focus: string;
  summary: string;
  achievements: string[];
  technologiesUsed: string[];
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  practicalExample: string;
  tools: string[];
  iconName: string;
}

export interface EducationInfo {
  degree: string;
  field: string;
  currentYear: string;
  status: string;
  location: string;
  expectedGraduation: string;
  overview: string;
  coursework: string[];
  academicFocus: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

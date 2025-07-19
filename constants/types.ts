// constants/types.ts
export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogItem {
  title: string;
  excerpt: string;
  slug: string; // For navigation to individual blog posts
}

export interface CourseItem {
  id: string;
  title: string;
  description: string;
  image: any;
  sections ? : CourseSection[];
}

export interface CourseSection {
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string; 
  title: string;
  type: 'video' | 'text';
  content: string;
  duration?: string; 
}

export interface TestimonialItem {
  quote: string;
  author: string;
}

export interface DailyFeature {
  id: string;
  name: string;
  icon: any;
  route: string; 
}

export interface FooterNavItem {
  name: string;
  icon?: string; 
  route: string;
}

// New Interfaces for Trimester-Specific Content
export interface ContentItem {
  id: string;
  title: string;
  description: string;
  videoUrl?: string; // For yoga, meditation, music
  imageUrl?: any; // For diet plans, sanskars, etc.
  details?: string[]; // For bullet points or additional info
}

export interface TrimesterContent {
  first: ContentItem[];
  second: ContentItem[];
  third: ContentItem[];
}

export interface AppContent {
  yoga: TrimesterContent;
  music: TrimesterContent;
  dietPlan: TrimesterContent;
  sanskars: TrimesterContent;
  meditation: TrimesterContent;
  mantras: TrimesterContent;
  affirmations: TrimesterContent;
  therapy: TrimesterContent;
  stories: TrimesterContent; // Added for completeness based on APP_OPTIONS
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogItem {
  title: string;
  excerpt: string;
  // image: any; // If you add images for blogs later
  slug: string; // For navigation to individual blog posts
}

export interface CourseItem {
  id: string;
  title: string;
  description: string; // Add this
  image: any;
//   price: number; // For future payment integration
}

export interface TestimonialItem {
  quote: string;
  author: string;
}

export interface DailyFeature {
  id: string;
  name: string;
  icon?: string; // Optional icon name (e.g., for vector icons library)
  route: string; // Route within the app to navigate to
}

export interface FooterNavItem {
  name: string;
  icon?: string; // Optional icon
  route: string;
}
import { FAQItem, BlogItem, CourseItem, TestimonialItem, DailyFeature, FooterNavItem } from './types';

export const APP_OPTIONS: string[] = [
  'Yoga', 'Music', 'Stories', 'Therapy', 'Diet Plan', 'Sanskars', 'Meditation', 'Mantras', 'Affirmations'
];

export const BLOG_POSTS: BlogItem[] = [
  {
    title: 'How Mantras Affect Baby’s Brain',
    excerpt: 'Recent studies suggest that Vedic mantras can influence fetal development through maternal well-being...',
    slug: 'mantras-affect-baby-brain',
  },
  {
    title: 'Ayurvedic Tips for First Trimester',
    excerpt: 'Discover the safest and most effective dietary habits during early pregnancy based on Ayurveda...',
    slug: 'ayurvedic-tips-first-trimester',
  },
  {
    title: 'The Power of Positive Affirmations in Pregnancy',
    excerpt: 'Learn how daily affirmations can reduce stress and foster a joyful connection with your unborn child.',
    slug: 'positive-affirmations-pregnancy',
  },
  {
    title: 'Nutrition for a Healthy Pregnancy: A Month-by-Month Guide',
    excerpt: 'Understand the essential nutrients and dietary recommendations for each stage of your pregnancy.',
    slug: 'nutrition-healthy-pregnancy',
  },
  {
    title: 'The Role of Music in Fetal Development',
    excerpt: 'Explore how classical music and soothing melodies can stimulate your baby\'s sensory development.',
    slug: 'music-fetal-development',
  },
];

export const POPULAR_COURSES: CourseItem[] = [
  {
    id: '1',
    title: 'Prenatal Yoga',
    description: 'Gentle yoga poses designed to strengthen your body and calm your mind during pregnancy.',
    image: require('../assets/images/mother.png'),
  },
  {
    id: '2',
    title: 'Spiritual Parenting',
    description: 'Connect with ancient wisdom to nurture your baby\'s spiritual and intellectual growth from conception.',
    image: require('../assets/images/mother.png'),
  },
  {
    id: '3',
    title: 'Mindful Meditation for Moms',
    description: 'Daily guided meditations to reduce stress, improve sleep, and foster a deep bond with your unborn child.',
    image: require('../assets/images/mother.png'),
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'This app gave me inner peace during pregnancy. The music therapy and affirmations are amazing!',
    author: 'Meera',
  },
  {
    quote: 'A truly comprehensive guide! From diet to spiritual practices, it covered everything I needed.',
    author: 'Priya Sharma',
  },
  {
    quote: 'I felt so much more connected to my baby after using the Garbha Sanskar practices from this app.',
    author: 'Anjali Devi',
  },
  {
    quote: 'The guided meditations helped me stay calm and focused throughout my pregnancy journey.',
    author: 'Sneha Rao',
  },
  {
    quote: 'Highly recommend! The storytelling sessions are a unique and wonderful way to bond with your baby.',
    author: 'Kavita Singh',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Is this based on real science?',
    answer: 'Yes! All practices are supported by modern prenatal research and ancient wisdom.',
  },
  {
    question: 'Can I use this in 2nd trimester?',
    answer: 'Absolutely. Content is categorized and guided for all trimesters.',
  },
  {
    question: 'How do I access personalized consultations?',
    answer: 'You can book a consultation directly through the app\'s "Consultation" section.',
  },
  {
    question: 'Is there a subscription fee?',
    answer: 'Some basic features are free, while premium courses and personalized consultations may require a subscription or one-time purchase.',
  },
];

export const CTA_MESSAGES = {
  getStarted: {
    text: "Unlock Your Free Course!",
    subtitle: "Start your journey to blissful motherhood today.", // Add a reinforcing subtitle
    href: "/onboarding", // Assuming a new route for free course signup
  },
  // You could have other CTAs here for different contexts
};

export const ENROLLED_COURSES: CourseItem[] = [
  POPULAR_COURSES[0],
  POPULAR_COURSES[2],
  { id: '4', title: 'Baby Brain Development', description: 'Activities and tips to stimulate your baby\'s cognitive growth during pregnancy.', image: require('../assets/images/mother.png') },
];

export const DAILY_FEATURES_OPTIONS: DailyFeature[] = [
  { id: 'yoga', name: 'Yoga', icon: 'yoga', route: '/daily-yoga' },
  { id: 'diet', name: 'Diet Plan', icon: 'food-apple', route: '/daily-diet' },
  { id: 'music', name: 'Music Therapy', icon: 'music', route: '/daily-music' },
  { id: 'therapy', name: 'Sound Therapy', icon: 'waves', route: '/daily-therapy' },
  { id: 'story', name: 'Storytelling', icon: 'book-open', route: '/daily-story' },
  { id: 'meditation', name: 'Meditation', icon: 'leaf', route: '/daily-meditation' },
];

export const CONSULTATION_FLYER_INFO = {
  title: 'Personalized Guidance for You',
  description: 'Book a one-on-one consultation with our expert Garbha Sanskar practitioners and wellness coaches.',
  ctaText: 'Book a Session',
  route: '/consultation-booking',
};

export const DASHBOARD_FOOTER_NAV_ITEMS: FooterNavItem[] = [
  { name: 'Home', icon: 'home', route: '/' },
  { name: 'Courses', icon: 'book', route: '/courses' },
  { name: 'Webinar', icon: 'video', route: '/webinar' },
  { name: 'Consult', icon: 'chat', route: '/consultation' },
  { name: 'Shop', icon: 'cart', route: '/shop' },
];

export const ONBOARDING_CONTENT = {
  welcomeTitle: "Welcome to Divya Garbha",
  welcomeSubtitle: "Your Companion for a Conscious Pregnancy",
  features: [
    {
      title: "Ancient Wisdom, Modern Science",
      description: "Discover Garbha Sanskar, blending traditional practices with evidence-based research for holistic well-being.",
      image: require('../assets/images/mother.png'), // Placeholder, use a specific onboarding image if available
    },
    {
      title: "Personalized Journeys",
      description: "Tailored yoga, meditation, diet, and music for every trimester, guided by experts.",
      image: require('../assets/images/mother.png'), // Placeholder
    },
    {
      title: "Connect & Grow",
      description: "Access live webinars, consultations, and a community of expectant mothers.",
      image: require('../assets/images/mother.png'), // Placeholder
    },
  ],
  ctaLogin: "Already have an account? Login",
  ctaSignup: "Start Your Journey", // Or "Create Account"
};
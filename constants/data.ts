import { FAQItem, BlogItem, CourseItem, TestimonialItem, DailyFeature, FooterNavItem, AppContent } from './types';

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

export const ENROLLED_COURSES: CourseItem[] = [{
  ...POPULAR_COURSES[0], // Prenatal Yoga
  sections: [{
    title: 'Section 1: Introduction to Prenatal Yoga',
    lessons: [{
      id: 'py_1_1',
      title: 'What is Prenatal Yoga?',
      type: 'text',
      content: 'Prenatal yoga is a multifaceted approach to exercise that encourages stretching, mental centering and focused breathing. Research suggests that prenatal yoga is safe and can have many benefits for pregnant women and their babies.'
    }, {
      id: 'py_1_2',
      title: 'Benefits of Prenatal Yoga',
      type: 'video',
      content: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '5:45'
    }, ]
  }, {
    title: 'Section 2: First Trimester Poses',
    lessons: [{
      id: 'py_2_1',
      title: 'Gentle Stretches & Breathing',
      type: 'video',
      content: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '12:30'
    }, ]
  }, ],
}, {
  ...POPULAR_COURSES[2], // Mindful Meditation
  sections: [{
    title: 'Section 1: Introduction to Meditation',
    lessons: [{
      id: 'mm_1_1',
      title: 'The Power of Mindfulness',
      type: 'text',
      content: 'This is the text content for the power of mindfulness.'
    }, ]
  }, ],
}, {
  id: '4',
  title: 'Baby Brain Development',
  description: 'Activities and tips to stimulate your baby\'s cognitive growth during pregnancy.',
  image: require('../assets/images/mother.png'),
  sections: [{
    title: 'Section 1: Early Stimulation',
    lessons: [{
      id: 'bbd_1_1',
      title: 'The Role of Sound',
      type: 'text',
      content: 'This is the text content for the role of sound.'
    }, ]
  }, ],
}, ];

export const DAILY_FEATURES_OPTIONS: DailyFeature[] = [
  { id: 'yoga', name: 'Yoga', icon: require('../assets/images/yoga.png'), route: '/content/yoga' },
  { id: 'meditation', name: 'Meditation', icon: require('../assets/images/meditation.png'), route: '/content/meditation' },
  { id: 'mantras', name: 'Mantras', icon: require('../assets/images/mantras.png'), route: '/content/mantras' },
  { id: 'dietPlan', name: 'Diet Plan', icon: require('../assets/images/dietPlan.png'), route: '/content/dietPlan' },
  { id: 'music', name: 'Music Therapy', icon: require('../assets/images/music.png'), route: '/content/music' },
  { id: 'stories', name: 'Storytelling', icon: require('../assets/images/stories.png'), route: '/content/stories' },
];


export const CONSULTATION_FLYER_INFO = {
  title: 'Personalized Guidance for You',
  description: 'Book a one-on-one consultation with our expert Garbha Sanskar practitioners and wellness coaches.',
  ctaText: 'Book a Session',
  route: '/consultation-booking',
};

export const DASHBOARD_FOOTER_NAV_ITEMS: FooterNavItem[] = [
  { name: 'Home', icon: 'home', route: '/dashboard' }, // Changed to dashboard
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
      image: require('../assets/images/mother.png'),
    },
    {
      title: "Personalized Journeys",
      description: "Tailored yoga, meditation, diet, and music for every trimester, guided by experts.",
      image: require('../assets/images/mother.png'),
    },
    {
      title: "Connect & Grow",
      description: "Access live webinars, consultations, and a community of expectant mothers.",
      image: require('../assets/images/mother.png'),
    },
    // Adding more features to ensure scrollability
    {
      title: "Daily Affirmations",
      description: "Start your day with positive thoughts and intentions for you and your baby.",
      image: require('../assets/images/mother.png'),
    },
    {
      title: "Diet Plans & Recipes",
      description: "Trimester-specific nutritional guidance for a healthy pregnancy.",
      image: require('../assets/images/mother.png'),
    },
    {
      title: "Spiritual Insights",
      description: "Daily verses and stories from ancient texts for spiritual nourishment.",
      image: require('../assets/images/mother.png'),
    },
  ],
  ctaLogin: "Already have an account? Login",
  ctaSignup: "Start Your Journey",
};

// --- NEW CONTENT DATA ---
export const APP_SPECIFIC_CONTENT: AppContent = {
  yoga: {
    first: [
      { id: 'y1', title: 'Gentle Stretches for Early Pregnancy', description: 'Focus on light movements to alleviate morning sickness and fatigue.', videoUrl: 'https://www.youtube.com/embed/example1' },
      { id: 'y2', title: 'Pelvic Tilts for Comfort', description: 'Simple exercises to improve pelvic circulation and reduce back pain.', videoUrl: 'https://www.youtube.com/embed/example2' },
    ],
    second: [
      { id: 'y3', title: 'Strengthening Poses for Growing Belly', description: 'Build core and leg strength to support your changing body.', videoUrl: 'https://www.youtube.com/embed/example3' },
      { id: 'y4', title: 'Hip Openers for Flexibility', description: 'Prepare your body for labor with gentle hip-opening sequences.', videoUrl: 'https://www.youtube.com/embed/example4' },
    ],
    third: [
      { id: 'y5', title: 'Relaxing Poses for Labor Preparation', description: 'Focus on breathing and relaxation techniques to ease anxiety.', videoUrl: 'https://www.youtube.com/embed/example5' },
      { id: 'y6', title: 'Perineum Strengthening', description: 'Specific exercises to support the perineum for childbirth.', videoUrl: 'https://www.youtube.com/embed/example6' },
    ],
  },
  music: {
    first: [
      { id: 'm1', title: 'Soothing Classical Melodies', description: 'Gentle instrumental music for relaxation and stress reduction.', videoUrl: 'https://www.youtube.com/embed/music1' },
      { id: 'm2', title: 'Nature Sounds for Calmness', description: 'Ocean waves and forest sounds to create a peaceful environment.', videoUrl: 'https://www.youtube.com/embed/music2' },
    ],
    second: [
      { id: 'm3', title: 'Uplifting Ragas for Fetal Stimulation', description: 'Traditional Indian ragas believed to stimulate brain development.', videoUrl: 'https://www.youtube.com/embed/music3' },
      { id: 'm4', title: 'Lullabies for Bonding', description: 'Soft vocal pieces to encourage early bonding with your baby.', videoUrl: 'https://www.youtube.com/embed/music4' },
    ],
    third: [
      { id: 'm5', title: 'Meditation Music for Inner Peace', description: 'Calming tracks to help you relax and prepare for labor.', videoUrl: 'https://www.youtube.com/embed/music5' },
      { id: 'm6', title: 'Chants for Positive Energy', description: 'Vedic chants and devotional music for spiritual well-being.', videoUrl: 'https://www.youtube.com/embed/music6' },
    ],
  },
  dietPlan: {
    first: [
      { id: 'd1', title: 'Anti-Nausea Breakfast Ideas', description: 'Light and easy-to-digest breakfast recipes to combat morning sickness.', imageUrl: 'https://placehold.co/300x200/F5E1DA/3E2723?text=Breakfast' },
      { id: 'd2', title: 'Hydration Essentials', description: 'Tips for staying hydrated and recipes for refreshing drinks.', imageUrl: 'https://placehold.co/300x200/F5E1DA/3E2723?text=Hydration' },
    ],
    second: [
      { id: 'd3', title: 'Nutrient-Rich Lunch Options', description: 'Recipes packed with essential vitamins and minerals for baby\'s growth.', imageUrl: 'https://placehold.co/300x200/F5E1DA/3E2723?text=Lunch' },
      { id: 'd4', title: 'Healthy Snacks for Energy', description: 'Quick and easy snack ideas to keep your energy levels up.', imageUrl: 'https://placehold.co/300x200/F5E1DA/3E2723?text=Snacks' },
    ],
    third: [
      { id: 'd5', title: 'Fiber-Rich Dinners for Digestion', description: 'Recipes to aid digestion and prevent constipation in late pregnancy.', imageUrl: 'https://placehold.co/300x200/F5E1DA/3E2723?text=Dinner' },
      { id: 'd6', title: 'Foods for Lactation Preparation', description: 'Nutritional advice and recipes to support milk production post-delivery.', imageUrl: 'https://placehold.co/300x200/F5E1DA/3E2723?text=Lactation' },
    ],
  },
  sanskars: {
    first: [
      { id: 's1', title: 'Garbhadhan Sanskar', description: 'Understanding the spiritual and scientific significance of conception.', details: ['Focus on positive thoughts and intentions.', 'Connect with your partner on a deeper level.'] },
      { id: 's2', title: 'Punsavan Sanskar', description: 'Practices for ensuring a healthy and intelligent child.', details: ['Specific mantras and rituals.', 'Dietary recommendations for early development.'] },
    ],
    second: [
      { id: 's3', title: 'Simantonnayan Sanskar', description: 'Celebrating motherhood and ensuring the well-being of mother and child.', details: ['Community gatherings and blessings.', 'Focus on emotional stability.'] },
      { id: 's4', title: 'Mitra-Pitru Sanskar', description: 'Cultivating positive relationships and ancestral blessings.', details: ['Family bonding exercises.', 'Gratitude practices.'] },
    ],
    third: [
      { id: 's5', title: 'Jatakarma Sanskar', description: 'Welcoming the newborn and ensuring their initial well-being.', details: ['First rituals after birth.', 'Importance of mother\'s touch.'] },
      { id: 's6', title: 'Namkaran Sanskar', description: 'The ceremony of naming the child with auspicious vibrations.', details: ['Choosing a meaningful name.', 'Blessings for the child\'s future.'] },
    ],
  },
  meditation: {
    first: [
      { id: 'med1', title: 'Mindful Breathing for Relaxation', description: 'Simple breathing exercises to calm the mind and reduce anxiety.', videoUrl: 'https://www.youtube.com/embed/med1' },
      { id: 'med2', title: 'Body Scan for Awareness', description: 'Guided meditation to connect with your body and baby.', videoUrl: 'https://www.youtube.com/embed/med2' },
    ],
    second: [
      { id: 'med3', title: 'Visualizing a Healthy Baby', description: 'Guided imagery to foster a positive connection with your unborn child.', videoUrl: 'https://www.youtube.com/embed/med3' },
      { id: 'med4', title: 'Affirmation Meditation', description: 'Meditate on positive affirmations for a joyful pregnancy.', videoUrl: 'https://www.youtube.com/embed/med4' },
    ],
    third: [
      { id: 'med5', title: 'Labor Preparation Meditation', description: 'Techniques to build resilience and manage discomfort during labor.', videoUrl: 'https://www.youtube.com/embed/med5' },
      { id: 'med6', title: 'Post-Birth Visualization', description: 'Imagine a smooth delivery and a healthy, happy baby.', videoUrl: 'https://www.youtube.com/embed/med6' },
    ],
  },
  mantras: {
    first: [
      { id: 'man1', title: 'Ganesh Mantra for Obstacle Removal', description: 'Chanting for a smooth pregnancy journey.', details: ['"Om Gan Ganapataye Namaha"', 'Listen or chant daily for positive energy.'] },
      { id: 'man2', title: 'Gayatri Mantra for Wisdom', description: 'Enhancing intellectual and spiritual growth for the baby.', details: ['"Om Bhur Bhuvah Svah..."', 'Focus on clarity and peace.'] },
    ],
    second: [
      { id: 'man3', title: 'Vishnu Mantra for Protection', description: 'Invoking divine protection for mother and child.', details: ['"Om Namo Bhagavate Vasudevaya"', 'Chant during quiet moments.'] },
      { id: 'man4', title: 'Durga Mantra for Strength', description: 'For inner strength and courage during pregnancy.', details: ['"Om Dum Durgayei Namaha"', 'Empowering chants for mothers.'] },
    ],
    third: [
      { id: 'man5', title: 'Mahamrityunjaya Mantra for Health', description: 'For health, longevity, and well-being of both mother and baby.', details: ['"Om Tryambakam Yajamahe..."', 'Powerful healing vibrations.'] },
      { id: 'man6', title: 'Sarva Mangala Mangalye Mantra', description: 'For overall auspiciousness and blessings.', details: ['"Sarva Mangala Mangalye..."', 'Chant for a blessed delivery.'] },
    ],
  },
  affirmations: {
    first: [
      { id: 'aff1', title: 'I am nurturing new life with love.', description: 'Daily affirmation for positive self-talk.', details: ['Repeat 10 times in the morning.', 'Visualize positive energy flowing to your baby.'] },
      { id: 'aff2', title: 'My body is strong and capable.', description: 'Affirmation for physical confidence.', details: ['Say this before light exercises.', 'Believe in your body\'s wisdom.'] },
    ],
    second: [
      { id: 'aff3', title: 'My baby is growing healthy and strong.', description: 'Affirmation for baby\'s well-being.', details: ['Speak to your baby daily.', 'Feel the connection and growth.'] },
      { id: 'aff4', title: 'I embrace the changes in my body.', description: 'Affirmation for self-acceptance.', details: ['Look in the mirror and appreciate your journey.', 'Celebrate your evolving form.'] },
    ],
    third: [
      { id: 'aff5', title: 'I am ready for a joyful birth.', description: 'Affirmation for labor preparation.', details: ['Practice deep breathing with this affirmation.', 'Trust your instincts.'] },
      { id: 'aff6', title: 'I am a loving and capable mother.', description: 'Affirmation for maternal confidence.', details: ['Remind yourself of your innate strength.', 'Anticipate the joy of meeting your baby.'] },
    ],
  },
  therapy: {
    first: [
      { id: 't1', title: 'Aroma Therapy: Lavender for Relaxation', description: 'Use of essential oils to soothe morning sickness and anxiety.', details: ['Diffuse lavender oil in your room.', 'Consult expert for safe usage.'] },
      { id: 't2', title: 'Pranic Healing: Basic Energy Cleansing', description: 'Gentle guided techniques to balance your energy centers.', videoUrl: 'https://www.youtube.com/embed/pranic1' },
    ],
    second: [
      { id: 't3', title: 'Aroma Therapy: Citrus for Upliftment', description: 'Citrus essential oils to boost mood and energy.', details: ['Inhale diffused orange or lemon oil.', 'Avoid direct skin application without dilution.'] },
      { id: 't4', title: 'Pranic Healing: Energizing Techniques', description: 'Advanced guided energy exercises for vitality.', videoUrl: 'https://www.youtube.com/embed/pranic2' },
    ],
    third: [
      { id: 't5', title: 'Aroma Therapy: Frankincense for Grounding', description: 'Frankincense oil for spiritual connection and calmness before labor.', details: ['Apply diluted to pulse points.', 'Use during meditation.'] },
      { id: 't6', title: 'Pranic Healing: Stress Reduction', description: 'Techniques to release stress and promote peaceful sleep.', videoUrl: 'https://www.youtube.com/embed/pranic3' },
    ],
  },
  stories: {
    first: [
      { id: 'st1', title: 'Story of Prahlada Maharaj', description: 'A tale of devotion and unwavering faith from ancient scriptures.', details: ['Read aloud to your baby.', 'Focus on the moral values.'] },
      { id: 'st2', title: 'The Boy Who Heard the Vedas', description: 'An inspiring story of a child\'s spiritual awakening in the womb.', details: ['Narrate with a calm voice.', 'Encourage baby\'s spiritual connection.'] },
    ],
    second: [
      { id: 'st3', title: 'Abhimanyu: The Warrior in the Womb', description: 'A legendary tale of learning skills while still in the mother\'s womb.', details: ['Discuss the story with your partner.', 'Emphasize the power of prenatal education.'] },
      { id: 'st4', title: 'Tales of Virtuous Mothers', description: 'Stories of great mothers from history and mythology.', details: ['Reflect on their qualities.', 'Inspire your own motherhood journey.'] },
    ],
    third: [
      { id: 'st5', title: 'The Birth of Lord Krishna', description: 'A divine narrative of a miraculous birth and protection.', details: ['Listen to devotional recitations.', 'Feel the divine presence.'] },
      { id: 'st6', title: 'Stories of Courage and Love', description: 'Inspiring tales to instill positive values in your unborn child.', details: ['Choose stories with strong moral lessons.', 'Narrate with emotion.'] },
    ],
  },
};
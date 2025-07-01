// app/dashboard.tsx
import { ScrollView, View, Text } from 'react-native';
import { dashboardStyles as styles } from '../styles/dashboardStyles'; // Import dashboard specific styles

// Import common and dashboard-specific components
import SectionTitle from '../components/common/SectionTitle';
import CourseCarousel from '../components/CourseCarousel/CourseCarousel'; // Can reuse
import BlogSection from '../components/BlogSection/BlogSection'; // Can reuse
import DailyFeaturesGrid from '../components/DailyFeaturesGrid/DailyFeaturesGrid'; // New
import ConsultationFlyer from '../components/ConsultationFlyer/ConsultationFlyer'; // New
import DashboardFooter from '../components/DashboardFooter/DashboardFooter'; // New

// Import data for dashboard
import {
  ENROLLED_COURSES,
  DAILY_FEATURES_OPTIONS,
  BLOG_POSTS,
  CONSULTATION_FLYER_INFO,
  DASHBOARD_FOOTER_NAV_ITEMS
} from '../constants/data';
import { BlogItem } from '@/constants/types';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';

export default function DashboardPage() {
  const userName = "Expectant Mother"; // Placeholder for dynamic user name

  // Handlers for interactions (implement actual navigation/actions later)
  const handleCourseEnrollPress = (courseId: string) => {
    console.log(`Navigating to enrolled course: ${courseId}`);
    // router.push(`/courses/${courseId}`);
  };

  const handleDailyFeaturePress = (featureId: string) => {
    console.log(`Navigating to daily feature: ${featureId}`);
    // router.push(`/${featureId}`);
  };

  const handleReadMoreBlog = (post: BlogItem) => {
    console.log(`Reading more about blog: ${post.title}`);
    // router.push(`/blog/${post.slug}`);
  };

  const handleViewAllBlogs = () => {
    console.log('Navigating to all blogs page.');
    // In a real app, navigate to a dedicated blog list page: router.push('/blogs');
  };

  // Placeholder for user initials (e.g., from user data)
  const userInitials = userName.split(' ').map(n => n[0]).join('').toUpperCase().substring(0,2);

  const handleProfilePress = () => {
    console.log('Navigating to user profile.');
    // router.push('/profile');
  };

  // Note: ConsultationFlyer has its own Link, so no direct handler needed here unless custom logic

  return (
    <View style={{ flex: 1, backgroundColor: styles.container.backgroundColor }}> {/* Main view to allow footer to stick to bottom */}
      {/* Dashboard Header */}
      <DashboardHeader
        appLogoSource={require('../assets/images/mother.png')} // Replace with your actual app logo path
        // profileImageSource={require('../assets/images/user-profile.png')} // Uncomment if you have a user profile image
        userNameInitials={userInitials} // Pass user initials for placeholder
        onProfilePress={handleProfilePress}
      />

      <ScrollView contentContainerStyle={styles.container}>
        {/* Welcome Section */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome, {userName}!</Text>
          <Text style={styles.quoteText}>
            "Every step of pregnancy is a miracle. Nurture it with love and ancient wisdom."
          </Text>
        </View>

        {/* Your Enrolled Courses */}
        <CourseCarousel
          title="Continue Learning"
          courses={ENROLLED_COURSES}
          onEnrollPress={handleCourseEnrollPress}
        />

        {/* Daily Practices / Features */}
        <SectionTitle title="Daily Practices" />
        <DailyFeaturesGrid
          features={DAILY_FEATURES_OPTIONS}
          onFeaturePress={handleDailyFeaturePress}
        />

        {/* Latest Insights / Blog Updates */}
        <BlogSection
          title="Latest Insights"
          posts={BLOG_POSTS} // Display a few latest blogs
          limit={2}
          onReadMore={handleReadMoreBlog}
          // No onViewAllBlogs here, as dashboard focuses on highlights
        />

        {/* Consultation Flyer */}
        <ConsultationFlyer
          title={CONSULTATION_FLYER_INFO.title}
          description={CONSULTATION_FLYER_INFO.description}
          ctaText={CONSULTATION_FLYER_INFO.ctaText}
          route={CONSULTATION_FLYER_INFO.route}
        />
      </ScrollView>

      {/* Dashboard Footer */}
      <DashboardFooter navItems={DASHBOARD_FOOTER_NAV_ITEMS} />
    </View>
  );
}
import { ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import BlogSection from '../components/BlogSection';
import SectionTitle from '../components/common/SectionTitle';
import ConsultationFlyer from '../components/ConsultationFlyer';
import CourseCarousel from '../components/CourseCarousel';
import DailyFeaturesGrid from '../components/DailyFeaturesGrid';
import DashboardFooter from '../components/DashboardFooter';

import DashboardHeader from '@/components/DashboardHeader';
import { BlogItem } from '@/constants/types';
import {
  BLOG_POSTS,
  CONSULTATION_FLYER_INFO,
  DAILY_FEATURES_OPTIONS,
  DASHBOARD_FOOTER_NAV_ITEMS,
  ENROLLED_COURSES
} from '../constants/data';

export default function DashboardPage() {
  const userName = "Expectant Mother"; 
  const router = useRouter();


  const handleCourseEnrollPress = (courseId: string) => {
    console.log(`Navigating to enrolled course: ${courseId}`);
    router.push(`/courses/${courseId}` as any); 
  };

  const handleDailyFeaturePress = (featureId: string) => {
    console.log(`Navigating to daily feature: ${featureId}`);
    router.push(`/content/${featureId}` as any); 
  };

  const handleReadMoreBlog = (post: BlogItem) => {
    console.log(`Reading more about blog: ${post.title}`);
    router.push(`/blog/${post.slug}` as any); 
  };


  const userInitials = userName.split(' ').map(n => n[0]).join('').toUpperCase().substring(0,2);

  const handleProfilePress = () => {
    console.log('Navigating to user profile.');
    router.push('/profile' as any); 
  };

  return (
    <View className="flex-1 bg-background">
      <DashboardHeader
        appLogoSource={require('../assets/images/mother.png')} 
        // profileImageSource={require('../assets/images/user-profile.png')} // Uncomment if you have a user profile image
        userNameInitials={userInitials} 
        onProfilePress={handleProfilePress}
      />

      <ScrollView className="flex-grow bg-background px-large pb-[48px]">
        {/* Welcome Section */}
        <View className="bg-lightOrange p-large rounded-medium my-large items-center shadow-md">
          <Text className="text-lg font-bold text-primaryText mb-small">
            Welcome, {userName}!
          </Text>
          <Text className="text-base text-secondaryText italic text-center leading-lg">
            "Every step of pregnancy is a miracle. Nurture it with love and ancient wisdom."
          </Text>
        </View>

        {/* Your Enrolled Courses */}
        <SectionTitle title="Continue Learning" />
        <CourseCarousel
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
        <SectionTitle title="Latest Insights" />
        <BlogSection
          posts={BLOG_POSTS} 
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
// app/dashboard.tsx
import { ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import BlogSection from '@/components/BlogSection';
import SectionTitle from '@/components/common/SectionTitle';
import ConsultationFlyer from '@/components/ConsultationFlyer';
import CourseCarousel from '@/components/CourseCarousel';
import DailyFeaturesGrid from '@/components/DailyFeaturesGrid';
import DashboardFooter from '@/components/DashboardFooter';

import DashboardHeader from '@/components/DashboardHeader';
import { BlogItem, CourseItem } from '@/constants/types';
import {
  BLOG_POSTS,
  CONSULTATION_FLYER_INFO,
  DAILY_FEATURES_OPTIONS,
  DASHBOARD_FOOTER_NAV_ITEMS,
  ENROLLED_COURSES
} from '@/constants/data';

import sanityClient from '@/sanity/client';
import { useState, useEffect  } from 'react';

export default function DashboardPage() {
  const userName = "Expectant Mother";
  const router = useRouter();
  const [enrolledCourses, setEnrolledCourses] = useState<CourseItem[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const query = `*[_type == "course"]{
          "id": _id,
          title,
          description,
          "image": image.asset->url,
          sections[]{
            title,
            lessons[]->{
              "id": _id,
              title,
              type,
              content,
              duration
            }
          }
        }`;
        const data = await sanityClient.fetch(query);
        setEnrolledCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);


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

  console.log("Enrolled Courses:", enrolledCourses);

  return (
    <View className="flex-1 bg-background">
      <DashboardHeader
        appLogoSource={require('@/assets/images/logo-t.png')}
        userNameInitials={userInitials}
        onProfilePress={handleProfilePress}
      />

      <ScrollView className="flex-grow bg-background px-6 pb-12">
        <View className="bg-lightOrange p-6 rounded-xl my-8 shadow-sm">
          <Text className="text-xl font-bold text-primaryText mb-2">
            Welcome, {userName}!
          </Text>
          <Text className="text-base text-secondaryText italic text-center leading-6">
            "Every step of pregnancy is a miracle. Nurture it with love and ancient wisdom."
          </Text>
        </View>

        <SectionTitle title="Continue Learning" />
        <CourseCarousel
          courses={enrolledCourses}
          onEnrollPress={handleCourseEnrollPress}
        />

        <SectionTitle title="Daily Practices" />
        <DailyFeaturesGrid
          features={DAILY_FEATURES_OPTIONS}
          onFeaturePress={handleDailyFeaturePress}
        />

        <SectionTitle title="Latest Insights" />
        <BlogSection
          posts={BLOG_POSTS}
          limit={2}
          onReadMore={handleReadMoreBlog}
        />

        <ConsultationFlyer
          title={CONSULTATION_FLYER_INFO.title}
          description={CONSULTATION_FLYER_INFO.description}
          ctaText={CONSULTATION_FLYER_INFO.ctaText}
          route={CONSULTATION_FLYER_INFO.route}
        />
      </ScrollView>

      <DashboardFooter navItems={DASHBOARD_FOOTER_NAV_ITEMS} />
    </View>
  );
}
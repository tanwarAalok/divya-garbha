// app/index.tsx
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import BlogSection from '@/components/BlogSection';
import SectionTitle from '@/components/common/SectionTitle';
import CourseCarousel from '@/components/CourseCarousel';
import CTAButton from '@/components/CTAButton';
import FAQSection from '@/components/FAQSection';
import HeroSection from '@/components/HeroSection';
import OptionsGrid from '@/components/OptionsGrid';
import TestimonialSection from '@/components/TestimonialSection';

import { APP_OPTIONS, BLOG_POSTS, CTA_MESSAGES, FAQS, POPULAR_COURSES, TESTIMONIALS } from '@/constants/data';
import { BlogItem } from '@/constants/types';

const { width } = Dimensions.get('window');

export default function LandingPage() {
  const router = useRouter();

  const handleOptionPress = (option: string) => {
    let routeName: string;
    switch (option) {
      case 'Diet Plan':
        routeName = 'dietPlan';
        break;
      case 'Music':
        routeName = 'music';
        break;
      case 'Yoga':
        routeName = 'yoga';
        break;
      case 'Therapy':
        routeName = 'therapy';
        break;
      case 'Stories':
        routeName = 'stories';
        break;
      case 'Sanskars':
        routeName = 'sanskars';
        break;
      case 'Meditation':
        routeName = 'meditation';
        break;
      case 'Mantras':
        routeName = 'mantras';
        break;
      case 'Affirmations':
        routeName = 'affirmations';
        break;
      default:
        routeName = option.toLowerCase().replace(/\s+/g, '');
    }

    console.log(`Navigating to content type: ${routeName}`);
    router.push(`/content/${routeName}` as any);
  };

  const handleEnrollPress = (courseId: string) => {
    console.log(`Enroll in course: ${courseId}`);
    // router.push(`/courses/${courseId}`);
  };

  const handleReadMoreBlog = (post: BlogItem) => {
    console.log(`Reading more about: ${post.title}, Slug: ${post.slug}`);
    // router.push(`/blog/${post.slug}`);
  };

  const handleViewAllBlogs = () => {
    console.log('Navigating to all blogs page.');
    // router.push('/blogs');
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-grow">
        <HeroSection
          title="Divya Garbha"
          subtitle="Your Companion for a Conscious & Joyful Pregnancy Journey."
          imageSource={require('@/assets/images/mother.png')}
        />

        {/* Action Buttons */}
        <View className="flex-row justify-around items-center pb-8 px-4">
          <Link href="/onboarding" asChild>
            <TouchableOpacity
              className="bg-primaryAction py-3 px-8 rounded-full shadow-md items-center flex-1 mx-2"
            >
              <Text className="text-lg font-bold text-white text-center">
                Get Started
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/login" asChild>
            <TouchableOpacity
              className="bg-accentBackground py-3 px-8 rounded-full border border-primaryAction items-center flex-1 mx-2"
            >
              <Text className="text-lg font-bold text-primaryAction text-center">
                Login
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Content Sections */}
        <SectionTitle title="What's Inside?" />
        <OptionsGrid
          options={APP_OPTIONS}
          onPressOption={handleOptionPress}
        />

        <SectionTitle title="Popular Courses" />
        <CourseCarousel
          courses={POPULAR_COURSES}
          onEnrollPress={handleEnrollPress}
        />

        <SectionTitle title="Latest Insights" />
        <BlogSection
          posts={BLOG_POSTS}
          onReadMore={handleReadMoreBlog}
          onViewAllBlogs={handleViewAllBlogs}
          limit={2}
        />

        <SectionTitle title="What Mothers Say" />
        <TestimonialSection
          testimonials={TESTIMONIALS}
        />

        <View style={{ paddingHorizontal: 16 }}>
          <CTAButton
            text={CTA_MESSAGES.getStarted.text}
            subtitle={CTA_MESSAGES.getStarted.subtitle}
            href={CTA_MESSAGES.getStarted.href}
          />
        </View>

        <SectionTitle title="FAQs" />
        <FAQSection
          faqs={FAQS}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
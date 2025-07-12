import { Link, useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, Dimensions } from 'react-native';


import BlogSection from '../components/BlogSection';
import SectionTitle from '../components/common/SectionTitle';
import CourseCarousel from '../components/CourseCarousel';
import CTAButton from '../components/CTAButton';
import FAQSection from '../components/FAQSection';
import HeroSection from '../components/HeroSection';
import OptionsGrid from '../components/OptionsGrid';
import TestimonialSection from '../components/TestimonialSection';


import { BlogItem } from '@/constants/types';
import { APP_OPTIONS, BLOG_POSTS, CTA_MESSAGES, FAQS, POPULAR_COURSES, TESTIMONIALS } from '../constants/data';

const { width } = Dimensions.get('window'); 

export default function LandingPage() {
  const router = useRouter();

  const handleOptionPress = (option: string) => {
    // Convert option name to a route-friendly format (e.g., "Diet Plan" to "dietPlan")
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
    // router.push(`/courses/${courseId}`); // Placeholder for navigation
  };

  const handleReadMoreBlog = (post: BlogItem) => {
    console.log(`Reading more about: ${post.title}, Slug: ${post.slug}`);
    // router.push(`/blog/${post.slug}`); // Placeholder for navigation
  };

  const handleViewAllBlogs = () => {
    console.log('Navigating to all blogs page.');
    // router.push('/blogs'); // Placeholder for navigation
  };

  return (
    <SafeAreaView className="flex-1 bg-background"> 
      <ScrollView className="flex-grow pb-xxxl px-medium"> 

        {/* 1. Hero Section - The App's Introduction */}
        <HeroSection
          title="Divya Garbha"
          subtitle="Your Companion for a Conscious & Joyful Pregnancy Journey."
          imageSource={require('../assets/images/mother.png')} // Your main hero image
        />

        {/* 2. Primary Call to Action Buttons - Get Started or Login */}
        <View
          className="flex-row justify-around items-center px-large py-medium mb-extraLarge mt-large"
        >
          <Link href="/onboarding" asChild>
            <TouchableOpacity
              className="bg-primaryAction py-medium px-large rounded-full shadow-md items-center"
              style={{ minWidth: width * 0.4 }} 
            >
              <Text className="text-lg font-bold text-white"> 
                Get Started
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/login" asChild>
            <TouchableOpacity
              className="bg-accentBackground py-medium px-large rounded-full border border-primaryAction items-center"
              style={{ minWidth: width * 0.4 }} 
            >
              <Text className="text-lg font-bold text-primaryAction">
                Login
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* 3. What's Inside? - Key Offerings Overview */}
        <SectionTitle title="What's Inside?" />
        <OptionsGrid
          options={APP_OPTIONS}
          onPressOption={handleOptionPress}
        />

        {/* 4. Popular Courses - Showcase Core Educational Content */}
        <SectionTitle title="Popular Courses" />
        <CourseCarousel
          courses={POPULAR_COURSES}
          onEnrollPress={handleEnrollPress}
        />

        {/* 5. Latest Insights - Engaging Blog Content */}
        <SectionTitle title="Latest Insights" />
        <BlogSection
          posts={BLOG_POSTS}
          onReadMore={handleReadMoreBlog}
          onViewAllBlogs={handleViewAllBlogs}
          limit={2} 
        />

        {/* 6. What Mothers Say - Build Trust and Social Proof */}
        <SectionTitle title="What Mothers Say" />
        <TestimonialSection
          testimonials={TESTIMONIALS}
        />

        {/* 7. Final Call to Action - For a Specific Offer (e.g., Free Course) */}
        <CTAButton
          text={CTA_MESSAGES.getStarted.text}
          subtitle={CTA_MESSAGES.getStarted.subtitle}
          href={CTA_MESSAGES.getStarted.href}
        />

        {/* 8. Frequently Asked Questions - Address Doubts */}
        <SectionTitle title="Frequently Asked Questions" />
        <FAQSection
          faqs={FAQS}
        />

      </ScrollView>
    </SafeAreaView>
  );
}
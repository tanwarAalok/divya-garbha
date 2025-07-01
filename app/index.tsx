// app/index.tsx
import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, SafeAreaView } from 'react-native'; // Import SafeAreaView
import { Link } from 'expo-router'; // Link for navigation

// Import styles
import { landingPageStyles as styles } from '../styles/landingPageStyles'; // Ensure correct path

// Import components (ensure paths are correct based on your structure)
import SectionTitle from '../components/common/SectionTitle'; // Re-order for clarity
import HeroSection from '../components/HeroSection/HeroSection';
import OptionsGrid from '../components/OptionsGrid/OptionsGrid';
import CourseCarousel from '../components/CourseCarousel/CourseCarousel';
import BlogSection from '../components/BlogSection/BlogSection';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';
import CTAButton from '../components/CTAButton/CTAButton';
import FAQSection from '../components/FAQSection/FAQSection';


// Import data
import { APP_OPTIONS, BLOG_POSTS, CTA_MESSAGES, FAQS, POPULAR_COURSES, TESTIMONIALS } from '../constants/data';
import { BlogItem } from '@/constants/types';


export default function LandingPage() {
  const handleOptionPress = (option: string) => {
    console.log(`Option pressed: ${option}`);
    // router.push(`/${option.toLowerCase()}`); // Placeholder for navigation
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
    <SafeAreaView style={styles.safeArea}> {/* Use SafeAreaView for proper padding */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        {/* 1. Hero Section - The App's Introduction */}
        <HeroSection
          title="Divya Garbha"
          subtitle="Your Companion for a Conscious & Joyful Pregnancy Journey."
          imageSource={require('../assets/images/mother.png')} // Your main hero image
        />

        {/* 2. Primary Call to Action Buttons - Get Started or Login */}
        <View style={styles.authButtonContainer}>
          <Link href="/onboarding" asChild>
            <TouchableOpacity style={styles.getStartedButton}>
              <Text style={styles.getStartedButtonText}>Get Started</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/login" asChild>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
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
          limit={2} // Show 2 latest blogs for conciseness on landing
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
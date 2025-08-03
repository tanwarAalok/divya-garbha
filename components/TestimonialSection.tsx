// components/TestimonialSection.tsx
import { TestimonialItem } from '@/constants/types';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width: windowWidth } = Dimensions.get('window');
const CAROUSEL_WIDTH = windowWidth; // full width viewport
const SLIDE_WIDTH = windowWidth * 0.9; // each slide is 90% of width
const GAP = 16;
const SIDE_PADDING = (windowWidth - SLIDE_WIDTH) / 2;

interface TestimonialSectionProps {
  testimonials: TestimonialItem[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => (
  <View className="my-8" style={{ width: '100%' }}>
    <Carousel
      width={CAROUSEL_WIDTH}
      height={260}
      data={testimonials}
      autoPlay={false}
      loop={false}
      pagingEnabled
      style={{ paddingHorizontal: SIDE_PADDING }}
      renderItem={({ item: testimonial, index }) => (
        <View
          key={index}
          className="bg-lightOrange p-6 rounded-xl shadow-md justify-between"
          style={{
            width: SLIDE_WIDTH,
            marginRight: index === testimonials.length - 1 ? 0 : GAP,
            minHeight: 220,
          }}
        >
          <Text className="text-4xl text-vibrantAccent mb-2">“</Text>
          <Text className="italic text-secondaryText text-base leading-7 flex-grow">
            {testimonial.quote}
          </Text>
          <Text className="text-right font-semibold text-secondaryText mt-4 text-base">
            - {testimonial.author}
          </Text>
        </View>
      )}
    />
  </View>
);

export default TestimonialSection;
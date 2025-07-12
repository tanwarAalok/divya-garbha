// components/TestimonialSection.tsx
import { TestimonialItem } from '@/constants/types';
import React from 'react';
import { ScrollView, Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface TestimonialSectionProps {
  testimonials: TestimonialItem[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => (
  <View>
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      className="my-8"
      contentContainerStyle={{ paddingHorizontal: 16 }}
    >
      {testimonials.map((testimonial, index) => (
        <View
          key={index}
          className="bg-lightOrange p-6 rounded-xl shadow-md justify-between min-h-[220px]"
          style={{ width: width - 64, marginRight: index === testimonials.length - 1 ? 0 : 16 }}
        >
          <Text
            className="text-4xl text-vibrantAccent mb-2"
          >
            “
          </Text>
          <Text
            className="italic text-secondaryText text-base leading-7 flex-grow"
          >
            {testimonial.quote}
          </Text>
          <Text
            className="text-right font-semibold text-secondaryText mt-4 text-base"
          >
            - {testimonial.author}
          </Text>
        </View>
      ))}
    </ScrollView>
  </View>
);

export default TestimonialSection;
// components/TestimonialSection.tsx
import { TestimonialItem } from '@/constants/types';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { testimonialSectionStyles as styles } from './styles'; 

interface TestimonialSectionProps {
  testimonials: TestimonialItem[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({  testimonials }) => (
  <View>
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={styles.testimonialSlider}>
      {testimonials.map((testimonial, index) => (
        <View key={index} style={styles.testimonialCard}>
          <Text style={styles.testimonialQuote}>“</Text>
          <Text style={styles.testimonialText}>
            {testimonial.quote}
          </Text>
          <Text style={styles.testimonialAuthor}>- {testimonial.author}</Text>
        </View>
      ))}
    </ScrollView>
  </View>
);

export default TestimonialSection;
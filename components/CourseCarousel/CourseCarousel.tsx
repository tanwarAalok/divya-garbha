// components/CourseCarousel.tsx
import { CourseItem } from '@/constants/types';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { courseCarouselStyles as styles } from './styles'; 

interface CourseCarouselProps {
  courses: CourseItem[];
  onEnrollPress?: (courseId: string) => void;
}

const CourseCarousel: React.FC<CourseCarouselProps> = ({ courses, onEnrollPress }) => (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={styles.courseSlider}>
      {courses.map((course) => (
        <View key={course.id} style={styles.courseCardFull}>
          <Image source={course.image} style={styles.courseImage} />
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.courseDescription}>{course.description}</Text> {/* New: Course Description */}
          <TouchableOpacity style={styles.enrollButton} onPress={() => onEnrollPress && onEnrollPress(course.id)}>
            <Text style={styles.enrollText}>Enroll</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
);

export default CourseCarousel;
// components/CourseCarousel.tsx
import { CourseItem } from '@/constants/types';
import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

interface CourseCarouselProps {
  courses: CourseItem[];
  onEnrollPress?: (courseId: string) => void;
}

const CourseCarousel: React.FC<CourseCarouselProps> = ({ courses, onEnrollPress }) => (
  <ScrollView
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ paddingHorizontal: 16 }}
  >
    {courses.map((course, index) => (
      <View
        key={course.id}
        className="bg-courseBackground p-4 rounded-xl shadow-md mr-2"
        style={{
          width: width - 62, 
          height: 420,     
          justifyContent: 'flex-start',
        }}
      >
        <Image
          source={course.image}
          style={{
            width: '100%',
            height: 200,
          }}
          resizeMode="contain"
          className="rounded-lg mb-4 self-center"
        />
        <Text className="text-white text-xl font-bold mb-2">
          {course.title}
        </Text>
        <Text
          className="text-sm text-white opacity-90 leading-6 mb-4 flex-grow"
          numberOfLines={3} // limit lines if you want
          ellipsizeMode="tail"
        >
          {course.description}
        </Text>
        <TouchableOpacity
          className="mt-auto bg-primaryAction rounded-full py-3 items-center shadow-lg"
          onPress={() => onEnrollPress && onEnrollPress(course.id)}
        >
          <Text className="text-base font-bold text-white">
            Enroll Now
          </Text>
        </TouchableOpacity>
      </View>
    ))}
  </ScrollView>
);

export default CourseCarousel;
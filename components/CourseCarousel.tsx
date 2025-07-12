// components/CourseCarousel.tsx
import { CourseItem } from '@/constants/types';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Get screen width for responsive card width

interface CourseCarouselProps {
  courses: CourseItem[];
  onEnrollPress?: (courseId: string) => void;
}

const CourseCarousel: React.FC<CourseCarouselProps> = ({ courses, onEnrollPress }) => (
  // The ScrollView itself
  <ScrollView
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    className="my-medium" // marginVertical: SPACING.medium
  >
    {courses.map((course) => (
      // Individual Course Card
      <View
        key={course.id}
        className="bg-courseBackground p-small rounded-medium mr-medium shadow-md"
        style={{ width: width - (16 /* SPACING.large */ * 2) }} // Full width minus container padding
      >
        <Image
          source={course.image}
          className="h-[180px] w-full rounded-small mb-small object-cover" // height: 180, width: '100%', borderRadius: BORDER_RADIUS.small, marginBottom: SPACING.small, resizeMode: 'cover'
        />
        <Text className="text-white text-lg font-bold mb-tiny"> {/* color: COLORS.white, fontSize: FONT_SIZES.large, fontWeight: 'bold', marginBottom: SPACING.small / 2 */}
          {course.title}
        </Text>
        <Text className="text-sm text-white leading-base mb-small"> {/* color: COLORS.white, fontSize: FONT_SIZES.small, lineHeight: FONT_SIZES.medium, marginBottom: SPACING.small */}
          {course.description}
        </Text>
        <TouchableOpacity
          className="mt-auto bg-primaryAction rounded-full py-small items-center" // marginTop: 'auto', backgroundColor: COLORS.primaryAction, borderRadius: BORDER_RADIUS.round, paddingVertical: SPACING.small, alignItems: 'center'
          onPress={() => onEnrollPress && onEnrollPress(course.id)}
        >
          <Text className="text-base font-semibold text-white"> {/* color: COLORS.white, fontWeight: '600', fontSize: FONT_SIZES.medium */}
            Enroll
          </Text>
        </TouchableOpacity>
      </View>
    ))}
  </ScrollView>
);

export default CourseCarousel;
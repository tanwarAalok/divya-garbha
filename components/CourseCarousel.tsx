import { CourseItem } from '@/constants/types';
import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width: windowWidth } = Dimensions.get('window');
const SLIDE_MAX_WIDTH = windowWidth * 0.95; // 90vw equivalent
const GAP = 16; // space between slides

interface CourseCarouselProps {
  courses: CourseItem[];
  onEnrollPress?: (courseId: string) => void;
}

const CourseCarousel: React.FC<CourseCarouselProps> = ({ courses, onEnrollPress }) => {
  return (
    <Carousel
      width={SLIDE_MAX_WIDTH + GAP} // include gap so snapping accounts for it
      height={420}
      data={courses}
      autoPlay={false}
      loop={false}
      pagingEnabled
      mode="parallax"
      style={{ paddingHorizontal: 0 }}
      onSnapToItem={(index) => {
        // optional: handle active index
      }}
      renderItem={({ item: course, index }) => (
        <View
          key={course.id}
          className="bg-courseBackground p-4 rounded-xl shadow-md"
          style={{
            width: SLIDE_MAX_WIDTH,
            height: 420,
            justifyContent: 'flex-start',
            marginRight: index === courses.length - 1 ? 0 : GAP, // no extra gap after last
          }}
        >
          <Image
            source={{ uri: course.image }}
            style={{
              width: '100%',
              height: 200,
            }}
            resizeMode="cover"
            className="rounded-lg mb-4 self-center"
          />
          <Text className="text-white text-xl font-bold mb-2">
            {course.title}
          </Text>
          <Text
            className="text-sm text-white opacity-90 leading-6 mb-4 flex-grow"
            numberOfLines={3}
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
      )}
    />
  );
};

export default CourseCarousel;

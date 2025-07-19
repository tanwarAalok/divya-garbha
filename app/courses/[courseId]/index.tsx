import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ENROLLED_COURSES } from '@/constants/data';

export default function CourseDetailScreen() {
  const { courseId } = useLocalSearchParams();
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<number[]>([0]); // Default open first section

  const course = ENROLLED_COURSES.find((c) => c.id === courseId);

  // Dummy progress for now - this would come from user's state
  const completedLessons = 1; 
  const totalLessons = course?.sections?.reduce((acc, section) => acc + section.lessons.length, 0) || 1;
  const progress = (completedLessons / totalLessons) * 100;

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const navigateToLesson = (lessonId: string) => {
    // Navigate to the new nested route
    router.push(`/courses/${courseId}/${lessonId}`);
  };

  if (!course) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-background">
        <Text className="text-lg text-red-500">Course not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView>
        <Image source={course.image} className="w-full h-64" />
        <View className="p-6">
          <Text className="text-3xl font-bold text-primaryText mb-2">{course.title}</Text>
          <Text className="text-base text-secondaryText leading-6 mb-6">{course.description}</Text>

          {/* Progress Bar */}
          <View className="mb-8">
            <Text className="text-secondaryText mb-2">{Math.round(progress)}% Complete</Text>
            <View className="bg-accentHighlight h-2 rounded-full">
              <View style={{ width: `${progress}%` }} className="bg-primaryAction h-2 rounded-full" />
            </View>
          </View>

          {course.sections?.map((section, index) => (
            <View key={index} className="mb-4">
              <TouchableOpacity
                onPress={() => toggleSection(index)}
                className="bg-white p-4 rounded-lg shadow-sm flex-row justify-between items-center"
              >
                <Text className="text-lg font-semibold text-primaryText flex-1">{section.title}</Text>
                <Text className="text-2xl text-primaryAction ml-4 font-bold">
                  {expandedSections.includes(index) ? '−' : '+'}
                </Text>
              </TouchableOpacity>

              {expandedSections.includes(index) && (
                <View className="mt-2 rounded-lg overflow-hidden">
                  {section.lessons.map((lesson, lessonIndex) => (
                    <TouchableOpacity
                      key={lesson.id}
                      onPress={() => navigateToLesson(lesson.id)}
                      className="bg-white p-4 flex-row justify-between items-center border-b border-gray-100"
                    >
                      <View className="flex-1">
                        <Text className="text-base text-primaryText font-medium">{lesson.title}</Text>
                        {lesson.duration && (
                          <Text className="text-sm text-secondaryText mt-1">
                            Video - {lesson.duration}
                          </Text>
                        )}
                      </View>
                      <Text className="text-2xl text-primaryAction">→</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import { ENROLLED_COURSES } from '../../../constants/data';
import { Lesson } from '@/constants/types';

export default function LessonScreen() {
  const { lessonId, courseId } = useLocalSearchParams();
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState(false);

  const [lesson, setLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    const course = ENROLLED_COURSES.find((c) => c.id === courseId);
    if (course) {
      for (const section of course.sections ?? []) {
        const foundLesson = section.lessons.find((l) => l.id === lessonId);
        if (foundLesson) {
          setLesson(foundLesson);
          break;
        }
      }
    }
  }, [courseId, lessonId]);

  if (!lesson) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-background">
        <Text className="text-lg text-secondaryText">Loading lesson...</Text>
      </SafeAreaView>
    );
  }

  const getYouTubeVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
  };

  const videoId = lesson.type === 'video' ? getYouTubeVideoId(lesson.content) : null;
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {lesson.type === 'video' && videoId ? (
          <View style={styles.videoContainer}>
            <WebView
              style={styles.webview}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ uri: embedUrl }}
            />
          </View>
        ) : null}

        <View className="p-6">
          <Text className="text-3xl font-bold text-primaryText mb-4">{lesson.title}</Text>

          {lesson.type === 'text' && (
            <Text className="text-lg text-secondaryText leading-8">{lesson.content}</Text>
          )}

          <TouchableOpacity
            onPress={() => setIsCompleted(!isCompleted)}
            className="flex-row items-center mt-8 p-4 rounded-lg bg-white shadow-sm"
          >
            <View
              className={`w-6 h-6 rounded border-2 ${
                isCompleted ? 'bg-success border-success' : 'border-primaryAction'
              }`}
            />
            <Text className="text-lg text-primaryText ml-4 font-semibold">Mark as Done</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  videoContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#000',
  },
  webview: {
    flex: 1,
  },
});
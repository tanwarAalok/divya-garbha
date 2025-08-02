import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Platform // 1. Import Platform
} from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { WebView } from 'react-native-webview';
import sanityClient from '../../../../sanity/client';
import { Lesson } from '@/constants/types';

export default function LessonScreen() {
  const { lessonId } = useLocalSearchParams();
  const navigation = useNavigation();
  const [isCompleted, setIsCompleted] = useState(false);
  const [lesson, setLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    if (!lessonId) return;

    const fetchLesson = async () => {
      const query = `*[_type == "lesson" && _id == $lessonId][0]{
        "id": _id,
        title,
        type,
        content,
        duration
      }`;
      const params = { lessonId: lessonId as string };
      try {
        const data = await sanityClient.fetch(query, params);
        setLesson(data);
        navigation.setOptions({ title: data.title || 'Lesson' });
      } catch (error) {
        console.error("Failed to fetch lesson:", error);
      }
    };

    fetchLesson();
  }, [lessonId, navigation]);

  if (!lesson) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-background">
        <ActivityIndicator size="large" color="#C6A784" />
        <Text className="mt-4 text-secondaryText">Loading Lesson...</Text>
      </SafeAreaView>
    );
  }

  console.log(lesson)
  
  const videoId = lesson.type === 'video' ? lesson.content : null;
  const embedUrl = videoId ? `https://player.vimeo.com/video/${videoId}` : '';

  console.log(videoId)

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {lesson.type === 'video' && embedUrl ? (
          <View style={styles.videoContainer}>
            {/* 2. Conditionally render based on the platform */}
            {Platform.OS === 'web' ? (
              <iframe
                src={embedUrl}
                style={{ width: '100%', height: '100%', border: 0 }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <WebView
                style={styles.webview}
                javaScriptEnabled={true}
                allowsFullscreenVideo={true}
                source={{ uri: embedUrl }}
              />
            )}
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
              className={`w-6 h-6 rounded-md border-2 items-center justify-center ${
                isCompleted ? 'bg-primaryAction border-primaryAction' : 'border-secondaryText'
              }`}
            >
              {isCompleted && <Text className="text-white font-bold">✓</Text>}
            </View>
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
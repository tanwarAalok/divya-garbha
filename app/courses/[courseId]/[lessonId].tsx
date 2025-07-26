import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { WebView } from 'react-native-webview';
import sanityClient from '../../../sanity/client';
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
  }, [lessonId]);

  if (!lesson) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-background">
        <ActivityIndicator size="large" color="#C6A784" />
        <Text className="mt-4 text-secondaryText">Loading Lesson...</Text>
      </SafeAreaView>
    );
  }
  
  const getYouTubeVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/|vimeo\.com\/)(\d+)/;
    const matches = url.match(regex);
    return matches ? matches[1] : url; // Return original content if not a standard URL, assuming it's an ID
  };
  
  const videoId = lesson.type === 'video' ? getYouTubeVideoId(lesson.content) : null;
  const embedUrl = videoId ? `https://player.vimeo.com/video/${videoId}` : ''; // Using Vimeo as an example

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {lesson.type === 'video' && embedUrl ? (
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
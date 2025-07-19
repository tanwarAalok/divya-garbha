import { Stack } from 'expo-router';
import React from 'react';

export default function CourseLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#FFF8F0',
      },
      headerTintColor: '#4E342E',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="[courseId]/index" options={{ title: 'Course Details' }} />
      <Stack.Screen name="[courseId]/[lessonId]" options={{ title: 'Lesson' }} />
    </Stack>
  );
}
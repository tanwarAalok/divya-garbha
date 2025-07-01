// app/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      {/* Configure the initial route */}
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} /> {/* Your Landing Page */}

      {/* Add other placeholder routes as needed for deep linking */}
      <Stack.Screen name="free-course-signup" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
      {/* ... potentially more routes for daily features, courses, etc. */}
    </Stack>
  );
}
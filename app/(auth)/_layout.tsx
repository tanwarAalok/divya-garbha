// app/(auth)/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  return (
    <Stack>
      {/* Default for most auth screens is no header */}
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      <Stack.Screen name="courses" options={{ headerShown: false }} />
      {/* <Stack.Screen name="profile" options={{ headerShown: false }} /> */}
      
      {/* Specific screens can override the default */}
    </Stack>
  );
}
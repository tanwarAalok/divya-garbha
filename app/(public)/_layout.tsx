// app/(public)/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function PublicLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="onboarding-flow" />
      <Stack.Screen name="verify-otp" />
      <Stack.Screen 
        name="content/[contentType]" 
        options={{ headerShown: true }} 
      />
      {/* Add other public screens like forgot-password here */}
    </Stack>
  );
}
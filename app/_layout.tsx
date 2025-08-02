// app/_layout.tsx
import { Stack, useRouter, useSegments } from 'expo-router';
import React, { useEffect } from 'react';
import { AuthProvider, useAuth } from '../context/AuthContext';
import './global.css';
import { useRootNavigationState } from 'expo-router';

const InitialLayout = () => {
  const { user } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const rootNavigationState = useRootNavigationState();

  useEffect(() => {
    // This effect will run when the router is ready.
    if (!rootNavigationState?.key) {
      return;
    }

    const inAuthGroup = segments[0] === '(auth)';

    if (user && !inAuthGroup) {
      // If the user is signed in, redirect them to the dashboard.
      router.replace('/dashboard');
    } else if (!user && inAuthGroup) {
      // If the user is not signed in and is trying to access a protected route,
      // redirect them to the login page.
      router.replace('/login');
    }
  }, [user, segments, rootNavigationState?.key, router]);

  // Render nothing until the navigation state is ready.
  // This prevents a flash of the wrong screen.
  if (!rootNavigationState?.key) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(public)" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

export default function RootLayout() {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}
// app/ContentScreen.tsx
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, Linking, Alert, SafeAreaView } from 'react-native';
import { useLocalSearchParams, Stack, useRouter, useNavigation } from 'expo-router';
import { contentStyles as styles } from '../../styles/contentStyles';

// Re-importing from your project's constants
import { APP_SPECIFIC_CONTENT } from '../../constants/data';
import { COLORS, FONT_SIZES } from '../../constants/theme';

// Define Trimester type for clarity
type Trimester = 'first' | 'second' | 'third';

export default function ContentScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const { contentType: rawContentType } = useLocalSearchParams();
  // Ensure contentType is a valid key for APP_SPECIFIC_CONTENT
  const contentType = rawContentType as keyof typeof APP_SPECIFIC_CONTENT;

  // State to manage the selected trimester
  const [selectedTrimester, setSelectedTrimester] = useState<Trimester>('first');

  // Validate contentType and provide a fallback or error
  const contentData = APP_SPECIFIC_CONTENT[contentType];

  useEffect(() => {
    // Set screen title dynamically
    if (contentType) {
      navigation.setOptions({
        title: contentType.charAt(0).toUpperCase() + contentType.slice(1).replace(/([A-Z])/g, ' $1'), // Format "dietPlan" to "Diet Plan"
        headerShown: true, // Ensure header is shown for content screens
        headerStyle: {
          backgroundColor: COLORS.background, // Match app background
        },
        headerTintColor: COLORS.primaryText, // Text color for header title
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: FONT_SIZES.h3,
        },
      });
    }
  }, [navigation, contentType]);

  // Function to open external links (e.g., YouTube videos)
  const openLink = async (url?: string) => {
    if (url) {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        // Using Alert for React Native environment, as window.alert is not available
        Alert.alert('Error', `Cannot open this URL: ${url}`);
      }
    }
  };

  if (!contentData) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Content not found for "{contentType}".</Text>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Get content for the selected trimester
  const currentTrimesterContent = contentData[selectedTrimester];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          {/* Trimester Selector */}
          <View style={styles.trimesterSelector}>
            {['first', 'second', 'third'].map((trimester) => (
              <TouchableOpacity
                key={trimester}
                style={[
                  styles.trimesterButton,
                  selectedTrimester === trimester && styles.trimesterButtonActive,
                ]}
                onPress={() => setSelectedTrimester(trimester as Trimester)}
              >
                <Text
                  style={[
                    styles.trimesterButtonText,
                    selectedTrimester === trimester && styles.trimesterButtonTextActive,
                  ]}
                >
                  {trimester.charAt(0).toUpperCase() + trimester.slice(1)} Trimester
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Display Content for Selected Trimester */}
          {currentTrimesterContent.length > 0 ? (
            currentTrimesterContent.map((item) => (
              <View key={item.id} style={styles.contentCard}>
                <Text style={styles.contentTitle}>{item.title}</Text>
                <Text style={styles.contentDescription}>{item.description}</Text>
                {item.imageUrl && (
                  <Image source={{ uri: item.imageUrl }} style={styles.contentImage} />
                )}
                {item.videoUrl && (
                  <TouchableOpacity onPress={() => openLink(item.videoUrl)} style={styles.videoButton}>
                    <Text style={styles.videoButtonText}>Watch Video</Text>
                  </TouchableOpacity>
                )}
                {item.details && item.details.length > 0 && (
                  <View style={styles.detailsContainer}>
                    {item.details.map((detail, index) => (
                      <Text key={index} style={styles.detailText}>• {detail}</Text>
                    ))}
                  </View>
                )}
              </View>
            ))
          ) : (
            <Text style={styles.noContentText}>No content available for this trimester yet.</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

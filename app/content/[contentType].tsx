// app/content/[contentType].tsx
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, Linking, Alert, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter, useNavigation } from 'expo-router';
import { APP_SPECIFIC_CONTENT } from '../../constants/data';
import { COLORS, FONT_SIZES } from '../../constants/theme';

type Trimester = 'first' | 'second' | 'third';

export default function ContentScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const { contentType: rawContentType } = useLocalSearchParams();
  const contentType = rawContentType as keyof typeof APP_SPECIFIC_CONTENT;
  const [selectedTrimester, setSelectedTrimester] = useState<Trimester>('first');
  const contentData = APP_SPECIFIC_CONTENT[contentType];

  useEffect(() => {
    if (contentType) {
      const title = contentType.charAt(0).toUpperCase() + contentType.slice(1).replace(/([A-Z])/g, ' $1');
      navigation.setOptions({
        title: title,
        headerShown: true,
        headerStyle: {
          backgroundColor: '#FFF8F0', // Replaced COLORS.background
        },
        headerTintColor: '#4E342E', // Replaced COLORS.primaryText
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24, // Replaced FONT_SIZES.h3
        },
        headerShadowVisible: false,
      });
    }
  }, [navigation, contentType]);


  const openLink = async (url?: string) => {
    if (url) {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', `Cannot open this URL: ${url}`);
      }
    }
  };

  if (!contentData) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-background p-6">
        <Text className="text-3xl text-error text-center mb-8">
          Content not found for "{contentType}".
        </Text>
        <TouchableOpacity onPress={() => router.back()} className="bg-primaryAction py-3 px-6 rounded-full shadow-md">
          <Text className="text-white font-bold text-lg">
            Go Back
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const currentTrimesterContent = contentData[selectedTrimester];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-grow bg-background">
        <View className="p-6">
          <View className="flex-row justify-around mb-8 bg-white rounded-full p-1 shadow-sm">
            {['first', 'second', 'third'].map((trimester) => (
              <TouchableOpacity
                key={trimester}
                className={`py-2 px-4 rounded-full flex-1 items-center ${
                  selectedTrimester === trimester ? 'bg-primaryAction' : 'bg-white'
                }`}
                onPress={() => setSelectedTrimester(trimester as Trimester)}
              >
                <Text
                  className={`font-semibold text-base ${
                    selectedTrimester === trimester ? 'text-white' : 'text-secondaryText'
                  }`}
                >
                  {trimester.charAt(0).toUpperCase() + trimester.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {currentTrimesterContent.length > 0 ? (
            currentTrimesterContent.map((item) => (
              <View
                key={item.id}
                className="bg-white p-6 rounded-2xl mb-8 shadow-md"
              >
                <Text className="text-xl font-bold text-primaryText mb-2">
                  {item.title}
                </Text>
                <Text className="text-base text-secondaryText mb-4 leading-6">
                  {item.description}
                </Text>
                {item.imageUrl && (
                  <Image
                    source={item.imageUrl}
                    className="w-full h-48 rounded-lg mb-4 object-cover"
                  />
                )}
                {item.videoUrl && (
                  <TouchableOpacity
                    onPress={() => openLink(item.videoUrl)}
                    className="bg-vibrantAccent py-3 rounded-full items-center mt-2 shadow-md"
                  >
                    <Text className="text-white font-bold text-base">
                      Watch Video
                    </Text>
                  </TouchableOpacity>
                )}
                {item.details && item.details.length > 0 && (
                  <View className="mt-4 pl-4">
                    {item.details.map((detail, index) => (
                      <Text
                        key={index}
                        className="text-base text-secondaryText mb-1"
                      >
                        • {detail}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            ))
          ) : (
            <View className="flex-1 justify-center items-center mt-12">
              <Text className="text-center text-lg text-secondaryText">
                No content available for this trimester yet.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
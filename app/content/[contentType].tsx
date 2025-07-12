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
      navigation.setOptions({
        title: contentType.charAt(0).toUpperCase() + contentType.slice(1).replace(/([A-Z])/g, ' $1'), 
        headerShown: true, 
        headerStyle: {
          backgroundColor: COLORS.background, 
        },
        headerTintColor: COLORS.primaryText,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: FONT_SIZES.h3,
        },
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
      <View className="flex-1 justify-center items-center bg-background p-large">
        <Text className="text-h2 text-error text-center mb-large">
          Content not found for "{contentType}".
        </Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-white font-bold text-lg">
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentTrimesterContent = contentData[selectedTrimester];

  return (
    <SafeAreaView className="flex-1 bg-background"> 
      <ScrollView className="flex-grow bg-background">
        <View className="p-large">
          <View className="flex-row justify-around mb-large bg-white rounded-full p-small shadow-sm">
            {['first', 'second', 'third'].map((trimester) => (
              <TouchableOpacity
                key={trimester}
                className={`py-medium px-large rounded-full flex-1 items-center mx-tiny ${
                  selectedTrimester === trimester ? 'bg-primaryAction' : '' 
                }`}
                onPress={() => setSelectedTrimester(trimester as Trimester)}
              >
                <Text
                  className={`text-secondaryText font-semibold text-base ${
                    selectedTrimester === trimester ? 'text-white' : '' 
                  }`}
                >
                  {trimester.charAt(0).toUpperCase() + trimester.slice(1)} Trimester
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {currentTrimesterContent.length > 0 ? (
            currentTrimesterContent.map((item) => (
              <View
                key={item.id}
                className="bg-white p-large rounded-medium mb-large shadow-md"
              >
                <Text className="text-lg font-bold text-primaryText mb-small">
                  {item.title}
                </Text>
                <Text className="text-base text-secondaryText mb-medium leading-lg">
                  {item.description}
                </Text>
                {item.imageUrl && (
                  <Image
                    source={{ uri: item.imageUrl }}
                    className="w-full h-[200px] rounded-small mb-medium object-cover"
                  />
                )}
                {item.videoUrl && (
                  <TouchableOpacity
                    onPress={() => openLink(item.videoUrl)}
                    className="bg-vibrantAccent py-medium rounded-medium items-center mt-small"
                  >
                    <Text className="text-white font-bold text-base">
                      Watch Video
                    </Text>
                  </TouchableOpacity>
                )}
                {item.details && item.details.length > 0 && (
                  <View className="mt-small pl-medium">
                    {item.details.map((detail, index) => (
                      <Text
                        key={index}
                        className="text-sm text-secondaryText mb-tiny"
                      >
                        • {detail}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            ))
          ) : (
            <Text className="text-center text-lg text-secondaryText mt-xxl">
              No content available for this trimester yet.
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
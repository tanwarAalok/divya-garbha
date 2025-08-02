import { Link, Stack } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native'; // Import View, remove StyleSheet as it's no longer used

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-lg font-bold mb-4">This screen does not exist.</Text>
        <Link href={"/" as any} asChild>
          <TouchableOpacity className="mt-[15px] py-[15px] px-4 bg-blue-500 rounded-md">
            <Text className="text-white font-bold">Go to home screen!</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
}
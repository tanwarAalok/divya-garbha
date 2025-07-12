// components/DashboardHeader.tsx
import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Link } from 'expo-router';

interface DashboardHeaderProps {
  appLogoSource: any;
  profileImageSource?: any;
  onProfilePress?: () => void;
  userNameInitials?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  appLogoSource,
  profileImageSource,
  onProfilePress,
  userNameInitials = 'UG',
}) => {
  return (
    <View
      className="flex-row justify-between items-center  bg-background border-b border-gray-200/70"
    >
      <Image
        source={appLogoSource}
        className="h-9 w-28 object-contain"
        resizeMode="contain"
      />

      <Link href={"/profile" as any} asChild>
        <TouchableOpacity
          className="w-14 h-14 rounded-full bg-accentHighlight/50 justify-center items-center mr-3"
          onPress={onProfilePress}
        >
          {profileImageSource ? (
            <Image source={profileImageSource} className="w-10 h-10 rounded-full" />
          ) : (
            <Text
              className="text-sm font-bold text-primaryText"
            >
              {userNameInitials || 'UG'}
            </Text>
          )}
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default DashboardHeader;
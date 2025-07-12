// components/DashboardHeader/DashboardHeader.tsx
import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native'; // Removed StyleSheet import as it's no longer used
// No longer importing dashboardHeaderStyles as styles are now in Tailwind classes
// import { dashboardHeaderStyles as styles } from './styles';
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
      // headerContainer style:
      // flexDirection: 'row' -> flex-row
      // justifyContent: 'space-between' -> justify-between
      // alignItems: 'center' -> items-center
      // paddingHorizontal: SPACING.large -> px-large
      // paddingVertical: SPACING.medium -> py-medium
      // backgroundColor: COLORS.white -> bg-white
      // borderBottomWidth: 1 -> border-b
      // borderBottomColor: COLORS.lightGray -> border-lightGray
      // elevation: 2, shadowColor: COLORS.black, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 2 -> shadow-sm (Tailwind's smallest shadow, adjust if you need stronger)
      className="flex-row justify-between items-center px-large py-medium bg-white border-b border-lightGray shadow-sm"
    >
      <View
        // logoTitleContainer style:
        // flexDirection: 'row' -> flex-row
        // alignItems: 'center' -> items-center
        // flex: 1 -> flex-1
        className="flex-row items-center flex-1"
      >
        <Image
          source={appLogoSource}
          // appLogo style:
          // width: 35 -> w-[35px]
          // height: 35 -> h-[35px]
          // resizeMode: 'contain' -> object-contain (Tailwind equivalent for web, Nativewind handles it for RN)
          // marginRight: SPACING.small -> mr-small
          className="w-[35px] h-[35px] object-contain mr-small"
        />
        <Text
          // headerTitle style:
          // fontSize: FONT_SIZES.large -> text-lg
          // fontWeight: 'bold' -> font-bold
          // color: COLORS.primaryText -> text-primaryText
          // flexShrink: 1 -> shrink
          className="text-lg font-bold text-primaryText shrink"
        >
          Divya Garbha
        </Text>
      </View>

      <Link href={"/profile" as any} asChild>
        <TouchableOpacity
          // profileImage style:
          // width: 40 -> w-10
          // height: 40 -> h-10
          // borderRadius: 20 -> rounded-full (as 20 is half of 40)
          // backgroundColor: COLORS.lightOrange -> bg-lightOrange
          // justifyContent: 'center' -> justify-center
          // alignItems: 'center' -> items-center
          // marginLeft: SPACING.medium -> ml-medium
          className="w-10 h-10 rounded-full bg-lightOrange justify-center items-center ml-medium"
          onPress={onProfilePress}
        >
          {profileImageSource ? (
            <Image source={profileImageSource} className="w-10 h-10 rounded-full" />
          ) : (
            <Text
              // profileText style:
              // color: COLORS.primaryText -> text-primaryText
              // fontSize: 18 -> text-[18px] (or text-lg if it fits your scale)
              // fontWeight: 'bold' -> font-bold
              className="text-[18px] font-bold text-primaryText"
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
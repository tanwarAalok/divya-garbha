// components/HeroSection/HeroSection.tsx
import React from 'react';
import { Image, Text, View, Dimensions } from 'react-native'; // Import Dimensions for responsive image width
// No longer importing heroSectionStyles as styles are now in Tailwind classes
// import { heroSectionStyles as styles } from './styles';

const { width } = Dimensions.get('window'); // Get screen width for responsive image width

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSource: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, imageSource }) => (
  <View
    // hero style:
    // alignItems: 'center' -> items-center
    // marginBottom: SPACING.large -> mb-large
    className="items-center mb-large"
  >
    <Text
      // title style:
      // fontSize: FONT_SIZES.h1 -> text-h1
      // fontWeight: 'bold' -> font-bold
      // color: COLORS.primaryText -> text-primaryText
      // textAlign: 'center' -> text-center
      className="text-h1 font-bold text-primaryText text-center"
    >
      {title}
    </Text>
    <Text
      // subtitle style:
      // fontSize: FONT_SIZES.medium -> text-base
      // color: COLORS.softText -> text-secondaryText (assuming softText maps to secondaryText)
      // textAlign: 'center' -> text-center
      // marginVertical: SPACING.medium -> my-medium
      className="text-base text-secondaryText text-center my-medium"
    >
      {subtitle}
    </Text>
    <Image
      source={imageSource}
      // heroImage style:
      // marginVertical: SPACING.large -> my-large
      // width: width * 0.9 -> w-[90%] (using percentage for responsive width)
      // height: 300 -> h-[300px]
      // resizeMode: 'contain' -> object-contain (Tailwind equivalent for web, Nativewind handles it for RN)
      className="my-large w-[90%] h-[300px] object-contain"
    />
  </View>
);

export default HeroSection;
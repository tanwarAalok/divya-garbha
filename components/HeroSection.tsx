import React from 'react';
import { Image, Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSource: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, imageSource }) => (
  <View
    className="items-center mb-8 pt-12 px-6"
  >
    <Text
      className="text-4xl font-bold text-primaryText text-center"
    >
      {title}
    </Text>
    <Text
      className="text-xl text-secondaryText text-center my-8 leading-8"
    >
      {subtitle}
    </Text>
    <Image
      source={imageSource}
      className="my-8 w-[90%] h-72 object-contain"
    />
  </View>
);

export default HeroSection;
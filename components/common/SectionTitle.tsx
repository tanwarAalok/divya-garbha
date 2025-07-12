// components/common/SectionTitle.tsx
import React from 'react';
import { View, Text } from 'react-native';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <View
      className="pt-12 pb-4"
    >
      <Text
        className="text-3xl font-bold text-primaryText"
      >
        {title}
      </Text>
    </View>
  );
};

export default SectionTitle;
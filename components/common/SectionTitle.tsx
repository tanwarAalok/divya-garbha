// components/common/SectionTitle.tsx
import React from 'react';
import { View, Text } from 'react-native'; // Removed StyleSheet import as it's no longer used
// No longer importing theme constants directly as they are in Tailwind config or defaults.
// import { COLORS, FONT_SIZES, SPACING } from '../../constants/theme';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <View
      // container style:
      // paddingHorizontal: SPACING.large -> px-large
      // paddingTop: SPACING.extraLarge -> pt-extraLarge
      // paddingBottom: SPACING.medium -> pb-medium
      className="px-large pt-extraLarge pb-medium"
    >
      <Text
        // title style:
        // fontSize: FONT_SIZES.h2 -> text-h2
        // fontWeight: 'bold' -> font-bold
        // color: COLORS.primaryText -> text-primaryText
        className="text-h2 font-bold text-primaryText"
      >
        {title}
      </Text>
    </View>
  );
};

export default SectionTitle;
// components/common/SectionTitle.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, SPACING } from '../../constants/theme'; // Adjust path if needed

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.large, // Consistent padding for all sections
    paddingTop: SPACING.extraLarge, // Space above each new section title
    paddingBottom: SPACING.medium, // Space below title before content
  },
  title: {
    fontSize: FONT_SIZES.h2, // Larger, more prominent section titles
    fontWeight: 'bold',
    color: COLORS.primaryText,
  },
});

export default SectionTitle;
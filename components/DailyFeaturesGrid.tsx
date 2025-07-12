// components/DailyFeaturesGrid/DailyFeaturesGrid.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'; // Import Dimensions for dynamic width calculation
// No longer importing dailyFeaturesGridStyles as styles are now in Tailwind classes
// import { dailyFeaturesGridStyles as styles } from './styles';
import { DailyFeature } from '@/constants/types';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // If you decide to use icons

const { width } = Dimensions.get('window'); // Get screen width for responsive card width

interface DailyFeaturesGridProps {
  features: DailyFeature[];
  onFeaturePress?: (featureId: string) => void;
}

const DailyFeaturesGrid: React.FC<DailyFeaturesGridProps> = ({ features, onFeaturePress }) => (
  <View
    // gridContainer style:
    // flexDirection: 'row' -> flex-row
    // flexWrap: 'wrap' -> flex-wrap
    // justifyContent: 'space-between' -> justify-between
    // marginVertical: SPACING.medium -> my-medium
    className="flex-row flex-wrap justify-between my-medium"
  >
    {features.map((feature) => (
      <TouchableOpacity
        key={feature.id}
        // featureCard style:
        // width: '30%' -> w-[30%] (or calculate based on screen width for precise 3-column layout with gaps)
        // backgroundColor: COLORS.accentHighlight -> bg-accentHighlight
        // padding: SPACING.medium -> p-medium
        // borderRadius: BORDER_RADIUS.medium -> rounded-medium
        // alignItems: 'center' -> items-center
        // marginBottom: SPACING.small -> mb-small
        // minHeight: 100 -> min-h-[100px]
        // justifyContent: 'center' -> justify-center
        // ...SHADOWS.small -> shadow-sm
        // Using `w-[30%]` for simplicity, but for exact 3-column with spacing, you might use:
        // style={{ width: (width - (16 * 2) - (8 * 2)) / 3 }} // (screen_width - (padding_horizontal * 2) - (margin_horizontal_between_cards * 2)) / 3
        className="bg-accentHighlight p-medium rounded-medium items-center justify-center mb-small shadow-sm"
        // For a precise 3-column layout with spacing, consider this style prop:
        style={{ width: (width - (16 * 2) - (8 * 2)) / 3 }} // (screen_width - (container_padding_horizontal * 2) - (margin_horizontal_between_cards * (num_gaps))) / num_items
        onPress={() => onFeaturePress && onFeaturePress(feature.id)}
      >
        {/*
          // Placeholder for icon integration. You'd need to install a library like @expo/vector-icons
          // Example: <Icon name={feature.icon || 'star'} className="text-2xl text-primaryText mb-tiny" />
        */}
        <Text
          // featureIcon style:
          // fontSize: 28 -> text-[28px] (or text-3xl if it fits your scale)
          // color: COLORS.primaryText -> text-primaryText
          // marginBottom: SPACING.small / 2 -> mb-tiny
          className="text-[28px] text-primaryText mb-tiny"
        >
          {feature.icon || '💡'} {/* Use actual icon prop if available, fallback to emoji */}
        </Text>
        <Text
          // featureText style:
          // fontSize: FONT_SIZES.small -> text-sm
          // fontWeight: '600' -> font-semibold
          // color: COLORS.primaryText -> text-primaryText
          // textAlign: 'center' -> text-center
          className="text-sm font-semibold text-primaryText text-center"
        >
          {feature.name}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default DailyFeaturesGrid;
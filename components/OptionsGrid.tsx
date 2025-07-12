// components/OptionsGrid/OptionsGrid.tsx
import React from 'react';
import { Text, TouchableOpacity, View, Dimensions } from 'react-native'; // Import Dimensions for dynamic width calculation
// No longer importing optionsGridStyles as styles are now in Tailwind classes
// import { optionsGridStyles as styles } from './styles';

const { width } = Dimensions.get('window'); // Get screen width for responsive card width

interface OptionsGridProps {
  options: string[];
  onPressOption?: (option: string) => void; // Optional handler if options become interactive
}

const OptionsGrid: React.FC<OptionsGridProps> = ({ options, onPressOption }) => (
  <View
    // optionsGrid style:
    // flexDirection: 'row' -> flex-row
    // flexWrap: 'wrap' -> flex-wrap
    // justifyContent: 'space-around' -> justify-around
    // marginVertical: SPACING.medium -> my-medium
    className="flex-row flex-wrap justify-around my-medium"
  >
    {options.map((opt, idx) => (
      <TouchableOpacity
        key={idx}
        // card style:
        // width: '30%' -> w-[30%] or calculate for precise spacing
        // backgroundColor: COLORS.accentHighlight -> bg-accentHighlight
        // marginBottom: SPACING.small -> mb-small
        // padding: SPACING.medium -> p-medium
        // borderRadius: BORDER_RADIUS.large -> rounded-large
        // alignItems: 'center' -> items-center
        // justifyContent: 'center' -> justify-center
        // minHeight: 80 -> min-h-[80px]
        // ...SHADOWS.small -> shadow-sm
        // For a precise 3-column layout with spacing, similar to DailyFeaturesGrid, you can use:
        style={{ width: (width - (16 /* SPACING.large */ * 2) - (8 /* SPACING.small */ * 4)) / 3 }} // (screen_width - (container_padding_horizontal * 2) - (margin_horizontal_between_cards * num_gaps)) / num_items
        className="bg-accentHighlight mb-small p-medium rounded-large items-center justify-center min-h-[80px] shadow-sm"
        onPress={() => onPressOption && onPressOption(opt)}
      >
        <Text
          // cardText style:
          // fontWeight: '600' -> font-semibold
          // color: COLORS.primaryText -> text-primaryText
          // textAlign: 'center' -> text-center
          // fontSize: FONT_SIZES.medium -> text-base
          className="font-semibold text-primaryText text-center text-base"
        >
          {opt}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default OptionsGrid;
// components/OptionsGrid/OptionsGrid.tsx
import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

interface OptionsGridProps {
  options: string[];
  onPressOption?: (option: string) => void;
}

const OptionsGrid: React.FC<OptionsGridProps> = ({ options, onPressOption }) => (
  <View
    className="flex-row flex-wrap justify-between px-4"
  >
    {options.map((opt, idx) => (
      <TouchableOpacity
        key={idx}
        style={{ width: (width - 48) / 3 - 8 }}
        className="bg-accentHighlight mb-4 p-3 rounded-xl items-center justify-center min-h-[90px] shadow-sm border border-accentBackground"
        onPress={() => onPressOption && onPressOption(opt)}
      >
        <Text
          className="font-semibold text-primaryText text-center text-base"
        >
          {opt}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default OptionsGrid;
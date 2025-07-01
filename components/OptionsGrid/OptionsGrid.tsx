import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { optionsGridStyles as styles } from './styles'; 

interface OptionsGridProps {
  options: string[];
  onPressOption?: (option: string) => void; // Optional handler if options become interactive
}

const OptionsGrid: React.FC<OptionsGridProps> = ({ options, onPressOption }) => (
  <View style={styles.optionsGrid}>
    {options.map((opt, idx) => (
      <TouchableOpacity key={idx} style={styles.card} onPress={() => onPressOption && onPressOption(opt)}>
        <Text style={styles.cardText}>{opt}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default OptionsGrid;
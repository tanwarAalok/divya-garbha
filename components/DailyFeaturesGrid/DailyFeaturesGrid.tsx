// components/DailyFeaturesGrid/DailyFeaturesGrid.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { dailyFeaturesGridStyles as styles } from './styles';
import { DailyFeature } from '@/constants/types';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // If you decide to use icons

interface DailyFeaturesGridProps {
  features: DailyFeature[];
  onFeaturePress?: (featureId: string) => void;
}

const DailyFeaturesGrid: React.FC<DailyFeaturesGridProps> = ({ features, onFeaturePress }) => (
  <View style={styles.gridContainer}>
    {features.map((feature) => (
      <TouchableOpacity
        key={feature.id}
        style={styles.featureCard}
        onPress={() => onFeaturePress && onFeaturePress(feature.id)}
      >
        {/*
          // Placeholder for icon integration. You'd need to install a library like @expo/vector-icons
          // Example: <Icon name={feature.icon || 'star'} style={styles.featureIcon} />
        */}
        <Text style={styles.featureIcon}>💡</Text> {/* Temporary emoji icon */}
        <Text style={styles.featureText}>{feature.name}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default DailyFeaturesGrid;
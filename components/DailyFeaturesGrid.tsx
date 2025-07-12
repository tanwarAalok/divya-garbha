// components/DailyFeaturesGrid/DailyFeaturesGrid.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { DailyFeature } from '@/constants/types';

const { width } = Dimensions.get('window');

interface DailyFeaturesGridProps {
  features: DailyFeature[];
  onFeaturePress?: (featureId: string) => void;
}

const DailyFeaturesGrid: React.FC<DailyFeaturesGridProps> = ({ features, onFeaturePress }) => (
  <View
    className="flex-row flex-wrap justify-between my-large px-large gap-3"
  >
    {features.map((feature) => (
      <TouchableOpacity
        key={feature.id}
        style={{ width: (width - 48) / 3 - 8 }}
        className="bg-accentHighlight p-medium rounded-large items-center justify-center mb-medium shadow-small border border-accentBackground rounded-md"
        onPress={() => onFeaturePress && onFeaturePress(feature.id)}
      >

        <Image
          source={feature.icon}
          style={{ width: 64, height: 64, marginBottom: 8 }}
          resizeMode="contain"
        />
        <Text
          className="text-sm font-semibold text-primaryText text-center"
        >
          {feature.name}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default DailyFeaturesGrid;
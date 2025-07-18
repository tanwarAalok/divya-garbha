// components/DashboardFooter/DashboardFooter.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { FooterNavItem } from '@/constants/types';

interface DashboardFooterProps {
  navItems: FooterNavItem[];
  activeRoute?: string;
}

const DashboardFooter: React.FC<DashboardFooterProps> = ({ navItems, activeRoute }) => (
  <View
    className="flex-row justify-around items-center bg-white rounded-t-2xl py-2 absolute bottom-0 left-0 right-0 w-full shadow-lg"
  >
    {navItems.map((item) => (
      <Link href={item.route as any} asChild key={item.name}>
        <TouchableOpacity
          className={`flex-1 items-center py-2 rounded-lg ${activeRoute === item.route ? 'bg-primaryAction/10' : ''}`}
        >
          <Text
            className={`text-2xl mb-1 ${activeRoute === item.route ? 'text-primaryAction' : 'text-secondaryText'}`}
          >
            {item.icon || '✨'}
          </Text>
          <Text
            className={`text-xs font-medium ${activeRoute === item.route ? 'text-primaryAction' : 'text-secondaryText'}`}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      </Link>
    ))}
  </View>
);

export default DashboardFooter;
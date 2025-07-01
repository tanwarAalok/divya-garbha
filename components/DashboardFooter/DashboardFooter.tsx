// components/DashboardFooter/DashboardFooter.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { dashboardFooterStyles as styles } from './styles';
import { FooterNavItem } from '@/constants/types';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // If you use vector icons

interface DashboardFooterProps {
  navItems: FooterNavItem[];
  // You might want an 'activeRoute' prop later to highlight the current tab
}

const DashboardFooter: React.FC<DashboardFooterProps> = ({ navItems }) => (
  <View style={styles.footerContainer}>
    {navItems.map((item) => (
      <Link href={item.route as any} asChild key={item.name}>
        <TouchableOpacity style={styles.navItem}>
          {/*
            // Placeholder for icon integration. You'd need to install a library like @expo/vector-icons
            // Example: <Icon name={item.icon || 'help-circle'} style={styles.navIcon} />
          */}
          <Text style={styles.navIcon}>✨</Text> {/* Temporary emoji icon */}
          <Text style={styles.navText}>{item.name}</Text>
        </TouchableOpacity>
      </Link>
    ))}
  </View>
);

export default DashboardFooter;
// components/DashboardFooter/DashboardFooter.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
// No longer importing dashboardFooterStyles as styles are now in Tailwind classes
// import { dashboardFooterStyles as styles } from './styles';
import { FooterNavItem } from '@/constants/types';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // If you use vector icons

interface DashboardFooterProps {
  navItems: FooterNavItem[];
  // You might want an 'activeRoute' prop later to highlight the current tab
  // activeRoute?: string; // Example: to highlight the current tab
}

const DashboardFooter: React.FC<DashboardFooterProps> = ({ navItems /*, activeRoute */ }) => (
  <View
    // footerContainer style:
    // flexDirection: 'row' -> flex-row
    // justifyContent: 'space-around' -> justify-around
    // alignItems: 'center' -> items-center
    // backgroundColor: COLORS.white -> bg-white
    // borderTopLeftRadius: BORDER_RADIUS.medium -> rounded-tl-medium
    // borderTopRightRadius: BORDER_RADIUS.medium -> rounded-tr-medium
    // paddingVertical: SPACING.medium -> py-medium
    // position: 'absolute' -> absolute
    // bottom: 0 -> bottom-0
    // left: 0 -> left-0
    // right: 0 -> right-0
    // width: '100%' -> w-full
    // shadow properties map to shadow-lg (elevation: 8)
    className="flex-row justify-around items-center bg-white rounded-tl-medium rounded-tr-medium py-medium absolute bottom-0 left-0 right-0 w-full shadow-lg"
  >
    {navItems.map((item) => (
      <Link href={item.route as any} asChild key={item.name}>
        <TouchableOpacity
          // navItem style:
          // flex: 1 -> flex-1
          // alignItems: 'center' -> items-center
          // paddingVertical: SPACING.small -> py-small
          className="flex-1 items-center py-small"
          // You could add conditional styling for active state here:
          // className={`flex-1 items-center py-small ${activeRoute === item.route ? 'bg-blue-100' : ''}`}
        >
          {/*
            // Placeholder for icon integration. You'd need to install a library like @expo/vector-icons
            // Example: <Icon name={item.icon || 'help-circle'} className="text-2xl text-secondaryText mb-tiny" />
          */}
          <Text
            // navIcon style:
            // fontSize: 24 -> text-2xl
            // color: COLORS.softText -> text-secondaryText (assuming softText maps to secondaryText)
            // marginBottom: SPACING.small / 2 -> mb-tiny
            className="text-2xl text-secondaryText mb-tiny"
            // Conditional active text color:
            // className={`text-2xl mb-tiny ${activeRoute === item.route ? 'text-primaryAction' : 'text-secondaryText'}`}
          >
            {item.icon || '✨'} {/* Temporary emoji icon or actual icon */}
          </Text>
          <Text
            // navText style:
            // fontSize: FONT_SIZES.small -> text-sm
            // color: COLORS.softText -> text-secondaryText
            // fontWeight: '500' -> font-medium
            className="text-sm text-secondaryText font-medium"
            // Conditional active text color:
            // className={`text-sm font-medium ${activeRoute === item.route ? 'text-primaryAction font-bold' : 'text-secondaryText'}`}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      </Link>
    ))}
  </View>
);

export default DashboardFooter;
// components/DashboardHeader/DashboardHeader.tsx (TEMPORARY FOR DEBUGGING)
import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native'; // Added StyleSheet
import { dashboardHeaderStyles as styles } from './styles';
import { Link } from 'expo-router';

interface DashboardHeaderProps {
    appLogoSource: any;
    profileImageSource?: any;
    onProfilePress?: () => void;
    userNameInitials?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
    appLogoSource,
    profileImageSource,
    onProfilePress,
    userNameInitials = 'UG',
}) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.logoTitleContainer}>
                <Image source={appLogoSource} style={styles.appLogo} />
                <Text style={styles.headerTitle}>Divya Garbha</Text> {/* NEW: Display the title */}
            </View>

            <Link href="/profile" asChild>
                <TouchableOpacity style={styles.profileImage} onPress={onProfilePress}>
                    {profileImageSource ? (
                        <Image source={profileImageSource} style={styles.profileImage} />
                    ) : (
                        <Text style={styles.profileText}>{userNameInitials || 'UG'}</Text>
                    )}
                </TouchableOpacity>
            </Link>
        </View>
    );
};

export default DashboardHeader;
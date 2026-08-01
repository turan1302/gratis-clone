import React from 'react';
import { View, Text } from 'react-native';

const SplashLogo = ({ styles }) => (
    <View style={styles.content}>
        <View style={styles.logoWrapper}>
            <View style={styles.logoBubble}>
                <View style={styles.bubbleTail} />
                <Text style={styles.logoText}>gratis</Text>
            </View>
        </View>
        <Text style={styles.slogan}>Size güzel bakıyoruz.</Text>
    </View>
);

export default SplashLogo;

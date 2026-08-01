import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const TabBar = ({ tabs, activeTab, onTabChange }) => (
    <View style={styles.tabBar}>
        {tabs.map(tab => (
            <TouchableOpacity
                key={tab.key}
                style={styles.tabItem}
                onPress={() => onTabChange(tab.key)}
                activeOpacity={0.8}
            >
                <Text
                    style={[styles.tabText, activeTab === tab.key && styles.tabTextActive]}
                >
                    {tab.label}
                </Text>
                {activeTab === tab.key && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
        ))}
    </View>
);

export default TabBar;

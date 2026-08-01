import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const ScreenHeader = ({ title }) => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
);

export default ScreenHeader;

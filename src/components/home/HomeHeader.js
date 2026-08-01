import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../common/SearchBar';

const HomeHeader = ({ styles }) => (
    <View style={styles.header}>
        <SafeAreaView edges={['top']}>
            <SearchBar />
        </SafeAreaView>
        <View style={styles.headerDecorLine} />
    </View>
);

export default HomeHeader;

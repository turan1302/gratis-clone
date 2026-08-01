import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { HOME_QUICK_LINKS } from '../../datas/homeData';

const QuickLinks = ({ styles }) => {
    const renderQuickLink = ({ item }) => (
        <View style={styles.quickLinkItem}>
            <View style={[styles.quickLinkCircle, { backgroundColor: item.bg }]}>
                <Text style={[styles.quickLinkCircleText, { color: item.textColor }]}>
                    {item.circleText}
                </Text>
            </View>
            <Text style={styles.quickLinkTitle}>{item.title}</Text>
            <Text style={styles.quickLinkSubtitle}>{item.subtitle}</Text>
        </View>
    );

    return (
        <View style={styles.quickLinksSection}>
            <FlatList
                data={HOME_QUICK_LINKS}
                renderItem={renderQuickLink}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default QuickLinks;

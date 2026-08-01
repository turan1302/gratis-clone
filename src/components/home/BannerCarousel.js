import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { HOME_BANNERS } from '../../datas/homeData';

const BannerCarousel = ({ styles, bannerWidth }) => {
    const [activeBanner, setActiveBanner] = useState(0);

    const renderBanner = ({ item }) => (
        <View style={{ width: bannerWidth }}>
            <View style={styles.bannerCard}>
                <View style={styles.bannerLeft}>
                    <View style={styles.bannerBubble}>
                        <Text style={styles.bannerBubbleText}>%75 İndirim</Text>
                    </View>
                    <Text style={styles.bannerTitle}>{item.title}</Text>
                    <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>
                </View>
                <View style={styles.bannerRight}>
                    <Text style={styles.bannerRightText}>
                        Gratis'te{'\n'}kaçırılmayacak{'\n'}fırsatlar!
                    </Text>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.bannerSection}>
            <FlatList
                data={HOME_BANNERS}
                renderItem={renderBanner}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={e => {
                    const index = Math.round(e.nativeEvent.contentOffset.x / bannerWidth);
                    setActiveBanner(index);
                }}
            />
            <View style={styles.pagination}>
                {HOME_BANNERS.map((_, index) => (
                    <View
                        key={index}
                        style={
                            index === activeBanner
                                ? styles.paginationDotActive
                                : styles.paginationDot
                        }
                    />
                ))}
            </View>
        </View>
    );
};

export default BannerCarousel;

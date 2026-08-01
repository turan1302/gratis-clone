import React, { useMemo } from 'react';
import { View, ScrollView } from 'react-native';
import { useScreenDimensions } from '../../hooks';
import { createHomeStyles } from './styles';
import HomeHeader from './HomeHeader';
import PromoSection from './PromoSection';
import BannerCarousel from './BannerCarousel';
import QuickLinks from './QuickLinks';
import ProductCategories from './ProductCategories';
import ChatFab from './ChatFab';

const HomeContent = () => {
    const { width } = useScreenDimensions();
    const styles = useMemo(() => createHomeStyles(width), [width]);
    const bannerWidth = width - 32;

    return (
        <View style={styles.container}>
            <HomeHeader styles={styles} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <PromoSection styles={styles} />
                <BannerCarousel styles={styles} bannerWidth={bannerWidth} />
                <QuickLinks styles={styles} />
                <ProductCategories styles={styles} />
            </ScrollView>
            <ChatFab styles={styles} />
        </View>
    );
};

export default HomeContent;

import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../common/ScreenHeader';
import CtaButton from '../common/CtaButton';
import { createCartStyles } from './styles';
import CartIllustration from './CartIllustration';

const CartContent = () => {
    const styles = useMemo(() => createCartStyles(), []);

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScreenHeader title="Sepetiniz" />
            <View style={styles.content}>
                <CartIllustration styles={styles} />
                <Text style={styles.emptyText}>
                    Sepetinizde henüz ürün bulunmuyor.{'\n'}
                    Alışverişe başlamak için lütfen giriş yapın veya üye olun.
                </Text>
                <View style={styles.ctaSection}>
                    <CtaButton label="GİRİŞ YAP / ÜYE OL" borderRadius={4} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CartContent;

import React from 'react';
import { View, Text } from 'react-native';

const PromoSection = ({ styles }) => (
    <View style={styles.promoSection}>
        <Text style={styles.promoText}>
            Gratis Kart fırsatlarını gördün mü?{' '}
            <Text style={styles.promoLink}>Gratis Kart'lı ol</Text>, ayrıcalıkları yakala!
        </Text>
        <Text style={styles.promoText}>
            <Text style={styles.promoBold}>Alışverişe başlamak için</Text>{' '}
            <Text style={styles.promoLink}>üye olun / giriş yapın</Text>
        </Text>
    </View>
);

export default PromoSection;

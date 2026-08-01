import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { HOME_CATEGORIES } from '../../datas/homeData';

const ProductCategories = ({ styles }) => {
    const renderCategory = ({ item }) => (
        <View style={[styles.categoryCard, { backgroundColor: item.color }]}>
            <View style={styles.categoryOverlay}>
                <Text style={styles.categoryTitle}>{item.title}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.categoriesSection}>
            <Text style={styles.sectionTitle}>Ürün Kategorileri</Text>
            <FlatList
                data={HOME_CATEGORIES}
                renderItem={renderCategory}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default ProductCategories;

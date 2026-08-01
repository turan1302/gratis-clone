import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../../datas/categoriesData';
import SubcategoryItem from './SubcategoryItem';

const CategorySplitView = ({ styles, selectedCategoryId, onSelectCategory, selectedCategory }) => (
    <View style={styles.content}>
        <ScrollView style={styles.sidebar} showsVerticalScrollIndicator={false}>
            {CATEGORIES.map(category => {
                const isActive = category.id === selectedCategoryId;

                return (
                    <TouchableOpacity
                        key={category.id}
                        style={[styles.sidebarItem, isActive && styles.sidebarItemActive]}
                        onPress={() => onSelectCategory(category.id)}
                        activeOpacity={0.8}
                    >
                        <Text style={[styles.sidebarText, isActive && styles.sidebarTextActive]}>
                            {category.title}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>

        <ScrollView style={styles.subcategoryPanel} showsVerticalScrollIndicator={false}>
            {selectedCategory.subcategories.map(subcategory => (
                <SubcategoryItem
                    key={subcategory.id}
                    subcategory={subcategory}
                    styles={styles}
                />
            ))}
        </ScrollView>
    </View>
);

export default CategorySplitView;

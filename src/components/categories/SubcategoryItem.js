import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../../datas/colors';

const SubcategoryItem = ({ subcategory, styles }) => (
    <TouchableOpacity style={styles.subcategoryItem} activeOpacity={0.7}>
        <View style={styles.subcategoryContent}>
            <Text style={styles.subcategoryTitle}>{subcategory.title}</Text>
            {subcategory.subtitle ? (
                <Text style={styles.subcategorySubtitle} numberOfLines={2}>
                    {subcategory.subtitle}
                </Text>
            ) : null}
        </View>
        <Feather
            name="chevron-right"
            size={18}
            color={COLORS.primaryLight}
            style={styles.subcategoryChevron}
        />
    </TouchableOpacity>
);

export default SubcategoryItem;

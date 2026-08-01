import React, { useMemo } from 'react';
import { View, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../../datas/colors';
import { createSearchBarStyles } from './styles';

const SearchBar = ({ variant = 'default', placeholder = "Gratis'te ara" }) => {
    const styles = useMemo(() => createSearchBarStyles(variant), [variant]);

    const content = (
        <View style={styles.container}>
            <Feather name="search" size={20} color={COLORS.primary} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={COLORS.textLight}
            />
            <MaterialCommunityIcons name="barcode-scan" size={22} color={COLORS.primary} />
        </View>
    );

    if (variant === 'bordered') {
        return <View style={styles.wrapper}>{content}</View>;
    }

    return content;
};

export default SearchBar;

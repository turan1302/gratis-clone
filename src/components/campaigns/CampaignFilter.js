import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../../datas/colors';

const CampaignFilter = ({ styles, activeOnly, onToggle }) => (
    <TouchableOpacity style={styles.filterRow} onPress={onToggle} activeOpacity={0.8}>
        <View style={[styles.checkbox, activeOnly && styles.checkboxChecked]}>
            {activeOnly && <Feather name="check" size={14} color={COLORS.white} />}
        </View>
        <Text style={styles.filterText}>Aktif Kampanyalar</Text>
    </TouchableOpacity>
);

export default CampaignFilter;

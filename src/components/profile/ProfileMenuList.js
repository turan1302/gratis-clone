import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../../datas/colors';
import { PROFILE_MENU_ITEMS } from '../../datas/profileData';

const ProfileMenuList = ({ styles }) => (
    <View style={styles.menuList}>
        {PROFILE_MENU_ITEMS.map(item => (
            <TouchableOpacity key={item.id} style={styles.menuItem} activeOpacity={0.7}>
                <Text style={styles.menuItemText}>{item.title}</Text>
                <Feather name="chevron-right" size={20} color={COLORS.primaryLight} />
            </TouchableOpacity>
        ))}
    </View>
);

export default ProfileMenuList;

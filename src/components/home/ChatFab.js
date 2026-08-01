import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../../datas/colors';

const ChatFab = ({ styles }) => (
    <TouchableOpacity style={styles.fab} activeOpacity={0.85}>
        <Feather name="message-circle" size={24} color={COLORS.white} />
        <View style={styles.fabClose}>
            <Feather name="x" size={10} color={COLORS.textGrey} />
        </View>
    </TouchableOpacity>
);

export default ChatFab;

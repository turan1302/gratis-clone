import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../datas/colors';
import { PROFILE_SOCIAL_LINKS } from '../../datas/profileData';

const ProfileSocial = ({ styles }) => (
    <View style={styles.socialSection}>
        <Text style={styles.socialTitle}>BİZİ SOSYAL MEDYADA TAKİP EDİN</Text>
        <View style={styles.socialIcons}>
            {PROFILE_SOCIAL_LINKS.map(item => (
                <TouchableOpacity key={item.id} style={styles.socialIconButton} activeOpacity={0.7}>
                    <FontAwesome5
                        name={item.icon}
                        brand={item.brand}
                        size={22}
                        color={COLORS.primary}
                    />
                </TouchableOpacity>
            ))}
        </View>
    </View>
);

export default ProfileSocial;

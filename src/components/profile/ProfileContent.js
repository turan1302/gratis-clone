import React, { useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../common/ScreenHeader';
import CtaButton from '../common/CtaButton';
import { createProfileStyles } from './styles';
import ProfileMenuList from './ProfileMenuList';
import ProfileSocial from './ProfileSocial';

const ProfileContent = () => {
    const styles = useMemo(() => createProfileStyles(), []);

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScreenHeader title="Profil" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.ctaSection}>
                    <CtaButton label="GİRİŞ YAP / ÜYE OL" />
                </View>
                <ProfileMenuList styles={styles} />
                <ProfileSocial styles={styles} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileContent;

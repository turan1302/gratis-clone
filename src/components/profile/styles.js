import { StyleSheet } from 'react-native';
import { COLORS } from '../../datas/colors';

export const createProfileStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLORS.white,
        },
        scrollContent: {
            paddingBottom: 32,
        },
        ctaSection: {
            paddingHorizontal: 16,
            paddingVertical: 20,
        },
        menuList: {
            borderTopWidth: 1,
            borderTopColor: COLORS.border,
        },
        menuItem: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 16,
            paddingHorizontal: 16,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.border,
        },
        menuItemText: {
            flex: 1,
            fontSize: 14,
            color: COLORS.textDark,
            fontWeight: '500',
        },
        socialSection: {
            marginTop: 28,
            alignItems: 'center',
            paddingHorizontal: 16,
        },
        socialTitle: {
            fontSize: 12,
            fontWeight: '700',
            color: COLORS.primary,
            letterSpacing: 0.5,
            marginBottom: 16,
        },
        socialIcons: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
        },
        socialIconButton: {
            padding: 4,
        },
    });

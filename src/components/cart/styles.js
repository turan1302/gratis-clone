import { StyleSheet } from 'react-native';
import { COLORS } from '../../datas/colors';

export const createCartStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLORS.white,
        },
        content: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 32,
            paddingBottom: 40,
        },
        illustrationWrapper: {
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 28,
            position: 'relative',
            width: 200,
            height: 160,
        },
        decorDot: {
            position: 'absolute',
            width: 6,
            height: 6,
            borderRadius: 3,
            backgroundColor: COLORS.cartPrimaryLight,
        },
        decorPlus: {
            position: 'absolute',
            fontSize: 16,
            color: COLORS.cartPrimaryLight,
            fontWeight: '300',
        },
        illustrationBlob: {
            width: 140,
            height: 120,
            borderRadius: 60,
            backgroundColor: COLORS.primaryBg,
            alignItems: 'center',
            justifyContent: 'center',
            transform: [{ rotate: '-8deg' }],
        },
        emptyText: {
            fontSize: 14,
            color: COLORS.cartTextDark,
            textAlign: 'center',
            lineHeight: 22,
            marginBottom: 32,
        },
        ctaSection: {
            width: '100%',
        },
    });

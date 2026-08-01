import { StyleSheet } from 'react-native';
import { COLORS } from '../../../datas/colors';

export const createCtaButtonStyles = (fullWidth = true, borderRadius = 6) =>
    StyleSheet.create({
        button: {
            ...(fullWidth ? { width: '100%' } : {}),
            backgroundColor: COLORS.primary,
            paddingVertical: 16,
            borderRadius,
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            color: COLORS.white,
            fontSize: 14,
            fontWeight: '700',
            letterSpacing: 0.5,
        },
    });

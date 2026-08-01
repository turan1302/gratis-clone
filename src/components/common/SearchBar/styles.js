import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../../datas/colors';

export const createSearchBarStyles = variant => {
    const isBordered = variant === 'bordered';

    return StyleSheet.create({
        wrapper: isBordered
            ? {
                  paddingHorizontal: 16,
                  paddingTop: Platform.OS === 'ios' ? 8 : 12,
                  paddingBottom: 12,
                  backgroundColor: COLORS.white,
              }
            : undefined,
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: COLORS.white,
            borderRadius: 24,
            paddingHorizontal: 14,
            paddingVertical: Platform.OS === 'ios' ? (isBordered ? 11 : 12) : isBordered ? 9 : 10,
            gap: 10,
            ...(isBordered
                ? { borderWidth: 1, borderColor: COLORS.border }
                : { marginHorizontal: 16, marginTop: 8, marginBottom: 12 }),
        },
        input: {
            flex: 1,
            fontSize: 14,
            color: COLORS.textDark,
            padding: 0,
            includeFontPadding: false,
        },
    });
};

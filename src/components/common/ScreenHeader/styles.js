import { StyleSheet } from 'react-native';
import { COLORS } from '../../../datas/colors';

export const styles = StyleSheet.create({
    header: {
        paddingVertical: 16,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.primary,
    },
});

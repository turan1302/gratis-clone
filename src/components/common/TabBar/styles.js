import { StyleSheet } from 'react-native';
import { COLORS } from '../../../datas/colors';

export const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 14,
        position: 'relative',
    },
    tabText: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.primaryLight,
    },
    tabTextActive: {
        color: COLORS.primary,
        fontWeight: '700',
    },
    tabIndicator: {
        position: 'absolute',
        bottom: 0,
        left: '15%',
        right: '15%',
        height: 3,
        backgroundColor: COLORS.primary,
        borderRadius: 2,
    },
});

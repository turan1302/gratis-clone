import { StyleSheet } from 'react-native';
import { COLORS } from '../../datas/colors';

export const createCategoriesStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLORS.white,
        },
        content: {
            flex: 1,
            flexDirection: 'row',
        },
        sidebar: {
            flex: 1,
            width: 0,
            borderRightWidth: 1,
            borderRightColor: COLORS.border,
            backgroundColor: COLORS.white,
        },
        sidebarItem: {
            paddingVertical: 16,
            paddingHorizontal: 6,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.border,
        },
        sidebarItemActive: {
            backgroundColor: COLORS.primaryBg,
            borderLeftWidth: 3,
            borderLeftColor: COLORS.primary,
            paddingLeft: 3,
        },
        sidebarText: {
            fontSize: 13,
            color: COLORS.primary,
            fontWeight: '500',
            lineHeight: 18,
        },
        sidebarTextActive: {
            fontWeight: '700',
        },
        subcategoryPanel: {
            flex: 1,
            width: 0,
            backgroundColor: COLORS.white,
        },
        subcategoryItem: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 14,
            paddingHorizontal: 14,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.border,
        },
        subcategoryContent: {
            flex: 1,
            flexShrink: 1,
            minWidth: 0,
            paddingRight: 8,
        },
        subcategoryTitle: {
            fontSize: 13,
            fontWeight: '700',
            color: COLORS.primary,
            lineHeight: 18,
            flexShrink: 1,
        },
        subcategorySubtitle: {
            fontSize: 11,
            color: COLORS.primaryLight,
            marginTop: 4,
            lineHeight: 16,
            flexShrink: 1,
        },
        subcategoryChevron: {
            flexShrink: 0,
        },
        brandsPlaceholder: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
        },
        brandsPlaceholderText: {
            fontSize: 15,
            color: COLORS.primaryLight,
            textAlign: 'center',
        },
    });

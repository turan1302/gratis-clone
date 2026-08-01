import { StyleSheet } from 'react-native';
import { COLORS } from '../../datas/colors';

export const createCampaignsStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLORS.white,
        },
        filterRow: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 14,
            gap: 10,
        },
        checkbox: {
            width: 22,
            height: 22,
            borderRadius: 4,
            borderWidth: 2,
            borderColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
        },
        checkboxChecked: {
            backgroundColor: COLORS.primary,
        },
        filterText: {
            fontSize: 14,
            color: COLORS.textDark,
            fontWeight: '500',
        },
        listContent: {
            paddingHorizontal: 16,
            paddingBottom: 24,
            gap: 16,
        },
        card: {
            borderRadius: 8,
            borderWidth: 1,
            borderColor: COLORS.cardBorder,
            backgroundColor: COLORS.white,
            overflow: 'hidden',
        },
        banner: {
            backgroundColor: COLORS.primary,
            padding: 16,
            minHeight: 140,
            justifyContent: 'center',
        },
        bannerTitle: {
            fontSize: 18,
            fontWeight: '800',
            color: COLORS.white,
            lineHeight: 24,
        },
        bannerHighlight: {
            color: COLORS.bannerPink,
        },
        bannerSubtitle: {
            fontSize: 12,
            color: COLORS.white,
            marginTop: 8,
            lineHeight: 17,
            opacity: 0.95,
        },
        bannerRow: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginTop: 12,
        },
        bannerPhone: {
            width: 56,
            height: 80,
            borderRadius: 8,
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderWidth: 2,
            borderColor: 'rgba(255,255,255,0.4)',
            alignItems: 'center',
            justifyContent: 'center',
        },
        bannerPhoneText: {
            fontSize: 9,
            color: COLORS.white,
            textAlign: 'center',
            fontWeight: '600',
        },
        cardDescription: {
            fontSize: 13,
            color: COLORS.textDark,
            lineHeight: 20,
            padding: 14,
        },
        cardActions: {
            flexDirection: 'row',
            paddingHorizontal: 14,
            paddingBottom: 14,
            gap: 10,
        },
        primaryButton: {
            flex: 1,
            backgroundColor: COLORS.primary,
            paddingVertical: 12,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
        },
        primaryButtonText: {
            color: COLORS.white,
            fontSize: 13,
            fontWeight: '700',
        },
        outlineButton: {
            flex: 1,
            backgroundColor: COLORS.white,
            paddingVertical: 12,
            borderRadius: 6,
            borderWidth: 1.5,
            borderColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
        },
        outlineButtonText: {
            color: COLORS.primary,
            fontSize: 13,
            fontWeight: '700',
        },
        emptyState: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 32,
        },
        emptyStateText: {
            fontSize: 14,
            color: COLORS.primaryLight,
            textAlign: 'center',
        },
    });

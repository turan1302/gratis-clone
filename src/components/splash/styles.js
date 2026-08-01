import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../datas/colors';

export const createSplashStyles = (width, height) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLORS.white,
        },
        patternImage: {
            opacity: 0.45,
        },
        content: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 24,
        },
        logoWrapper: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        logoBubble: {
            backgroundColor: COLORS.logoYellow,
            paddingHorizontal: width * 0.13,
            paddingVertical: height * 0.02,
            borderRadius: 999,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: 'rgba(93, 46, 142, 0.3)',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.4,
            shadowRadius: 10,
            elevation: 8,
            overflow: 'visible',
        },
        bubbleTail: {
            position: 'absolute',
            bottom: -5,
            left: width * 0.055,
            width: 16,
            height: 16,
            backgroundColor: COLORS.logoYellow,
            borderRadius: 2,
            transform: [{ rotate: '45deg' }],
        },
        logoText: {
            fontSize: width * 0.12,
            fontWeight: '900',
            color: COLORS.logoPurple,
            letterSpacing: -1.5,
            textTransform: 'lowercase',
            includeFontPadding: false,
            ...Platform.select({
                ios: { fontFamily: 'System' },
                android: { fontFamily: 'sans-serif-black' },
            }),
        },
        slogan: {
            marginTop: height * 0.03,
            fontSize: width * 0.062,
            color: COLORS.sloganPurple,
            textAlign: 'center',
            letterSpacing: 0.2,
            textShadowColor: 'rgba(139, 107, 184, 0.5)',
            textShadowOffset: { width: 0, height: 2 },
            textShadowRadius: 8,
            ...Platform.select({
                ios: { fontFamily: 'Snell Roundhand', fontWeight: '600' },
                android: { fontFamily: 'cursive', fontStyle: 'italic' },
            }),
        },
    });

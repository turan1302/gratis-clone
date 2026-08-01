import React, { useEffect, useMemo } from 'react';
import { View, StatusBar } from 'react-native';
import * as NavigationService from '../../common/NavigationService';
import { useScreenDimensions } from '../../hooks';
import { createSplashStyles } from './styles';
import SplashBackground from './SplashBackground';
import SplashLogo from './SplashLogo';

const SplashContent = () => {
    const { width, height } = useScreenDimensions();
    const styles = useMemo(() => createSplashStyles(width, height), [width, height]);

    useEffect(() => {
        const timer = setTimeout(() => {
            NavigationService.reset();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <SplashBackground imageStyle={styles.patternImage} />
            <SplashLogo styles={styles} />
        </View>
    );
};

export default SplashContent;

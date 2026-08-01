import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const SplashBackground = ({ imageStyle }) => (
    <ImageBackground
        source={require('../../assets/images/splash-background.png')}
        style={StyleSheet.absoluteFillObject}
        imageStyle={imageStyle}
        resizeMode="cover"
    />
);

export default SplashBackground;

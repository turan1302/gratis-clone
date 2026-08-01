import React, { useMemo } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createCtaButtonStyles } from './styles';

const CtaButton = ({ label, onPress, fullWidth = true, borderRadius = 6 }) => {
    const styles = useMemo(
        () => createCtaButtonStyles(fullWidth, borderRadius),
        [fullWidth, borderRadius],
    );

    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.85}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

export default CtaButton;

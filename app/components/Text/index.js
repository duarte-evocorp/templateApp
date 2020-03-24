import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { theme } from '../../styles';

const Typography = props => {

    const textStyles = [
        styles.text,
        props.title && styles.title,
        props.white && styles.white,
        props.danger && styles.danger,
        props.h1 && styles.h1,
        props.h2 && styles.h2
    ];

    return (
        <Text style={textStyles} {...props}>
            {props.children}
        </Text>
    );
}

export default Typography;

const styles = StyleSheet.create({
    text: { ...theme.fonts.base, color: theme.colors.white },
    title: theme.fonts.title,
    white: { color: theme.colors.white },
    danger: { color: theme.colors.danger },
    h1: theme.fonts.h1,
    h2: theme.fonts.h2
});

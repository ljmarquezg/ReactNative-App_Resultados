import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

const Spinner = ({ size, message, addTextStyle }) => {
  const { viewStyles, textStyles } = styles;
    return (
        <View style={viewStyles}>
            <ActivityIndicator size={size} />
            <Text style={[textStyles, addTextStyle]}>{message}</Text>
        </View>
    );
};

const styles = {
    viewStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyles: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        fontFamily: 'Bebas Neue',
        color: 'rgba(255,255,255,0.8)',
        fontSize: 24,
    }
};

export { Spinner };

import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ etiqueta, value, onChangeText, placeholder, secureTextEntry, autoCorrect }) => {
    const { viewStyle, etiquetaStyle, inputStyle } = styles;
    return (
        <View style={viewStyle}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={etiquetaStyle}>{etiqueta}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    placeholder={placeholder}
                    style={inputStyle}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    autoCorrect={autoCorrect}
                    autoCapitalize={'none'}
                />
            </View>
        </View>
    );
};

const styles = {
    viewStyle: {
        flex: 1,
        padding: 10,
        //flexDirection: 'row',
        alignItems: 'center'
    },
    etiquetaStyle: {
        fontSize: 15,
        paddingLeft: 5,
        flex: 1,
    },
    inputStyle: {
        color: '#000',
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 19,
        lineHeight: 24,
        flex: 1,
    }
};

export { Input };

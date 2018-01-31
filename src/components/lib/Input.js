import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ 
        etiqueta, 
        value, 
        onChangeText, 
        placeholder, 
        secureTextEntry,
        autoCorrect, 
        addEtiquetaStyle,
        addInputStyle, 
        editable
    }) => {
    const { viewStyle, etiquetaStyle, inputStyle } = styles;
    return (
        <View style={viewStyle}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[etiquetaStyle, addEtiquetaStyle]}>{etiqueta}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    placeholder={placeholder}
                    style={[inputStyle, addInputStyle]}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    autoCorrect={autoCorrect}
                    autoCapitalize={'none'}
                    editable={editable === true ? false : true}
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
        color: '#3b4167',
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 19,
        lineHeight: 24,
        flex: 1,
    }
};

export { Input };

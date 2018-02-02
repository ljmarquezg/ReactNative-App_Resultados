import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Boton = ({ onPress, texto, touchableStyle, textStyle }) => {
    const { contenedorStyle, botonStyle } = styles;
    return (
        <TouchableOpacity style={[contenedorStyle, touchableStyle]} onPress={onPress}>
            <Text style={[botonStyle, textStyle]}>{texto.toUpperCase()}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    contenedorStyle: {
        borderRadius: 0,
        borderWidth: 1,
        borderColor: '#1c2551',
        backgroundColor: '#3b4167',
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    botonStyle: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 28,
        fontFamily: 'Bebas Neue',
        color: 'white'
    },
};

export { Boton };
//flex: 1,
//alignSelf: 'stretch'

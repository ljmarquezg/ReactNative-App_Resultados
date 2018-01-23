import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BarraInferior = (props) => {
    const { contenedor, item } = styles;
    return (
        <View style={contenedor}>
            <TouchableOpacity style={item}>
                <Icon name={props.home} size={35} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={item}>
                <Icon name={props.football} size={35} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={item}>
                <Icon name={props.basketball} size={35} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={item}>
                <Icon name={props.apuesta} size={35} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    contenedor: {
        height: 67,
        backgroundColor: '#000',
        flexDirection: 'row',
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#fff'
    }
};

export { BarraInferior };

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BarraInferior = (props) => {
    const { contenedor, item } = styles;
    return (
        <View style={contenedor}>
            <TouchableOpacity style={item} onPress={() => Actions.Inicio()}>
                <Icon name={props.home} size={35} color="green" />
            </TouchableOpacity>
            <TouchableOpacity style={item} onPress={() => Actions.Football()}>
                <Icon name={props.football} size={35} color="green" />
            </TouchableOpacity>
            <TouchableOpacity style={item}>
                <Icon name={props.basketball} size={35} color="green" />
            </TouchableOpacity>
            <TouchableOpacity style={item}>
                <Icon name={props.apuesta} size={35} color="green" />
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    contenedor: {
        height: 67,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderTopWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        elevation: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //borderRightWidth: 1,
        //borderLeftWidth: 1,
        //borderRightColor: '#fff',
        //borderLeftColor: '#fff'
    }
};

export { BarraInferior };

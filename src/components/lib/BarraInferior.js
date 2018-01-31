import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BarraInferior = (props) => {
    const { contenedor, item } = styles;
    return (
        <View style={contenedor}>
            <TouchableOpacity style={item} onPress={() => Actions.Inicio()}>
                <Icon name={props.home} size={35} color="#3b4167" />
            </TouchableOpacity>
            <TouchableOpacity style={item} onPress={() => Actions.Futbol()}>
                <Icon name={props.football} size={35} color="#3b4167" />
            </TouchableOpacity>
            <TouchableOpacity style={item} onPress={() => Actions.Baloncesto()} >
                <Icon name={props.basketball} size={35} color="#3b4167" />
            </TouchableOpacity>
            <TouchableOpacity style={item} onPress={() => Actions.Apuestas()} >
                <Icon name={props.apuesta} size={35} color="#3b4167" />
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    contenedor: {
        height: 65,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#3b4167',
        borderTopWidth: 5,
        borderTopColor: '#3b4167',
        borderLeftWidth: 1,
        borderLeftColor: '#3b4167',
    }
};

export { BarraInferior };

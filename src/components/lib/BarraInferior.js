import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Logo } from './';
import * as actions from '../../actions';

class BarraInferior extends Component {
    //Estado de boton Seleccionado
     state = {
        btnSelected: 1
      };
    //===============================================================
    //  Actualizar el estado del boton seleccionado con la propiedad de la pestaña actual
    //===============================================================
    componentWillMount() {
        this.setState({ btnSeleted: this.props.pestanaActual });
    }
    //===============================================================
    //  Actualizar el valor del reducer pestaña enviándole
    //  como parámetro el valor del item seleccionado    
    //===============================================================
    isActive(item) {
        this.props.pestana(item);
    }
    //===============================================================
    //  Acciones para renderizar el menu. 
    //  Si la pestaña es el inicio, mostrar los íconos del menu
    //  como botones.
    //===============================================================
    render() {
        const { contenedor, item, active, iconBoton, divider, content, icon, iconText } = styles;
        const { home, basketball, football, apuesta, esInicio } = this.props;
        switch (esInicio) {
            case true:
            return (
                <View style={content}>
                <ScrollView style={{ width: '100%' }}>
                    <View style={{ marginBottom: '7%', marginTop: '5%' }} >
                        <Logo isColor />
                    </View>
                    <View style={divider}>
                        <TouchableOpacity
                            style={iconBoton}
                            onPress={() => { Actions.Futbol(); this.isActive(2); }}
                        >
                            <Icon name="soccer" style={icon} />
                            <Text style={iconText}>Fútbol</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={iconBoton}
                            onPress={() => { Actions.Baloncesto(); this.isActive(3); }}
                        >
                            <Icon name="dribbble" style={icon} />
                            <Text style={iconText}>Baloncesto</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={divider}>
                        <TouchableOpacity
                            style={iconBoton}
                            onPress={() => { Actions.Apuestas(); this.isActive(4); }}
                        >
                            <Icon name="cash-usd" style={icon} />
                            <Text style={iconText}>Apuestas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={iconBoton}
                            onPress={() => { Actions.Perfil(); this.isActive(null); }}
                        >
                            <Icon name="face" style={icon} />
                            <Text style={iconText}>Perfíl</Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
                </View>
            );

        default:
        return (
            <View style={contenedor}>
                <TouchableOpacity
                    style={[item, this.props.pestanaActual === 1 ? active : false]}
                     onPress={() => { Actions.Inicio(); this.isActive(1); }}
                >
                    <Icon name={home} size={35} color="#3b4167" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[item, this.props.pestanaActual === 2 ? active : false]}
                    onPress={() => { Actions.Futbol(); this.isActive(2); }}
                >
                    <Icon name={football} size={35} color="#3b4167" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[item, this.props.pestanaActual === 3 ? active : false]}
                    onPress={() => { Actions.Baloncesto(); this.isActive(3); }}
                >
                    <Icon name={basketball} size={35} color="#3b4167" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[item, this.props.pestanaActual === 4 ? active : false]}
                    onPress={() => { Actions.Apuestas(); this.isActive(4); }}
                >
                    <Icon name={apuesta} size={35} color="#3b4167" />
                </TouchableOpacity>
            </View>
        );
        }
    }
}

const styles = {
    content: {
        backgroundColor: '#4d5b90',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
   },
   divider: {
       flexDirection: 'row',
       marginBottom: '10%'
   },
   icon: {
    fontSize: 40,
    marginBottom: 5,
    textAlign: 'center',
    color: '#3b4167',
   },
   iconText: {
       fontSize: 20,
       color: '#3b4167',
       textAlign: 'center',
       fontFamily: 'Orkney'
   },
   iconBoton: {
       marginLeft: 30,
       marginRight: 30,
       paddingTop: 15,
       paddingBottom: 15,
       backgroundColor: 'white',
       flex: 1,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 0 },
       shadowOpacity: 0.1,
       shadowRadius: 0,
       elevation: 0,
   },

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
    },
    active: {
        borderTopColor: 'orange',
        borderRightColor: 'orange',
        borderLeftColor: 'orange',
    }
};

const mapStateToProps = state => {
    return { pestanaActual: state.pestanaActual };
};

export default connect(mapStateToProps, actions)(BarraInferior);

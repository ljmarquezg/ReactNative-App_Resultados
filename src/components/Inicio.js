import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Logo } from './lib';

class Inicio extends Component {
  state = { update: [] }

    componentDidMount() {

    }

    render() {
        const { content, iconBoton, iconText, icon, divider } = styles;
        return (
              <View style={content}>
                <Logo isColor />
                    <View style={divider}>
                        <TouchableOpacity style={iconBoton} onPress={() => Actions.Futbol()} >
                            <Icon name="soccer" style={icon} />
                            <Text style={iconText}>Fútbol</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={iconBoton} onPress={() => Actions.Baloncesto()}>
                            <Icon name="dribbble" style={icon} />
                            <Text style={iconText}>Baloncesto</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={divider}>
                        <TouchableOpacity style={iconBoton} onPress={() => Actions.Apuestas()}>
                            <Icon name="cash-usd" style={icon} />
                            <Text style={iconText}>Apuestas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={iconBoton} onPress={() => Actions.Perfil()}>
                            <Icon name="face" style={icon} />
                            <Text style={iconText}>Perfíl</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        );
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
       marginBottom: 60
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
};
const mapStateToProps = state => {
    return { apuestas: state.apuestas };
};


export default connect(mapStateToProps)(Inicio);

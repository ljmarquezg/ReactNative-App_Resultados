import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import { Boton } from './lib/';


class Inicio extends Component {
    render() {
        const { content, iconBoton, iconText, icon, divider, backgroundImage } = style;
        return (
                <View style={content}>
                    <Image
                        style={backgroundImage}
                        source={require('../img/login-bk.png')}
                        resizeMode='cover'
                    />
                    <View style={divider}>
                        <TouchableOpacity style={iconBoton}>
                            <Icon name="soccer" style={icon} />
                            <Text style={iconText}>Futboll</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={iconBoton}>
                            <Icon name="dribbble" style={icon} />
                            <Text style={iconText}>Baloncesto</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={divider}>
                        <TouchableOpacity style={iconBoton}>
                            <Icon name="soccer" style={icon} />
                            <Text style={iconText}>Futboll</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={iconBoton}>
                            <Icon name="dribbble" style={icon} />
                            <Text style={iconText}>Baloncesto</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        );
    }
}
const style = {
    content: {
        backgroundColor: 'blue',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
   },
   divider: {
       flexDirection: 'row'
   },
   icon: {
    fontSize: 40,
    marginBottom: 5,
    textAlign: 'center',
   },
   iconText: {
       fontSize: 20,
       color: 'orange',
       textAlign: 'center'
   },
   iconBoton: {
       margin: 10,
       padding: 15,
       backgroundColor: '#f4f4f4',
       borderColor: 'red',
       borderWidth: 4,
       flex: 1
   },
   backgroundImage: {
        backgroundColor: 'red',
        position: 'absolute',
        width: '100%',
        height: '100%',
    }
};

export default Inicio;

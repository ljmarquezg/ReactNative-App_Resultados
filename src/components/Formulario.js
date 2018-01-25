import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import firebase from 'firebase';
import { Boton, Card, CardSection, Input, Spinner } from './lib';


class Formulario extends Component {
    state = { 
        email: '',
        password: '',
        cargando: false,
        error: ''
     };
    enviarFormulario() {
        const { email, password } = this.state;
        if (email === '' || password === '') {
            this.setState({ error: 'El campo de email y contraseña no deben estar vacios' });
        } else {
            this.setState({ cargando: true });
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                
            )
            .catch((res) => {
                this.loginError(res);
            });
        }
    }
    loginError(res) {
        this.setState({ error: res.message, cargando: false });
    }
    mostrarAccion() {
        if (this.state.cargando) {
            return <Spinner size="large" />;
        }
        return (
            <View style={style.botonView}>
                <Boton
                     texto="Iniciar Sesion" 
                     onPress={() => this.enviarFormulario()} 
                     touchableStyle={{ backgroundColor: 'blue' }} 
                     textStyle={{ color: 'white' }} 
                />
                   
            </View>
        );
    }

    render() {
        const { content, imageContainer, imageStyles, backgroundImage } = style;
        return (
            <View style={content}>
                <Image
                    style={backgroundImage}
                    source={require('../img/login-bk.png')}
                />
                <View style={imageContainer}>
                    <Image
                        style={imageStyles}
                        source={require('../img/logo.png')}
                    />
                </View>
                <Card>
                    <CardSection>
                        <Input
                            etiqueta='Email'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeholder='apuesta@email.com'
                            secureTextEntry={false}
                            autoCorrect={false}
                            style={{ flex: 1 }}
                        />
                    </CardSection>
                    <CardSection style={{ height: 60, width: 500, flex: 1 }}>
                        <Input
                            etiqueta='Contraseña'
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeholder='123456'
                            secureTextEntry
                            autoCorrect={false}
                        />
                    </CardSection>
                </Card>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    {this.mostrarAccion()}
                </View>
                <Text style={style.error}>{this.state.error}</Text>
            </View>
        );
    }
}

const style = {
    content: {
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        position: 'absolute',
    },
    botonView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        marginTop: 40
    },
    error: {
        marginTop: 10,
        padding: 15,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        flexDirection: 'row'
    },
    imageStyles: {
        height: 150,
        width: 150,
        backgroundColor: 'transparent',
        marginBottom: 60
    },
    backgroundImage: {
        backgroundColor: '#ccc',
        position: 'absolute',
        width: '100%',
        height: '100%',
    }
};

export default Formulario;

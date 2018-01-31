import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Boton, Card, CardSection, Input, Spinner, Logo, Background } from './lib';

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
                     texto="Iniciar Sesión"
                     onPress={() => this.enviarFormulario()}
                     touchableStyle={{ backgroundColor: 'blue' }}
                     textStyle={{ color: 'white' }}
                />

            </View>
        );
    }

    render() {
        const { content } = style;
        return (
            <View style={content}>
                <Background />
                <Logo />
                <Card addStyle={{ borderWidth: 0, shadowColor: 'transparent', elevation: 0 }}>
                    <CardSection 
                        addStyle={{ backgroundColor: 'transparent', borderBottomWidth: 0 }}
                    >
                        <Input
                            etiqueta='Email'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeholder='apuesta@email.com'
                            secureTextEntry={false}
                            autoCorrect={false}
                            addEtiquetaStyle={{ 
                                backgroundColor: 'transparent', 
                                fontFamily: 'Bebas Neue', 
                                fontSize: 25, 
                                color: '#FFF' 
                            }}
                            addInputStyle={{ backgroundColor: '#fff', marginTop: 10 }}
                        />
                    </CardSection>

                    <CardSection 
                        addStyle={{ backgroundColor: 'transparent', borderBottomWidth: 0 }}
                    >
                        <Input
                            etiqueta='Contraseña'
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeholder='123456'
                            secureTextEntry
                            autoCorrect={false}
                            addEtiquetaStyle={{
                                backgroundColor: 'transparent', 
                                fontFamily: 'Bebas Neue', 
                                fontSize: 25, 
                                color: '#FFF' 
                            }}
                            addInputStyle={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
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
        marginTop: 0,
        marginBottom: 50
    },
    error: {
        marginTop: 10,
        padding: 15,
        color: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)'
    },
};

export default Formulario;

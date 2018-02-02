import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
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
            return <Spinner size="large" message="Iniciando Sesión" />;
        }
        return (
            <View style={style.botonView}>
                <Boton
                     texto="Iniciar Sesión"
                     onPress={() => this.enviarFormulario()}
                     touchableStyle={{ backgroundColor: '#4d5b90' }}
                     textStyle={{ color: 'white' }}
                />
            </View>
        );
    }

    render() {
        const { contentView } = style;
        return (
                <View style={contentView}>
                    <Background />
                    <ScrollView style={{ paddingTop: 20, paddingBottom: '10%' }} >    
                    <Logo addStyle={{ marginTop: '5%', marginBottom: '7%' }} />
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
                                addInputStyle={{ backgroundColor: '#fff', marginTop: 10 }}
                            />
                        </CardSection>
                    </Card>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        {this.mostrarAccion()}
                    </View>
                    </ScrollView>
                    <Text style={style.error}>{this.state.error}</Text>
                </View>
        );
    }
}

const style = {
    contentView: {
        flex: 1,
        justifyContent: 'center',
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

import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';
import { Spinner } from './components/lib';
import BarraInferior from './components/lib/BarraInferior';
import Formulario from './components/Formulario';


export default class App extends Component {
  state = { sesionIniciada: null }

  componentWillMount() {
    //Conectar con base de datos
    firebase.initializeApp(
        {
            apiKey: 'AIzaSyCJ8T2HW3FwHD_hwiTGP6SQMq7uvJmRFx0',
            authDomain: 'apuestasdeportesrn.firebaseapp.com',
            databaseURL: 'https://apuestasdeportesrn.firebaseio.com',
            projectId: 'apuestasdeportesrn',
            storageBucket: 'apuestasdeportesrn.appspot.com',
            messagingSenderId: '535345564732'
        }
    );
    //Validar Inicio de sesión
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({ sesionIniciada: true });
        } else {
          this.setState({ sesionIniciada: false });
        }
     }
    );
  }

  //Cerrar sesión
  cerrarSesion() {
    firebase.auth().signOut();
  }

  //=========================================================================
  //    Mostrar la pantalla Inicio
  //=========================================================================
  mostrarContenido() {
    const { imageContainer, backgroundImage, imageStyles } = styles;
    switch (this.state.sesionIniciada) {
      case true:
        return (
          <Provider store={createStore(reducers)} >
            <View style={{ flexGrow: 1 }}>
                <Router cerrarSesion={this.cerrarSesion.bind(this)} />
                <BarraInferior
                  home='home'
                  football='soccer'
                  basketball='dribbble'
                  apuesta='cash-usd'
                />
              </View>
            </Provider>
        );

      case false:
      //=========================================================================
      //    Mosrtar formulario de inicio de sesión
      //=========================================================================
        return (
            <Formulario />
        );

      default:
      //=========================================================================
      //    Mosrtar estado de carga (Spinner)
      //=========================================================================
        return (
          <View style={{ flex: 1 }}>
            <View style={imageContainer}>
              <Image
                style={backgroundImage}
                source={require('./img/login-bk.png')}
              />
              <Image
                style={imageStyles}
                source={require('./img/logo.png')}
              />
            <Spinner size="large" message="Iniciando conexión con el servidor" />
            </View>
          </View>
        );
    }
  }

  render() {
    console.ignoredYellowBox = [
      'Setting a timer'
      ];
    const { container } = styles;
    return (
        <View style={container}>
            {this.mostrarContenido()}
        </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    flex: 1,
    padding: 0,
    width: '100%',
    backgroundColor: '#ddd'
  },
  imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
  },
  imageStyles: {
      height: 120,
      width: 120,
      backgroundColor: 'transparent',
      marginTop: 50
  },
  backgroundImage: {
      backgroundColor: '#ccc',
      position: 'absolute',
      width: '100%',
      height: '100%',
  }
};

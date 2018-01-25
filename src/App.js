import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Router from './Router';
//import Inicio from './components/Inicio';
import { Spinner, BarraInferior } from './components/lib';
import Formulario from './components/Formulario';

export default class App extends Component {
  state = { sesionIniciada: null }

  componentWillMount() {
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

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({ sesionIniciada: true });
        } else {
          this.setState({ sesionIniciada: false });
        }
     }
    );
  }

  cerrarSesion() {
    firebase.auth().signOut();
  }
  
  mostrarContenido() {
    switch (this.state.sesionIniciada) {
      case true:
        return (
          <View style={{ flexGrow: 1 }}>
              <Router cerrarSesion={this.cerrarSesion.bind(this)} />
              <BarraInferior
                home='home'
                football='soccer'
                basketball='dribbble'
                apuesta='cash-usd'
              />
            </View>
        );
     
      case false:
        return (
            <Formulario />
        );
   
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
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
    backgroundColor: 'orange'
  },
};

/*<Inicio cerrarSesion={this.cerrarSesion.bind(this)} />*/

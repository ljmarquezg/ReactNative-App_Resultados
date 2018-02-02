import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Spinner } from './lib';
import * as actions from '../actions';
import ListaResultados from './ListaResultados';

class Futbol extends Component {
  state = { data: [], dataSource: [] }
  componentWillMount() {
    this.setState({ data: [] });
    this.props.getData([]);
    this.obtenerItems();
  }
  //=================================================================
  //    Consultar la base de datos y obtener los resultados de fútbol
  //=================================================================
  obtenerItems() {
    const datos = [];
    const resultados = [];
    firebase.database().ref('futbol').on('value', (snapshot) => {
      //Obtener la información a través de firebase.
      snapshot.forEach((childSnapshot) => {
        childSnapshot.forEach((secondChildSnapshot) => {
          datos.push(secondChildSnapshot.val());
        });
      });
      //Recorrer el array de objetos
      datos.map((elemento) => {
        //Guardar solo los elementos que hayan culminado y no estén disponibles para apostar 
        //o sean información del país al que pertenece la competición
        if (elemento.terminado === true || elemento.descripcion) {
          //Agregar el elemento al array de elementos
          resultados.push(elemento);
        }
      });

      this.props.getData(resultados.reverse());
    });
    this.setState({ data: resultados });
  }

  render() {
    const { scrollContenedor } = styles;
    const { content } = styles;
    const length = this.props.apuestas.length;

    switch (true) {
      case (length === 0):
      return (
        <View style={content}>
        <Spinner size="large" message="Obteniendo información desde el servidor" />
        </View>
      );

      case (length > 0):

      return (
        <View style={scrollContenedor}>
          <ListaResultados isApuesta={false} />
        </View>
      );

      default:
      return (
        <View style={content}>
          <Spinner size="large" message="Obteniendo información desde el servidor" />
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
  scrollContenedor: {
    backgroundColor: '#4d5b90',
    padding: 10,
    flex: 1
  },
};

const mapStateToProps = state => {
  return { apuestas: state.apuestas };
};

export default connect(mapStateToProps, actions)(Futbol);

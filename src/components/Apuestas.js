import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Encabezado, Spinner } from './lib';
import * as actions from '../actions';
import ListaResultados from './ListaResultados';

class Apuestas extends Component {
    state = { data: [] }
      componentWillMount() {
        this.props.getData([]);
        this.obtenerApuestas();
      }
      //==========================================================================================
      //   Consultar la base de datos y obtener los eventos cuyo valor terminado sea false
      //==========================================================================================
        obtenerApuestas() {
          const datos = [];
          const resultados = [];
            firebase.database().ref().on('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                childSnapshot.forEach((secondChildSnapshot) => {
                  secondChildSnapshot.forEach((thirdChildSnapshot) => {
                    const childData = thirdChildSnapshot.val();
                      //Habilitar esta opcion si se desean mostrar solo las fechas futuras.
                      // let hoy = new Date();
                      // let fechaAno = childData.fecha.slice(0,4);
                      // let fechaMes = childData.fecha.slice(5,7);
                      // let fechaDia = childData.fecha.slice(8,10 );
                      // let fecha = new Date(fechaAno, fechaMes, fechaDia);
                      // if (fecha >= hoy){
                      //   datos.push(childData);
                      // }
                      datos.push(childData);
                    });
                  });
              });
              datos.map((elemento) => {
                //Guardar solo los elementos que posean el valor terminado como verdadero
                if (elemento.terminado === false) {
                  //Agregar el elemento al array de elementos
                  resultados.push(elemento);
                }
              });
                //Enviar el arreglo de resultados al reducer apuestas.
                //Se envía de manera invertida para que la información del país se posicione
                //al inicio de la tabla al ser renderizada
                this.props.getData(resultados.reverse());
            });
            //Actualizar el estado de la variable data con el arreglo de resultados
            this.setState({ data: resultados });
        }

    render() {
        const { scrollContenedor, content, } = styles;
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
              <Encabezado tituloEncabezado="Próximos Eventos" />
              <ListaResultados isApuesta />
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
        flex: 1,
    },
};

const mapStateToProps = state => {
    return { apuestas: state.apuestas };
};

export default connect(mapStateToProps, actions)(Apuestas);

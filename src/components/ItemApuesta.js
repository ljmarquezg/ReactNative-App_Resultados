import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { CardSection, Input, Boton, Spinner } from './lib';

import * as actions from '../actions';


class ItemLista extends Component {
  state = { local: '', visitante: '', error: '', cargando: false, apostado: false, resultados: [] }

    //==================================================
    //     Actualización de estados del componente
    //==================================================
    componentWillMount() {
      //Asignar los valores del props obtenidos en la base de datos a una variable local
      this.state.apostado = this.props.apuestaInfo.apuesta;
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    //==================================================
    //          Actualizar Apuesta
    //==================================================
    actualizarApuesta() {
        //Asignar el email del usuario actual a la abriable email
        const email = firebase.auth().currentUser.email;
        const { //Apuesta,
                // terminado,
                // apuestalocal,
                // apuestavisitante,
                // equipolocal,
                // equipovisitante,
                deporte,
                // fecha,
                id,
                // scorelocal,
                // scorevisitante,
                // usuario,
                pais
               } = this.props.apuestaInfo;

        //Crear un objeto con los valores a actualizar
        const itemApuesta = {
          apuesta: true,
          apuestalocal: this.state.local,
          apuestavisitante: this.state.visitante,
          usuario: email,
        };
        //==================================================
        //          Actualizar la base de datos
        //==================================================
         firebase.database().ref().child(deporte).child(pais)
         .child(id)
           .update(itemApuesta, (error) => {
               console.log(error);
                if (error) {
                    this.setState({ error: error });
                } else {
                    this.setState({ cargando: false, apostado: true });
                }
           });
        }

    enviarFormulario() {
        const { local, visitante } = this.state;
        if (local === '' || visitante === '') {
            this.setState({ error: 'Introduzca la información correcta' });
        } else {
            this.setState({ cargando: true });
            this.actualizarApuesta();
        }
    }

    mostrarAccion() {
        console.log(this.state.apostado);
        if (this.state.cargando) {
            return <Spinner size="large" />;
        }
        if (this.state.apostado === false) {
            return (
                <View style={styles.botonView}>
                    <Boton
                         texto="Apostar"
                          onPress={() => this.enviarFormulario()}
                         touchableStyle={{ backgroundColor: 'green', alignItems: 'center' }}
                         textStyle={{ color: 'white', fontSize: 20 }}
                    />
                </View>
            );
        }

          return (
            <View style={styles.botonView} >
                    <Icon name='check-circle' size={35} color="green" />
            </View>
          );
      }

      validarCampos(texto) {
          let newText = '';
              const numbers = '0123456789';
              for (let i = 0; i < texto.length; i++) {
                  if (numbers.indexOf(texto[i]) > -1) {
                      newText += texto[i];
                      this.setState({ error: '' });
                  } else {
                        // your call back function
                      this.setState({ error: 'Solo se aceptan números' });
                  }
              }
              return newText;
      }

    mostrarDescripcion() {
        const { inputStyle, error, disabled } = styles;
        const { expandir, apuestaInfo } = this.props;
        if (expandir) {
            return (
                 <View>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ textAlign: 'center', flex: 1, marginTop: 5 }}>
                           Introduce el resultado final del partido
                        </Text>
                        </View>

                    <View style={{ flexDirection: 'row' }}>
                    <Input
                        keyboardType='numeric'
                        etiqueta=''
                        value={
                            !apuestaInfo.apuestalocal 
                            ? this.state.local
                            : apuestaInfo.apuestalocal
                        }
                        onChangeText={
                            (local) => this.setState({ local: this.validarCampos(local) })
                        }
                        secureTextEntry={false}
                        autoCorrect={false}
                        addEtiquetaStyle={{ 
                            backgroundColor: 'transparent', 
                            fontFamily: 'Bebas Neue', 
                            fontSize: 25,
                            color: '#FFF' 
                        }}
                          addInputStyle={
                              this.state.apostado === true
                              ? [inputStyle, disabled]
                              : inputStyle
                            }
                        editable={this.state.apostado}
                    />

                    <Input
                        keyboardType='numeric'
                        etiqueta=''
                        value={
                            !apuestaInfo.apuestavisitante 
                            ? this.state.visitante 
                            : apuestaInfo.apuestavisitante
                        }
                        onChangeText={
                            (visitante) => 
                            this.setState({ visitante: this.validarCampos(visitante) })
                        }
                        secureTextEntry={false}
                        autoCorrect={false}
                        addEtiquetaStyle={{
                            backgroundColor: 'transparent',
                            fontFamily: 'Bebas Neue', 
                            fontSize: 0, 
                            color: '#FFF' 
                        }}
                        addInputStyle={
                            this.state.apostado === true 
                            ? [inputStyle, disabled] 
                            : inputStyle
                        }
                        editable={this.state.apostado}
                    />
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        {this.mostrarAccion()}
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={error}>{this.state.error}</Text>
                    </View>
                 </View>
            );
        }
    }

    render() {
      const { styleLocal, score, styleVisitante, apostar } = styles;
      const { apuestaInfo, rowStyle, itemSeleccionado } = this.props;
        return (
            <TouchableWithoutFeedback
                onPress={() => itemSeleccionado(apuestaInfo.id)}
            >
            <View style={this.props.rowStyle}>
                <CardSection addStyle={rowStyle}>
                    <Text style={styleLocal}> 
                        {apuestaInfo.equipolocal}
                    </Text>
                    <Text style={score}>{
                        apuestaInfo.scorelocal} - {apuestaInfo.scorevisitante}
                    </Text>
                    <Text style={styleVisitante}> 
                        {apuestaInfo.equipovisitante}
                    </Text>
                </CardSection>
                <View style={[apostar, rowStyle]}>
                    {this.mostrarDescripcion()}
                </View>
            </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    nombreStyle: {
        fontSize: 20,
        paddingLeft: 5
    },
    botonView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        marginTop: 0,
    },
    inputStyle: {
        fontFamily: 'Bebas Neue',
        textAlign: 'center',
        backgroundColor: 'orange',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        elevation: 3,
    },
    styleLocal: {
        textAlign: 'left',
        fontFamily: 'Orkney',
        flex: 1,
        marginTop: 7,
    },
    score: {
        textAlign: 'center',
        fontFamily: 'Orkney',
        flex: 1,
        marginTop: 7,
    },
    styleVisitante: {
        textAlign: 'right',
        fontFamily: 'Orkney',
        flex: 1,
        marginTop: 7,
    },
    disabled: {
      fontFamily: 'Bebas Neue',
      textAlign: 'center',
      backgroundColor: '#eee',
      borderColor: '#aaa',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 0,
      elevation: 3,
    },
    apostar: {
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 5,
        marginRight: 5,
    },
    error: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        padding: 3,
        color: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
};

const mapStateToProps = (state, ownProps) => {
    const expandir = state.itemSeleccionado === ownProps.apuestaInfo.id;
    return { expandir };
};

export default connect(mapStateToProps, actions)(ItemLista);

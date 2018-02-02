import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { Card, CardSection, Boton, Spinner } from './lib';


class Perfil extends Component {
    state = { totalApuestas: 0, email: '', cargando: false, error: '', actualizado: null };

    componentWillMount() {
        //Reiniciar los estados de las variables
        this.setState({ totalApuestas: 0, cargando: false, error: '', actualizado: null });
        this.state.email = firebase.auth().currentUser.email;
        this.contarApuestas();
    }
    //=======================================================================
    //      Contar las apuestas que ha realizado el usuario
    //=======================================================================
    contarApuestas() {
        const datos = [];
        const resultados = [];
        firebase.database().ref().once('value', (snapshot) => {
            resultados.length = 0;
            snapshot.forEach((childSnapshot) => {
                childSnapshot.forEach((secondChildSnapshot) => {
                secondChildSnapshot.forEach((thirdChildSnapshot) => {
                    const childData = thirdChildSnapshot.val();
                    datos.push(childData);
                    });
                });
            });
            datos.map((elemento) => {
                //Guardar solo los elementos que tengan asociado el mail del usuario
                if (elemento.usuario === this.state.email) {
                    //Agregar el elemento al array de elementos
                    resultados.push(elemento);
                }
            });
                /*Actualizar el estado de la variable total apuestas con la
                cantidad de elementos dentro del arreglo resultados */
                 this.setState({ totalApuestas: resultados.length });
            });
        }
        //==================================================================
        //  Reiniciar los valores de la base de datos a su estado original
        //==================================================================
        reiniciarDB() {
            firebase.database().ref()
            //Enviar el reducer database como parametro a actualizar
              .set(this.props.database, (error) => {
                   if (error) {
                       this.setState({ error: error });
                   } else {
                       this.setState({ cargando: false, actualizado: true });
                       this.contarApuestas();
                   }
              });
        }
        //==================================================================
        //  Estado del boton Reiniciar Base de datos
        //==================================================================
        mostrarBoton() {
           switch (true) {
               case (this.state.cargando):
               return <Spinner size={'large'} message={'Reiniciando Base de datos'} />;

                case (!this.state.cargando && this.state.actualizado):
                return (
                    <View style={{ alignItems: 'center' }}>
                         <Icon name="check" size={60} color={'#fff'} />
                    </View>
                );
                default:
                return (
                    <View>
                        <Boton 
                            texto="Reiniciar Base de datos" 
                            onPress={() => this.reiniciarDB()} 
                            touchableStyle={{ 
                                backgroundColor: 'white', 
                                marginTop: 10,
                                 marginBottom: 10 
                                }}
                            textStyle={{ color: '#4d5b90', fontSize: 24 }}
                        />
                    </View>
                );
           }
        }

        render() { 
            const { 
                content, 
                header, 
                pictureHolder, 
                picture, 
                avatar, 
                textUsername, 
                textLastname,
                informacion, 
                textInformacioj, 
                label,
                viewCard,
                error
             } = styles;

            const { totalApuestas, email } = this.state;
    return (
        <ScrollView>
            <View style={content}>
            <View style={header}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={error}>{this.state.error}</Text>
                </View>
                <View style={pictureHolder}>
                    <View style={picture}>
                        <Image 
                            source={require('../img/avatar.jpg')} 
                            style={avatar}
                        />
                    </View>
                </View>
                <Text style={textUsername}>Luis José</Text>
                <Text style={textLastname}>Márquez González</Text>
                <View style={{ justifyContent: 'center', }}>
                    {this.mostrarBoton()}
                </View>
            </View>
            <View style={informacion}>
                <Card>
                    <CardSection> 
                        <View style={viewCard}> 
                            <Text style={label}>Total apuestas:</Text>
                            <Text style={textInformacioj}>{totalApuestas}</Text>
                        </View>
                    </CardSection>
                    <CardSection >
                        <View style={viewCard}>
                            <Text style={label}>Email: </Text>
                            <Text style={textInformacioj}> {email} </Text>                      
                        </View>
                    </CardSection>
                </Card>
            </View>
            </View>
        </ScrollView>
    );
}
}

const styles = {
    content: {
        backgroundColor: '#ddd',
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
   },
   header: {
    backgroundColor: '#4d5b90',
    height: 350,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
   },
      pictureHolder: {
        flexDirection: 'row'
      },
    picture: {
        width: 150, 
        height: 150,
        borderColor: '#fff',
        borderWidth: 3,
        borderRadius: 200,
        backgroundColor: '#ddd',
        overflow: 'hidden',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: '120%', 
        height: '120%',
        alignItems: 'center',
    },
    viewCard: {
        padding: 15,
    },
    label: {
        color: '#4d5b90',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5
    },
    informacion: {
        width: '105%',
    },
    textUsername: {
        fontSize: 25,
        fontWeight: '600',
        color: '#fff',
        marginTop: 10,
    },
    textLastname: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
        marginTop: 10,
    },
    textInformacioj: {
        fontSize: 20,
        marginLeft: 10
    },
    error: {
        marginTop: 5,
        marginBottom: 5,
        padding: 3,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
  };

  const mapStateToProps = state => {
    return { database: state.database };
    };

export default connect(mapStateToProps)(Perfil);

import React, { Component } from 'react';
import { Text, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './lib';
import * as actions from '../actions';


class ItemLista extends Component {
  state = { scorelocal: '', scorevisitante: '', error: '', cargando: false }
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    render() {
      const { styleLocal, score, styleVisitante } = styles;
      const { apuestaInfo } = this.props;
        return (
            <View style={this.props.rowStyle}>
                <CardSection addStyle={this.props.rowStyle}>
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
            </View>
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

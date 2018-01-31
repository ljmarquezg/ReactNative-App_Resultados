import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ItemLista from './ItemLista';
import { ItemImagen } from './ItemImagen';
import ItemApuesta from './ItemApuesta';

class ListaResultados extends Component {
  state = {
    scorelocal: '',
    scorevisitante: '',
    cargando: false,
    error: '',
  }

  componentWillMount() {
    const source = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = source.cloneWithRows(this.props.apuestas);
  }

  //============================================================================
  //        Mostrar resultados en pantallas futbol y baloncesto
  //============================================================================
  mostrarResultados(rowData, sectionID, rowID) {
    if (Object.keys(rowData)[0] === 'descripcion') {
      return (<ItemImagen rowData={rowData} rowStyle={{ backgroundColor: '#ddd' }} />);
    }
    if (rowID % 2 === 0) {
      return (<ItemLista apuestaInfo={rowData} rowStyle={{ backgroundColor: '#fefefe' }} />);
    }
    return (<ItemLista apuestaInfo={rowData} rowStyle={{ backgroundColor: '#eee' }} />);
  }

  //============================================================================
  //        Mostrar resultados en pantalla apuestas
  //============================================================================
  mostrarApuestas(rowData, sectionID, rowID) {
    if (rowID % 2 === 0) {
      return (<ItemApuesta apuestaInfo={rowData} rowStyle={{ backgroundColor: '#fefefe' }} />);
    }
    return (<ItemApuesta apuestaInfo={rowData} rowStyle={{ backgroundColor: '#eee' }} />);
  }

  render() {
    switch (this.props.isApuesta) {
      case true:
      return (
        <ListView
        enableEmptySections
        removeClippedSubviews={false}
        dataSource={this.dataSource}
        renderRow={this.mostrarApuestas}
        />
      );

      default:
      return (
        <ListView
        enableEmptySections
        removeClippedSubviews={false}
        dataSource={this.dataSource}
        renderRow={this.mostrarResultados}
        />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { apuestas: state.apuestas };
};

export default connect(mapStateToProps)(ListaResultados);

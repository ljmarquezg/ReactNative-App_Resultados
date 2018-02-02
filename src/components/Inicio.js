import React, { Component } from 'react';
import BarraInferior from './lib/BarraInferior';

class Inicio extends Component {
    //Especificar como props que la ventana principal es Inicio
    render() {
        return (
            <BarraInferior esInicio />
        );
    }
}

export default Inicio;

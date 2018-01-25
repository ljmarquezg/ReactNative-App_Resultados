import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
//import { View } from 'react-native';
import Inicio from './components/Inicio';
import { BarraInferior } from './components/lib/';

const RouterComponent = (props) => {
    //const { content, background } = style;
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="inicio">
                    <Scene
                        key="Inicio"
                        component={Inicio}
                        title="Inicio"
                        initial
                        init
                        rightTitle="Cerrar Sesion"
                        onRight={() => props.cerrarSesion()}
                    />
                    <Scene
                        key="Football"
                        component={BarraInferior}
                        title="Football"
                        init
                        rightTitle="Cerrar Sesion"
                        onRight={() => props.cerrarSesion()}
                    />
            </Scene>
        </Router>
                      <BarraInferior
                      home='home'
                      football='soccer'
                      basketball='dribbble'
                      apuesta='cash-usd'
                    />
    );
};

export default RouterComponent;

/*

<Scene key="data">
                    <Scene
                        key="Football"
                        Component={Inicio}
                        title="Football"
                        rightTitle="Cerrar Sesión"
                        onRight={() => this.props.cerrarSesion()}
                    />

                    <Scene
                        key="Basketball"
                        Component={Inicio}
                        title="Basketball"
                        rightTitle="Cerrar Sesión"
                        onRight={() => this.props.cerrarSesion()}
                    />

                    <Scene
                        key="Apuestas"
                        Component={Inicio}
                        title="Apuestas"
                        rightTitle="Cerrar Sesión"
                        onRight={() => this.props.cerrarSesion()}
                    />
                </Scene>
                */

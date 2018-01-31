import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Inicio from './components/Inicio';
import Apuestas from './components/Apuestas';
import Baloncesto from './components/Baloncesto';
import Futbol from './components/Futbol';
import Perfil from './components/Perfil';

const RouterComponent = (props) => {
    //const { content, background } = style;
    return (
        <Router
            sceneStyle={{ paddingTop: 60, marginBottom: 0 }}
            navigationBarStyle={{
                height: 60, 
                backgroundColor: '#3b4167', 
                elevation: 0, 
                shadowColor: 'gray', 
                shadowOffset: { width: 0, height: 1 }, 
                shadowOpacity: 0.5 
            }}
            titleStyle={{ fontFamily: 'Orkney', color: '#fff' }}
            rightButtonTextStyle={{ 
                fontFamily: 'Bebas Neue', 
                fontSize: 20, 
                lineHeight: 22, 
                color: '#eece54' 
            }}
        >
            <Scene key="inicio" >
                        <Scene
                            key="Inicio"
                            component={Inicio}
                            title="Inicio"
                            initial
                            init
                            rightTitle="Cerrar Sesión"
                            onRight={() => props.cerrarSesion()}
                        />
                    <Scene
                        key="Futbol"
                        component={Futbol}
                        title="Fútbol"
                        init
                        rightTitle="Cerrar Sesion"
                        onRight={() => props.cerrarSesion()}
                    />

                    <Scene
                        key="Baloncesto"
                        component={Baloncesto}
                        title="Baloncesto"
                        init
                        rightTitle="Cerrar Sesion"
                        onRight={() => props.cerrarSesion()}
                    />

                    <Scene
                        key="Apuestas"
                        component={Apuestas}
                        title="Apuestas"
                        init
                        rightTitle="Cerrar Sesion"
                        onRight={() => props.cerrarSesion()}
                    />

                    <Scene
                        key="Perfil"
                        component={Perfil}
                        title="Perfíl"
                        init
                        rightTitle="Cerrar Sesion"
                        onRight={() => props.cerrarSesion()}
                    />
            </Scene>
        </Router>
    );
};

export default RouterComponent;

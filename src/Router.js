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
                <Scene key="Inicio" >
                    <Scene
                        key="home"
                        component={Inicio}
                        title="Inicio"
                        initial
                        init
                        rightTitle="Cerrar Sesión"
                        onRight={() => props.cerrarSesion()}
                    />
                </Scene>

                <Scene key="Futbol">
                    <Scene
                        key="football"
                        component={Futbol}
                        title="Fútbol"
                        init
                        rightTitle="Cerrar Sesion"
                        onRight={() => props.cerrarSesion()}
                    />
                </Scene>

                <Scene key="Baloncesto">
                    <Scene
                        key="Basketball"
                        component={Baloncesto}
                        title="Baloncesto"
                        init
                        rightTitle="Cerrar Sesion"
                        onRight={() => props.cerrarSesion()}
                    />
                </Scene>

                <Scene key="Apuestas">
                    <Scene 
                        key="Bets"
                        component={Apuestas}
                        title="Apuestas"
                        init
                        rightTitle="Cerrar Sesion"
                        onRight={() => props.cerrarSesion()}
                    />
                </Scene>

                <Scene key="Perfil">
                    <Scene 
                        key="Profile"
                        component={Perfil}
                        title="Perfíl"
                        init
                        rightTitle="Cerrar Sesion"
                        onRight={() => props.cerrarSesion()}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;

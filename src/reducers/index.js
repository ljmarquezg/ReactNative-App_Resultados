import { combineReducers } from 'redux';
import firebaseReducer from './firebaseReducer';
import itemSeleccionadoReducer from './itemSeleccionadoReducer';
import pestanaReducers from './pestanaReducers';
import datos from './datos';

export default combineReducers({
    apuestas: firebaseReducer,
    itemSeleccionado: itemSeleccionadoReducer,
    pestanaActual: pestanaReducers,
    database: datos,
});

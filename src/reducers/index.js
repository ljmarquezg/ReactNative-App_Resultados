import { combineReducers } from 'redux';
import firebaseReducer from './firebaseReducer';
import itemSeleccionadoReducer from './itemSeleccionadoReducer';

export default combineReducers({
    apuestas: firebaseReducer,
    itemSeleccionado: itemSeleccionadoReducer,
});

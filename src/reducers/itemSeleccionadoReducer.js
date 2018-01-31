export default (state = null, action) => {
  switch (action.type) {
    case 'itemSeleccionado':
      return action.payload;

    default:
      return state;
  }
};

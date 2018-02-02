export default (state = 1, action) => {
    switch (action.type) {
        case 'pestana':
            return action.payload;
        default:
            return state;
    }
};

const initialState = {
    modalIsOpen: false,
    username: '',
    points: ''
};


const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "TOGGLE_LOGIN_MODAL":
    // newState so as not to modify state
            return Object.assign({}, state, {modalIsOpen: !state.modalIsOpen });
        case "TOGGLE_CLOSE":
            return Object.assign({}, state, {modalIsOpen: false});
        case "SAVE_REGISTER":
            return Object.assign({}, state, {modalIsOpen: false, username: action.username, points: action.points });
        case "SAVE_LOGIN":
            return Object.assign({}, state, {modalIsOpen: false, username: action.username, points: action.points });
        case "LOGOUT":
            return Object.assign({}, state, {username: '', points: ''});
        default:
            return state;
    }
};


export default rootReducer;

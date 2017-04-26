import { GET_ACTIV_USER, GO_OUT } from '../actions';

const reducer = (state = {}, action = {}) => {
    switch (action.type) {
        case GET_ACTIV_USER:
            const activeUser = action.activeUser;
            return Object.assign({}, state, activeUser);

        case GO_OUT:
            return state = {};    
            
        default:
            return state;
    }
}

export default reducer;
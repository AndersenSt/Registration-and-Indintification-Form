import { SHOW_ERROR, HIDE_ERROR } from '../actions';

const reducer = (state = false, action = {}) => {
    switch (action.type) {
        case SHOW_ERROR:
            return state = true;

        case HIDE_ERROR:
            return state = false;
            
        default:
            return state;
    }
}

export default reducer;
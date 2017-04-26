import { REGISTRATE_USER } from '../actions';

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case REGISTRATE_USER:
            const user = {
                name: action.name,
                surname: action.surname,
                email: action.email,
                password: action.password
            };
            return [...state, user];
        default:
            return state;
    }
}

export default reducer;
import { GET_ACTIV_USER, INDENTIFICATE_USER, SHOW_ERROR, HIDE_ERROR } from '../actions';
import { hashHistory } from 'react-router';

const middleware = store => next => action => {
    switch (action.type) {
        case INDENTIFICATE_USER:
            const users = store.getState().users;
            const index = users.findIndex(elem => {
                return elem.email === action.email && elem.password === action.password;
            });
            const activeUser = users[index];
            if (activeUser) {
                store.dispatch({
                    type: GET_ACTIV_USER,
                    activeUser
                });
                store.dispatch({
                    type: HIDE_ERROR
                });
                hashHistory.push('user-page');
            } else {
                store.dispatch({
                    type: SHOW_ERROR
                });
            }

        default: return next({ ...action });
    }
}

export default middleware;
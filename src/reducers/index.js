import { combineReducers } from 'redux';

import { default as users } from './users';
import { default as activeUser } from './activeUser';
import { default as error } from './error';

const reducer = combineReducers({
   users,
   activeUser,
   error
});

export default reducer;
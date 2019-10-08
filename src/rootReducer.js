import { combineReducers } from 'redux';
import users from './users/reducers';
import auth from './auth/reducers';

export default combineReducers({
    auth,
    users
});
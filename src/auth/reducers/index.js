import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_INVALID } from '../constants';
const authInfo = JSON.parse(localStorage.getItem('authInfo'));
const initialState = authInfo || {
    token: null,
    auth: false
}
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            const newState = {
                ...state,
                username: action.payload.username,
                auth: action.payload.auth
            };
            localStorage.setItem('authInfo', JSON.stringify(newState));
            return newState;
        case AUTH_LOGOUT:
            console.log('logout action');
            localStorage.removeItem('authInfo');
            return {
                ...state,
                token: null,
                auth: false
            };
        case AUTH_INVALID:
            return {
                ...state,
                invalid: action.payload.invalid
            };
        default:
            return state;
    }

}

export default AuthReducer;
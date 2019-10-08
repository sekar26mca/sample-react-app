import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_INVALID } from '../constants';

export const LoginAction = (dispatch, { username, password }) => {

  fetch(`login.json`).then(response => {
    return response.json();
  }).then(data => {
    
    if (data.username === username && data.password === password) {
      dispatch({
        type: AUTH_LOGIN,
        payload: {
          username: data.username,
          auth: true,
          invalid: false
        }
      });
    } else {
      console.log('Invalid username and password');
      dispatch({
        type: AUTH_INVALID,
        payload: {
          invalid: true
        }
      });
    }
  });
};

export const LogoutAction = () => {

  return ({ type: AUTH_LOGOUT });
};


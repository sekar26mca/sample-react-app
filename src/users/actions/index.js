
import { FETCH_USER } from '../constants';


export const fetchUsersAction = (dispatch) => {
  fetch('users.json').then(response => {
    return response.json();
  }).then(data => {
    console.log(data)
    const users = [...data.user];
    dispatch({
      type: FETCH_USER,
      payload: {
        users
      }
    });
  });
};
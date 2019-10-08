import {  FETCH_USER } from '../constants';

export default function userReducer(state = [], action) {
  switch (action.type) {
    case FETCH_USER:
        return [...action.payload.users]; 
    default:
      return state;
  }
}
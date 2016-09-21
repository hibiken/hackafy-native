import axios from 'axios';
import {
  AUTH_REQUEST_START,
  AUTH_REQUEST_SUCCESS,
  AUTH_REQUEST_FAILURE
} from '../actionTypes';

export const loginWithFacebook = ({facebookId, username}) => (dispatch) => {
  dispatch({
    type: AUTH_REQUEST_START,
  });
  return axios({
    method: 'POST',
    url: 'http://localhost:5000/api/users/facebook/login',
    data: {
      facebookId,
      username,
    }
  })
  .then(({data}) => {
    console.log('successfully logged in', data);
    dispatch({
      type: AUTH_REQUEST_SUCCESS,
      authToken: data.user.authenticationToken,
    });
    // TODO: set currentUser.
  }, (error) => {
    console.log('Ooops failed login', error);
    dispatch({
      type: AUTH_REQUEST_FAILURE,
    }) // TODO: display error message
  });
}

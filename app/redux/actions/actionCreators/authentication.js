import axios from 'axios';
import {
  AUTH_REQUEST_START,
  AUTH_REQUEST_SUCCESS,
  AUTH_REQUEST_FAILURE,
  SET_CURRENT_USER,
} from '../actionTypes';
import { getAccessToken, authWithToken } from '~/api/auth';

export const handleAuthWithFirebase = () => (dispatch) => {
  dispatch({type: AUTH_REQUEST_START})
  return getAccessToken()
    .then((accessToken) => authWithToken(accessToken))
    .catch(() => console.warn('Error auth with firebase', error));
}

export const onAuthChange = (user) => (dispatch) => {
  if (!user) {
    dispatch({type: AUTH_REQUEST_FAILURE})
  } else {
    const userData = user.providerData[0];
    return axios({
      method: 'POST',
      url: 'http://localhost:5000/api/users/facebook/login',
      data: {
        facebookId: userData.uid,
        username: userData.displayName,
      }
    })
    .then(({data}) => {
      console.log('successfully logged in', data);
      dispatch({
        type: AUTH_REQUEST_SUCCESS,
        authToken: data.user.authenticationToken,
        payload: data.user,
      });
      // TODO: set currentUser.
    }, (error) => {
      console.log('Ooops failed login', error);
      dispatch({
        type: AUTH_REQUEST_FAILURE,
      }) // TODO: display error message
    });
  }
}

import axios from 'axios';
import {
  FETCH_NOTIFICATIONS_START,
  FETCH_NOTIFICATIONS_SUCCESS,
  FETCH_NOTIFICATIONS_FAILURE,
} from '~/redux/actions/actionTypes';
import { API_URL } from '~/config/constants';
import { getAuthToken } from '~/redux/store/rootReducer';

export const fetchNotifications = () => (dispatch, getState) => {
  dispatch({type: FETCH_NOTIFICATIONS_START});
  const authToken = getAuthToken(getState());

  return axios({
    method: 'get',
    url: `${API_URL}/users/notifications`,
    headers: {
      'Authorization': `Token ${authToken}`,
    },
  })
  .then(({data}) => {
    console.log('successfully fetched notifications', data);
    dispatch({
      type: FETCH_NOTIFICATIONS_SUCCESS,
      payload: data.notifications,
      pagination: data.meta,
    });
  }, (error) => {
    console.log('error', error);
    dispatch({
      type: FETCH_NOTIFICATIONS_FAILURE,
    });
  });
}

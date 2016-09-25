import axios from 'axios';
import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '~/redux/actions/actionTypes';
import { API_URL } from '~/config/constants';
import { getAuthToken } from '~/redux/store/rootReducer';

export const fetchPosts = () => (dispatch, getState) => {
  dispatch({type: FETCH_POSTS_START});
  const authToken = getAuthToken(getState());

  console.log('authToken', authToken)
  console.log('url', `${API_URL}/posts`)

  return axios({
    method: 'get',
    url: `${API_URL}/posts`,
    headers: {
      'Authorization': `Token ${authToken}`,
    },
  })
  .then(({data}) => {
    console.log('successfully fetched posts', data);
    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: data.posts,
    });
  }, (error) => {
    console.log('error', error);
    dispatch({
      type: FETCH_POSTS_FAILURE,
    });
  });
}

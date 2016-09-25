import axios from 'axios';
import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '~/redux/actions/actionTypes';
import { API_URL } from '~/config/constants';
import { getAuthToken, getPagination } from '~/redux/store/rootReducer';

export const fetchPosts = () => (dispatch, getState) => {
  dispatch({type: FETCH_POSTS_START});
  const authToken = getAuthToken(getState());
  const { nextPage } = getPagination(getState());
  const url = !!nextPage ? `${API_URL}/posts?page=${nextPage}` : `${API_URL}/posts`
  
  return axios({
    method: 'get',
    url,
    headers: {
      'Authorization': `Token ${authToken}`,
    },
  })
  .then(({data}) => {
    console.log('successfully fetched posts', data);
    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: data.posts,
      pagination: data.meta,
    });
  }, (error) => {
    console.log('error', error);
    dispatch({
      type: FETCH_POSTS_FAILURE,
    });
  });
}

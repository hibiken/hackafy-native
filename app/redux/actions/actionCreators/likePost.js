import axios from 'axios';
import { API_URL } from '~/config/constants';
import { getAuthToken } from '~/redux/store/rootReducer';
import { LIKE_POST, UNLIKE_POST } from '~/redux/actions/actionTypes';

export const likePost = (id) => (dispatch, getState) => {
  dispatch({
    type: LIKE_POST,
    id,
  });

  const authToken = getAuthToken(getState());
  return axios({
    method: 'post',
    url: `${API_URL}/posts/${id}/likes`,
    headers: {
      Authorization: `Token ${authToken}`,
    },
  })
  .then(() => {
    console.log('successfully liked post');
  }, (error) => {
    console.log('like post failure')
    dispatch({
      type: UNLIKE_POST,
      id,
    });
  })
};

export const unlikePost = (id) => (dispatch, getState) => {
  dispatch({
    type: UNLIKE_POST,
    id,
  });

  const authToken = getAuthToken(getState());
  return axios({
    method: 'delete',
    url: `${API_URL}/posts/${id}/likes`,
    headers: {
      Authorization: `Token ${authToken}`,
    },
  })
  .then(() => {
    console.log('successfully unliked post');
  }, (error) => {
    console.log('unlike post failure')
    dispatch({
      type: LIKE_POST,
      id,
    });
  })
}

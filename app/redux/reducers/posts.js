import { combineReducers } from 'redux';
import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  AUTH_REQUEST_SUCCESS,
  LIKE_POST,
  UNLIKE_POST,
} from '~/redux/actions/actionTypes';

const initialState = {
  allIds: [],
  byId: {},
  isFetching: false,
  pagination: {},
};

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case AUTH_REQUEST_SUCCESS:
      return action.payload.posts.map(post => post.id);
    case FETCH_POSTS_SUCCESS:
      return action.payload.reduce((nextState, post) => {
        if (nextState.indexOf(post.id) === -1) {
          nextState.push(post.id);
        }
        return nextState;
      }, [...state])
    default:
      return state;
  }
}

const post = (state = {}, action) => {
  switch (action.type) {
    case LIKE_POST:
      return {
        ...state,
        likesCount: state.likesCount + 1,
      }
    case UNLIKE_POST:
      return {
        ...state,
        likesCount: state.likesCount - 1,
      }
    default:
      return state;
  }
}

const byId = (state = initialState.byId, action) => {
  switch (action.type) {
    case AUTH_REQUEST_SUCCESS:
      return action.payload.posts.reduce((nextState, post) => {
        nextState[post.id] = post;
        return nextState;
      }, {});
    case FETCH_POSTS_SUCCESS:
      return action.payload.reduce((nextState, post) => {
        nextState[post.id] = post;
        return nextState;
      }, {...state})
    case LIKE_POST:
    case UNLIKE_POST:
      return {
        ...state,
        [action.id]: post(state[action.id], action)
      }
    default:
      return state;
  }
}

const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case FETCH_POSTS_START:
      return true;
    case FETCH_POSTS_SUCCESS:
    case FETCH_POSTS_FAILURE:
      return false;
    default:
      return state;
  }
}

const pagination = (state = initialState.pagination, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.pagination;
    default:
      return state;
  }
}

export default combineReducers({
  allIds,
  byId,
  isFetching,
  pagination,
});

export const getPostByIds = (state, ids = []) => {
  return ids.map(id => state.byId[id]);
}

export const getAllPosts = (state) => {
  const { allIds, byId } = state;
  return allIds.map(id => byId[id]);
}

export const getPagination = (state) => state.pagination;

export const getIsFetching = (state) => state.isFetching;

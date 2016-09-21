import { combineReducers } from 'redux';
import {
  AUTH_REQUEST_SUCCESS,
} from '~/redux/actions/actionTypes';

const initialState = {
  allIds: [],
  byId: {},
  isFetching: false,
};

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case AUTH_REQUEST_SUCCESS:
      return action.payload.posts.map(post => post.id);
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
    default:
      return state;
  }
}

const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  allIds,
  byId,
  isFetching,
});

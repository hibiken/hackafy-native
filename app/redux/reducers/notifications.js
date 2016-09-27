import { combineReducers } from 'redux';
import {
  FETCH_NOTIFICATIONS_START,
  FETCH_NOTIFICATIONS_SUCCESS,
  FETCH_NOTIFICATIONS_FAILURE,
} from '~/redux/actions/actionTypes';

const initialState = {
  allIds: [],
  byId: {},
  isFetching: false,
  pagination: {},
};

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return action.payload.reduce((nextState, notification) => {
        if (nextState.indexOf(notification.id) === -1) {
          nextState.push(notification.id);
        }
        return nextState;
      }, [...state])
    default:
      return state;
  }
}

const byId = (state = initialState.byId, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return action.payload.reduce((nextState, notification) => {
        nextState[notification.id] = notification;
        return nextState;
      }, {...state})
    default:
      return state;
  }
}

const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_START:
      return true;
    case FETCH_NOTIFICATIONS_SUCCESS:
    case FETCH_NOTIFICATIONS_FAILURE:
      return false;
    default:
      return state;
  }
}

const pagination = (state = initialState.pagination, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return action.pagination;
    default:
      return state;
  }
}

const notifications = combineReducers({
  allIds,
  byId,
  isFetching,
  pagination,
});

export default notifications;

/*** Selectors ***/
export const getAllNotifications = (state) => {
  const { allIds, byId } = state;
  return allIds.map(id => byId[id]);
}

export const getPagination = (state) => state.pagination;

export const getIsFetching = (state) => state.isFetching;

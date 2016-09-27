import { combineReducers } from 'redux';
import authentication, * as fromAuth from '../reducers/authentication';
import currentUser, * as fromCurrentUser from '../reducers/currentUser';
import activeFooterTab, * as fromActiveFooterTab from '../reducers/activeFooterTab';
import posts, * as fromPosts from '../reducers/posts';
import notifications, * as fromNotifications from '../reducers/notifications';
import { LOG_OUT } from '~/redux/actions/actionTypes';

const appReducer = combineReducers({
  authentication,
  currentUser,
  activeFooterTab,
  posts,
  notifications,
});

const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) {
    state = undefined;
  }

  return appReducer(state, action);
}

/*** Authentication ***/
export const getIsAuthenticating = (state) => {
  return fromAuth.getIsAuthenticating(state.authentication);
};

export const getAuthToken = (state) => {
  return fromAuth.getAuthToken(state.authentication);
};

export const getIsAuthed = (state) => {
  return fromAuth.getIsAuthed(state.authentication);
};

/*** currentUser ***/
export const getCurrentUser = (state) => {
  return fromCurrentUser.getCurrentUser(state.currentUser);
};

export const getCurrentUserPostIds = (state) => {
  return fromCurrentUser.getPostIds(state.currentUser);
};

export const getCurrentUserFollowerIds = (state) => {
  return fromCurrentUser.getFollowerIds(state.currentUser);
};

export const getCurrentUserFollowingIds = (state) => {
  return fromCurrentUser.getFollowingIds(state.currentUser);
};

export const getCurrentUsersPosts = (state) => {
  const postIds = fromCurrentUser.getPostIds(state.currentUser);
  return fromPosts.getPostByIds(state.posts, postIds);
};

export const getLikedPostIds = (state) => {
  return fromCurrentUser.getLikedPostIds(state.currentUser);
}

/*** ActiveFooterTab ***/
export const getActiveFooterTab = (state) => {
  return fromActiveFooterTab.getActiveFooterTab(state.activeFooterTab);
};

/*** Posts ***/
export const getAllPosts = (state) => {
  return fromPosts.getAllPosts(state.posts);
};

export const getIsFetchingPosts = (state) => {
  return fromPosts.getIsFetching(state.posts);
}

export const getPagination = (state) => {
  return fromPosts.getPagination(state.posts);
};

/*** NOtifications ***/
export const getAllNotifications = (state) => {
  return fromNotifications.getAllNotifications(state.notifications);
};

export const getNotificationsPagination = (state) => {
  return fromNotifications.getPagination(state.notifications);
};

export default rootReducer;

import { combineReducers } from 'redux';
import authentication, * as fromAuth from '../reducers/authentication';
import currentUser, * as fromCurrentUser from '../reducers/currentUser';
import activeFooterTab, * as fromActiveFooterTab from '../reducers/activeFooterTab';
import posts, * as fromPosts from '../reducers/posts';
import { LOG_OUT } from '~/redux/actions/actionTypes';

const appReducer = combineReducers({
  authentication,
  currentUser,
  activeFooterTab,
  posts,
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

/*** ActiveFooterTab ***/
export const getActiveFooterTab = (state) => {
  return fromActiveFooterTab.getActiveFooterTab(state.activeFooterTab);
};


export default rootReducer;

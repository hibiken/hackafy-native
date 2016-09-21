import { combineReducers } from 'redux';
import authentication, * as fromAuth from '../reducers/authentication';
import currentUser, * as fromCurrentUser from '../reducers/currentUser';
import activeFooterTab, * as fromActiveFooterTab from '../reducers/activeFooterTab';

const rootReducer = combineReducers({
  authentication,
  currentUser,
  activeFooterTab,
});

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

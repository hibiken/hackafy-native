import { combineReducers } from 'redux';
import authentication, * as fromAuth from '../reducers/authentication';

const rootReducer = combineReducers({
  authentication,
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


export default rootReducer;

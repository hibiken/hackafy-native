import {
  AUTH_REQUEST_START,
  AUTH_REQUEST_SUCCESS,
  AUTH_REQUEST_FAILURE
} from '~/redux/actions/actionTypes';

const initialState = {
  isAuthed: false,
  isAuthenticating: true,
  authToken: '',
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST_START:
      return {
        ...state,
        isAuthenticating: true,
      }
    case AUTH_REQUEST_SUCCESS:
      return {
        isAuthed: true,
        isAuthenticating: false,
        authToken: action.authToken,
      }
    case AUTH_REQUEST_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
      } // TODO: display error message
    default:
      return state;
  }
}

export const getIsAuthed = (state) => state.isAuthed;
export const getIsAuthenticating = (state) => state.isAuthenticating;
export const getAuthToken = (state) => state.authToken;

export default authentication;

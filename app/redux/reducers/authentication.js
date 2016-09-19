const initialState = {
  isAuthed: false,
  isAuthenticating: false,
  authToken: '',
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export const getIsAuthed = (state) => state.isAuthed;
export const getIsAuthenticating = (state) => state.isAuthenticating;
export const getAuthToken = (state) => state.authToken;

export default authentication;

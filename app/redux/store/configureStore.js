import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export const configureStore = (initialState = {}) => {
  const middleware = applyMiddleware(thunk);

  const store = createStore(
    rootReducer,
    initialState,
    middleware
  );

  return store;
}

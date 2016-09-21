import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import rootReducer from './rootReducer';

export const configureStore = (initialState = {}) => {
  const middleware = compose(
    applyMiddleware(thunk),
    devTools()
  );

  const store = createStore(
    rootReducer,
    initialState,
    middleware
  );

  return store;
}

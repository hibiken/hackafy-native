import React from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from './containers';
import { configureStore } from '~/redux/store/configureStore';

const store = configureStore();

const HackafyNative = (props) => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default HackafyNative;

import React, { PropTypes, Component } from 'react';
import { View } from 'react-native';
import { HackafyNavigator } from '~/containers';

class AppContainer extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <HackafyNavigator />
      </View>
    );
  }
}

export default AppContainer;

import React, { PropTypes, Component } from 'react';
import { View } from 'react-native';
import { HackafyNavigator } from '~/containers';
import { PreSplash } from '~/components';

class AppContainer extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {
          this.props.isAuthenticating === true
          ? <PreSplash />
          : <HackafyNavigator />
        }
      </View>
    );
  }
}

AppContainer.propTypes = {
  isAuthenticating: PropTypes.bool.isRequired,
};

AppContainer.defaultProps = {
  isAuthenticating: true,
};

export default AppContainer;

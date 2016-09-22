import React, { PropTypes, Component } from 'react';
import { Navigator } from 'react-native';
import { SplashContainer, FooterTabsContainer } from '~/containers';

class HackafyNavigator extends Component {
  renderScene = (route, navigator) => {
    if (this.props.isAuthed === false) {
      return <SplashContainer navigator={navigator} />
    }
    return <FooterTabsContainer navigator={navigator} />
  }

  configureScene = (route) => {

  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    );
  }
}

HackafyNavigator.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
};

export default HackafyNavigator;

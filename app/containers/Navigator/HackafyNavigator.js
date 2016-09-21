import React, { PropTypes, Component } from 'react';
import { Navigator } from 'react-native';
import { SplashContainer, FooterTabsContainer } from '~/containers';

class HackafyNavigator extends Component {
  renderScene = (route, navigator) => {
    return <FooterTabsContainer navigator={navigator} />
    //return <SplashContainer />
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

export default HackafyNavigator;

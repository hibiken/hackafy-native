import React, { PropTypes, Component } from 'react';
import { Navigator } from 'react-native';
import { SplashContainer, FooterTabsContainer, SettingsContainer } from '~/containers';

class HackafyNavigator extends Component {
  renderScene = (route, navigator) => {
    if (this.props.isAuthed === false) {
      return <SplashContainer navigator={navigator} />
    } else if (route.settings === true) {
      return <SettingsContainer navigator={navigator} />
    }
    return <FooterTabsContainer navigator={navigator} />
  }

  configureScene = (route) => {
    if (route.settings === true) {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{}}
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

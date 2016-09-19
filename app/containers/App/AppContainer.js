import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getIsAuthenticating } from '~/redux/store/rootReducer';
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

const mapStateToProps = (state) => ({
  isAuthenticating: getIsAuthenticating(state),
});

export default connect(
  mapStateToProps
)(AppContainer);

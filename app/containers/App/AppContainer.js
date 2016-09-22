import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getIsAuthenticating, getIsAuthed } from '~/redux/store/rootReducer';
import { View } from 'react-native';
import { HackafyNavigator } from '~/containers';
import { PreSplash } from '~/components';
import { firebaseAuth } from '~/config/constants';
import { onAuthChange } from '~/redux/actions';

class AppContainer extends Component {
  componentDidMount() {
    firebaseAuth.onAuthStateChanged((user) => {
      this.props.dispatch(onAuthChange(user));
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {
          this.props.isAuthenticating === true
          ? <PreSplash />
          : <HackafyNavigator isAuthed={this.props.isAuthed} />
        }
      </View>
    );
  }
}

AppContainer.propTypes = {
  isAuthenticating: PropTypes.bool.isRequired,
  isAuthed: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticating: getIsAuthenticating(state),
  isAuthed: getIsAuthed(state),
});

export default connect(
  mapStateToProps
)(AppContainer);

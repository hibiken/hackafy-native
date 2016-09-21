import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Splash } from '~/components';
import { loginWithFacebook } from '~/redux/actions';
import {
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

class SplashContainer extends Component {
  _responseInfoCallback = (error: ?Object, result: ?Object) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      console.log('Success fetching data: ', result);
      this.props.dispatch(loginWithFacebook({
        facebookId: result.id,
        username: result.name,
      }));
    }
  }

  handleLoginFisnished = (error, result) => {
    if (error) {
      console.log('Error in FB login', error);
    } else if (result.isCancelled === true) {
      console.log('Auth Cancelled');
    } else {
      console.log('Auth Success!!!');
      const infoRequest = new GraphRequest(
        '/me',
        null,
        this._responseInfoCallback,
      );
      new GraphRequestManager().addRequest(infoRequest).start();
    }
  }

  render() {
    return (
      <Splash onLoginFinished={this.handleLoginFisnished} />
    );
  }
}

export default connect()(SplashContainer);

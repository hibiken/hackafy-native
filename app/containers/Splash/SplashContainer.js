import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Splash } from '~/components';
import { handleAuthWithFirebase } from '~/redux/actions';

class SplashContainer extends Component {
  handleLoginFisnished = (error, result) => {
    if (error) {
      console.log('Error in FB login', error);
    } else if (result.isCancelled === true) {
      console.log('Auth Cancelled');
    } else {
      console.log('Auth Success!!!');
      this.props.dispatch(handleAuthWithFirebase());
    }
  }

  render() {
    return (
      <Splash onLoginFinished={this.handleLoginFisnished} />
    );
  }
}

export default connect()(SplashContainer);

import React, { PropTypes, Component } from 'react';
import { Splash } from '~/components';

class SplashContainer extends Component {
  handleLoginFisnished = (error, result) => {
    if (error) {
      console.log('Error in FB login', error);
    } else if (result.isCancelled === true) {
      console.log('Auth Cancelled');
    } else {
      console.log('Auth Success!!!', result);
    }
  }

  render() {
    return (
      <Splash onLoginFinished={this.handleLoginFisnished} />
    );
  }
}

export default SplashContainer;

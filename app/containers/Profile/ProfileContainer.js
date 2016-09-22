import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Profile } from '~/components';

class ProfileContainer extends Component {
  handleToSettings = () => {
    this.props.navigator.push({
      settings: true,
    });
  }

  render() {
    return (
      <Profile
        handleToSettings={this.handleToSettings}
      />
    );
  }
}
ProfileContainer.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default ProfileContainer;

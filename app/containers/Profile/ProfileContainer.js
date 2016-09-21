import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Profile } from '~/components';

const ProfileContainer = (props) => {
  return (
    <Profile />
  );
}
ProfileContainer.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default ProfileContainer;

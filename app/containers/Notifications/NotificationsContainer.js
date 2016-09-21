import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Notifications } from '~/components';

const NotificationsContainer = (props) => {
  return (
    <Notifications />
  );
}
NotificationsContainer.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default NotificationsContainer;

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Notifications } from '~/components';
import { fetchNotifications } from '~/redux/actions';
import { getAllNotifications } from '~/redux/store/rootReducer';

class NotificationsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchNotifications());
  }

  render() {
    console.log('props', this.props);
    return (
      <Notifications />
    );
  }
}

NotificationsContainer.propTypes = {
  navigator: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  notifications: getAllNotifications(state),
})

export default connect(
  mapStateToProps
)(NotificationsContainer);

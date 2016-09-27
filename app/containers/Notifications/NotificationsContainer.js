import React, { PropTypes, Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { Notifications, NotificationItem } from '~/components';
import { fetchNotifications } from '~/redux/actions';
import {
  getAllNotifications,
  getNotificationsPagination,
  getIsFetchingNotifications,
} from '~/redux/store/rootReducer';

class NotificationsContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.notifications),
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchNotifications());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notifications !== this.props.notifications) {
      this.setState({
        dataSource: this.ds.cloneWithRows(nextProps.notifications),
      });
    }
  }

  renderRow = (notification) => {
    return (
      <NotificationItem {...notification}/>
    );
  }

  fetchNextNotifications = () => {
    const { nextPage, currentPage, totalPages } = this.props.pagination;
    if (nextPage && currentPage < totalPages && !this.props.isFetching) {
      this.props.dispatch(fetchNotifications());
    }
  }

  render() {
    return (
      <Notifications
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        fetchNotifications={this.fetchNextNotifications}
      />
    );
  }
}

NotificationsContainer.propTypes = {
  navigator: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  notifications: getAllNotifications(state),
  pagination: getNotificationsPagination(state),
  isFetching: getIsFetchingNotifications(state),
})

export default connect(
  mapStateToProps
)(NotificationsContainer);

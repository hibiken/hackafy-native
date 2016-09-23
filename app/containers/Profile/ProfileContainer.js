import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Profile } from '~/components';
import {
  getCurrentUser,
  getCurrentUserFollowerIds,
  getCurrentUserFollowingIds,
  getCurrentUserPostIds,
 } from '~/redux/store/rootReducer';

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
        avatarURL={this.props.currentUser.avatarUrl}
        postIds={this.props.postIds}
        followerIds={this.props.followerIds}
        followingIds={this.props.followingIds}
      />
    );
  }
}
ProfileContainer.propTypes = {
  navigator: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  postIds: PropTypes.array.isRequired,
  followingIds: PropTypes.array.isRequired,
  followerIds: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state),
  postIds: getCurrentUserPostIds(state),
  followerIds: getCurrentUserFollowerIds(state),
  followingIds: getCurrentUserFollowingIds(state),
})

export default connect(
  mapStateToProps
)(ProfileContainer);

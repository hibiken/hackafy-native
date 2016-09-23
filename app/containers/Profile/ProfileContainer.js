import React, { PropTypes, Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { Profile, PhotoItem } from '~/components';
import {
  getCurrentUser,
  getCurrentUserFollowerIds,
  getCurrentUserFollowingIds,
  getCurrentUserPostIds,
  getCurrentUsersPosts,
 } from '~/redux/store/rootReducer';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.posts),
    }
  }

  renderRow = (post) => {
    return <PhotoItem photoUrl={post.photoUrl} />
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.posts !== this.props.posts) {
      this.setState({
        dataSource: this.ds.cloneWithRows(this.props.posts),
      });
    }
  }

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
        followerIds={this.props.followerIds}
        followingIds={this.props.followingIds}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        postsCount={this.props.posts.length}
      />
    );
  }
}
ProfileContainer.propTypes = {
  navigator: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  followingIds: PropTypes.array.isRequired,
  followerIds: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state),
  followerIds: getCurrentUserFollowerIds(state),
  followingIds: getCurrentUserFollowingIds(state),
  posts: getCurrentUsersPosts(state),
})

export default connect(
  mapStateToProps
)(ProfileContainer);

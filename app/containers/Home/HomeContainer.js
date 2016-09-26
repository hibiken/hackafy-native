import React, { PropTypes, Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { Home, GalleryItem } from '~/components';
import { fetchPosts, likePost, unlikePost } from '~/redux/actions';
import {
  getAllPosts,
  getPagination,
  getIsFetchingPosts,
  getLikedPostIds,
} from '~/redux/store/rootReducer';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.posts),
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.posts !== this.props.posts) {
      this.setState({
        dataSource: this.ds.cloneWithRows(nextProps.posts),
      });
    }
  }

  fetchNextPosts = () => {
    const { nextPage, currentPage, totalPages } = this.props.pagination;
    if (nextPage && currentPage < totalPages && !this.props.isFetching) {
      this.props.dispatch(fetchPosts());
    }
  }

  renderRow = (post) => {
    return (
      <GalleryItem
        photoUrl={post.photoUrl}
        caption={post.caption}
        avatarUrl={!!post.user && !!post.user.avatarUrl ? post.user.avatarUrl : ''}
        username={!!post.user ? post.user.username : ''}
        liked={this.props.likedPostIds.indexOf(post.id) >= 0}
        onLike={() => this.props.dispatch(likePost(post.id))}
        onUnlike={() => this.props.dispatch(unlikePost(post.id))}
        likesCount={post.likesCount}
        createdAt={post.createdAt}
      />
    );
  }

  render() {
    console.log('posts', this.props.posts);
    return (
      <Home
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        fetchPosts={this.fetchNextPosts}
      />
    );
  }
}
HomeContainer.propTypes = {
  navigator: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  likedPostIds: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  posts: getAllPosts(state),
  pagination: getPagination(state),
  isFetching: getIsFetchingPosts(state),
  likedPostIds: getLikedPostIds(state),
});

export default connect(
  mapStateToProps
)(HomeContainer);

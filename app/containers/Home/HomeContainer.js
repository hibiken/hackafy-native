import React, { PropTypes, Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { Home, GalleryItem } from '~/components';
import { fetchPosts } from '~/redux/actions';
import { getAllPosts } from '~/redux/store/rootReducer';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.posts),
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.posts !== this.props.posts) {
      this.setState({
        dataSource: this.ds.cloneWithRows(nextProps.posts),
      });
    }
  }

  renderRow = (post) => {
    return <GalleryItem photoUrl={post.photoUrl} caption={post.caption} />
  }

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    return (
      <Home dataSource={this.state.dataSource} renderRow={this.renderRow}/>
    );
  }
}
HomeContainer.propTypes = {
  navigator: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  posts: getAllPosts(state),
});

export default connect(
  mapStateToProps
)(HomeContainer);

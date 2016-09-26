import React, { PropTypes, Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { pluralize } from '~/utils/helpers';
import moment from 'moment';
import { colors, fontSizes } from '~/styles';
const { width } = Dimensions.get('window');

class GalleryItem extends Component {
  handleImagePress = (e) => {
    const now = new Date().getTime();
    const DOUBLE_PRESS_DELAY = 300;

    if (this.lastImagePress && (now - this.lastImagePress) < DOUBLE_PRESS_DELAY) {
      delete this.lastImagePress;
      this.handleImageDoublePress(e);
    }
    else {
      this.lastImagePress = now;
    }
  }

  handleImageDoublePress = (e) => {
    if (this.props.liked === false) {
      this.props.onLike();
    }
  }

  render() {
    const avatarSource = this.props.avatarUrl.length === 0
      ? require('../../images/default-avatar.jpg')
      : {uri: this.props.avatarUrl};

    return (
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Image source={avatarSource} resizeMode='cover' style={styles.avatar} />
          <Text style={styles.username}>{this.props.username}</Text>
        </View>
        <TouchableWithoutFeedback onPress={this.handleImagePress}>
          <Image source={{uri: this.props.photoUrl}} style={styles.image}/>
        </TouchableWithoutFeedback>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={this.props.liked === true ? this.props.onUnlike : this.props.onLike}>
            {this.props.liked === true
            ? <Icon name="ios-heart" size={30} color='#ed4956'/>
            : <Icon name="ios-heart-outline" size={30} color='#999'/>}
          </TouchableOpacity>
        </View>
        <View style={styles.commentsContainer}>
          <View style={styles.likesCountContainer}>
            <Icon name="ios-heart" size={14} color="#262626" />
            <Text style={styles.likesCountText}>
              {pluralize(this.props.likesCount, 'like', 'likes')}
            </Text>
          </View>
          <View style={styles.captionItem}>
            <Text style={styles.commentUsername}>{this.props.username}</Text>
            <Text>{this.props.caption}</Text>
          </View>
          <View style={styles.timestampContainer}>
            <Text style={styles.timestamp}>{moment(this.props.createdAt).fromNow().toUpperCase()}</Text>
          </View>
        </View>
      </View>
    );
  }
}

GalleryItem.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
  onUnlike: PropTypes.func.isRequired,
  likesCount: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
  avatar: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  username: {
    fontWeight: '600',
  },
  imageContainer: {
    backgroundColor: 'rgba(243, 106, 188, 0.3)',
  },
  image: {
    resizeMode: 'cover',
    width: width,
    height: width, // FIXME: full width and do not crop the image!
  },
  iconsContainer: {
    flexDirection: 'row',
    margin: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
  },
  commentsContainer: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 12,
    marginBottom: 10,
  },
  likesCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  likesCountText: {
    marginLeft: 4,
    color: '#262626',
    fontWeight: '600',
  },
  captionItem: {
    flexDirection: 'row',
  },
  commentUsername: {
    fontWeight: '600',
    marginRight: 8,
  },
  timestampContainer: {
    marginTop: 6,
    marginBottom: 3,
  },
  timestamp: {
    color: '#999',
    fontSize: 10,
  }
})

export default GalleryItem;

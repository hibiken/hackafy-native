import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { pluralize } from '~/utils/helpers';
import moment from 'moment';
import { colors, fontSizes } from '~/styles';
const { width } = Dimensions.get('window');

const GalleryItem = (props) => {
  const avatarSource = props.avatarUrl.length === 0
    ? require('../../images/default-avatar.jpg')
    : {uri: props.avatarUrl};

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image source={avatarSource} resizeMode='cover' style={styles.avatar} />
        <Text style={styles.username}>{props.username}</Text>
      </View>
      <Image source={{uri: props.photoUrl}} style={styles.image}/>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={props.liked === true ? props.onUnlike : props.onLike}>
          {props.liked === true
          ? <Icon name="ios-heart" size={30} color='#ed4956'/>
          : <Icon name="ios-heart-outline" size={30} color='#999'/>}
        </TouchableOpacity>
      </View>
      <View style={styles.commentsContainer}>
        <View style={styles.likesCountContainer}>
          <Icon name="ios-heart" size={14} color="#262626" />
          <Text style={styles.likesCountText}>
            {pluralize(props.likesCount, 'like', 'likes')}
          </Text>
        </View>
        <View style={styles.captionItem}>
          <Text style={styles.commentUsername}>{props.username}</Text>
          <Text>{props.caption}</Text>
        </View>
        <View style={styles.timestampContainer}>
          <Text style={styles.timestamp}>{moment(props.createdAt).fromNow().toUpperCase()}</Text>
        </View>
      </View>
    </View>
  );
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

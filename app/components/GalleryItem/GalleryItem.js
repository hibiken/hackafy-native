import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~/styles';
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
        <Icon
          name="ios-heart-outline"
          size={30}
          color='#999'
        />
      </View>
      <View style={styles.commentsContainer}>
        <View style={styles.captionItem}>
          <Text style={styles.commentUsername}>{props.username}</Text>
          <Text>{props.caption}</Text>
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
  captionItem: {
    flexDirection: 'row',
  },
  commentUsername: {
    fontWeight: '600',
    marginRight: 8,
  }
})

export default GalleryItem;

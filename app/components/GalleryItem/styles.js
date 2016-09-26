import { StyleSheet, Dimensions } from 'react-native';
import { colors, fontSizes } from '~/styles';
const { width } = Dimensions.get('window');

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
    borderWidth: 1,
    borderColor: '#dbdbdb',
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
});

export default styles;

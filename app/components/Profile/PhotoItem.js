import React, { PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { colors } from '~/styles';
const { width } = Dimensions.get('window');

const PhotoItem = (props) => {
  return (
    <View>
      <Image source={{uri: props.photoUrl}} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width * .33,
    height: width * .33,
    borderWidth: 1,
    borderColor: colors.white,
  }
})

PhotoItem.propTypes = {
  photoUrl: PropTypes.string.isRequired,
};

export default PhotoItem;

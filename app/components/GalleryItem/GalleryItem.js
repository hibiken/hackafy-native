import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const GalleryItem = (props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.photoUrl}} style={styles.image}/>
      <Text>{props.caption}</Text>
    </View>
  );
}

GalleryItem.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'green',
  },
  image: {
    resizeMode: 'contain',
    width: 400,
    height: 300,
  },
})

export default GalleryItem;

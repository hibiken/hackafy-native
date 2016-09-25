import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, ScrollView, ListView, Dimensions } from 'react-native';
import { HackafyNavbar, Gear, GalleryItem } from '~/components';
const { height } = Dimensions.get('window');

const Home = (props) => {
  console.log('props', props);
  return (
    <View>
      <HackafyNavbar title="Home"/>
      <ListView
        dataSource={props.dataSource}
        renderRow={props.renderRow}
        style={styles.listView}
      />
    </View>
  );
}

Home.propTypes = {
  dataSource: PropTypes.object.isRequired,
  renderRow: PropTypes.func.isRequired,
};

const styles = {
  listView: {
    flex: 1,
    height: height - (44+48),
  }
}

export default Home;

import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HackafyNavbar, Gear } from '~/components';

const Home = (props) => {
  return (
    <View>
      <HackafyNavbar title="Home"/>
      <Text>Home!!!</Text>
    </View>
  );
}

export default Home;

import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HackafyNavbar, Gear } from '~/components';

const Home = (props) => {
  return (
    <View>
      <HackafyNavbar
        title="Home"
        rightButton={<Gear onPress={() => console.log('hi') } />}
      />
      <Text>Home!!!</Text>
    </View>
  );
}

export default Home;

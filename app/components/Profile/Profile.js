import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HackafyNavbar } from '~/components';

const Profile = (props) => {
  return (
    <View>
      <HackafyNavbar title="Profile" />
      <Text>Profile!!!</Text>
    </View>
  );
}

export default Profile;

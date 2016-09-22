import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HackafyNavbar } from '~/components';

const Notifications = (props) => {
  return (
    <View>
      <HackafyNavbar title="Notifications" />
      <Text>Notifications!!!</Text>
    </View>
  );
}

export default Notifications;

import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HackafyNavbar, Gear } from '~/components';

const Profile = (props) => {
  return (
    <View>
      <HackafyNavbar
        title="Profile"
        rightButton={<Gear onPress={props.handleToSettings} />}
      />
      <Text>Profile!!!</Text>
    </View>
  );
}

Profile.propTypes = {
  handleToSettings: PropTypes.func.isRequired,
}

export default Profile;

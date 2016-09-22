import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HackafyNavbar, Close } from '~/components';
import { colors } from '~/styles';

const Settings = (props) => {
  return (
    <View style={styles.container}>
      <HackafyNavbar
        title="Settings"
        leftButton={<Close onPress={props.onBack} />}
      />
      <Text>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  }
})

Settings.propTypes = {
  onBack: PropTypes.func.isRequired,
}

export default Settings;

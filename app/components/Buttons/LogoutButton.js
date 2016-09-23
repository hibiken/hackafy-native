import React, { PropTypes } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '~/styles';

const LogoutButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.buttonText}>
        Logout
      </Text>
    </TouchableOpacity>
  );
}

LogoutButton.propTypes = {
  onPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.blue,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
  }
})

export default LogoutButton;

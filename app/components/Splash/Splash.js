import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import { colors, fontSizes } from '~/styles';
const { height } = Dimensions.get('window');

const Splash = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={require('../../images/react-logo.png')} />
        <Text style={styles.title}>Hackafy</Text>
      </View>
      <View style={styles.loginContainer}>
        <LoginButton
          style={{
            height: 30,
            width: 180,
            marginBottom: 15,
          }}
          onLoginFinished={props.onLoginFinished}
        />
        <Text style={styles.insuranceText}>
          Don't worry. We don't post anything to Facebook.
        </Text>
      </View>
    </View>
  );
}

Splash.propTypes = {
  onLoginFinished: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: height * 0.4 > 300 ? 300 : height * 0.4,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.blue,
  },
  loginContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
    paddingBottom: 40,
  },
  insuranceText: {
    fontSize: fontSizes.secondary,
    color: colors.secondary,
    textAlign: 'center',
  }
});

export default Splash;

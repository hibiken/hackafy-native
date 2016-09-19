import React, { PropTypes, Component } from 'react';
import { View, StyleSheet, Animated, Image } from 'react-native';
import { colors } from '~/styles';

class PreSplash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(1),
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(this.state.opacity, {toValue: 0.2, duration: 1000}),
        Animated.timing(this.state.opacity, {toValue: 1, duration: 1000}),
      ]).start();
    }, 2000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Image
          source={require('../../images/react-logo.png')}
          style={[styles.image, {opacity: this.state.opacity}]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 135,
  }
})

export default PreSplash;

import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~/styles';

const Gear = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Icon
        name="ios-settings-outline"
        size={props.size}
        color={colors.blue}
      />
    </TouchableOpacity>
  );
}

Gear.propTypes = {
  size: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
}

Gear.defaultProps = {
  size: 30,
}


export default Gear;

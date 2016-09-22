import React, { PropTypes } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { colors } from '~/styles';

const Close = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Text style={{color: colors.blue}}>Close</Text>
    </TouchableOpacity>
  );
}

Close.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
}

export default Close;

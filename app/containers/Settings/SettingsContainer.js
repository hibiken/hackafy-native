import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Settings } from '~/components';

class SettingsContainer extends Component {
  render() {
    return (
      <Settings
        onBack={this.props.navigator.pop}
      />
    );
  }
}

SettingsContainer.propTypes = {
  navigator: PropTypes.object.isRequired,
}

export default connect()(SettingsContainer);

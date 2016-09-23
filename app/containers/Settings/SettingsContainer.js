import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Settings } from '~/components';
import { handleLogout } from '~/redux/actions';

class SettingsContainer extends Component {
  render() {
    return (
      <Settings
        onBack={this.props.navigator.pop}
        onLogout={() => this.props.dispatch(handleLogout())}
      />
    );
  }
}

SettingsContainer.propTypes = {
  navigator: PropTypes.object.isRequired,
}

export default connect()(SettingsContainer);

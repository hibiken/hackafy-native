import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Home } from '~/components';

const HomeContainer = (props) => {
  return (
    <Home />
  );
}
HomeContainer.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default HomeContainer;

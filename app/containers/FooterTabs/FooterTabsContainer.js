import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FooterTabs } from '~/components';
import { getAcitiveFooterTab } from '~/redux/store/rootReducer';
import { setFooterTab } from '~/redux/actions';

const mapStateToProps = (state, ownProps) => ({
  activeFooterTab: state.activeFooterTab, // TODO: use selector function
  navigator: ownProps.navigator,
});

const mapDispatchToProps = (dispatch) => ({
  onTabSelect: (tab) => dispatch(setFooterTab(tab))
});

const FooterTabsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterTabs);

FooterTabsContainer.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default FooterTabsContainer;

import React, { PropTypes } from 'react';
import { TabBarIOS, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  HomeContainer,
  NotificationsContainer,
  ProfileContainer,
} from '~/containers';
import { colors } from '~/styles';

const FooterTabs = (props) => {
  return (
    <TabBarIOS tintColor={colors.purpleViolet}>
      <Icon.TabBarItem
        iconSize={35}
        iconName="ios-home-outline"
        title="Home"
        selected={props.activeFooterTab === 'home'}
        onPress={() => props.onTabSelect('home')}>
        <HomeContainer navigator={props.navigator} />
      </Icon.TabBarItem>
      <Icon.TabBarItem
        iconSize={35}
        iconName="ios-heart-outline"
        title="Notifications"
        selected={props.activeFooterTab === 'notifications'}
        onPress={() => props.onTabSelect('notifications')}>
        <NotificationsContainer navigator={props.navigator} />
      </Icon.TabBarItem>
      <Icon.TabBarItem
        iconSize={35}
        iconName="ios-contact-outline"
        title="Profile"
        selected={props.activeFooterTab === 'profile'}
        onPress={() => props.onTabSelect('profile')}>
        <ProfileContainer navigator={props.navigator} />
      </Icon.TabBarItem>
    </TabBarIOS>
  );
}

FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({

});

export default FooterTabs;

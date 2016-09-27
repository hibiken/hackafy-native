import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { HackafyNavbar, NotificationItem } from '~/components';

const Notifications = (props) => {
  return (
    <View>
      <HackafyNavbar title="Notifications" />
      <ListView
        dataSource={props.dataSource}
        renderRow={props.renderRow}
        enableEmptySections={true}
        onEndReached={() => props.fetchNotifications()}
      />
    </View>
  );
}

Notifications.propTypes = {
  dataSource: PropTypes.object.isRequired,
  renderRow: PropTypes.func.isRequired,
  fetchNotifications: PropTypes.func.isRequired,
};

export default Notifications;

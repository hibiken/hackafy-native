import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { HackafyNavbar, NotificationItem } from '~/components';

const Notifications = (props) => {
  return (
    <View>
      <HackafyNavbar title="Notifications" />
      <ScrollView>
        {props.notifications.map(notification => (
          <NotificationItem key={notification.id} {...notification} />
        ))}
      </ScrollView>
    </View>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
};

export default Notifications;

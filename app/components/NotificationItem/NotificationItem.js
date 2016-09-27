import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationItem = (props) => {
  switch (props.actionType) {
    case "START_FOLLOWING":
      return (
        <View>
          <Text>{props.actor.username} started following you.</Text>
        </View>
      );
    case "LIKE_POST":
      return (
        <View>
          <Text>{props.actor.username} liked your post.</Text>
        </View>
      );
    case "COMMENT_ON_POST":
      return (
        <View>
          <Text>{props.actor.username} commented on your post.</Text>
        </View>
      );
    default:
      return (
        <View>
          <Text>{props.actionType}</Text>
        </View>
      );
  }
}

export default NotificationItem;

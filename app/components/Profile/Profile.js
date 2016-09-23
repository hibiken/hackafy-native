import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { HackafyNavbar, Gear } from '~/components';
import { colors, fontSizes } from '~/styles';

const Profile = (props) => {
  return (
    <View>
      <HackafyNavbar
        title="Profile"
        rightButton={<Gear onPress={props.handleToSettings} />}
      />
      <View style={styles.userInfo}>
        <View style={styles.avatarWrapper}>
          <Image
            source={{uri: props.avatarURL}}
            style={styles.avatarImage}
          />
        </View>
        <View style={styles.userDetailWrapper}>
          <View style={styles.userInfoCount}>
            <Text>{props.postIds.length} posts</Text>
            <Text>{props.followerIds.length} followers</Text>
            <Text>{props.followingIds.length} following</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  avatarWrapper: {
    flex: 1,
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userDetailWrapper: {
    flex: 3,
    justifyContent: 'space-around',
    height: 80,
  },
  userInfoCount: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  editButton: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    marginLeft: 10,
    marginRight: 10,
    height: 30,
    borderRadius: 2,
    paddingLeft: 15,
    paddingRight: 15,
  },
  editButtonText: {
    textAlign: 'center',
    color: '#262626',
    fontWeight: '600',
    fontSize: fontSizes.small,
  }
})

Profile.propTypes = {
  handleToSettings: PropTypes.func.isRequired,
  avatarURL: PropTypes.string.isRequired,
  postIds: PropTypes.array.isRequired,
  followerIds: PropTypes.array.isRequired,
  followingIds: PropTypes.array.isRequired,
}

export default Profile;

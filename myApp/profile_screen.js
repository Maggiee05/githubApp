import React, { Component } from 'react';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';

// import token from './auth_token';
import styles from './style';
import Profile from './profile_model';

/**
 * The profile screen class
 * Handling the frontend of the profile, renderins the info needed
 */

export default class ProfileScreen extends Component {
    static navigationOptions = {
      title: 'Profile',
    };

    constructor(props) {
      super(props);
      //   this.state = {
      //       hidden: true,
      //   };
      this.state = {};
      //   const accessToken = token;
      this.profile = new Profile();
      this.setProfile();
    }

    async setProfile() {
      const response = await this.profile.getProfile();
      this.setState({
        avatarUrl: response.data.viewer.avatarUrl,
        name: response.data.viewer.name,
        username: response.data.viewer.login,
        bio: response.data.viewer.bio,
        website: response.data.viewer.websiteUrl,
        email: response.data.viewer.email,
        RepoCt: response.data.viewer.repositories.totalCount,
        followersCt: response.data.viewer.followers.totalCount,
        followingCt: response.data.viewer.following.totalCount,
        createDate: response.data.viewer.createdAt,

        // loading: response.loading,
        error: response.error,
      });
    }

    render() {
      const {
        avatarUrl, name, username, bio, website, email,
        createDate, RepoCt, followersCt, followingCt, error,
      } = this.state;
      const { navigation } = this.props;
      if (error) {
        return (
          <Text>Error :( </Text>
        );
      }
      return (
        <View style={styles.container}>
          <Image style={{ marginTop: '5%', width: 150, height: 150 }} source={{ uri: avatarUrl }} />

          <Text style={styles.profileName}>
            { name }
          </Text>
          <Text style={styles.profileNameSub}>
            {username}
          </Text>
          <Text style={styles.infoText}>
            Bio:
            { bio }
          </Text>
          <Text style={styles.infoText}>
            Website:
            {website}
          </Text>
          <Text style={styles.infoText}>
            Email:
            {email}
          </Text>
          <Text style={styles.infoText}>
            Created at:
            {createDate}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Repositories')}
          >
            <Text style={styles.buttonText}>
              Repositories #
              {RepoCt}
            </Text>

          </TouchableOpacity>

          <View style={styles.space} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Followers')}
          >
            <Text style={styles.buttonText}>
              Followers #
              {followersCt}
            </Text>
          </TouchableOpacity>

          <View style={styles.space} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Following')}
          >
            <Text style={styles.buttonText}>
              Following #
              {followingCt}
            </Text>
          </TouchableOpacity>

        </View>
      );
    }
}

import React, { Component } from 'react';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';

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
      let newUser = 'Maggiee05';
      // console.log(props.route.params)
      const { route } = this.props;
      if (route.params !== undefined) {
        newUser = route.params.userid;
      }

      this.state = {
        loading: true,
        userid: newUser,
        error: false,
      };

      this.profile = new Profile();
      this.setProfile();
    }

    async setProfile() {
      const { userid } = this.state;
      let response = null;
      try {
        response = await this.profile.getProfile(userid);
        this.setState({
          avatarUrl: response.data.user.avatarUrl,
          name: response.data.user.name,
          username: response.data.user.login,
          bio: response.data.user.bio,
          website: response.data.user.websiteUrl,
          email: response.data.user.email,
          RepoCt: response.data.user.repositories.totalCount,
          followersCt: response.data.user.followers.totalCount,
          followingCt: response.data.user.following.totalCount,
          createDate: response.data.user.createdAt,
          loading: false,
          error: false,
        });
      } catch (error) {
        this.setState({ error: true });
      }
    }

    clickHandler(screen, userid) {
      const { navigation } = this.props;
      navigation.push(screen, { userid });
    }

    render() {
      const {
        avatarUrl, name, username, bio, website, email,
        createDate, RepoCt, followersCt, followingCt, loading, error,
      } = this.state;
      if (error) {
        return (
          <View style={styles.container}>
            <Text style={styles.loading}>Error!!! </Text>
          </View>
        );
      }
      if (loading) {
        return (
          <View style={styles.container}>
            <Text style={styles.loading}>Loading... </Text>
          </View>
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
            {' '}
            { bio }
          </Text>
          <Text style={styles.infoText}>
            Website:
            {' '}
            {website}
          </Text>
          <Text style={styles.infoText}>
            Email:
            {' '}
            {email}
          </Text>
          <Text style={styles.infoText}>
            Created at:
            {' '}
            {createDate}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // console.log(username);
              this.clickHandler('Repositories', username);
            }}
          >
            <Text style={styles.buttonText}>
              Repositories #
              {RepoCt}
            </Text>

          </TouchableOpacity>

          <View style={styles.space} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.clickHandler('Followers', username);
            }}
          >
            <Text style={styles.buttonText}>
              Followers #
              {followersCt}
            </Text>
          </TouchableOpacity>

          <View style={styles.space} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.clickHandler('Following', username);
            }}
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

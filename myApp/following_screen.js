import React, { Component } from 'react';
import {
  Text, View, FlatList, TouchableOpacity, Image,
} from 'react-native';

import styles from './style';
import Following from './following_model';
// import token from './auth_token';

/**
 * The repositories screen class
 * Handling the frontend of the repositories, renderins the info needed
 */

export default class FollowingScreen extends Component {
    static navigationOptions = {
      title: 'Following',
    };

    constructor(props) {
      super(props);
      let newUser = 'Maggiee05';
      const { route } = this.props;
      try {
        newUser = route.params.userid;
      } catch {
        console.log('Currently main user');
      }

      this.state = {
        loading: true,
        userid: newUser,
      };
      this.following = new Following();
      this.setFollowing();
    }

    async setFollowing() {
      const { userid } = this.state;
      const response = await this.following.getFollowing(userid);
      this.setState({
        info: response.data.user.following.nodes,

        loading: false,
      });
    }

    clickHandler(userid) {
      console.log('New following user button CLICKED!!!!');
      // this.props.navigation.navigate('Profile', {userid});
      const { navigation } = this.props;
      navigation.push('Profile', { userid });
    }

    render() {
      const { info, loading } = this.state;
      // const { navigation } = this.props;
      if (loading) {
        return (
          <View style={styles.container}>
            <Text style={styles.loading}>Loading... </Text>
          </View>
        );
      }
      return (
        <FlatList
          data={info}
          keyExtractor={(item) => item.login}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={styles.followTab}
                onPress={() => {
                  this.clickHandler(item.login);
                }}
              >
                <Image style={styles.followImage} source={{ uri: item.avatarUrl }} />
                <Text style={styles.followOwner}>
                  {item.name}
                </Text>
                <Text style={styles.followName}>
                  @
                  {item.login}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      );
    }
}

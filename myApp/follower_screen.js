import React, { Component } from 'react';
import {
  Text, View, FlatList, TouchableOpacity, Image,
} from 'react-native';

import styles from './style';
import Follower from './follower_model';
// import token from './auth_token';

/**
 * The repositories screen class
 * Handling the frontend of the repositories, renderins the info needed
 */

export default class FollowerScreen extends Component {
    static navigationOptions = {
      title: 'Followers',
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
      this.followers = new Follower();
      this.setFollowers();
    }

    async setFollowers() {
      const { userid } = this.state;
      const response = await this.followers.getFollowers(userid);
      this.setState({
        info: response.data.user.followers.nodes,

        loading: false,
      });
    }

    clickHandler(userid) {
      console.log('New follower user button CLICKED!!!!');
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

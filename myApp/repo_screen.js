import React, { Component } from 'react';
import {
  Text, View, FlatList, TouchableOpacity,
} from 'react-native';

import styles from './style';
import Repo from './repo_model';
// import token from './auth_token';

/**
 * The repositories screen class
 * Handling the frontend of the repositories, renderins the info needed
 */

export default class RepoScreen extends Component {
    static navigationOptions = {
      title: 'Repositories',
    };

    constructor(props) {
      super(props);
      let newUser = 'Maggiee05';
      // console.log(props.route.params)
      if (props.route.params !== undefined) {
        newUser = props.route.params.userid;
      }
      // console.log(newUser);

      this.state = {
        loading: true,
        userid: newUser,
      };
      this.repo = new Repo();
      this.setRepository();
    }

    async setRepository() {
      // console.log(this.state.userid);
      const { userid } = this.state;
      const response = await this.repo.getRepo(userid);
      this.setState({
        info: response.data.user.repositories.nodes,

        loading: false,
      });
    }

    render() {
      const { info, loading } = this.state;
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
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity style={styles.repoTab}>
                <Text style={styles.repoName}>
                  {item.name}
                </Text>
                <Text style={styles.repoOwner}>
                  {item.owner.login}
                </Text>
                <Text style={styles.repoText}>
                  {item.description}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      );
    }
}

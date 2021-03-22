import React, { Component } from 'react';
import {
  Text, View, FlatList, TouchableOpacity,
} from 'react-native';

import styles from './style';
import Repo from './repo_model';

export default class RepoScreen extends Component {
    static navigationOptions = {
      title: 'Repositories',
    };

    constructor(props) {
      super(props);
      this.state = {};
      this.repo = new Repo();
      this.setRepository();
    }

    async setRepository() {
      const response = await this.repo.getRepo();
      this.setState({
        info: response.data.viewer.repositories.nodes,
      });
    }

    render() {
      const { info } = this.state;
      return (
        <View>
          <FlatList
            data={info}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity style={styles.repoTab}>
                  <Text style={styles.repoName}>
                    {' '}
                    {item.name}
                    {' '}
                  </Text>
                  <Text style={styles.repoOwner}>
                    {' '}
                    {item.owner.login}
                    {' '}
                  </Text>
                  <Text style={styles.repoText}>
                    {' '}
                    {item.description}
                    {' '}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }
}

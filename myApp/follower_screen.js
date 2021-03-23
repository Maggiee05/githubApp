import React, { Component } from 'react';
import {
  Text, View,
} from 'react-native';
import styles from './style';

export default class FollowerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>TO DO for Followers</Text>
      </View>
    );
  }
}

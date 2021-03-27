import React, { Component } from 'react';
import {
  Text, View,
} from 'react-native';
import styles from './style';

export default class FollowingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>TO DO for Following</Text>
      </View>
    );
  }
}

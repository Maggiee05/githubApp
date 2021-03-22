import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import styles from './style.js';


export default class FollowerScreen extends Component {

    render() {
        return (
            <View style={styles.container}>                
                <Text>TO DO for Followers</Text>
            </View>
        );
    }
}
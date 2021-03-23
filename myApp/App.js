/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from './style';
import ProfileScreen from './profile_screen';
import RepoScreen from './repo_screen';
import FollowerScreen from './follower_screen';
import FollowingScreen from './following_screen';
// import LoadingScreen from './loading_screen';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="ProfilePage">
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Repositories" component={RepoScreen} />
        <Stack.Screen name="Followers" component={FollowerScreen} />
        <Stack.Screen name="Following" component={FollowingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

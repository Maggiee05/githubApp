import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './profile_screen';
import RepoScreen from './repo_screen';
import FollowerScreen from './follower_screen';
import FollowingScreen from './following_screen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProfilePage">
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Repositories" component={RepoScreen} />
        <Stack.Screen name="Followers" component={FollowerScreen} />
        <Stack.Screen name="Following" component={FollowingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

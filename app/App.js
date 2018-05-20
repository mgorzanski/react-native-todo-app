import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Tasks from './screens/Tasks';
import Settings from './screens/Settings';

const StackNavigator = createStackNavigator({
  Tasks: Tasks,
  Settings: Settings
});

export default class App extends React.Component {
  render() {
    return (
      <StackNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

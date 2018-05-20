import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import TasksList from './TasksList';
import Add from './Add';

export default Tasks = createBottomTabNavigator({
    List: TasksList,
    Add: Add
  }, {
    tabBarOptions: {
      style: {
        height: 55
      }
    }
});

Tasks.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Tasks',
    headerRight: (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Settings');
        }}>
            <Icon family="Feather" name="settings" />
        </TouchableOpacity>
    ),
    headerStyle: {
        paddingRight: 15
    }
});
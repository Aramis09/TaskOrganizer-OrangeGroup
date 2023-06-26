import * as React from 'react';

import EmptyTask from './screens/emptyTaskScreen';
import CreateNewTaskList from './screens/createNewTaskListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={EmptyTask} />
      <Stack.Screen name="CreateNewList" component={CreateNewTaskList} />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

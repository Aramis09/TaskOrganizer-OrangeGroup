import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmptyTask from './src/screens/emptyTaskScreen';
import TaskList from './src/screens/taskListScreen';
import CreateNewTaskList from './src/screens/createNewTaskListScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="EmptyTask" component={EmptyTask} />
        <Stack.Screen name="NewTask" component={CreateNewTaskList} />
        <Stack.Screen name="TaskList" component={TaskList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

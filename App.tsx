import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Navigation from './src/navigation';
import EmptyTask from './src/screens/emptyTaskScreen';
function App(): JSX.Element {
  return (
    // <NavigationContainer>
    <Navigation />
    // <SafeAreaView>
    // </SafeAreaView>

    // </NavigationContainer>
  );
}

export default App;

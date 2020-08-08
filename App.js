import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './component/screen/LoginScreen';
import MainScreen from './component/navigation/KeyListNavigation';
import WebScreen from './component/screen/WebScreen';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="WebScreen" component={WebScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
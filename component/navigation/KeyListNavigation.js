import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../screen/MainScreen';
import KeyListScreen from '../screen/KeyListScreen';

const Drawer = createDrawerNavigator();

export default function KeyListNavigation() {
  return (
      <Drawer.Navigator initialRouteName="Home"
      drawerPosition="right">
        <Drawer.Screen name="Home" component={MainScreen} />
        <Drawer.Screen name="Notifications" component={KeyListScreen} />
      </Drawer.Navigator>
  );
}
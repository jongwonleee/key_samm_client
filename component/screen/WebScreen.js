/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';


export default class WebScreen extends Component{
  render(){
    const {navigation} = this.props;
    const onLoginButtonPress = () =>{
      navigation.navigate('MainScreen')
    }
    return(
      <SafeAreaView style={styles.background}>
      <StatusBar barStyle="dark-content" />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    flex:1
  },
  logo:{
    flex: 1,
    justifyContent:"center",
    alignItems:'center',
  },
  button:{
    justifyContent:"center",
    alignItems:"center",
    bottom:"30%",
    backgroundColor:"#fee933",
    padding:17,
    margin:20,
    flexDirection:"row",
    borderRadius:4,
  },
  text:{
    fontSize:14,
    color:"#371e1e",
    fontWeight:"bold",
  },
  background:{
    backgroundColor:"#184C88",
    flex:1
  },
});

//export default LoginScreen;
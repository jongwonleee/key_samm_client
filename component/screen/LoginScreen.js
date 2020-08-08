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


export default class LoginScreen extends Component{
  render(){
    const {navigation} = this.props;
    const onLoginButtonPress = () =>{
      navigation.navigate('MainScreen')
    }
    return(
      <SafeAreaView style={styles.background}>
      <StatusBar barStyle="dark-content" />
        <View style={styles.logo}> 
              <Text style={{fontSize:100, color:"#FFFFFF"}}>떴어?!</Text>
        </View>
        <TouchableOpacity 
        onPress={() => navigation.navigate('MainScreen')}>
          <View style={styles.button}>
            { <Image style={{height:16, width:18, marginRight:6}}
              resizeMode="contain"
              source={require("./../images/kakao_talk_s.png")}/> }
            <Text style={styles.text} allowFontScaling={true}>카카오톡으로 로그인</Text>
          </View>
        </TouchableOpacity>
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
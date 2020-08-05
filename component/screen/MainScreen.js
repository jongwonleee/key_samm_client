/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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


function MainScreen({navigation}) {
  return (
    <>
    <SafeAreaView style={styles.background}>
    <StatusBar barStyle="dark-content" />
      <View style={styles.buttonLayout}>
        <TouchableOpacity style={styles.button}>
          <Image style={{height:18, width:18}}
            resizeMode="contain"
            source={require("./../images/plus.png")}/> 
        </TouchableOpacity> 
      </View>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  logo:{
    flex: 1,
    justifyContent:"center",
    alignItems:'center',
  },
  button:{
    justifyContent:"flex-end",
    bottom:"0%",
    padding:20,
    margin:"10%",
    backgroundColor:"#184C88",
    flexDirection:"row",
    borderRadius:100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  buttonLayout:{
    justifyContent:"flex-end",
    alignItems:"stretch",
    flexDirection:"row",
    width:"100%"
  },
  text:{
    fontSize:14,
    color:"#371e1e",
    fontWeight:"bold",
  },
  background:{
    flex: 1,
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent: 'space-around',
  },
});

export default MainScreen;
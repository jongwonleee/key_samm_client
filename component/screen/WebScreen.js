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
import { WebView } from 'react-native-webview';
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
    state={
        url:""
    }

    render(){
        const {route,navigation} = this.props;
        const { url } = route.params;
        let  jsCode = `
        Array.from(document.querySelectorAll('a')).forEach(li => {
            li.style.backgroundColor='red';
            li.addEventListener('click', evt => {
                
                while(li.className==""){
                    li = li.parentNode;
                }
                alert(li.className);
              })
        })
     `;
        return(
            <WebView
            source={{uri:"https://recruit.linepluscorp.com/lineplus/career/list?classId=148#null"}}//{{uri:JSON.stringify(url).replaceAll('\"','')}}
            style={{marginTop: 20}}
            javaScriptEnabled={true}
            javaScriptEnabledAndroid={true}
            injectedJavaScript={'function injectRules() {' + jsCode+ '};injectRules();'}

            onMessage={(event) => {
                console.log('event: ', event)
              }}
            />
        )
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    flex:1
  },
  webView:{
      flex:1,
      width:'100%',
      height:'100%',
      position:"absolute",
  },
});
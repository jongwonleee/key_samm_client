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
        function injectRules() {
            Array.from(document.querySelectorAll('a')).forEach(li => {
                //li.href='';
                li.addEventListener('click', evt => {
                    evt.preventDefault();
                });
                li.addEventListener('mousedown', evt => {
                    while(li.className==""){
                        li = li.parentNode;
                    }
                    let origin = li;
                    li.style.borderWidth= "thick";
                    li.style.borderColor='red';
                    li.style.backgroundColor='#EEEEEE';
                    setTimeout(function() { 
                        var r = confirm("화면에 표시된 부분이 맞으면 OK을 눌러주세요.");
                        if(r==true) {
                            window.ReactNativeWebView.postMessage(li.className);
                        }else{
                            li.style= origin.style;
                        }
                    }, 200);
                });       
            })
        };
        injectRules();
     `;
        return(
            <WebView
            source={{uri:"https://recruit.linepluscorp.com/lineplus/career/list?classId=148#null"}}//{{uri:JSON.stringify(url).replaceAll('\"','')}}
            style={{marginTop: 20}}
            javaScriptEnabled={true}
            javaScriptEnabledAndroid={true}
            injectedJavaScript={jsCode}

            onMessage={(event) => {
                Alert.alert("화면에 추가되었습니다.",event.nativeEvent.data);
                navigation.goBack();
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
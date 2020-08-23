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
        Alert.alert("","키워드가 검출될 수 있는 부분을 눌러주세요");
        const {route,navigation} = this.props;
        const { url,onSelect } = route.params;
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
            <View style={styles.container}>
                <WebView
                source={{uri:"https://recruit.linepluscorp.com/lineplus/career/list?classId=148#null"}}//{{uri:JSON.stringify(url).replaceAll('\"','')}}
                javaScriptEnabled={true}
                javaScriptEnabledAndroid={true}
                injectedJavaScript={jsCode}

                onMessage={(event) => {
                    //Alert.alert("화면에 추가되었습니다.",event.nativeEvent.data);
                    this.props.route.params.onSelect(event.nativeEvent.data);
                    //navigation.get
                    //this.props.navigation.state.params.onSelect("!!");
                    navigation.goBack();
                }}
                />
            </View>
            
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
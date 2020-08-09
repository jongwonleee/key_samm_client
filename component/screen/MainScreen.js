/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Keyboard, 
  TouchableWithoutFeedback,
  Alert, 
} from 'react-native';

import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
  ModalButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-modals';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ArticleListView from '../lists/listview/ArticleListView';
import ArticleRow from '../lists/row/ArticleRow';
import BottomModal from 'react-native-modals/dist/components/BottomModal';
import Input from '../customview/Input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class MainScreen extends Component{
  state = {
    datas: [
      {
        index:0,
        url:'https://recruit.navercorp.com/naver/job/list/developer?searchSysComCd=&entTypeCd=004&searchTxt=',
        keyword:'안드로이드',
      },
      {
        index:1,
        url:'https://recruit.linepluscorp.com/lineplus/career/list?classId=148#null',
        keyword:'인턴',
      },
      {
        index:2,
        url:'https://recruit.nbp-corp.com/nbp/job/list/developer?entTypeCd=001&searchTxt=',
        keyword:'인턴',
      },
      {
        index:3,
        url:'https://recruit.webtoonscorp.com/webtoon/ko/job/list#',
        keyword:'인턴',
      },
      {
        index:4,
        url:'https://careers.kakao.com/jobs?skilset=Android',
        keyword:'인턴',
      },
      {
        index:5,
        url:'https://kakaoenterprise.recruiter.co.kr/app/jobnotice/list',
        keyword:'인턴',
      },
      {
        index:6,
        url:'https://recruit.navercorp.com/naver/job/list/developer?searchSysComCd=&entTypeCd=004&searchTxt=',
        keyword:'안드로이드',
      },
      {
        index:7,
        url:'https://recruit.linepluscorp.com/lineplus/career/list?classId=148#null',
        keyword:'인턴',
      },
      {
        index:8,
        url:'https://recruit.nbp-corp.com/nbp/job/list/developer?entTypeCd=001&searchTxt=',
        keyword:'인턴',
      },
      {
        index:9,
        url:'https://recruit.webtoonscorp.com/webtoon/ko/job/list#',
        keyword:'인턴',
      },
      {
        index:10,
        url:'https://careers.kakao.com/jobs?skilset=Android',
        keyword:'인턴',
      },
      {
        index:11,
        url:'https://kakaoenterprise.recruiter.co.kr/app/jobnotice/list',
        keyword:'인턴',
      },
    ],
    visibility: false,
    keyboard:false,
    url:"",
  };

  render(){
    const {navigation} = this.props;
    const getHeight = () => {
      return  this.state.keyboard ? '0%' : '50%';
    };
    const _onPressEmptySpace = () => {
      Keyboard.dismiss();
      this.setState({
        keyboard: false,
        visibility:false
      });
    }
    const _onPressSubmit = () => {
      Keyboard.dismiss();
      this.setState({
        keyboard: false,
        visibility: false
      });
      if(!this.state.url.includes('http'))this.state.url = "https://"+this.state.url.toLowerCase()
      navigation.navigate('WebScreen',{url:this.state.url})
    }

    const _onInputFocus = () => {
      this.setState({
        keyboard:true,
      });
    }
    const _onInputBlur = () => {
      this.setState({
        keyboard:false,
      });
    }
    return(
      <SafeAreaView style={styles.background}>
        <StatusBar barStyle="dark-content" />
        <ArticleListView style={styles.listView} itemList={this.state.datas} />
        <View style={styles.buttonLayout}>
          <TouchableOpacity
            onPress={()=>{this.setState({visibility:true,});}}
            style={styles.button}>
            <Image
              style={{height: 18, width: 18}}
              resizeMode="contain"
              source={require('./../images/plus.png')}
            />
          </TouchableOpacity>
        </View>
          <BottomModal
            visible={this.state.visibility}
            onTouchOutside={this._onPressEmptySpace}
            onSwipeOut={this._onPressEmptySpace}
            modalTitle={<ModalTitle title="추가하기" />}
            footer={
              <ModalFooter style={this.state.keyboard?{
                bottom: '22%',
                }:styles.modalFooter}>
                <ModalButton text="다음" onPress={_onPressSubmit} />
                <ModalButton text="취소" onPress={_onPressEmptySpace}/>
              </ModalFooter>
            }>
            <ModalContent>
                <View style={this.state.keyboard?{
                      paddingTop: '5%',
                      paddingBottom: '5%',
                      height: '55%',
                }:styles.modalContent}>
                {/* <Text>URL</Text> */}
                <Input
                  placeholder="URL"
                  style={styles.input}
                  pattern={[
                    '/(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi'
                  ]}
                  onFocus={_onInputFocus}
                  onBlur={_onInputBlur}
                  onChangeText={(url)=>this.setState({url:url})}
                  //onValidation={() => Alert.alert("Wrong Format","Not a URL Format. Please Retry")}
                />
                <View />
                {/* <Text>키워드</Text> */}
                <Input
                  placeholder="Keyword"
                  style={styles.input}
                  onFocus={_onInputFocus}
                  onBlur={_onInputBlur}
                />
                </View>
            </ModalContent>
          </BottomModal>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'flex-end',
    padding: 20,
    margin: '10%',
    backgroundColor: '#184C88',
    flexDirection: 'row',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  buttonLayout: {
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
  },
  listView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
  },
  background: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  modalFooter: {
    bottom: '0%',
  },
  modalContent: {
    paddingTop: '5%',
    paddingBottom: '5%',
    
  },
  input:{
    fontSize:20,
    padding:10,
  }
});


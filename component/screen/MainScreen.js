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
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
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
//mport { TextInput } from 'react-native-gesture-handler';

this.states = {
  datas: [
    {
      title: '1',
      description: 'description!!!',
      img_url:
        'https://dictionary.cambridge.org/ko/images/thumb/flower_noun_002_14403.jpg?version=5.0.107',
    },
    {
      title: '2',
      description: 'description!!!',
      img_url:
        'https://dictionary.cambridge.org/ko/images/thumb/flower_noun_002_14403.jpg?version=5.0.107',
    },
    {
      title: '3',
      description: 'description!!!',
      img_url:
        'https://dictionary.cambridge.org/ko/images/thumb/flower_noun_002_14403.jpg?version=5.0.107',
    },
    {
      title: '4',
      description: 'description!!!',
      img_url:
        'https://dictionary.cambridge.org/ko/images/thumb/flower_noun_002_14403.jpg?version=5.0.107',
    },
    {
      title: '5',
      description: 'description!!!',
      img_url:
        'https://dictionary.cambridge.org/ko/images/thumb/flower_noun_002_14403.jpg?version=5.0.107',
    },
    {
      title: '6',
      description: 'description!!!',
      img_url:
        'https://dictionary.cambridge.org/ko/images/thumb/flower_noun_002_14403.jpg?version=5.0.107',
    },
    {
      title: '7',
      description: 'description!!!',
      img_url:
        'https://dictionary.cambridge.org/ko/images/thumb/flower_noun_002_14403.jpg?version=5.0.107',
    },
    {
      title: '8',
      description: 'description!!!',
      img_url:
        'https://dictionary.cambridge.org/ko/images/thumb/flower_noun_002_14403.jpg?version=5.0.107',
    },
    {
      title: '9',
      description: 'description!!!',
      img_url:
        'https://dictionary.cambridge.org/ko/images/thumb/flower_noun_002_14403.jpg?version=5.0.107',
    },
    {
      title: '10',
      description: 'description!!!',
      img_url:
        'https://dictionary.cambridge.org/ko/images/thumb/flower_noun_002_14403.jpg?version=5.0.107',
    },
    {
      title: '11',
      description: 'description!!!',
      img_url:
        'https://dictionary.cambridge.org/ko/images/thumb/flower_noun_002_14403.jpg?version=5.0.107',
    },
    {
      title: '12',
      description: 'description!!!',
      img_url:
        'https://dictionary.cambridge.org/ko/images/thumb/flower_noun_002_14403.jpg?version=5.0.107',
    },
    {
      title: '13',
      description: 'description!!!',
      img_url:
        'https://dictionary.cambridge.org/ko/images/thumb/flower_noun_002_14403.jpg?version=5.0.107',
    },
  ],
  visibility:false,
};

function MainScreen({navigation}) {
  state={
    modalVisibility:false,
  }
  setModalVisibility=(isVisible)=>{
    // this.setState({modalVisibility: isVisible})
    navigation.navigate('AddKeyScreen')
  }
  return (
    <>
      <SafeAreaView style={styles.background}>
        <StatusBar barStyle="dark-content" />
        <ArticleListView style={styles.listView} itemList={this.states.datas} />
        <View style={styles.buttonLayout}>
          <TouchableOpacity
          onPress={this.states.visibility=true}
            style={styles.button}>
            {/* // // onPress={this.setModalVisibility(true)}> 
            // //() => navigation.navigate('AddKeyScreen')}> */}
            <Image
              style={{height: 18, width: 18}}
              resizeMode="contain"
              source={require('./../images/plus.png')}
            />
          </TouchableOpacity>
        </View>
        <Modal
          visible={this.states.visibility}
          width="0.7"
          modalTitle={<ModalTitle title="추가하기" />}
          footer={
            <ModalFooter style={styles.modalFooter}>
              <ModalButton
                text="다음"
                onPress={() => {}}
              />
              <ModalButton
                text="취소"
              />
            </ModalFooter>
          }
        >
          <ModalContent>
            <View>
              <Text>URL</Text>
              <TextInput style={{backgroundColor:"#F0F"}}>fddddd</TextInput>
              <View/>
              <Text>키워드</Text>
              <TextInput style={{backgroundColor:"#F0F"}}>fddddd</TextInput>
            </View>
          </ModalContent>
        </Modal>
      </SafeAreaView>
    </>
  );
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
  modalFooter:{
    bottom:'0%',
  }
});

export default MainScreen;

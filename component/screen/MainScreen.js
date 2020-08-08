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
//mport { TextInput } from 'react-native-gesture-handler';

export default class MainScreen extends Component{
  state = {
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
    visibility: false,
  };
  
  render(){
    const {navigation} = this.props;
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
          modalTitle={<ModalTitle title="추가하기" />}
          footer={
            <ModalFooter style={styles.modalFooter}>
              <ModalButton text="다음" onPress={() => {}} />
              <ModalButton text="취소" onPress={()=> this.setState({visibility:false})}/>
            </ModalFooter>
          }>
          <ModalContent>
            <View style={styles.modalContent}>
              <Text>URL</Text>
              <Input
                placeholder="URL"
                style={styles.input}
                pattern={[
                  '/(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi'
                ]}
                onValidation={() => this.setState({visibility:false})}
              />
              <View />
              <Text>키워드</Text>
              <Input
                placeholder="Keyword"
                style={styles.input}
              />
            </View>
          </ModalContent>
        </BottomModal>
      </SafeAreaView>
    )
  }
}

// function MainScreen({navigation}) {
//   const {visibility} = this.states;
//   return (
//     <>
//       <SafeAreaView style={styles.background}>
//         <StatusBar barStyle="dark-content" />
//         <ArticleListView style={styles.listView} itemList={this.states.datas} />
//         <View style={styles.buttonLayout}>
//           <TouchableOpacity
//             //onPress={visibility => this.setState({visibility})}
//             style={styles.button}>
//             {/* // // onPress={this.setModalVisibility(true)}> 
//             // //() => navigation.navigate('AddKeyScreen')}> */}
//             <Image
//               style={{height: 18, width: 18}}
//               resizeMode="contain"
//               source={require('./../images/plus.png')}
//             />
//           </TouchableOpacity>
//         </View>
//         <BottomModal
//           visible={true} //{this.states.visibility}
//           modalTitle={<ModalTitle title="추가하기" />}
//           footer={
//             <ModalFooter style={styles.modalFooter}>
//               <ModalButton text="다음" onPress={() => {}} />
//               <ModalButton text="취소" />
//             </ModalFooter>
//           }>
//           <ModalContent>
//             <View style={styles.modalContent}>
//               <Text>URL</Text>
//               <Input
//                 placeholder="URL"
//                 style={styles.input}
//                 pattern={[
//                   '^.{8,}$', // min 8 chars
//                   '(?=.*\\d)', // number required
//                   '(?=.*[A-Z])', // uppercase letter
//                 ]}
//                 //onValidation={(isValid) => this.setState({isValid})}
//               />
//               <View />
//               <Text>키워드</Text>
//               <Input
//                 placeholder="Keyword"
//                 style={styles.input}
//               />
//             </View>
//           </ModalContent>
//         </BottomModal>
//       </SafeAreaView>
//     </>
//   );
// }

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

//export default MainScreen;

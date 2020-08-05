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
  FlatList,
} from 'react-native';

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
};

function MainScreen({navigation}) {
  return (
    <>
      <SafeAreaView style={styles.background}>
        <StatusBar barStyle="dark-content" />
        <ArticleListView style={styles.listView} itemList={this.states.datas} />
        <View style={styles.buttonLayout}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AddKeyScreen')}>
            <Image
              style={{height: 18, width: 18}}
              resizeMode="contain"
              source={require('./../images/plus.png')}
            />
          </TouchableOpacity>
        </View>
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
});

export default MainScreen;

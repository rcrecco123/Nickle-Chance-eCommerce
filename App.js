import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import HomeScreen from './components/home';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ItemList from './components/itemList';
import itemShow from './components/itemShow';
import firebaseConfig from './firebaseConfig';
import * as firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

const MainStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Category: { screen: ItemList },
  Item: { screen: itemShow }
});

const AppContainer = createAppContainer(MainStack);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: []
    }
  }

  render() {
    return (
      <AppContainer />
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

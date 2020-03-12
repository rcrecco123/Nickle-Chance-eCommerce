import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import HomeScreen from './components/home';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ItemList from './components/itemList';
import itemShow from './components/itemShow';
import firebaseConfig from './firebaseConfig';
import * as firebase from 'firebase';
import ShoppingCart from './components/shoppingCart';
import ShoppingCartIcon from './components/shoppingCartIcon'
import store from "./reducers/store";
import { Provider } from "react-redux";

firebase.initializeApp(firebaseConfig);

const MainStack = createStackNavigator({
  Home: HomeScreen,
  Category: ItemList,
  Item: itemShow
}, {
  navigationOptions: {
    headerTitle: 'eCommerce App',
    headerRight: (
      <Text>
        hello
      </Text>
    )
  }
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
      <Provider store={store}>
        <AppContainer />
      </Provider>
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

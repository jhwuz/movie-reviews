import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './HomeScreen'
import MovieScreen from './MovieScreen'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Movies: {screen: MovieScreen},
});

const App = createAppContainer(MainNavigator);

export default App;



import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './HomeScreen'
import MovieScreen from './MovieScreen'
import ReviewForm from './ReviewForm'
import SearchForm from './SearchForm'

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Movies: {screen: MovieScreen},
    Reviews: {screen: ReviewForm},
    Search: {screen: SearchForm},
});

const App = createAppContainer(MainNavigator);

export default App;



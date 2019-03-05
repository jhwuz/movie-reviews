import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './HomeScreen';
import MovieScreen from './MovieScreen';
import ReviewForm from './ReviewForm';
import SearchForm from './SearchForm';
import SearchScreen from "./SearchScreen";
import ExpandedMovie from './components/ExpandedMovie';

const MainNavigator = createStackNavigator({
        Home: {screen: HomeScreen},
        Movies: {screen: MovieScreen},
        Reviews: {screen: ReviewForm},
        Search: {screen: SearchForm},
        SearchScreen: {screen: SearchScreen},
        ExpandedMovie: {screen: ExpandedMovie},
    },
    {
        defaultNavigationOptions: {
            initialRouteName: 'Home',
            headerStyle: {
                backgroundColor: '#14171C',
                borderBottomWidth: 0,
            },

        }
    }
);

const App = createAppContainer(MainNavigator);

export default App;


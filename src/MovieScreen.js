import React from "react";
import {Text, StyleSheet, View} from "react-native";
import MovieList from './components/MovieList'

export default class MovieScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>Movies Screen</Text>
                <MovieList/>
            </View>
        );
    }
}

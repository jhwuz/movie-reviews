import React from "react";
import {Text, StyleSheet, View} from "react-native";
import MovieList from './components/MovieList'

export default class MovieScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MovieList/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#445566',
        paddingBottom: 25,
    }});
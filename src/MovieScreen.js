import React from "react";
import {Button, Text, StyleSheet, View} from "react-native";

export default class MovieScreen extends React.Component {
    render() {
        return (
            <Text>Movies Screen</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    header: {
        fontSize: 55,
        fontWeight: 'bold',
    },
});
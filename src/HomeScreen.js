import React from "react";
import {Button, Text, StyleSheet, View, TouchableHighlight} from "react-native";

export default class HomeScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Movie Reviews 🍿
                </Text>
                <Button title="View Movie Reviews"
                        onPress={() => navigate('Movies', {name: 'movies'})}
                />
                <Button title="Write a Review"
                        onPress={() => navigate('Reviews', {name: 'reviews'})}
                />
                <Button title="Search for a Movie"
                        onPress={() => navigate('Search', {name: 'search'})}
                />
                {/*<TouchableHighlight onPress={() => navigate('Search', {name: 'search'})}>*/}
                    {/*<Text style={styles.button}>Search</Text>*/}
                {/*</TouchableHighlight>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#14171C',
    },
    header: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#868B82'
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    button: {
        fontSize: 25,
        color: 'white'
    }
});
import React from "react";
import {Button, Text, StyleSheet, View, TouchableOpacity} from "react-native";

export default class HomeScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Movie Reviews 🍿
                </Text>
                <TouchableOpacity style={styles.button} title="View Movie Reviews"
                        onPress={() => navigate('Movies', {name: 'movies'})}>
                    <Text>View Movie Reviews</Text>
                </TouchableOpacity>
                <Button title="View Movie Reviews"
                        onPress={() => navigate('Movies', {name: 'movies'})}
                />
                <Button title="Write a Review"
                        onPress={() => navigate('Reviews', {name: 'reviews'})}
                />
                <Button title="Search for a Movie"
                        onPress={() => navigate('Search', {name: 'search'})}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#445566',
    },
    header: {
        fontSize: 45,
        fontWeight: 'bold',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    button: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        backgroundColor: '#515766'
    }
});
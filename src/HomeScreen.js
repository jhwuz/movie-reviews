import React from "react";
import {Button, Text, StyleSheet, View} from "react-native";

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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
    },
    header: {
        fontSize: 45,
        fontWeight: 'bold',
    },
});
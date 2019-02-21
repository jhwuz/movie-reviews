import React from "react";
import {Button, Text, StyleSheet, View} from "react-native";
import {Input} from 'react-native-elements'

export default class ReviewForm extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Input name='search' placeholder='Enter a movie title'/>
                <Button title='Search' onPress={this.handleSubmit}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#445566',
    },
    header: {
        fontSize: 55,
        fontWeight: 'bold',
    },
});
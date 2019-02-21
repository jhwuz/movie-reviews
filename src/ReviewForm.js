import React from "react";
import {Button, Text, StyleSheet, View, TextInput} from "react-native";
import {Input} from 'react-native-elements'

export default class ReviewForm extends React.Component {
    handleSubmit = () => {
    }

    render() {
        return (
            <View style={styles.container}>
                <Input
                    name='movieTitle'
                    placeholder='Movie Title'
                />
                <Input
                    name='rating'
                    placeholder='Rating'
                />
                <Input style={styles.textBox}
                       name='description'
                       placeholder='Review Description'
                       inputContainerStyle={{height: 200}}
                       multiline
                />
                <Button title='Submit' onPress={this.handleSubmit}/>

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
    textBox: {
        height: 50,
    }

});
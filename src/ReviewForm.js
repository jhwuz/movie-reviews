import React from "react";
import {Button, Text, StyleSheet, View, TextInput} from "react-native";
import {Input} from 'react-native-elements'
import {Formik} from 'formik'

export default class ReviewForm extends React.Component {
    handleSubmit = () => {
    }

    render() {
        return (
            <View style={styles.container}>
                <Formik
                    initialValues={{movieTitle: '', rating: '', description: ''}}
                    onSubmit={this.handleSubmit}


                />

                <Input name='movieTitle' placeholder='Movie title'/>
                <Input name='rating' placeholder='Rating'/>
                <Input name='description'
                       placeholder='Write your review here'
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
        justifyContent: 'flex-start'
    },
    button: {
        marginTop: 20,
        width: '100%',
    }

});
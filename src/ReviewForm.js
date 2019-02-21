import React from "react";
import {Button, Text, StyleSheet, View, TextInput} from "react-native";
import {Formik, Form, Field, FormikProps} from 'formik';
import * as yup from 'yup'
import {} from 'react-native-elements'

export default class ReviewForm extends React.Component {
    handleSubmit = (values, {
        props = this.props,
        setSubmitting
    }) => {
        //process form submission here

        //dont submitting, set submitting to false
        setSubmitting(false);

        return;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Review Form</Text>

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
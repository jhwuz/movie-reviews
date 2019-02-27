import React from "react";
import {Button, Text, StyleSheet, View, TextInput} from "react-native";
import {Formik} from "formik";

export default class ReviewForm extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{movieTitle: '', rating: '', description: ''}}
                onSubmit={values => this.handleSubmit(values)}
            >
                {props => (
                    <View style={styles.container}>
                        <TextInput style={styles.textField}
                                   onChangeText={props.handleChange('movieTitle')}
                                   onBlur={props.handleBlur('movieTitle')}
                                   value={props.values.movieTitle}
                                   placeholder="Search"
                                   placeholderTextColor='#868B82'
                        />
                        <Button title='Submit' onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#14171C',
    },
    header: {
        fontSize: 55,
        fontWeight: 'bold',
    },
    textField: {
        fontSize: 35,
        justifyContent: 'center',
        marginBottom: 10,
        padding: 10,
        color: 'white'
    },
});
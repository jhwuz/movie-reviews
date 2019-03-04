import React from "react";
import {Button, StyleSheet, View, TextInput, Alert} from "react-native";
import {Formik} from 'formik'
import * as Yup from 'yup'
import {Text} from "react-native-elements";

const SignupSchema = Yup.object().shape({
    movieTitle: Yup.string()
        .required('Required'),
    rating: Yup.number()
        .min(0, 'Choose a number between 0 and 5')
        .max(5, 'Choose a number between 0 and 5')
        .required('Required'),
    description: Yup.string()
        .required('Required')
        .min(10, 'Please enter at least 10 characters'),
})

export default class ReviewForm extends React.Component {
    handleSubmit(values) {
        fetch('http://localhost:8000/server/reviews/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: values.movieTitle,
                rating: values.rating,
                description: values.description
            }),
        });
        Alert.alert(
            '',
            'Review Submitted'
        );
    }

    render() {
        return (
            <Formik
                initialValues={{movieTitle: '', rating: '', description: ''}}
                onSubmit={values => this.handleSubmit(values)}
                validationSchema={SignupSchema}
            >
                {props => (
                    <View style={styles.container}>
                        <TextInput style={styles.textField}
                                   onChangeText={props.handleChange('movieTitle')}
                                   onBlur={props.handleBlur('movieTitle')}
                                   value={props.values.movieTitle}
                                   placeholder="Movie Title"
                                   placeholderTextColor='#868B82'
                        />
                        {props.errors.movieTitle && props.touched.movieTitle ? (
                            <Text style={styles.error}>{props.errors.movieTitle}</Text>
                        ) : null}
                        <TextInput style={styles.textField}
                                   onChangeText={props.handleChange('rating')}
                                   onBlur={props.handleBlur('rating')}
                                   value={props.values.rating}
                                   placeholder="Rating (0-5)"
                                   placeholderTextColor='#868B82'
                        />
                        {props.errors.rating && props.touched.rating ? (
                            <Text style={styles.error}>{props.errors.rating}</Text>
                        ) : null}
                        <TextInput style={styles.textBox}
                                   onChangeText={props.handleChange('description')}
                                   onBlur={props.handleBlur('description')}
                                   value={props.values.description}
                                   placeholder="Write your description here"
                                   placeholderTextColor='#868B82'
                                   multiline={true}
                        />
                        {props.errors.description && props.touched.description ? (
                            <Text style={styles.error}>{props.errors.description}</Text>
                        ) : null}
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
        justifyContent: 'flex-start',
        backgroundColor: '#14171C',
        ...StyleSheet.absoluteFillObject,
    },
    header: {
        fontSize: 55,
        fontWeight: 'bold',
    },
    textBox: {
        fontSize: 18,
        justifyContent: 'center',
        marginBottom: 5,
        padding: 10,
        color: 'white',
    },
    textField: {
        fontSize: 18,
        justifyContent: 'center',
        marginBottom: 3,
        padding: 10,
        color: 'white',
    },
    button: {
        marginTop: 20,
        width: '100%',
    },
    error: {
        fontSize: 14,
        color: 'red',
        paddingLeft: 10,
    }

});
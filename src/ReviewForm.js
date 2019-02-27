import React from "react";
import {Button, StyleSheet, View, TextInput} from "react-native";
import {Formik} from 'formik'

export default class ReviewForm extends React.Component {
    handleSubmit(values) {
        console.log(JSON.stringify(values))
        //make post request here
    }

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
                                   placeholder="Movie Title"
                                   placeholderTextColor='#4b5254'
                        />
                        <TextInput style={styles.textField}
                                   onChangeText={props.handleChange('rating')}
                                   onBlur={props.handleBlur('rating')}
                                   value={props.values.rating}
                                   placeholder="Rating (1 - 10)"
                                   placeholderTextColor='#4b5254'
                        />
                        <TextInput style={styles.textBox}
                                   onChangeText={props.handleChange('description')}
                                   onBlur={props.handleBlur('description')}
                                   value={props.values.description}
                                   placeholder="Write your description here"
                                   placeholderTextColor='#4b5254'
                                   multiline={true}
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
        justifyContent: 'flex-start',
        backgroundColor: '#14171C',
        ...StyleSheet.absoluteFillObject,
    },
    header: {
        fontSize: 55,
        fontWeight: 'bold',
    },
    textBox: {
        fontSize: 24,
        justifyContent: 'center',
        marginBottom: 10,
        padding: 10,
        color: '#959C9E',
    },
    textField: {
        fontSize: 24,
        justifyContent: 'center',
        marginBottom: 10,
        padding: 10,
        color: '#959C9E',
    },
    button: {
        marginTop: 20,
        width: '100%',
    }

});
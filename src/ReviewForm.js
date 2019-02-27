import React from "react";
import {Button, StyleSheet, View, TextInput} from "react-native";
import {Formik} from 'formik'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
    movieTitle: Yup.string()
        .required('Required'),
    rating: Yup.number()
        .min(0, 'Choose a number 0-5')
        .max(5, 'Choose a number 0-5')
        .required('Required'),
    description: Yup.string()
        .required('Required')
        .min(10, 'Too short'),
})

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
                validationSchema={SignupSchema}
            >
                {/*{({props, touched, errors }) => (*/}
                 {props => (
                    <View style={styles.container}>
                        <TextInput style={styles.textField}
                                   onChangeText={props.handleChange('movieTitle')}
                                   onBlur={props.handleBlur('movieTitle')}
                                   value={props.values.movieTitle}
                                   placeholder="Movie Title"
                                   placeholderTextColor='#868B82'
                        />
                        {/*{errors.movieTitle && touched.movieTitle ? (*/}
                            {/*<View>{errors.movieTitle}</View>*/}
                        {/*) : null}*/}
                        <TextInput style={styles.textField}
                                   onChangeText={props.handleChange('rating')}
                                   onBlur={props.handleBlur('rating')}
                                   value={props.values.rating}
                                   placeholder="Rating (0-5)"
                                   placeholderTextColor='#868B82'
                        />
                        <TextInput style={styles.textBox}
                                   onChangeText={props.handleChange('description')}
                                   onBlur={props.handleBlur('description')}
                                   value={props.values.description}
                                   placeholder="Write your description here"
                                   placeholderTextColor='#868B82'
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
        fontSize: 15,
        justifyContent: 'center',
        marginBottom: 10,
        padding: 10,
        color: 'white',
    },
    textField: {
        fontSize: 15,
        justifyContent: 'center',
        marginBottom: 10,
        padding: 10,
        color: 'white',
    },
    button: {
        marginTop: 20,
        width: '100%',
    }

});
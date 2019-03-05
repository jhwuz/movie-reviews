import React from "react";
import {Button, Text, StyleSheet, View, TextInput, Alert} from "react-native";
import {Formik} from "formik";
import SearchScreen from "./SearchScreen";

export default class SearchForm extends React.Component {
    handleSubmit(values) {
        const {navigate} = this.props.navigation;
        Alert.alert(
            '',
            'Press OK to view search results',
            [{
                text: 'OK',
                onPress: () => {
                    navigate('SearchScreen', {title: values.movieTitle});
                }
            }]
        );
    }

    render() {
        return (
            <Formik
                initialValues={{movieTitle: ''}}
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
        fontSize: 25,
        justifyContent: 'center',
        marginBottom: 10,
        padding: 10,
        color: 'white'
    },
});
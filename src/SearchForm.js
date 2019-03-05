import React from "react";
import {Button, StyleSheet, View, TextInput, Alert} from "react-native";
import {Formik} from "formik";

export default class SearchForm extends React.Component {
  handleSubmit(values) {
    const {navigate} = this.props.navigation;
    Alert.alert(
      '',
      'Press OK to view search results',
      [{
        text: 'OK',
        onPress: () => {
          navigate('SearchList', {title: values.movieTitle});
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
    justifyContent: 'flex-start',
    backgroundColor: '#14171C',
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    fontSize: 55,
    fontWeight: 'bold',
  },
  textField: {
    fontSize: 25,
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    color: 'white',
    borderWidth: 1,
    borderColor: '#868B82',
  },
});

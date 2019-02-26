import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MovieCard = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        borderRadius: 2,
        borderColor: 'black',
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 3,
        backgroundColor: '#445566',
        padding: 5,
    },
});

export default MovieCard;
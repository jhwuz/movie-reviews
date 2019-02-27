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
        borderBottomWidth: 0.25,
        borderBottomColor: '#868B82',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 15,
        padding: 5,
    },
});

export default MovieCard;
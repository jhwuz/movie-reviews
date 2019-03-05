import React from 'react';
import {StyleSheet, View} from 'react-native';

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
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
    },
});

export default MovieCard;
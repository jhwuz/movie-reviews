import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MovieCard = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.movieTitle}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
    },
});

export default MovieCard;
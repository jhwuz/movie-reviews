import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import MovieCard from './MovieCard'

const MovieDetail = (props) => {
    return (
        <View>
            <MovieCard>
                <Text style={styles.header}>{props.movie.title}</Text>
                <Text style={styles.rating}>Rating: {props.movie.rating} </Text>
                <Text style={styles.description}>Description: {props.movie.description}</Text>
            </MovieCard>
        </View>
    );
}

export default MovieDetail

const styles = StyleSheet.create({
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#868B82',
    },
    rating: {
        fontSize: 18,
        color: '#868B82',
    },
    description: {
        color: '#868B82'
    }

});
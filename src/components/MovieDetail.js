import React from 'react'
import {View, Text} from 'react-native'
import MovieCard from './MovieCard'

const MovieDetail = (props) => {
    return (
        <View>
            <MovieCard>
                <Text>{props.movie.title}</Text>
                <Text>{props.movie.description}</Text>
            </MovieCard>
        </View>
    );
}

export default MovieDetail
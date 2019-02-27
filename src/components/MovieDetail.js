import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import MovieCard from './MovieCard'
import StarRating from 'react-native-star-rating'

const MovieDetail = (props) => {
    return (
        <View>
            <MovieCard>
                <Text style={styles.header}>{props.movie.title}</Text>
                <StarRating
                    rating={props.movie.rating}
                    fullStarColor={'#37935B'}
                    emptyStarColor={'grey'}
                    starSize={20}
                    containerStyle={{
                        width: '25%'
                    }}
                />
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
        color: 'white',
    },
    rating: {
        width: 5
    },
    description: {
        color: '#868B82'
    }

});
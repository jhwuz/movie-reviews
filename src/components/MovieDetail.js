import React from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import MovieCard from './MovieCard'
import StarRating from 'react-native-star-rating'

const MovieDetail = (props) => {

  return (
    <TouchableWithoutFeedback
      onPress={
        () => {
        }
      }>
      <View>
        <MovieCard>
          <Text style={styles.header}>{props.movie.title}</Text>
          <StarRating
            rating={parseInt(props.movie.rating, 10)}
            fullStarColor={'#37935B'}
            emptyStarColor={'grey'}
            starSize={20}
            containerStyle={{
              width: '25%',
              marginBottom: 5,
            }}
            disabled={true}
          />
          <Text style={styles.description}>
            {props.movie.description}
          </Text>
        </MovieCard>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default MovieDetail

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  description: {
    color: '#868B82',
    marginBottom: 3,
  },
  summary: {
    color: 'white',
    marginBottom: 3,
    fontSize: 20,
  }

});

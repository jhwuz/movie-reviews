import React from 'react'
import {View, Text} from 'react-native'

const MovieDetail = (props) => {
return (
    <View>
        <Text>{props.movie.title}</Text>
        <Text>{props.movie.description}</Text>
    </View>
);
}

export default MovieDetail
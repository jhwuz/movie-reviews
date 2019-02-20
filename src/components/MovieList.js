import React, {Component} from 'react'
import {View} from 'react-native'
import MovieDetail from './MovieDetail'

export default class AlbumList extends React.Component {
    state = {movies: []};

    componentDidMount() {
        //fetch data from api here
        return fetch('https://localhost:8000/')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    //set movie list here
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });

    }

    renderMovies() { //
        return this.state.movies.map(movie =>
            <MovieDetail key={movie.id} movie={movie}/> //pass down movie as prop
        );
    }

    render() {
        return (
            <View>
                {this.renderMovies()}
            </View>
        );
    }
}

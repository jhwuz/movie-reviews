import React, {Component} from 'react'
import {View, ScrollView} from 'react-native'
import MovieDetail from './MovieDetail'
import axios from "axios";

export default class AlbumList extends React.Component {

    state = {movies: []};

    componentDidMount() {
        // axios.get('http://localhost:8000/server/reviews/')
        //     .then(response => {
        //         this.setState({
        //             movies: response
        //         })
        //     });
        // this.renderMovies();
        return fetch('http://localhost:8000/server/reviews/')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    movies: responseJson
                }, function () {
                    this.renderMovies();
                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    renderMovies() {
        return this.state.movies.map(movie =>
            <MovieDetail key={movie.id} movie={movie}/> //pass down movie as prop
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderMovies()}
            </ScrollView>
        );
    }
}
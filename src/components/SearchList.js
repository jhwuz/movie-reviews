import React from 'react'
import {ScrollView} from 'react-native'
import MovieDetail from './MovieDetail'
import axios from 'axios'

export default class SearchList extends React.Component {

    state = {movies: []};

    componentDidMount() {
        //fetch data from api here
        axios.get('http://localhost:8000/server/reviews/search')
            .then(response => {
                this.renderMovies(response);
            })
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
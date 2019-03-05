import React from 'react'
import {ScrollView} from 'react-native'
import MovieDetail from './MovieDetail'
import SearchForm from '../SearchForm'
import axios from 'axios'

export default class SearchList extends React.Component {

    state = {movies: []};

    componentDidMount() {
        const {navigate} = this.props.children.navigation;
        console.log(navigate.state)
        axios.post('http://localhost:8000/server/search/',
            {
                title: values.movieTitle,
            }
        ).catch(function (error) {
            console.log(error);
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
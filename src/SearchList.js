import React from 'react'
import {ScrollView} from 'react-native'
import MovieDetail from './components/MovieDetail'
import axios from 'axios'

export default class SearchList extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        movies: [],
        avg: ''
    };

    componentDidMount() {
        console.log(this.props)
        // const {navigate} = this.props.navigation;
        // axios.post('http://localhost:8000/server/search/',
        //     {
        //         title: navigate.getParam(movieTitle)
        //     })
        //     .then(response => {
        //         this.setState({
        //             movies: response.data
        //         })
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
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
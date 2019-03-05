import React from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import MovieDetail from './MovieDetail'
import axios from 'axios'

export default class SearchList extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        movies: [],
        avg: ''
    };

    componentDidMount() {
        console.log(this.props)
        const {navigate} = this.props;
        axios.post('http://localhost:8000/server/reviews/search/',
            {
                title: this.props.navigation.getParam('title', '')
            })
            .then(response => {
                this.setState({
                    movies: response.data
                })
            })
            .catch(function (error) {
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
            <ScrollView style={styles.container}>
                {this.renderMovies()}
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#14171C',
    }});
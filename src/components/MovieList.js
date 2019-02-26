import React, {Component} from 'react'
import {View, ScrollView} from 'react-native'
import MovieDetail from './MovieDetail'

export default class AlbumList extends React.Component {
    dummyRequest() {
        this.setState({
            movies: [
                {
                    id: 1,
                    title: "Avengers",
                    rating: 8,
                    description: "good movie aweofijawoei fjaoe faie fowje fawej foaij ewofajweofjaoewfjaw eofja owejfoa joefjow ejfoajweof j" +
                        "aoewijfaowe faoiwe jfoawj efoajewof jo j"
                },
                {
                    id: 2,
                    title: "Incredibles",
                    rating: 7,
                    description: "pretty good movie"
                },
                {
                    id: 3,
                    title: "Incredibles1",
                    rating: 7,
                    description: "pretty good movie"
                },
                {
                    id: 4,
                    title: "Incredibles2",
                    rating: 7,
                    description: "pretty good movie"
                },
                {
                    id: 5,
                    title: "Incredibles3",
                    rating: 7,
                    description: "pretty good movie"
                },
                {
                    id: 6,
                    title: "Incredibles4",
                    rating: 7,
                    description: "pretty good movie"
                },
                {
                    id: 7,
                    title: "Incredibles5",
                    rating: 7,
                    description: "pretty good movie fwopaekfoweofjwoefj aoweofa jof jawoiej foiawj oefja owf joawj foaj woefj aowe fjoaw ejfoiaj weofjaoefjaoj" +
                        "aeofijawo efjaow efjoajwe foiaj woefj aoewjfoa jwefoa jweofjoawej f"
                },
                {
                    id: 8,
                    title: "Incredibles1212",
                    rating: 7,
                    description: "pretty good movie"
                },
                {
                    id: 9,
                    title: "Incredibles5",
                    rating: 7,
                    description: "pretty good movie fwopaekfoweofjwoefj aoweofa jof jawoiej foiawj oefja owf joawj foaj woefj aowe fjoaw ejfoiaj weofjaoefjaoj" +
                        "aeofijawo efjaow efjoajwe foiaj woefj aoewjfoa jwefoa jweofjoawej f"
                },
            ]
        })
    }

    state = {movies: []};

    //create function with hardcoded values

    componentDidMount() {
        this.dummyRequest()
        //fetch data from api here
        // return fetch('https://localhost:8000/')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //
        //         this.setState({
        //             //set movie list here
        //         }, function () {
        //
        //         });
        //
        //     })
        //     .catch((error) => {
        //         console.error(error);
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
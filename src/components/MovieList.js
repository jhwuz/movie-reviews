import React from 'react'
import {ScrollView} from 'react-native'
import MovieDetail from './MovieDetail'
import axios from "axios";

export default class AlbumList extends React.Component {

  state = {movies: []};

  componentDidMount() {
    axios.get('http://localhost:8000/server/reviews/newest')
      .then(response => {
        this.setState({
          movies: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get('http://localhost:8000/server/reviews/avg')
      .then(response => {
        this.setState({
          avg: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      })
    console.log(this.props)
    this.renderMovies();
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

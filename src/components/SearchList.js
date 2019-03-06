import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import MovieDetail from './MovieDetail'
import axios from 'axios'
import {Text} from "react-native-elements";
import StarRating from 'react-native-star-rating'

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

    axios.get('http://localhost:8000/server/reviews/avg')
      .then(response => {
        this.setState({
          avg: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
        this.renderMovies();
      })
  }

  renderMovies() {
    return this.state.movies.map(movie =>
        <MovieDetail key={movie.id} movie={movie}/>
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
    paddingLeft: 5,
    paddingRight: 5,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    textAlign: 'center'
  }
});

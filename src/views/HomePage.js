import React, { Component } from "react";
import movieAPI from "../service/movie-api";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    movieAPI.fetchQueryDetails().then(movies => this.setState({ movies }));
  }
  render() {
    const { movies } = this.state;

    return (
      <>
        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>
                  {movie.title ? movie.title : movie.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

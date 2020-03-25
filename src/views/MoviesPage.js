import React, { Component } from "react";
import Searchbar from "../components/Searchbar";
import parseQueryString from "../utils/parseQueryString";
import movieAPI from "../service/movie-api";
import { Link } from "react-router-dom";

export default class MoviesPage extends Component {
  state = { movies: [] };

  componentDidMount() {
    const { query } = parseQueryString(this.props.location.search);
    if (query) {
      this.fetchMovie(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = parseQueryString(prevProps.location.search);
    const { query: nextQuery } = parseQueryString(this.props.location.search);
    if (prevQuery !== nextQuery) {
      this.fetchMovie(nextQuery);
    }
  }

  fetchMovie = query => {
    movieAPI
      .fetchMovieDetailsWithQuery(query)
      .then(movies => this.setState({ movies }));
  };

  handleQuery = query => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`
    });
  };

  render() {
    const { movies } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleQuery} />
        <>
          {movies.length > 0 && (
            <ul>
              {movies.map(movie => (
                <li key={movie.id}>
                  <Link
                    to={{
                      pathname: `movies/${movie.id}`,
                      state: { from: this.props.location }
                    }}
                  >
                    {movie.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      </div>
    );
  }
}

import React, { Component } from "react";
import movieAPI from "../service/movie-api";

export default class Cast extends Component {
  state = {
    cast: []
  };

  componentDidMount() {
    movieAPI
      .fetchMovieCastDetails(this.props.match.params.movieId)
      .then(cast => this.setState({ cast }));
  }

  render() {
    const { cast } = this.state;
    console.log(cast);
    return (
      <>
        {cast && (
          <ul>
            {cast &&
              cast.cast &&
              cast.cast.map(e => (
                <li key={e.cast_id}>
                  <img
                    alt="img"
                    src={`https://image.tmdb.org/t/p/w500${e.profile_path}`}
                  />
                  <p>{e.character}</p>
                </li>
              ))}
          </ul>
        )}
        <h2>Cast </h2>
      </>
    );
  }
}

import React, { Component } from "react";
import movieAPI from "../service/movie-api";
import { NavLink, Route } from "react-router-dom";
import router from "../router";
import Cast from "./Cast";
import Reviews from "./Reviews";

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    cast: null,
    reviews: null
  };

  componentDidMount() {
    movieAPI
      .fetchMovieDertailsId(this.props.match.params.movieId)
      .then(movie => this.setState({ movie }));
    movieAPI
      .fetchMovieCastDetails(this.props.match.params.movieId)
      .then(cast => this.setState({ cast }));
    movieAPI
      .fetchMovieReviewsDetails(this.props.match.params.movieId)
      .then(reviews => this.setState({ reviews }));
  }

  handleBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push(router.movies);
  };

  render() {
    const { movie } = this.state;
    //const { match } = this.props;

    return (
      <div>
        <button type="button" onClick={this.handleBack}>
          Go back
        </button>
        <br></br>

        {this.state.movie && (
          <><div className='MovieInfo'>
            <img
              className="MovieImage"
              alt="img"
              width='240'
              height='360'
              src={`https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`}
            />
            <div className="MovieDescription">
              <h3 className="MovieTitle">{this.state.movie.title}</h3>
              <p>User score:{this.state.movie.popularity} %</p>
              <h2>Overview</h2>
              <p>{this.state.movie.overview}</p>
              <h3>Genres</h3>
              <ul className="GanresList">
                {this.state.movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul></div></div>
              <div className='AdditionalInfo'>
                <h4>Additional information</h4>
                <ul className="AdditionalInfoList">
                  <li>
                    <NavLink to={`/movies/${movie.id}/cast`}> Cast </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/movies/${movie.id}/reviews`}>
                      Reviews
                    </NavLink>
                  </li>
                </ul></div>
              <Route path="/movies/:movieId/cast" component={Cast} />
              <Route path="/movies/:movieId/reviews" component={Reviews} />
          </>
        )}
      </div>
    );
  }
}

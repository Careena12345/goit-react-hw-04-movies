import React, { Component } from "react";
import movieAPI from "../service/movie-api";

export default class Reviews extends Component {
  state = {
    reviews: []
  };

  componentDidMount() {
    movieAPI
      .fetchMovieReviewsDetails(this.props.match.params.movieId)
      .then(reviews => this.setState({ reviews }));
  }

  render() {
    const { reviews } = this.state;
    console.log(this.state.reviews);
    return (
      <>
        {reviews && (
          <ul className="ReviewsList">
            {reviews &&
              reviews.results &&
              reviews.results.map(e => (
                <li key={e.id}>
                  <h2>{e.author}</h2>
                  <p>{e.content}</p>
                </li>
              ))}
          </ul>
        )}
      </>
    );
  }
}

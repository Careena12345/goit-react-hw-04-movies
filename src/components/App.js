import { Route, Switch } from "react-router-dom";
import React, { Suspense } from "react";
import route from "../router";

const Layout = React.lazy(() => import("./Layout"));
const HomePage = React.lazy(() => import("../views/HomePage"));
const MovieDetailsPage = React.lazy(() => import("../views/MovieDetailsPage"));
const MoviesPage = React.lazy(() => import("../views/MoviesPage"));
const Cast = React.lazy(() => import("../views/Cast"));
const Reviews = React.lazy(() => import("../views/Reviews"));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Layout>
      <Switch>
        <Route path={route.home} exact component={HomePage} />
        <Route path={route.movieId} component={MovieDetailsPage} />
        <Route path={route.movies} component={MoviesPage} />
        <Route path={route.cast} component={Cast} />
        <Route path={route.reviews} component={Reviews} />
      </Switch>
    </Layout>
  </Suspense>
);

export default App;

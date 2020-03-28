import React from "react";
import { NavLink } from "react-router-dom";
import route from "../router";

const Navigation = () => (
  <ul className="NavList">
    <li>
      <NavLink
        to={route.home}
        className="NavLink"
        activeClassName="NavLinkActive"
        exact
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to={route.movies}
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;

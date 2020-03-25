import React from "react";
import { NavLink } from "react-router-dom";
import route from "../router";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B"
  },
  activeLink: {
    color: "#E84A5F"
  }
};

const Navigation = () => (
  <ul>
    <li>
      <NavLink
        to={route.home}
        style={styles.link}
        activeStyle={styles.activeLink}
        exact
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to={route.movies}
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;

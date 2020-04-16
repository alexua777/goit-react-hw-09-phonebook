import React from "react";
import { NavLink } from "react-router-dom";

import routes from "../router";

import UserMenu from "./UserMenu";
import withAuth from "../hoc/withAuth";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#E84A5F",
  },

  nav: {
    display: "flex",
  },
};

const Navigation = ({ isAuthorized }) => (
  <nav style={styles.nav}>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Home
    </NavLink>

    {isAuthorized && (
      <NavLink
        to="/contacts"
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

export default withAuth(Navigation);

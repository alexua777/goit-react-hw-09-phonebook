import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import routes from "../router";
import {authSelectors} from "../redux/auth";
import UserMenu from "./UserMenu";

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
    display:"flex",
  },
};

const Navigation = ({isAuthorized}) => (
    <nav style={styles.nav}>
    {routes.map(route => (
      <NavLink
        exact={route.exact}
        key={route.label}
        to={route.path}
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        {route.label}
      </NavLink>
    ))}
     {isAuthorized && <UserMenu/>}
  </nav>
);

const mapStateToProps = state => ({
  isAuthorized: authSelectors.isAuthorized(state),
});

export default connect(mapStateToProps)(Navigation);


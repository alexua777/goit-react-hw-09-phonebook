import React from "react";
import { Route, Redirect } from "react-router-dom";
import withAuth from "../hoc/withAuth";

const PublicRoute = ({ component: Component, isAuthorized, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthorized && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default withAuth(PublicRoute);

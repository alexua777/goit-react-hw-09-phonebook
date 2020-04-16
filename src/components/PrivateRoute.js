import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../redux/auth";

const PrivateRoute = ({
  component: Component,
  isAuthorized,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthorized ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthorized: authSelectors.isAuthorized(state),
});

export default connect(mapStateToProps)(PrivateRoute);

import React from "react";
import { Route, Redirect } from "react-router-dom";
import withAuth from "../hoc/withAuth";
// import { connect } from "react-redux";
// import { authSelectors } from "../redux/auth";

const PublicRoute = ({
  component: Component,
  isAuthorized,
   ...routeProps
}) => (
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

// const mapStateToProps = (state) => ({
//   isAuthorized: authSelectors.isAuthorized(state),
// });

// export default connect(mapStateToProps)(PublicRoute);

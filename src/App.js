import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import routes from "./router";
import Layout from "./components/Layout";
import ThemeContext from "./context/ThemeContext";
import { themeConfig } from "./context/ThemeContext";

import { authOperations } from "./redux/auth";

import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

// const HomeView = React.lazy(() => import("./views/HomeView"));
// const ContactView = React.lazy(() => import("./views/ContactView"));
// const RegisterView = React.lazy(() => import("./views/RegisterView"));
// const LoginView = React.lazy(() => import("./views/LoginView"));

class App extends Component {
  state = {
    theme: "light",
  };

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  changeTheme = () => {
    this.setState((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    }));
  };

  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={null}>
          <ThemeContext.Provider
            value={{
              theme: this.state.theme,
              config: themeConfig[this.state.theme],
              onThemeChange: this.changeTheme,
            }}
          >
            <Layout>
              {routes.map((route) => {
                return route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute
                    key={route.label}
                    {...route}
                    restricted={route.restricted}
                  />
                );
              })}
              {/* <PublicRoute path="/" exact component={HomeView} restricted ={false} />
              <PublicRoute path="/login" exact component={LoginView} restricted={true} />
              <PrivateRoute path="/contacts" exact component={ContactView} /> */}

              {/* <Route path="/" component={HomeView} exact />
            <Route path="/contacts" component={ContactView} />
            <Route path="/register" component={RegisterView} />
            <Route path="/login" component={LoginView} /> */}
            </Layout>
          </ThemeContext.Provider>
        </Suspense>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

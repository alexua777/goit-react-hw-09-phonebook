import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";

import Layout from "./components/Layout";
import ThemeContext from "./context/ThemeContext";
import { themeConfig } from "./context/ThemeContext";
import contactOperations from "./redux/phonebook/contactOperations";
import { authOperations } from "./redux/auth";

import { Route } from "react-router-dom";

const HomeView = React.lazy(() => import("./views/HomeView"));
const ContactView = React.lazy(() => import("./views/ContactView"));
const RegisterView = React.lazy(() => import("./views/RegisterView"));
const LoginView = React.lazy(() => import("./views/LoginView"));

class App extends Component {
  state = {
    theme: "light",
  };

  componentDidMount() {
    this.props.onFetchContacts();
    this.props.onGetCurrentUser();
  }

  changeTheme = () => {
    this.setState((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    }));
  };

  render() {
    return (
      <Suspense fallback={null}>
        <ThemeContext.Provider
          value={{
            theme: this.state.theme,
            config: themeConfig[this.state.theme],
            onThemeChange: this.changeTheme,
          }}
        >
          <Layout>
            <Route path="/" component={HomeView} exact />
            <Route path="/contacts" component={ContactView} />
            <Route path="/register" component={RegisterView} />
            <Route path="/login" component={LoginView} />
          </Layout>
        </ThemeContext.Provider>
      </Suspense>
    );
  }
}

const mapDispatchToProps = {
  onFetchContacts: contactOperations.fetchContacts,
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

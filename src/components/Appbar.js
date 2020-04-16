import React from "react";
import withThemeContext from "../hoc/withThemeContext";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import { connect } from "react-redux";
import { authSelectors } from "../redux/auth";



const style = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
  loginStyle :{
    display: "flex",
    justifyContent: "space-between",
  }
};

const themeButton = {
  margin: "0 4px",
  padding: "8px 24px",
  border: "1",
  borderRadius: "2px",
  color: "#ffffff",
  fontSize: "14px",
  backgroundColor: "#2196f3",
};

const Appbar = ({auth, isAuthorized }) => (
  <header style={style.container}>
    <Navigation />
    <div style={style.loginStyle}>
    {isAuthorized ? <UserMenu /> : <AuthNav />}
    <button onClick={auth.onThemeChange} style={themeButton}>
      Theme {auth.theme}
    </button>
    </div>
   
  </header>
);
const mapStateToProps = (state) => ({
  isAuthorized: authSelectors.isAuthorized(state),
  
});

export default connect(mapStateToProps)(withThemeContext(Appbar));



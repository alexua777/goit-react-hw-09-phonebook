import React from "react";
import withThemeContext from "../hoc/withThemeContext";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";


const style = {
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
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

const Appbar = ({ auth }) => (
  <header style={style.container}>
    <Navigation />
   
    <button onClick={auth.onThemeChange} style={themeButton}>
      Theme {auth.theme}
    </button>
  </header>
);

export default withThemeContext(Appbar);

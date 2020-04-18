import React from "react";
import { CSSTransition } from "react-transition-group";
import "../styles/LogoAppear.css";

const AppTitle = () => {
  return (
    <div>
      <CSSTransition in={true} appear={true} timeout={500} classNames="Logo">
        <h1 className="ContactList-title">Phonebook</h1>
      </CSSTransition>
    </div>
  );
};

export default AppTitle;

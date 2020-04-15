import React from "react";
import {connect} from"react-redux";
import {authSelectors, authOperations} from "../redux/auth";


const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({
  avatar = "http://icon-library.com/images/lion-595b40b75ba036ed117d858a.svg.svg",
  name,
  onLogout,
}) => (
  <div>
    <img src={avatar} alt="" width="32" style={styles.avatar} />
    <span>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>Log Out</button>
  </div>
);

const mapStateToProps = state =>({
    name: authSelectors.getUserName(state),
    
});

export default connect(mapStateToProps,{onLogout:authOperations.logout})(UserMenu);
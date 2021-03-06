import React, { Component } from "react";
import {authOperations} from "../redux/auth";
import {connect} from "react-redux";

const styles = {
  form: {
    width: 320,
    fontFamily: "Arial",
    padding: "10px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    padding: 4,
  },

  input:{
    display: "inline-block",
    height: "34px",
    width: "250px",
    boxSizing: "border-box",
    padding: "0 18px",
    marginBottom: "10px",
    },
};

class RegisterView extends Component {

  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (e) =>  {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  submithandler = (e) => {
      e.preventDefault();
      this.props.onRegister({...this.state});
      this.setState({name:"",email:"",password:""});

  }

  render() {
    return (
      <div>
        <form style={styles.form} onSubmit={this.submithandler}>
          <label style={styles.label}>
            Name
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Email
            <input
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            Password
            <input
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
              style={styles.input}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {onRegister:authOperations.register})(RegisterView);

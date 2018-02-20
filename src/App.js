import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  login = () => {
    this.props.auth.login();
  };

  logout = () => {
    this.props.auth.logout();
  };

  loginScreen = msg => (
    <h1 onClick={this.login} data-heading={msg}>
      {msg}
    </h1>
  );

  loggedIn = msg => <h1 data-heading={msg}>{msg}</h1>;

  render() {
    const { isAuthenticated } = this.props.auth;
    const msg = "Click to Login";
    const msg2 = "Logged in";
    return (
      <div className="container">
        {isAuthenticated ? this.loggedIn(msg2) : this.loginScreen(msg)}
      </div>
    );
  }
}

export default App;

App.propTypes = {
  auth: PropTypes.object
};

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

  render() {
    const msg = "Click to Login";
    return <div className="container">{this.loginScreen(msg)}</div>;
  }
}

export default App;

App.propTypes = {
  auth: PropTypes.object
};

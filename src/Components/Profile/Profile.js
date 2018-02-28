import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Commons/Button";
import "./Profile.css";

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  logout = () => {
    return this.props.auth.logout();
  };

  showName = name => (
    <div className="container" style={styles.title}>
      <h3 data-heading={name}>{name}</h3>
    </div>
  );

  render() {
    const { profile } = this.state;
    return (
      <div style={styles.container}>
        {this.showName(profile.given_name)}
        <img src={profile.picture} alt="profile" style={styles.photo} />
        <Button label="Log out" callback={this.logout} />
      </div>
    );
  }
}

export default Profile;

Profile.propTypes = {
  auth: PropTypes.object
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: " center",
    justifyContent: "center"
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: "25%",
    borderColor: "#fff"
  },
  title: {
    textAlign: "center",
    position: "absolute",
    top: 0
  }
};

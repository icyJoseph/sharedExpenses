import React, { Component } from "react";
import PropTypes from "prop-types";
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

  showName = name => (
    <div style={styles.title}>
      <h3 data-heading={name}>{name}</h3>
    </div>
  );

  render() {
    const { profile } = this.state;
    return (
      <div style={styles.container}>
        {this.showName(profile.given_name)}
        <img src={profile.picture} alt="profile" style={styles.photo} />
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
    width: 150,
    height: 150,
    borderRadius: "25%",
    borderColor: "#fff"
  },
  title: {
    width: "100vw",
    height: "25px",
    position: "absolute",
    bottom: "50%",
    textAlign: "center"
  }
};

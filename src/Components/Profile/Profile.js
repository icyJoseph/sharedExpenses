import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { getUserMetaData } from "../../Api";
import Button from "../Commons/Button";
import "./Profile.css";

class Profile extends Component {
  state = {
    profile: {
      picture: ""
    },
    metadata: {
      given_name: ""
    }
  };
  componentDidMount() {
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        this.saveProfileToStorage();
        this.fetchUserMetaData(profile.sub)
          .then(metadata => {
            this.setState({ metadata });
            return metadata;
          })
          .then(metadata => this.saveMetadataToStorage(metadata));
      });
    } else {
      this.setState({ profile: userProfile });
      this.fetchUserMetaData(userProfile.sub)
        .then(metadata => {
          this.setState({ metadata });
          return metadata;
        })
        .then(metadata => this.saveMetadataToStorage(metadata));
    }
  }

  fetchUserMetaData = sub => {
    return getUserMetaData(sub);
  };

  saveProfileToStorage = () => {
    localStorage.setItem("user_profile", JSON.stringify(this.state.profile));
  };

  saveMetadataToStorage = metadata => {
    localStorage.setItem("meta_data", JSON.stringify(metadata));
  };

  logout = () => {
    return this.props.auth.logout();
  };

  showName = (name = "") => (
    <div className="container" style={styles.title}>
      <h3 data-heading={name}>{name}</h3>
    </div>
  );

  render() {
    const { profile, metadata } = this.state;
    return (
      <Fragment>
        {this.showName(metadata.given_name)}
        <div style={styles.container}>
          <img src={profile.picture} alt="profile" style={styles.picture} />
          <Button label="Log out" callback={this.logout} />
        </div>
      </Fragment>
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
    justifyContent: "flex-end"
  },
  picture: {
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

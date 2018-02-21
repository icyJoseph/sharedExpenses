import React from "react";
import Profile from "../Profile/Profile";
import PropTypes from "prop-types";

const Home = ({ auth }) => {
  /*eslint-disable-next-line*/
  console.log(auth);
  return (
    <div style={styles.container}>
      <div style={styles.title}>
        <h2 style={{ color: "#000" }}>Welcome!</h2>
      </div>
      <Profile auth={auth} style={styles.profile} />
    </div>
  );
};

export default Home;

Home.propTypes = {
  auth: PropTypes.object
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100vh"
  },
  title: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
};

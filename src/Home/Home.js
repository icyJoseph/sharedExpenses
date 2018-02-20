import React from "react";
import PropTypes from "prop-types";

const Home = ({ auth }) => {
  /*eslint-disable-next-line*/
  console.log(auth);
  return <h2 style={{ color: "#000" }}>Welcome Home</h2>;
};

export default Home;

Home.propTypes = {
  auth: PropTypes.object
};

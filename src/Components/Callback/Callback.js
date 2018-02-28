import React from "react";
import Spinner from "react-spinkit";

const Callback = () => (
  <div style={styles.container}>
    <Spinner style={styles.spinner} name="ball-pulse-rise" color="black" />
    <Spinner style={styles.spinner} name="ball-pulse-rise" color="white" />
  </div>
);

export default Callback;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center"
  },
  spinner: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};
